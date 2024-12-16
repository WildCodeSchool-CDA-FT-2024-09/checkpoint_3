import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router";
import "./index.css";
import App from "./App.tsx";
import Country from "../src/pages/Country.tsx";
import CountryDetail from "./pages/CountryDetail.tsx";

// Configuration des routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "country",
        element: <Country />,
        children: [
          {
            path: ":code",
            element: <CountryDetail />,
          },
        ],
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
