import { AppBar, Toolbar, Typography } from "@mui/material";

export default function Navbar() {
  return (
    <AppBar
      position="static"
      sx={{
        width: "100%",
        marginBottom: 4,
      }}
    >
      <Toolbar
        sx={{
          flexDirection: "column",
          py: 2,
          width: "100%",
        }}
      >
        <Typography variant="h6" component="h1">
          Checkpoint : frontend
        </Typography>
        <Typography variant="h5" component="h2" sx={{ mt: 1 }}>
          Countries
        </Typography>
      </Toolbar>
    </AppBar>
  );
}
