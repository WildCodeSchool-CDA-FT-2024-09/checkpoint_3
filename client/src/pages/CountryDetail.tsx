import { useParams } from "react-router-dom";
import { useGetCountryDetailsQuery } from "../generated/graphql-types";

const CountryDetail: React.FC = () => {
  const { countryCode } = useParams<{ countryCode?: string }>();
  if (!countryCode) {
    return <p>No country code provided!</p>;
  }

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data, loading, error } = useGetCountryDetailsQuery({
    variables: { code: countryCode },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data?.country;

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 py-10">
      <div className="text-center p-8 ">
        <div className="text-6xl mb-6">{country?.emoji}</div>
        <h1 className="text-3xl font-semibold mb-4">{country?.name}</h1>
        <p className="text-xl mb-4">
          <strong>Code:</strong> {country?.code}
        </p>
        {country?.continent && (
          <p className="text-xl">
            <strong>Continent:</strong> {country.continent.name}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryDetail;
