import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Country from "./Country.tsx";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import NotFound from "./NotFound.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/country/:code",
    element: <Country />,
  },
  {
    path: "*",
    element: <NotFound text="Page not found" />,
  },
]);

export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>
);
