import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function CountriesList() {
  return (
    <>
      <h2>Countries</h2>
      <Card sx={{ width: 200, textAlign: "center" }}>
        <CardContent>
          <Typography
            gutterBottom
            sx={{ color: "text.secondary", fontSize: 14 }}
          >
            Italy
          </Typography>
          <Link to={`/country/1`}>Lien</Link>
        </CardContent>
      </Card>
    </>
  );
}

export default CountriesList;
