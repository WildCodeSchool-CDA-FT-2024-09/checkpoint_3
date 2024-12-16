import { Outlet } from "react-router";
import { useGetCountriesQuery } from "../generated/graphql-types"; 
import CountryCard from "../components/CountryCard";
import "./Country.css";

type Country = {
  id: number;
  code: string;
  name: string;
  emoji: string;
};


export default function Country() {
  const { loading, error, data } = useGetCountriesQuery();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries: Country[] = data?.countries ?? [];

  return (
    <div>
      <div className="countries-container">
      {countries.map((country: Country) => (
            <CountryCard
              key={country.id}
              code={country.code} 
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
