import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ApolloProvider } from "@apollo/client";
import connection from "./services/connection.ts";
import App from "./App.tsx";
import "./index.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={connection}>
      <App />
    </ApolloProvider>
  </StrictMode>,
);
