import React from "react";
import { Button, Container, Typography } from "@mui/material";

const App: React.FC = () => {
  return (
    <Container maxWidth="sm" style={{ textAlign: "center", marginTop: "2rem" }}>
      <Typography variant="h3" gutterBottom>
        Bienvenue sur MUI avec Vite
      </Typography>
      <Typography variant="body1" gutterBottom>
        Testons un bouton Material-UI :
      </Typography>
      <Button variant="contained" color="primary">
        Cliquez-moi
      </Button>
    </Container>
  );
};

export default App;
