import { Link } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Stack } from "@mui/material";

const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

type countryType = {
  id: number;
  name: string;
  emoji: string;
  code: string;
};

function CountriesList() {
  const { loading, error, data } = useQuery(GET_COUNTRIES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <h2>Countries</h2>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        <Stack direction="row" spacing={2}>
          {data.countries.map((country: countryType) => (
            <Card key={country.id} sx={{ width: 200, textAlign: "center" }}>
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
        </Stack>
      </Box>
    </>
  );
}

export default CountriesList;
