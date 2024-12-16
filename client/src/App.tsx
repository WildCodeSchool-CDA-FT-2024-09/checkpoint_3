import "./App.css";
import Header from "./components/Header";
import { Outlet } from "react-router";

export default function App() {
  return (
    <div>
      <Header />
      <div style={{ paddingTop: "64px" }}>
        <Outlet />
      </div>
    </div>
  );
}
