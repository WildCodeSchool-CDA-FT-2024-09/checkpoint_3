import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Adjust the path as necessary
import Detail from "../pages/Detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country/:code",
    element: <Detail />,
  },
]);
export default router;
