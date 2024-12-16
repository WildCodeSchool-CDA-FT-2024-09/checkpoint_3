import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../schema/queries";
import { CircularProgress, Box } from "@mui/material";

interface RouteParams {
  countryId: string;
}

export default function Detail() {
  const { countryId } = useParams<RouteParams>(); 

  const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
    variables:  { code: countryId }, 
  });

  if (loading) return <CircularProgress />;
  if (error) return <p>Error: {error.message}</p>;

  const { name, code, emoji, continent } = data.country;


  return (
    <Box sx={{ p: 2 }}>
    <h2>Détails du pays</h2>
    <div>
      <h3>{name} ({code})</h3>
      <p>Code: {code}</p>
      <p>Emoji: {emoji}</p>
      <p>Continent: {continent.name}</p>
      <p>Emoji: {emoji}</p>
    </div>
  </Box>

  );
}
