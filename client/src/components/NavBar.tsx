import { AppBar, Box, Container, Toolbar, Typography } from "@mui/material";
import { Link as MUILink } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const pages = [
  { content: "Liste des Pays", to: "/countries" },
  { content: "Pays", to: "/detailCountries" },
  { content: "Ajouter un Pays", to: "/addCountries" },
];

export default function NavBar() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#F7146B" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            component="a"
            sx={{ fontWeight: 700, color: "black", textDecoration: "none" }}
          >
            Checkpoint:Frontend
          </Typography>
          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "right" }}>
            {pages.map((page) => (
              <MUILink
                key={page.content}
                component={RouterLink}
                to={page.to}
                sx={{
                  my: 2,
                  color: "black",
                  marginRight: 3,
                  textTransform: "uppercase",
                  textDecoration: "none",
                  fontFamily: "'Roboto', sans-serif",
                }}
              >
                {page.content}
              </MUILink>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
