import { useParams } from "react-router-dom";
import { useCountryQuery } from "../generated/graphql-types";

function emojiToISO(emoji: string): string | null {
    if (emoji.length === 4) {
        const codePoints = Array.from(emoji)
            .map((char) => char.codePointAt(0)! - 0x1f1e6)
            .map((cp) => String.fromCharCode(cp + 65))
            .join("");
        return codePoints;
    }
    return null;
}

export default function Pays() {
    const { code } = useParams<{ code: string }>();

    const countryCode = emojiToISO(code || "") || code?.trim().toUpperCase();

    const { data, loading, error } = useCountryQuery({
        variables: { code: countryCode },
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
