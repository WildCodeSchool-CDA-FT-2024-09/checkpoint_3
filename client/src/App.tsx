import "./index.css";

import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container mx-auto flex min-h-[95vh] flex-col items-center justify-between">
      <Outlet />
    </div>
  );
}

export default App;
