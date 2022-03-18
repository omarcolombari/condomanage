import { createContext, useContext, useState } from "react";

const FinancesContext = createContext();

export const FinancesProvider = ({ children }) => {
  const finances = JSON.parse(localStorage.getItem("Finances") || "[]");

  const [newFinances, setNewFinances] = useState(finances);

  const addFinance = (item) => {
    setNewFinances([...newFinances, item]);
    localStorage.setItem("Finances", JSON.stringify([...newFinances, item]));
  };

  const removeFinance = (toRemove) => {
    const filtered = newFinances.filter((item) => item.name !== toRemove.name);
    setNewFinances(filtered);
    localStorage.setItem("Finances", JSON.stringify(filtered));
  };

  return (
    <FinancesContext.Provider
      value={{ newFinances, addFinance, removeFinance }}
    >
      {children}
    </FinancesContext.Provider>
  );
};

export const useFinances = () => useContext(FinancesContext);
