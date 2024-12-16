import { useParams } from "react-router-dom";
import { useCountryQuery } from "../generated/graphql-types";
import Detail from "./components/Detail";

function Country() {
  const urlparams = useParams();
  const code = urlparams.code || "";
  const { data: details } = useCountryQuery({
    variables: {
      code: code,
    },
  });

  if (!details) return <h1>Country not found</h1>;

  return (
    <>
      <h1>
        Country: {details?.country.name} {details?.country.emoji}
      </h1>
      <ul>
        <Detail title="Code" value={details?.country.code} />
        <Detail title="Continent" value={details?.country.continent?.name} />
      </ul>
    </>
  );
}

export default Country;
