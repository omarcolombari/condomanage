import { createContext, useState } from "react";
import api from '../../services/api.js'
import { toast } from "react-toastify";

export const TenantsContext = createContext()

export const TenantsProvider = ({ children }) => {
    const [tenants, setTenants] = useState([])

    const showTenants = (token) => {
        api.get('tenants', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            setTenants(res.data)
        })
        .catch((err) => console.log(err))
    }

    const addTenant = (id, token, data) => {
        api.post('/tenants', {
            ...data,
            "userId": id
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            toast.success('Morador adicionado com sucesso!')
            console.log(res)
        })
        .catch((err) => {
            toast.error('Ops! Algo deu errado')
            console.log(err)
        })
    }

    const changeTenant = (token, data, tenantId) => {
        api.patch(`/tenants/${tenantId}`, {
            ...data,
        }, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        .then((res) => {
            toast.success('Dados alterados com sucesso!')
            console.log(res)
        })
        .catch((err) => {
            toast.error('Ops! Algo deu errado')
            console.log(err)
        })
    }

    return (
        <TenantsContext.Provider value={{ tenants, showTenants, addTenant, changeTenant }} >
            {children}
        </TenantsContext.Provider>
    )
}