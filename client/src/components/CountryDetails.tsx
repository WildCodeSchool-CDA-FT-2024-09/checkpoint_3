// src/components/CountryDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Box, CircularProgress } from "@mui/material";
import { useCountryQuery } from "../types/graphql-types";

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>(); // récupère le code du pays à partir de l'URL

  const countryCode = code || "";

  const { data, loading, error } = useCountryQuery({
    variables: { code: countryCode },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <Container>
      {data?.country ? (
        <Box>
          <Typography variant="h4">{data.country.name}</Typography>
          <Typography variant="h6">Code: {data.country.code}</Typography>
          <Typography variant="h6">Emoji: {data.country.emoji}</Typography>
          {data.country.continent && (
            <Typography variant="h6">
              Continent: {data.country.continent.name}
            </Typography>
          )}
        </Box>
      ) : (
        <Typography>No country found</Typography>
      )}
    </Container>
  );
};

export default CountryDetails;
