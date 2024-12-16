import { useQueryQuery } from "../generated/graphql-types.ts";
import Country from "../components/Country.tsx";

export default function Countries() {
  const { data, loading, error } = useQueryQuery();
  console.log(error);

  if (loading) {
    return <p>Chargement des pays en cours...</p>;
  }
  if (error) {
    return <p>Erreur de chargement, merci de rafraîchir la page.</p>;
  }

  if (data?.countries.length) {
    return (
      <main className="flex justify-center gap-2 m-5">
        {data.countries.map((country) => (
          <Country data={country} key={country.id} />
        ))}
      </main>
    );
  }

  return <p>Aucun pays disponible pour le moment.</p>;
}
