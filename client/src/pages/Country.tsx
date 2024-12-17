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
      <h1 className="my-10">Les Pays</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {countries?.map((country) => (
          <Link
            key={country.id}
            to={`/country/${country.code}`}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center"
          >
            <h1>{country.name}</h1>

            <p>{country.emoji}</p>
            <p>{country.code}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Country;
