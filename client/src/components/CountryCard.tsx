import { Country } from "../generated/graphql-types";

export default function CountryCard({ id, name, emoji, code}: Country) {
  return (
    <div>
      <p>{id}</p>
      <p>{emoji}</p>
      <p>{code}</p>
      <p>{name}</p>
    </div>
  )
}
