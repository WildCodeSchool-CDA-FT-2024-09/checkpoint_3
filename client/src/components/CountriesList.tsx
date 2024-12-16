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
        Countries List
      </Typography>
      <Grid2 container spacing={2}>
        {data?.countries.map((country) => (
          <Grid2 key={country.id}>
            <Box
              sx={{
                border: "1px solid #ccc",
                padding: 2,
                borderRadius: 2,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Typography>{country.name}</Typography>
              <Typography>{country.emoji}</Typography>
              <Link to={`/country/${country.code}`} style={{ textDecoration: "none" }}>
                <Typography color="primary">View Details</Typography>
              </Link>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Container>
  );
};

export default CountriesList;
