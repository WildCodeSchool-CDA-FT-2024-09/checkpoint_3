import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "@mui/material";
import HomePage from "./pages/HomePage";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import AddCountryPage from "./pages/AddCountryPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/country/:id" element={<CountryDetailsPage />} />
          <Route path="/add" element={<AddCountryPage />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
