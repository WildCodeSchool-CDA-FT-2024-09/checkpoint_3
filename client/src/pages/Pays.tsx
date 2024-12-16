import { useParams } from "react-router-dom";
import { useCountryQuery } from "../generated/graphql-types";

export default function Pays() {
    const { code } = useParams<{ code: string }>();
    console.log("code ", code);

    const { data, loading, error } = useCountryQuery({
        variables: { code: "FR" }, // impossible de pasé la variable en dynamique
        skip: !code,
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div>
            <h2>Pays : {data?.country?.name}</h2>
            <p>Code : {data?.country?.code}</p>
            <p>Emoji : {data?.country?.emoji}</p>
            <p>Continent : {data?.country?.continent?.name}</p>
        </div>
    );
}
