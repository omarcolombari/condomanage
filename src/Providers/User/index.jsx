import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const getUser = (userId, token) => {
    api
      .get(`/users/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setUserInfo(res.data))
      .catch((err) => err);
  };

  const changeUser = (data, userId, token) => {
    api
      .patch(`/users/${userId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Dados alterados com sucesso!");
        getUser(userId, token);
      })
      .catch((err) => toast.error("Algo deu errado!"));
  };

  return (
    <UserContext.Provider
      value={{
        userInfo,
        getUser,
        changeUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
