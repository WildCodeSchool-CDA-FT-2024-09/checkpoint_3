import React from "react";
import { Outlet } from "react-router-dom";
const App: React.FC = () => {
  return (
    <>
      <header>
        <h1>Mes voyages</h1>
      </header>
      <Outlet />
    </>
  );
};

export default App;
