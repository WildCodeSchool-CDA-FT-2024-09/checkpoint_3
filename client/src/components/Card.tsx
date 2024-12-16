import { Link } from "react-router-dom";
import { GetAllCountriesQuery } from "../generated/graphql-types";

type CardProps = {
    data: GetAllCountriesQuery["countries"][0]; // Typage d'un pays individuel
};

export default function Card({ data }: CardProps) {
    return (
        <article className="card">
            <Link to={`/pays/${data.code}`}>
                <h2>{data.name}</h2>
                <p>{data.emoji} </p>
                <p>{data.emoji}</p>{" "}
            </Link>
        </article>
    );
}
