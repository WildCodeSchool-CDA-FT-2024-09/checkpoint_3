import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import connection from "./services/connection.ts";
import App from "./App.tsx";
import "./index.css";
import Country from "./pages/Country.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/country",
        element: <Country />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={connection}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
