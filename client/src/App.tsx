import "./App.css";

import { useCountriesQuery } from "../generated/graphql-types";
import { useNavigate } from "react-router-dom";

function App() {
  const { data: countries } = useCountriesQuery();

  const navigate = useNavigate();
  return (
    <>
      <h1>Countries</h1>
      {countries?.countries.map((country) => (
        <button
          key={country.id}
          onClick={() => navigate(`/country/${country.id}`)}
        >
          {`${country.name} ${country.emoji}`}
        </button>
      ))}
    </>
  );
}

export default App;
