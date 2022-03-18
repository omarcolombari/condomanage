import { FinancesProvider } from "./Finance";

const Providers = ({ children }) => {
  return <FinancesProvider>{children}</FinancesProvider>;
};

export default Providers;
