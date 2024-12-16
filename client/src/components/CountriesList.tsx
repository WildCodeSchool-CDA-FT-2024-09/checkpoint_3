import React from "react";
import { Container, Grid2, Typography, Box } from "@mui/material";
import { useCountriesQuery } from "../types/graphql-types";
import { Link } from "react-router-dom";

const CountriesList: React.FC = () => {
  const { data, loading, error } = useCountriesQuery();

  if (loading) return <Typography>Loading...</Typography>;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Liste des Pays
      </Typography>
      <Grid2 container spacing={2}>
        {data?.countries.map((country) => (
          <Grid2 size={{ xs: 12, sm: 6, md: 4 }} key={country.id}>
            <Box
              sx={{
                border: "1px solid #ccc",
                padding: 2,
                borderRadius: 2,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "flex-start",
                height: "100%",
              }}
            >
              <Typography variant="h6">{country.name}</Typography>
              <Typography variant="body1">{country.emoji}</Typography>
              <Link
                to={`/country/${country.code}`}
                style={{ textDecoration: "none" }}
              >
                <Typography color="primary" variant="body1">
                  Détails
                </Typography>
              </Link>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CountriesList;
