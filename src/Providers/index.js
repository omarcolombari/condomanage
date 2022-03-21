import { TenantsProvider } from "./Tenants";
import { DemandsProvider } from "./Demands";
import { FinancesProvider } from "./Finances";

const Providers = ({ children }) => {
    return (
        <TenantsProvider>
            <DemandsProvider>
                <FinancesProvider>
                    {children}
                </FinancesProvider>
            </DemandsProvider>
        </TenantsProvider>
    )
}

export default Providers