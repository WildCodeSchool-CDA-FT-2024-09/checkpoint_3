import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

type CountryProps = {
  name: string;
  emoji: string;
};

export default function CountryCard({ name, emoji }: CountryProps) {
  return (
    <Card>
      <CardContent>
        <Typography>{name}</Typography>
        <Typography>{emoji}</Typography>
      </CardContent>
    </Card>
  );
}
