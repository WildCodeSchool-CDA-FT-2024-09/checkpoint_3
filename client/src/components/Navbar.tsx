import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <AppBar position="static" sx={{ mb: 4 }}>
      <Toolbar>
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
        >
          Countries App
        </Typography>
        <Button color="inherit" component={Link} to="/add">
          Add Country
        </Button>
      </Toolbar>
    </AppBar>
  );
}
