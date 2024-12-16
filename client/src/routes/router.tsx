import { createBrowserRouter } from "react-router-dom";
import App from "../App"; // Adjust the path as necessary

const router = createBrowserRouter([
  {
    path: "/home",
    element: <App />,
  },
]);
export default router;
