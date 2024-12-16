import { useQuery } from "@apollo/client";
import { GET_COUNTRY } from "../schema/schema";
import { Box, Typography } from "@mui/material";
import { Link, useParams } from "react-router-dom";

function Country() {
  const { code } = useParams<string>();

  const { loading, error, data } = useQuery(GET_COUNTRY, {
    variables: {
      code: code,
    },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <Typography sx={{ fontSize: 80 }}>{data.country.emoji}</Typography>
      <h1>
        {data.country.name} [{data.country.code}]
      </h1>
      {data.country.continent && (
        <h2>Continent: {data.country.continent?.name}</h2>
      )}

      <Link to="/">[Back]</Link>
    </Box>
  );
}

export default Country;
