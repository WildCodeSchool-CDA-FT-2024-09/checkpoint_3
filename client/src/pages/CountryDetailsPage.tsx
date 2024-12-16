import { Typography, Box } from "@mui/material";
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Typography variant="h1" component="p" sx={{ fontSize: "6rem" }}>
        {data.country.emoji}
      </Typography>
      <Typography variant="h5" component="h2">
        Name: {data.country.name} ({data.country.code})
      </Typography>
      {data.country.continent && (
        <Typography variant="h6" component="h3">
          Continent: {data.country.continent.name}
        </Typography>
      )}
    </Box>
  );
}
