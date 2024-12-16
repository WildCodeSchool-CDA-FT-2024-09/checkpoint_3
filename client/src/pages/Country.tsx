import { useParams } from "react-router-dom";

export default function Country() {
const currentCountry = useParams()
console.log(currentCountry)
  return <p> {currentCountry.name} {currentCountry.code }{currentCountry.emoji}</p>
}