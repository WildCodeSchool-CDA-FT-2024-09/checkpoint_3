import { useCountriesQuery } from "@/gql/graphql-types";
import { Link } from "react-router-dom";

export default function CountriesPage() {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;
  return (
    <div className="flex flex-row w-full justify-center items-center gap-8 my-8">
      {data &&
        data.countries.map((country) => (
          <Link
            to={`/country/${country.id}`}
            key={country.code}
            className="border-zinc-500 p-4 text-center min-w-24 rounded border"
          >
            <h2 className="text-black">{country.name}</h2>
            <p>{country.emoji}</p>
          </Link>
        ))}
    </div>
  );
}
