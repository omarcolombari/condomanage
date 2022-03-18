import { createContext, useContext, useState } from 'react';

const DemandsContext = createContext([]);

export const DemandsProvider = ({ children }) => {
  const [demand, setDemand] = useState([]);

  const [filteredDemand, setFilteredDemand] = useState([...demand]);

  const [id, setId] = useState(0);

  const addDemand = (data) => {
    setDemand([...demand, { ...data, id }]);
    setId(id + 1);
  };

  const updateDemand = (data) => {
    console.log(data);
    // const currentData = demand.filter(
    //   (item) => item.description === data.description
    // );

    // setDemand(data);
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
        id,
        setId,
      }}>
      {children}
    </DemandsContext.Provider>
  );
};

export const useDemands = () => useContext(DemandsContext);
