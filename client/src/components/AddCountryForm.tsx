import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function CountriesList() {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, lg: 3 }}>
          <TextField label="Name" variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <TextField label="Emoji" variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <TextField label="Code" variant="outlined" />
        </Grid>
        <Grid size={{ xs: 12, lg: 3 }}>
          <Button variant="contained">Add</Button>
        </Grid>
      </Grid>
    </Box>
  );
}
