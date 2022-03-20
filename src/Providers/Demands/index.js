import { createContext, useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export const DemandsContext = createContext();

export const DemandsProvider = ({ children }) => {
  const [demands, setDemands] = useState([]);
  const [demandId, setDemandId] = useState(1);

  const [token] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  );

  const [user] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:user')) || []
  );

  console.log(user);

  const showDemands = (token) => {
    api
      .get('/demands', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setDemands(res.data))
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
        const { token, user } = res.data;

        localStorage.setItem('@CondoManage:token', JSON.stringify(token));

        localStorage.setItem('@CondoManage:user', JSON.stringify(user));

        setDemands([...demands, res.data]);

        toast.success('Demanda adicionada com sucesso!');
        console.log(res);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
        console.log(err);
      });
  };

  const changeDemand = (token, data, demandId) => {
    api
      .patch(`/demands/${demandId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success('Dados alterados com sucesso!');
        console.log(res);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
        console.log(err);
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
      }}>
      {children}
    </DemandsContext.Provider>
  );
};
