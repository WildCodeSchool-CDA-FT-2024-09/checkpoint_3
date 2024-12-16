// src/components/CountryDetails.tsx
import React from "react";
import { Link, useParams } from "react-router-dom";
import {
  Container,
  Typography,
  Box,
  CircularProgress,
  Paper,
  Button,
} from "@mui/material";
import { useCountryQuery } from "../types/graphql-types";

const CountryDetails: React.FC = () => {
  const { code } = useParams<{ code: string }>();
  const countryCode = code || "";

  const { data, loading, error } = useCountryQuery({
    variables: { code: countryCode },
  });

  if (loading) return <CircularProgress />;
  if (error)
    return <Typography color="error">Error: {error.message}</Typography>;

  return (
    <>
      <Box>
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="primary">
            Retour à la liste des pays
          </Button>
        </Link>
      </Box>
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Paper
          sx={{ padding: 4, width: "100%", maxWidth: 600, borderRadius: 2 }}>
          {data?.country ? (
            <Box>
              <Typography variant="h4" gutterBottom align="center">
                {data.country.name}
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>Code:</strong> {data.country.code}
              </Typography>
              <Typography variant="h6" gutterBottom>
                <strong>Emoji:</strong> {data.country.emoji}
              </Typography>
              {data.country.continent && (
                <Typography variant="h6" gutterBottom>
                  <strong>Continent:</strong> {data.country.continent.name}
                </Typography>
              )}
            </Box>
          ) : (
            <Typography>No country found</Typography>
          )}
        </Paper>
      </Container>
    </>
  );
};

export default CountryDetails;
