import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
import { useCountryQuery } from "../generated/graphql-types";
import "./Detail.css";

const CountryDetail: React.FC = () => {
  const { code } = useParams<{ code: string }>();

  if (!code) {
    return <p>Code du pays non trouvé dans l'URL</p>;
  }

  const { loading, error, data } = useCountryQuery({
    variables: { code: code ?? "" },
    skip: !code, //paramètre skip empêche l'exécution de la requête lorsque le code est inexistant
  });

  if (loading) return <div className="loader">Chargement...</div>;
  if (error) return <p>Error: {error.message}</p>;

  const country = data?.country;

  return (
    <div className="detail-container">
      <h2>Détails du pays</h2>
      <div className="country-details">
        <h3>{country?.name}</h3>
        <p>
          <strong>Code:</strong> {country?.code}
        </p>
        <p>
          <strong>Emoji:</strong> {country?.emoji}
        </p>
        <p>
          <strong>Continent:</strong> {country?.continent?.name}
        </p>
        <p>
          <strong>Emoji:</strong> {country?.emoji}
        </p>
      </div>
    </div>
  );
};

export default CountryDetail;
