import { useParams } from "react-router-dom";
import { useOneCountryQuery } from "../generated/graphql-types";

function Detail() {
  const { code } = useParams();
  const { loading, error, data } = useOneCountryQuery({
    variables: {
      code: code as string,
    },
  });

  if (error) return <p>There id an Error</p>;
  if (loading) return <p>Loading...</p>;

  console.log(data);
  if (data) {
    return (
      <div>
        <h2>{data.country.code}</h2>
        <h3>{data.country.name}</h3>
      </div>
    );
  }
}

export default Detail;
