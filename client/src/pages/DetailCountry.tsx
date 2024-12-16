import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import { gql } from "@apollo/client";

const GET_COUNTRY_BY_CODE = gql`
  query Countries($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;



function DetailCountry() {
  const { code } = useParams<{ code: string }>();

  const { data, loading, error } = useQuery(GET_COUNTRY_BY_CODE, {
    variables: { code },
    skip: !code,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (!data || !data.country) return <p>No data found for this country.</p>;

  console.log(data);

  const { country } = data;

  return (
    <div>
      <h1>
        {country.name} ({country.emoji})
      </h1>
      <p>Country Code: {country.code}</p>
      <p>Continent: {country.continent.name}</p>
    </div>
  );
}

export default DetailCountry;
