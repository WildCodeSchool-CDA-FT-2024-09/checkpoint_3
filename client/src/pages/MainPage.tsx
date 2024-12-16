import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import AddCountryForm from "../components/AddCountryForm";
import CountriesList from "../components/CountriesList";

export default function MainPage() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12 }}>
          <AddCountryForm />
        </Grid>
        <Grid size={{ xs: 12 }}>
          <CountriesList />
        </Grid>
      </Grid>
    </Box>
  );
}
