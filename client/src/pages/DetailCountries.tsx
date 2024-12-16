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

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  const country = data?.country;

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginTop={5}
    >
      <Typography variant="h4" gutterBottom>
        Country Details
      </Typography>
      <Card sx={{ maxWidth: 400, textAlign: "center", boxShadow: 3 }}>
        <CardContent>
          <Typography variant="h1">{country?.emoji}</Typography>
          <Typography variant="h5" sx={{ mt: 2 }}>
            Name: {country?.name} ({country?.code})
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            Continent: {country?.continent?.name || "N/A"}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default DetailCountries;
