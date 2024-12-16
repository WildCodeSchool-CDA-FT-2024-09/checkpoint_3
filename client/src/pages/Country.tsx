import { Outlet } from "react-router";
import { useGetCountriesQuery } from "../generated/graphql-types"; 
import CountryCard from "../components/CountryCard";
import "./Country.css";

type CountryWithoutCode = {
  id: number;
  name: string;
  emoji: string;
};


export default function Country() {
  const { loading, error, data } = useGetCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries: CountryWithoutCode[] = data?.countries ?? [];

  return (
    <div>
      <div className="countries-container">
        {countries.map(
          (country: { id: number; name: string; emoji: string }) => (
            <CountryCard
              key={country.id}
              id={country.id}
              name={country.name}
              emoji={country.emoji}
            />
          )
        )}
      </div>
      <Outlet />
    </div>
  );
}
