import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import App from "./App.tsx";
import client from "./serivces/connexion.ts";
import Countries from "./pages/Countries.tsx";
import Country from "./pages/Country.tsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [{ path: "/countries", element: <Countries /> }, 
      {
        path: "/country/:code",
        element: <Country/>
      }
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
