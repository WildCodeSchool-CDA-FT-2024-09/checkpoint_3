import { useParams } from "react-router-dom";

export default function CountryPage() {
  const { id } = useParams<{ id: string }>();
  return <p>Country: {id}</p>;
}
