import { createContext, useContext, useState } from 'react';

const DemandsContext = createContext([]);

export const DemandsProvider = ({ children }) => {
  const [demand, setDemand] = useState([]);

  const [filteredDemand, setFilteredDemand] = useState([...demand]);

  const addDemand = (data) => {
    setDemand([...demand, data]);
  };

  const updateDemand = (data) => {
    const currentData = demand.filter(
      (item) => item.description === data.description
    );
    setDemand(data);
  };

  const filterDemands = (item) => {
    setFilteredDemand(
      item === 'Todas'
        ? demand
        : demand.filter(({ status }) => {
            if (status === 'inProgress') {
              return item === 'Em andamento';
            } else {
              return 'Concluídas';
            }
          })
    );
    return filteredDemand;
  };

  console.log(demand);

  return (
    <DemandsContext.Provider
      value={{
        demand,
        setDemand,
        filteredDemand,
        setFilteredDemand,
        addDemand,
        updateDemand,
        filterDemands,
      }}>
      {children}
    </DemandsContext.Provider>
  );
};

export const useDemands = () => useContext(DemandsContext);
