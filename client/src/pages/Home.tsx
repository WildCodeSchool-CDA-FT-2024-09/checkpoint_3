import { useCountriesQuery } from "../generated/graphql-types";
import CountryCard from "../components/countryCard";

const Home: React.FC = () => {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log(data);

  return (
    <div className="country-list">
      <h1>Countries List</h1>
      {data?.countries.map((country) => (
        <CountryCard
          key={country.id}
          id={country.id}
          name={country.name}
          emoji={country.emoji}
        />
      ))}
    </div>
  );
};

export default Home;
