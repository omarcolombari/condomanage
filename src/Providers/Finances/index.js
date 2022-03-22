import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const [finances, setFinances] = useState([]);

  //const user = JSON.parse(localStorage.getItem("@CondoManage:infos"));
  //const userId = user.user.id
  const userId = 2;

  const showFinances = (token, userId) => {
    api
      .get(`/finances?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setFinances(res.data);
      })
      .catch((err) => {
        console.log(err);
        setFinances([]);
      });
  };

  const addFinance = (id, token, data) => {
    api
      .post(
        "/finances",
        {
          ...data,
          userId: id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Finança adicionada com sucesso!");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Ops! Algo deu errado");
      });
  };

  const changeFinance = (token, data, financeId) => {
    api
      .patch(
        `/finances/${financeId}`,
        {
          ...data,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        toast.success("Dados alterados com sucesso!");
        showFinances(token, userId);
      })
      .catch((res) => {
        console.log(res);
        toast.error("Ops! Algo deu errado");
      });
  };

  const removeFinance = (token, financeId) => {
    api
      .delete(`/finances/${financeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        toast.success("Dados arquivados com sucesso!");
        showFinances(token, userId);
      })
      .catch((res) => {
        console.log(res);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <FinancesContext.Provider
      value={{
        finances,
        showFinances,
        addFinance,
        changeFinance,
        removeFinance,
      }}
    >
      {children}
    </FinancesContext.Provider>
  );
};
