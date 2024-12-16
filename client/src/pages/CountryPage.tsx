import { useParams } from "react-router-dom";
import { useCountryQuery } from "@/gql/graphql-types";
export default function CountryPage() {
  const { code } = useParams<{ code: string }>() as { code: string };

  const { data, loading, error } = useCountryQuery({
    variables: { code },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;

  return (
    <div className="flex flex-col w-full justify-center items-center gap-8 my-8">
      <p className="text-2xl">{data.country.emoji}</p>
      <h2 className=" text-black">Name: {data.country.name}</h2>
      <p className="text-lg">
        Continent: {data.country?.continent?.name || "n/a"}
      </p>
    </div>
  );
}
