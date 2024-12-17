import { Outlet } from "react-router-dom";
import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div>
      <h1 className="mb-10">Géographie</h1>
      <Link to="/addACountry" className="border rounded-lg p-4 shadow hover:shadow-lg transition duration-300 transform hover:-translate-y-1 text-center">
      <h2 className="text-3xl">Ajouter un Pays</h2>
      </Link>
      <Outlet />
    </div>
  );
}

export default App;
