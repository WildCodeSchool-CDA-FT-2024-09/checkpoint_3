import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import CountryCard from "./CountryCard";

export default function CountriesList() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          <CountryCard name="France" emoji="🇫🇷" />
        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
          <CountryCard name="China" emoji="🇨🇳" />
        </Grid>
      </Grid>
    </Box>
  );
}
