import { Card, CardContent, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

type CountryCardProps = {
  name: string;
  emoji: string;
  code: string;
};

export default function CountryCard({ name, emoji, code }: CountryCardProps) {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        minWidth: 200,
        textAlign: "center",
        cursor: "pointer",
        "&:hover": {
          boxShadow: 6,
        },
      }}
      onClick={() => navigate(`/country/${code}`)}
    >
      <CardContent>
        <Typography variant="h6" component="h3">
          {name}
        </Typography>
        <Typography variant="h4" sx={{ mt: 2 }}>
          {emoji}
        </Typography>
      </CardContent>
    </Card>
  );
}
