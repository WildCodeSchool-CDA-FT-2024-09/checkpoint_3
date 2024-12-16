import CountryCard from "../components/CountryCard";
import { useCountriesQuery } from "../generated/graphql-types";

export default function Country() {
  const { loading, error, data } = useCountriesQuery();
  if (loading) return <p> Loading </p>;
  if (error) return <p> Error : </p>;

  console.info(data);

  return (
    <>
      {data?.countries.map((c) => (
        <CountryCard name={c.name} emoji={c.emoji} />
      ))}
    </>
  );
}
