import { ToastContainer } from "react-toastify";
import Routes from "./routes/routes";
import "./style.css"

function App() {
  return (
    <>
      <Routes />
      <ToastContainer position="top-left" />
    </>
  );
}

export default App;