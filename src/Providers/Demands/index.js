import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export const DemandsContext = createContext();

export const DemandsProvider = ({ children }) => {
  const [demands, setDemands] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:infos')) || []
  );

  const showDemands = () => {
    api
      .get(`/demands?userId=${user.user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDemands(res.data);
      })
      .catch((err) => err);
  };

  const addDemand = (data) => {
    api
      .post(
        `/demands`,
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
        const { userId } = res.data;

        let storageDemand = [...demands];

        setDemands([...storageDemand, res.data]);

        toast.success('Demanda adicionada com sucesso!');

        showDemands(userId);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
      });
  };

  const changeDemand = (data, demandId) => {
    const newData = { ...data, userId: user.user.id };

    api
      .patch(`/demands/${demandId}`, newData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let storageDemands = [...demands];

        const currentData = storageDemands.filter(
          (item) => item.id !== res.data.id
        );

        setDemands([...currentData, res.data]);

        toast.success('Dados alterados com sucesso!');
        showDemands(token, user.user.id);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
      });
  };

  const delDemand = (demandId) => {
    api
      .delete(`/demands/${demandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        let storageDemands = [...demands];

        const currentData = storageDemands.filter(
          (item) => item.id !== demandId
        );

        setDemands([...currentData]);
        toast.success('Dados apagados com sucesso!');
        showDemands(token, user.user.id);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
      });
  };

  return (
    <DemandsContext.Provider
      value={{
        demands,
        showDemands,
        addDemand,
        changeDemand,
        token,
        user,
        delDemand,
      }}>
      {children}
    </DemandsContext.Provider>
  );
};
