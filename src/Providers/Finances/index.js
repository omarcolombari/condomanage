import { createContext, useState } from "react";
import { toast } from "react-toastify";
import api from "../../services/api";

export const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const [finances, setFinances] = useState([]);

  const showFinances = async (token) => {
    await api
      .get("/finances", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res);
        setFinances(res.data);
      })
      .catch((err) => console.log(err));
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
      })
      .catch((res) => {
        console.log(res);
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <FinancesContext.Provider
      value={{ finances, showFinances, addFinance, changeFinance }}
    >
      {children}
    </FinancesContext.Provider>
  );
};
