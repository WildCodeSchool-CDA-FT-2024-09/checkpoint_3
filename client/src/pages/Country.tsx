import { Outlet } from "react-router";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../schema/queries";
import CountryCard from "../components/CountryCard";

export default function Country() {
  // const countries = [
  //   { id: 1, name: "France" },
  //   { id: 2, name: "Germany" },
  //   { id: 3, name: "Italy" },
  // ];
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const countries = data.countries;

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "8px",
          justifyContent: "space-evenly",
        }}
      >
        {countries.map(
          (country: { id: number; name: string; emoji: string }) => (
            <CountryCard
              key={country.id}
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
