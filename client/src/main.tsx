import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import client from "./services/connection.ts";
import { ApolloProvider } from "@apollo/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import CountriesPage from "./pages/CountriesPage.tsx";
import CountryPage from "./pages/CountryPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <CountriesPage />,
      },
      {
        path: "/country/:id",
        element: <CountryPage />,
      },
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
