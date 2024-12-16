import { useParams } from "react-router-dom";
import { useCountryQuery } from "../generated/graphql-types";

export default function Country() {
  const { code } = useParams();

  const { loading, error, data } = useCountryQuery({ variables: { code } });
  if (loading) return <p> Loading </p>;
  if (error) return <p> Error : </p>;

  console.log(data);

  return (
    <>
      <h1> {data?.country.emoji}</h1>
      <h3>
        Name : {data?.country.name} ({data?.country.code})
      </h3>
    </>
  );
}
