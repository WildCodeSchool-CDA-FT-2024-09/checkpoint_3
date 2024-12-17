import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useCountriesQuery } from "./generated/graphql-types";

function App() {
  const { loading, error, data } = useCountriesQuery();

  console.log(data);

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;

  return (
    <main className="container">
      <section className="row">
        {data?.countries.map((country) => (
          <article className="col-2">
            <div className="border">
              <h1>{country.name}</h1>
            </div>
          </article>
        ))}
      </section>
    </main>
  );
}

export default App;
