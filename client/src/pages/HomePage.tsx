import { Typography, Box } from "@mui/material";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import CountryCard from "../components/CountryCard";
import { Country } from "../types/country";

export default function HomePage() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        gap: 3,
        justifyContent: "center",
        p: 3,
      }}
    >
      {data?.countries.map((country: Country) => (
        <CountryCard
          key={country.code}
          name={country.name}
          emoji={country.emoji}
        />
      ))}
    </Box>
  );
}
