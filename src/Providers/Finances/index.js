import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const [finances, setFinances] = useState([]);

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
        setFinances([]);
      });
  };

  const addFinance = (data, userId, token) => {
    api
      .post(
        "/finances",
        {
          ...data,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        showFinances(token, userId);
        toast.success("Finança adicionada com sucesso!");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const changeFinance = (data, financeId, userId, token) => {
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
        toast.success("Dados alterados com sucesso!");
        showFinances(token, userId);
      })
      .catch((res) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const removeFinance = (financeId, userId, token) => {
    api
      .delete(`/finances/${financeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Dados arquivados com sucesso!");
        showFinances(token, userId);
      })
      .catch((res) => {
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
