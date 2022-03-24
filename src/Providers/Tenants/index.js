import { createContext, useState } from "react";
import api from "../../services/api.js";
import { toast } from "react-toastify";

export const TenantsContext = createContext();

export const TenantsProvider = ({ children }) => {
  const [tenants, setTenants] = useState([]);

  const showTenants = (token, userId) => {
    api
      .get(`tenants/?userId=${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setTenants(res.data);
      })
      .catch((err) => err);
  };

  const addTenant = (data, userId, token) => {
    api
      .post(
        "tenants",
        {
          ...data,
          userId: userId,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        toast.success("Morador adicionado com sucesso!");
        showTenants(token, userId);
      })
      .catch((err) => {
        toast.error("Ops! Algo deu errado");
      });
  };

  const changeTenant = (data, tenantId, userId, token) => {
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
        showTenants(token, userId);
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
