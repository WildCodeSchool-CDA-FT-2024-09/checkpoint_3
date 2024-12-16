import { useParams } from "react-router-dom";
import { useGetCountryByCodeQuery } from "../generated/graphql-types";
import {
  Box,
  Typography,
  CircularProgress,
  Alert,
  Card,
  CardContent,
} from "@mui/material";

const DetailCountries = () => {
  const { code } = useParams<{ code: string }>();

  const { loading, error, data } = useGetCountryByCodeQuery({
    variables: { code: code || "" },
  });

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" marginTop={5}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center" marginTop={5}>
        <Alert severity="error">Error: {error.message}</Alert>
      </Box>
    );
  }

  const country = data?.country;

  if (!country) {
    return (
      <Box display="flex" justifyContent="center" marginTop={5}>
        <Alert severity="warning">
          No country found for the provided code: {code}
        </Alert>
      </Box>
    );
  }

  return (
    <Box>
      <Box
        sx={{
          textAlign: "center",
          backgroundColor: "#F7146B",
          padding: 2,
          color: "white",
        }}
      >
        <Typography variant="h4" sx={{ fontWeight: "bold" }}>
          Checkpoint : frontend
        </Typography>
        <Typography variant="h6">Countries</Typography>
      </Box>

      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
      >
        <Card sx={{ maxWidth: 500, boxShadow: 3, textAlign: "center" }}>
          <CardContent>
            <Typography variant="h1" gutterBottom>
              {country.emoji}
            </Typography>

            <Typography variant="h5" gutterBottom>
              Name : {country.name} ({country.code})
            </Typography>

            <Typography variant="body1" color="text.secondary">
              Continent : {country.continent?.name || "N/A"}
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default DetailCountries;
