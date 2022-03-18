import { createContext, useContext, useState } from "react";

const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const finances = JSON.parse(localStorage.getItem("Finances") || "[]");

  const [newFinances, setNewFinances] = useState(finances);

  const addFinance = (item) => {
    setNewFinances([...newFinances, item]);
    localStorage.setItem("Finances", JSON.stringify([...newFinances, item]));
  };

  return (
    <FinancesContext.Provider value={{ newFinances, addFinance }}>
      {children}
    </FinancesContext.Provider>
  );
};

export const useFinances = () => useContext(FinancesContext);
