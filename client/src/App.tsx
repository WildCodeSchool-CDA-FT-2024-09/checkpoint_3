import { Outlet } from "react-router-dom";
import "./App.css";
import { useQuery, gql } from "@apollo/client";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_COUNTRIES);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  console.log(data);
  return (
    <div>
      <h1>Mon Appli</h1>
      <Outlet />
    </div>
  );
}

export default App;
