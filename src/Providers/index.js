import { TenantsProvider } from "./Tenants";
import { DemandsProvider } from "./Demands";
import { FinancesProvider } from "./Finances";
import { UserProvider } from "./User";

const Providers = ({ children }) => {
    return (
        <TenantsProvider>
            <DemandsProvider>
                <FinancesProvider>
                    <UserProvider>
                        {children}
                    </UserProvider>
                </FinancesProvider>
            </DemandsProvider>
        </TenantsProvider>
    )
}

export default Providers