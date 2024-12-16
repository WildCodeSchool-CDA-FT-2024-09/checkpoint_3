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
                <h2>{data.name}</h2>
                <p>{getFlagEmoji(data.emoji)} </p>
                <p>{data.emoji}</p>{" "}
            </Link>
        </article>
    );
}
