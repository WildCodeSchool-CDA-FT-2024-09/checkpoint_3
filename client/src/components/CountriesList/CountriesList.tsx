import { Link } from "react-router-dom";
import { useCountriesQuery } from "../../generated/graphql-types";

export default function CountriesList() {
  const { data, loading, error } = useCountriesQuery();

  if (loading || error) return <>wait a minute</>;

  if (data)
    return (
      <ul>
        {data?.countries.map((country) => (
          <li key={country.id}>
            <Link to={`/country/${country.code}`}>
              <p>{country.name}</p>
              <p>{country.emoji}</p>
            </Link>
          </li>
        ))}
      </ul>
    );
}
