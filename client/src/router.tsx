import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Pays from "./pages/Pays";
import Home from "./pages/Home";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "pays",
                element: <Pays />,
            },
        ],
    },
]);

export default router;
