import { Outlet } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./components/Navbar";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto, sans-serif",
    h1: {
      fontSize: "1.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "1.25rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#F7146B",
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      contrastText: "#F5F5F5",
    },
    secondary: {
      main: "#D2DEF1", // Light blue
      contrastText: "#00235B",
    },
    success: {
      main: "#6EBF8B", // Green
      contrastText: "#FFFFFF",
    },
    error: {
      main: "#E21818", // Red
      contrastText: "#FFFFFF",
    },
  },
});

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Outlet />
      </ThemeProvider>
    </>
  );
}

export default App;
