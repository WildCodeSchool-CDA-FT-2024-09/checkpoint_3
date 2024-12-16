import { useCountriesQuery } from "../generated/graphql-types";
import CountryCard from "../components/countryCard";

const Home: React.FC = () => {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="flex flex-wrap gap-4 justify-center">
        {data?.countries.map((country) => (
          <CountryCard
            key={country.id}
            code={country.code}
            name={country.name}
            emoji={country.emoji}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
