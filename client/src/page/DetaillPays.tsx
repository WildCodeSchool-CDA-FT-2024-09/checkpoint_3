import { useLocation } from "react-router-dom";
import { useCountryQuery } from "../../src/generated/graphql-types";
import "./DetaillPays.css";

function DetaillPays() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const countryCode = params.get("countryCode");

  const { loading, error, data } = useCountryQuery({
    variables: { countryCode2: countryCode || "" },
    skip: !countryCode,
  });

  if (loading) return <p>Chargement des données...</p>;
  if (error) return <p>Erreur lors du chargement des données.</p>;
  if (!data || !data.country) return <p>Aucune donnée trouvée pour ce pays.</p>;

  return (
    <div>
      <p className="emoji">{data.country.emoji}</p>

      <p>
        Nom: {data.country.name} ({data.country.code})
      </p>

      <p>
        Continent:{" "}
        {data.country.continent
          ? data.country.continent.name
          : "Continent non disponible"}
      </p>
    </div>
  );
}

export default DetaillPays;
