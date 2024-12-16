import { useCountriesQuery } from "../types/graphql";
import { Link } from "react-router-dom";

function Country() {
  const { data, loading, error } = useCountriesQuery();

  console.log(data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const countries = data?.countries;

  console.log(countries);
  return (
    <div>
      <h1>Countries</h1>
      {countries?.map((country) => (
        <div key={country.id}>
          <Link to={`/country/${country.code}`}>
            <h1>{country.name}</h1>
          </Link>

          <p>{country.emoji}</p>
          <p>{country.code}</p>
        </div>
      ))}
    </div>
  );
}

export default Country;
