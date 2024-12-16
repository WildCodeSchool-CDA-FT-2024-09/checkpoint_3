import { useParams } from "react-router-dom";
import { useGetCountryQuery } from "../types/graphql";

function DetailCountry() {
  const { code } = useParams<{ code: string }>();

  const { data, loading, error } = useGetCountryQuery({
    variables: { code: code || "" },
    skip: !code,
  });

  if (!code) return <p>Invalid country code.</p>;

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
      <p>Continent: {country.continent?.name}</p>
    </div>
  );
}

export default DetailCountry;
