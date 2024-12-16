import { Outlet } from "react-router-dom";
import "./Layout.css";

export default function Layout() {
  return (
    <>
      <header>
        <nav> linkA linkB linkC</nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
