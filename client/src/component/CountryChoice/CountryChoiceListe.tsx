import React from "react";
import { useContinentsAndCountriesQuery } from "../../generated/graphql-types";
import CountryChoiceList from "../ListingPays/listingPays";
import Nav from "../Nav/Nav";

function CountryChoiceListe2() {
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
  return (
    <>
      <Nav />
      <div className="ListPays">
        <CountryChoiceList
          isLoading={false}
          error={null}
          countries={dataAll?.countries}
          emptyMessage="Aucun pays disponible"
          onCountryClick={handleCountryClick}
        />
      </div>
    </>
  );
}

export default CountryChoiceListe2;
