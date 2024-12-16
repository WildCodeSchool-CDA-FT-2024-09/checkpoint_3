import { useParams } from "react-router-dom";

interface RouteParams {
  countryId: string;
}

export default function Detail() {
  const { countryId } = useParams<RouteParams>(); 

  return (
    <div>
      <h2>Detail du pays {countryId}</h2>
      {/* <p>You are viewing details for country ID: {countryId}</p> */} 
    </div>
  );
}
