import { useGetAllCountriesQuery } from "../generated/graphql-types";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Alert,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";

const ListCountries = () => {
  const { loading, error, data } = useGetAllCountriesQuery();

  if (loading) return <CircularProgress />;
  if (error) return <Alert severity="error">Error: {error.message}</Alert>;

  return (
    <Box marginTop={5} padding={2}>
      <Typography variant="h4" align="center" gutterBottom>
        Countries
      </Typography>
      <Grid container spacing={3} justifyContent="center">
        {data?.countries.map((country) => (
          <Grid item key={country.id} xs={12} sm={6} md={4} lg={3}>
            <Link
              to={`/countries/${country.code}`}
              style={{ textDecoration: "none" }}
            >
              <Card sx={{ textAlign: "center", boxShadow: 3 }}>
                <CardContent>
                  <Typography variant="h3">{country.emoji}</Typography>
                  <Typography variant="h6">{country.name}</Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ListCountries;
