import React from "react";
import { Container, Grid2, Box } from "@mui/material";
import AddCountryForm from "../components/AddCountryForm";
import CountriesList from "../components/CountriesList";

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ paddingTop: 4, paddingBottom: 4, textAlign: "center" }}>
        <Grid2 container spacing={4} direction="column" alignItems="center">
          <Grid2 size={{ xs: 12, sm: 8, md: 6 }}>
            <AddCountryForm />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 10, md: 8 }}>
            <CountriesList />
          </Grid2>
        </Grid2>
      </Box>
    </Container>
  );
};

export default Home;
