import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import client from "./services/connexion.ts";
import { ApolloProvider } from '@apollo/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </StrictMode>,
)
