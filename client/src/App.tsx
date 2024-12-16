import { Outlet } from "react-router-dom";
import Nav from "./components/Nav";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
function App() {
    const client = new ApolloClient({
        uri: "http://localhost:5000/api/", // Remplacez par votre URL GraphQL
        cache: new InMemoryCache(),
    });
    return (
        <>
            <ApolloProvider client={client}>
                <Nav />
                <Outlet />
            </ApolloProvider>
        </>
    );
}

export default App;
