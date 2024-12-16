import "./App.css";

import {
  useContinentsQuery,
  useCountriesQuery,
} from "../generated/graphql-types";

function App() {
  const { data: continents } = useContinentsQuery();
  const { data: countries } = useCountriesQuery();

  return (
    <>
      <h1>Hello</h1>
      {continents?.continents.map((continent) => (
        <p>{continent.name}</p>
      ))}
      {countries?.countries.map((country) => (
        <p>
          {country.name}
          {country.emoji}
        </p>
      ))}
    </>
  );
}

export default App;
