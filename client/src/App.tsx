import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";

function App() {
  const { loading, error, data } = useCountriesQuery();

  console.log(data);

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;
  console.log(data);
  return (
    <main className="container">
      <section className="row">
        {data?.countries.map((country) => (
          <article className="col-lg-2 col-sm-4 my-2">
            <div className="border text-center">
              <h1 className="fs-3">{country.name}</h1>
              <i className="fs-2">{country.emoji}</i>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
