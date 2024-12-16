import { useCountriesQuery } from "../../generated/graphql-types";

export default function CountriesList() {
  const {
    data, loading, error
  } = useCountriesQuery();

  if (loading||error) return <>wait a minute</>

  if (data)
    console.log(data)
    return (
      <ul>
        {data.countries.map((country) => (
          <li key={country.id}>{country.name}</li>
        ))}
      </ul>
    );
}
