import { ContinentsQuery } from "../generated/graphql-types";

export default function Card({ data }: ContinentsQuery) {
    console.log("%c⧭", "color: #00e600", data);
    return (
        <article>
            <p>{data.name}</p>
            <p>{data.emoji}</p>
        </article>
    );
}
