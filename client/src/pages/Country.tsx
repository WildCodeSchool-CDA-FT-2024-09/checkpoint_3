
import { useQuery } from "@apollo/client";
import { useGetCountriesQuery } from "../types/graphql";
import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;

function Country() {
  // const { data, loading, error } = useGetCountriesQuery();
  const { data, loading, error } = useQuery(GET_COUNTRIES);

  console.log(data);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error</p>;

  const countries = data?.countries;

  console.log(countries);
  return (
    <div>
      <h1>Country</h1>
      <ul>
        {countries?.map((country) => (
          <li key={country.code}>{country.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Country;
