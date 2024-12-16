import { Card, CardContent, Typography } from "@mui/material";

type CountryCardProps = {
  name: string;
  emoji: string;
};

export default function CountryCard({ name, emoji }: CountryCardProps) {
  return (
    <Card sx={{ minWidth: 200, textAlign: "center" }}>
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
