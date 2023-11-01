import { BrowserRouter } from "react-router-dom";
import { ReactRoutes } from "./routes/ReactRoutes";
import { Header } from "./components/Header";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <ReactRoutes />
    </BrowserRouter>
  );
};
