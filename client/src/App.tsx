import { Link } from "react-router-dom";
import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";
import AddCountryForm from "./components/AddCountryForm";

function App() {
  const { loading, error, data } = useCountriesQuery();

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main className="container">
      <AddCountryForm />
      <section className="row">
        {data?.countries.map((country) => (
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
