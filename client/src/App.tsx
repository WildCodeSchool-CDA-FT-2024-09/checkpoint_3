import "./App.css";
import { useContinentsQuery } from "./gql/graphql-types";
import { Button } from "./components/ui/button";

function App() {
  const { data, loading, error } = useContinentsQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;

  return (
    <>
      {data &&
        data.continents.map((continent) => (
          <div key={continent.id}>{continent.name}</div>
        ))}
      <Button>Click Me</Button>
    </>
  );
}

export default App;
