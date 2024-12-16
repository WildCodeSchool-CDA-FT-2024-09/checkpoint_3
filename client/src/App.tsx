import { Outlet } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <>
      <div className="header">Cheackpoint : frontEnd</div>

      <Outlet />
    </>
  );
}

export default App;
