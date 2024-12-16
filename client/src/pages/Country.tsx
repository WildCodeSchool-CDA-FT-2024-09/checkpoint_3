import { Link, Outlet } from "react-router";

export default function Country() {
  const countries = [
    { id: 1, name: "France" },
    { id: 2, name: "Germany" },
    { id: 3, name: "Italy" },
  ];

  return (
    <div>
      <h2>Country Page</h2>
      <ul>
        {countries.map((country) => (
          <li key={country.id}>
            <Link to={`${country.id}/detail`}>{country.name}</Link>
          </li>
        ))}
      </ul>
      <Outlet />
    </div>
  );
}
