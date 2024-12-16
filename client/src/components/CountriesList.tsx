import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../schema/schema";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

type countryType = {
  id: number;
  name: string;
  emoji: string;
  code: string;
};

function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>🥁 Loading...</p>;
  if (error) return <p>☠️ Error: {error.message}</p>;

  return (
    <>
      <h2>Countries</h2>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 2,
          justifyContent: "center",
          padding: 2,
        }}
      >
        {data.countries.map((country: countryType) => (
          <Card
            key={country.id}
            sx={{
              width: 150,
              maxWidth: "100%",
              textAlign: "center",
              flexGrow: 0,
              flexShrink: 1,
            }}
          >
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: "text.secondary", fontSize: 14 }}
              >
                {country.name}
              </Typography>
              <Typography sx={{ fontSize: 42 }}>
                <Link to={`/country/${country.code}`}>{country.emoji}</Link>
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </>
  );
}

export default CountriesList;
