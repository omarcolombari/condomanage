import { DemandsProvider } from './demand';

const Providers = ({ children }) => {
  return <DemandsProvider> {children}</DemandsProvider>;
};

export default Providers;
