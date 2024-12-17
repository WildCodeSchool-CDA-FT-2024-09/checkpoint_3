import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import connection from "./services/connection.ts";
import App from "./App.tsx";
import "./index.css";
import Country from "./pages/Country.tsx";
import DetailCountry from "./pages/DetailCountry.tsx";
import AddACountry from "./components/AddACountry.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "country",
        element: <Country />,
      },
      {
        index: true,
        path: "country/:code",
        element: <DetailCountry />,
      },
      {
        index: true,
        path: "addACountry",
        element: <AddACountry />,
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
