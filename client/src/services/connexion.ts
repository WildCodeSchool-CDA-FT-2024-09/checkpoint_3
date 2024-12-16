import { ApolloClient, InMemoryCache } from "@apollo/client";

const connexion = new ApolloClient({
  uri: import.meta.env.VITE_GRAPHQL_API_URL,
  cache: new InMemoryCache(),
});

export default connexion;
