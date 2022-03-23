import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export const DemandsContext = createContext();

export const DemandsProvider = ({ children }) => {
  const [demands, setDemands] = useState([]);

  // const [token] = useState(
  //   JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  // );

  // const [user] = useState(
  //   JSON.parse(localStorage.getItem('@CondoManage:user')) || []
  // );

  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWxlc2thMjkwOEBob3RtYWlsLmNvbSIsImlhdCI6MTY0Nzk2MzY0OCwiZXhwIjoxNjQ3OTY3MjQ4LCJzdWIiOiIzIn0.klvbnwdixD4KrNvTTltdZ9eAsZRxaqAA0rE9iEZq6Xs';

  const user = {
    email: 'avaleska2908@hotmail.com',
    id: 3,
  };

  const showDemands = (token, userId) => {
    api
      .get(`/demands?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setDemands(res.data);
      })
      .catch((err) => console.log(err));
  };

  const addDemand = (id, token, data) => {
    api
      .post(
        `/demands`,
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
        const { userId } = res.data;

        let storageDemand = [...demands];

        setDemands([...storageDemand, res.data]);

        toast.success('Demanda adicionada com sucesso!');

        showDemands(token, userId);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
      });
  };

  const changeDemand = (token, data, demandId) => {
    const newData = { ...data, userId: user.id };

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
        showDemands(token, user.id);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
      });
  };

  const delDemand = (token, demandId) => {
    api
      .delete(`/demands/${demandId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((_) => {
        toast.success('Dados apagados com sucesso!');
        showDemands(token, user.id);
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
