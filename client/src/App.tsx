import { useContinentsAndCountriesQuery } from "../src/generated/graphql-types";
import "./App.css";
import CountryChoiceList from "./component/ListingPays/listingPays";

function App() {
  const handleCountryClick = (code: string) => {
    console.log(`Pays sélectionné avec le code: ${code}`);
  };
  const {
    loading: loadingAll,
    error: errorAll,
    data: dataAll,
  } = useContinentsAndCountriesQuery();

  if (loadingAll) return <p>Chargement des données...</p>;
  if (errorAll) return <p>Erreur lors du chargement des données.</p>;
  console.log(dataAll);
  return (
    <div className="ListPays">
      <CountryChoiceList
        isLoading={false}
        error={null}
        countries={dataAll?.countries}
        emptyMessage="Aucun pays disponible"
        onCountryClick={handleCountryClick}
      />
    </div>
  );
}

export default App;
