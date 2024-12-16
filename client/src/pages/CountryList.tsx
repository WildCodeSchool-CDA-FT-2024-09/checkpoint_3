import { useEffect, useState } from "react"
import { Country, useCountriesQuery } from "../generated/graphql-types";
import { Box } from "@mui/material";
import CountryCard from "../components/CountryCard";


export default function CountryList() {
  const [countries, setCountries] = useState<Country[]>([]);

  const { loading, error, data } = useCountriesQuery();

  useEffect(() => {
    if (data && data.countries) {
      setCountries(data.countries)
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <Box sx={{
      display: "flex",
      justifyContent: "center",
      gap: "50px"
    }}>
      {countries.map((country) => (
        <CountryCard
          key={country.id}
          id={country.id}
          name={country.name}
          emoji={country.emoji}
          code={country.code}
        />
      ))}
    </Box>
  )
}
