import { useNavigate, useParams } from "react-router-dom";
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

  const navigate = useNavigate();

  if (!details)
    return (
      <>
        <h1>Country not found</h1>
        <button onClick={() => navigate("/")}>
          Return to country selection
        </button>
      </>
    );

  const returnToMenu = () => {
    navigate("/");
  };

  return (
    <>
      <h1>
        Country: {details?.country.name} {details?.country.emoji}
      </h1>
      <ul>
        <Detail title="Code" value={details?.country.code} />
        <Detail
          title="Continent"
          value={details?.country.continent?.name || "Unknown 🔍"}
        />
      </ul>
      <button onClick={returnToMenu}>Return to country selection</button>
    </>
  );
}

export default Country;
