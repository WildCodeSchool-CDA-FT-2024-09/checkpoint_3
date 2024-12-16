import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function CountryDetailsPage() {
  const { id } = useParams();

  return (
    <Typography variant="h4" component="h1">
      Country Details: {id}
    </Typography>
  );
}
