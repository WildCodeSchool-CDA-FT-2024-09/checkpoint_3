import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router";

interface CountryCardProps {
  name: string;
  emoji: string;
  id: number;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, emoji, id }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/country/${id}`);
  };

  return (
    <Box sx={{ minWidth: 150 }}>
      <Card
        variant="outlined"
        sx={{
          width: 150,
          height: 150,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CardContent sx={{ alignItems: "center" }}>
          <Typography variant="h4">{name}</Typography>
          <Box sx={{ mr: 2 }}>
            <Typography variant="h3">{emoji}</Typography>
          </Box>
          <Button
            variant="outlined"
            size="small"
            sx={{ mt: 1 }}
            onClick={handleDetailsClick}
          >
            Détails
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default CountryCard;
