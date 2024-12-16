import { ApolloClient, InMemoryCache } from "@apollo/client";

// APOLLO CLIENT INSTANCE
export const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),
});
