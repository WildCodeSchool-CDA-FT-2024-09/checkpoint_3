import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import client from "./services/connexion";
import App from "./App.tsx";
import ListCountries from "./pages/ListCountries.tsx";
import DetailCountries from "./pages/DetailCountries.tsx";
import AddCountries from "./pages/AddCountries.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/countries",
        element: <ListCountries />,
      },
      { path: "/countries/:code", element: <DetailCountries /> },
      {
        path: "/addCountries",
        element: <AddCountries />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router}></RouterProvider>
    </ApolloProvider>
  </StrictMode>
);
