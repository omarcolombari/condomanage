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
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF2YWxlc2thMjkwOEBnbWFpbC5jb20iLCJpYXQiOjE2NDc4NDQ0ODUsImV4cCI6MTY0Nzg0ODA4NSwic3ViIjoiMSJ9.D6ZHzOBI82R9sFIY919xuDow4LVpb6HfYRUex7XxPfg';

  const user = {
    email: 'avaleska2908@gmail.com',
    id: 1,
  };

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

        let storageDemand = [...demands];

        setDemands([...storageDemand, res.data]);
        console.log('data ', res.data);

        toast.success('Demanda adicionada com sucesso!');
        console.log(res.data);
      })
      .catch((err) => {
        toast.error('Ops! Algo deu errado');
        console.log(err);
      });
  };

  console.log(demands);

  const changeDemand = (token, data, demandId) => {
    api
      .patch(`/demands/${demandId}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        let storageDemands = [...demands];

        const currentData = storageDemands.filter(
          (item) => item.id !== res.data.id
        );
        console.log('data ', data);

        setDemands([...currentData, res.data]);

        toast.success('Dados alterados com sucesso!');
        console.log(res.data);
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
