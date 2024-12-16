import { useParams } from "react-router-dom";

export default function Country() {
  const { countryCode } = useParams();

  return <p>country {countryId}</p>;
}
