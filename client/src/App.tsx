import "./index.css";
import Nav from "./components/Nav";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="flex-col items-center justify-between bg-gray-200 min-h-screen">
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
