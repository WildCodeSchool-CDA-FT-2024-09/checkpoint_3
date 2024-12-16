import { Typography, Box, Paper } from "@mui/material";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../graphql/queries";

export default function CountryDetailsPage() {
  const { code } = useParams();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: { code: code?.toUpperCase() }, // Important : les codes pays sont en majuscules
    skip: !code,
  });

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;
  if (!data?.country) return <Typography>Country not found</Typography>;

  return (
    <Box>
      <Typography variant="h4" component="h1" gutterBottom>
        {data.country.emoji} {data.country.name}
      </Typography>
      <Paper sx={{ p: 2, mt: 2 }}>
        <Typography variant="body1">Code: {data.country.code}</Typography>
        <Typography variant="body1">
          Continent: {data.country.continent.name}
        </Typography>
      </Paper>
    </Box>
  );
}
