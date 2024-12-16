import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export default function Navbar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h1" component="div" sx={{ flexGrow: 1 }}>
            Checkpoint: frontend - countries
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </>
  );
}
