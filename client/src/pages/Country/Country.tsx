import { useParams } from "react-router-dom";
import { useCountryQuery } from "../../generated/graphql-types";

export default function Country() {
  const { countryCode } = useParams();
  const { data } = useCountryQuery({ variables: { code: countryCode } });
  if (data)
    return (
      <>
        <p>{data.country.emoji}</p>
        <p>
          Name : {data.country.name} ({countryCode})
        </p>
        <p>
          Continent : {data.country.continent?.name}
        </p>
      </>
    );
}
