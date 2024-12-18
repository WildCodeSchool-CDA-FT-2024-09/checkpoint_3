import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";
import AddCountryForm from "./components/AddCountryForm";

type Country = {
  id: number;
  name: string;
  code: string;
  emoji: string;
};

function App() {
  const { loading, error, data } = useCountriesQuery();
  const [countries, setCountries] = useState<Country[] | undefined>([]);

  useEffect(() => {
    setCountries(data?.countries);
  }, [data]);

  const handleCountryState = (result: Country) => {
    console.log(result);
    setCountries((prev) => (prev ? [...prev, result] : [result]));
  };

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;

  console.log(countries);

  return (
    <main className="container">
      <AddCountryForm handleCountryState={handleCountryState} />
      <section className="row">
        {countries?.map((country) => (
          <article className="col-lg-2 col-sm-4 my-2">
            <Link
              className="border text-center"
              to={`/country/${country.code}`}
            >
              <h1 className="fs-3">{country.name}</h1>
              <i className="fs-2">{country.emoji}</i>
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
