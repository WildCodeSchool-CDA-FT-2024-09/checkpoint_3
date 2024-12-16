import { ApolloClient, InMemoryCache } from "@apollo/client";

const connection = new ApolloClient({
  uri: "http://localhost:4000",
  credentials: "true",
  cache: new InMemoryCache(),
});

export default connection;
