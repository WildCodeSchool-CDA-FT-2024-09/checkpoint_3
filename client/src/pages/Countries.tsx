import AddCountry from "../components/addCountry";
import CountryCard from "../components/CountryCard";
import { useCountriesQuery } from "../generated/graphql-types";
import "./CountriesPage.css";
import { Link } from "react-router-dom";

export default function Countries() {
  const { loading, error, data } = useCountriesQuery();
  if (loading) return <p> Loading </p>;
  if (error) return <p> Error : </p>;

  console.info(data);

  return (
    <> 
    <AddCountry/>
    <div className="container">
      {data?.countries.map((c) => (
        <Link to={`/country/${c.name}`} key={c.name}>
          <CountryCard name={c.name} emoji={c.emoji} />
        </Link>
      ))}
    </div>
    </>
  );
}
