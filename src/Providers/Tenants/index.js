import { createContext, useState } from "react";
import api from "../../services/api.js";
import { toast } from "react-toastify";

export const TenantsContext = createContext();

export const TenantsProvider = ({ children }) => {
  const [tenants, setTenants] = useState([]);

  const [token] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:token')) || []
  );
  const [user] = useState(
    JSON.parse(localStorage.getItem('@CondoManage:infos')) || []
  );

  const showTenants = () => {
    api
      .get(`tenants/?userId=${user.user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTenants(res.data);
      })
      .catch((err) => err);
  };

  const addTenant = (data) => {
    api
      .post(
        "tenants",
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
        toast.success("Morador adicionado com sucesso!");
        showTenants(token, user.user.id);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const changeTenant = (data, tenantId) => {
    api
      .patch(
        `tenants/${tenantId}`,
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
        showTenants(token, user.user.id);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  return (
    <TenantsContext.Provider
      value={{ tenants, showTenants, addTenant, changeTenant }}
    >
      {children}
    </TenantsContext.Provider>
  );
};
