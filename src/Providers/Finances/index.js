import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const [finances, setFinances] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:infos')) || []
  );

  const showFinances = () => {
    api
      .get(`/finances?userId=${user.user.id}`, {
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

  const addFinance = (data) => {
    api
      .post(
        "/finances",
        {
          ...data,
          userId: user.user.id,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        showFinances(token);
        toast.success("Finança adicionada com sucesso!");
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const changeFinance = (data, financeId) => {
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
        showFinances(token, user.user.id);
      })
      .catch((res) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const removeFinance = (financeId) => {
    api
      .delete(`/finances/${financeId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success("Dados arquivados com sucesso!");
        showFinances(token, user.user.id);
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
