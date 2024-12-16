import { Link } from "react-router-dom";
import { CountriesQuery } from "../generated/graphql-types";

type CardProps = {
    data: CountriesQuery["countries"][0]; // Typage d'un pays individuel
};

const getFlagEmoji = (countryCode: string) => {
    const codePoints = countryCode
        .toUpperCase()
        .split("")
        .map((char) => 127397 + char.charCodeAt(0));
    return String.fromCodePoint(...codePoints);
};

export default function Card({ data }: CardProps) {
    return (
        <article className="card">
            <Link to={`/pays/${data.emoji}`}>
                {" "}
                {/* Utilisation du code pays pour l'URL */}
                <h2>{data.name}</h2>
                <p>
                    {getFlagEmoji(data.emoji)}{" "}
                    {/* Convertit le code ISO en drapeau emoji */}
                </p>
                <p>{data.emoji}</p>{" "}
                {/* Affiche directement l'emoji s'il est disponible */}
            </Link>
        </article>
    );
}
