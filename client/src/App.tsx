import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import AddCountryPage from "./pages/AddCountryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Box sx={{ width: "100%", minHeight: "100vh" }}>
        <Navbar />
        <Box sx={{ p: 4 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/country/:code" element={<CountryDetailsPage />} />
            <Route path="/add" element={<AddCountryPage />} />
          </Routes>
        </Box>
      </Box>
    </Router>
  );
}

export default App;
