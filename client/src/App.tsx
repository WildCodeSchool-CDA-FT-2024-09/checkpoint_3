import { Link } from "react-router-dom";
import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";

function App() {
  const { loading, error, data } = useCountriesQuery();

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main className="container">
      <section className="row">
        {data?.countries.map((country) => (
          <article className="col-lg-2 col-sm-4 my-2">
            <Link className="border text-center" to={`/country/${country.id}`}>
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
