import Grid from "@mui/material/Grid2";
import Box from "@mui/material/Box";
import CountryCard from "./CountryCard";
import { useCountriesQuery } from "../generated/graphql-types";

type Country = {
  name: string;
  emoji: string;
};

export default function CountriesList() {
  const { loading, error, data } = useCountriesQuery();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error !</h1>;

  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={2}>
        {data!.countries.map((country: Country) => (
          <Grid size={{ xs: 12, lg: 6 }}>
            <CountryCard name={country.name} emoji={country.emoji} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
