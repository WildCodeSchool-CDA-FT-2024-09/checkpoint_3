import { useParams } from "react-router-dom";
import { useCountryQuery } from "../generated/graphql-types";

export default function Pays() {
    const { code } = useParams<{ code: string }>();

    const { data, loading, error } = useCountryQuery({
        variables: { code: code || "" },
        skip: !code,
    });

    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error.message}</p>;

    return (
        <div>
            <h2>
                Pays : {data?.country?.name} ({data?.country?.code})
            </h2>
            <p>Emoji : {data?.country?.emoji}</p>
            <p>Continent : {data?.country?.continent?.name} </p>
        </div>
    );
}
