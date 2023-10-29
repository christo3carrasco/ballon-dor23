import { BrowserRouter } from "react-router-dom";
import { ReactRoutes } from "./routes/ReactRoutes";

export const App = () => {
  return (
    <BrowserRouter>
      <ReactRoutes />
    </BrowserRouter>
  );
};
