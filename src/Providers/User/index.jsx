import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});

  const [token] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:infos')) || []
  );

  const getUser = () => {
    api.get(`/users/${user.user.id}`, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => setUserInfo(res.data))
    .catch((err) => err)
    }

  const changeUser = ( data ) => {
    api.patch(`/users/${user.user.id}`, data, {
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    .then((res) => toast.success("Dados alterados com sucesso!"))
    .catch((err) => toast.error("Algo deu errado!"))
  }

  return (
    <UserContext.Provider
      value={{
        userInfo,
        getUser,
        changeUser
      }}>
      {children}
    </UserContext.Provider>
  );
};
