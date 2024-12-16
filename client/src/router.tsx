import { createBrowserRouter } from "react-router-dom";
import Nav from "./components/Nav";
import App from "./App";
import Pays from "./pages/Pays";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Nav />,
        children: [
            {
                path: "/",
                element: <App />,
                children: [
                    {
                        path: "pays",
                        element: <Pays />,
                    },
                ],
            },
        ],
    },
]);

export default router;
