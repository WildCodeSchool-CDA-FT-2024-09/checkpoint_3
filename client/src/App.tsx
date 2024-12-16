import "./App.css";

import {
  useAddCountryMutation,
  useCountriesQuery,
} from "../generated/graphql-types";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function App() {
  const { data: countries, refetch } = useCountriesQuery();
  const navigate = useNavigate();

  const [addCountry] = useAddCountryMutation();

  const emptyFormInputs = {
    name: "",
    code: "",
    emoji: "",
  };

  const [formInputs, setFormInputs] = useState(emptyFormInputs);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      !formInputs.name.length ||
      !formInputs.emoji.length ||
      !formInputs.code.length
    ) {
      return;
    }
    try {
      await addCountry({
        variables: {
          data: {
            code: formInputs.code,
            name: formInputs.name,
            emoji: formInputs.emoji,
          },
        },
      });
      await refetch();
      setFormInputs(emptyFormInputs);
    } catch (err) {
      console.error(err);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormInputs((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <h1>Countries</h1>
      {countries?.countries.map((country) => (
        <button
          key={country.id}
          onClick={() => navigate(`/country/${country.code}`)}
        >
          {`${country.name} ${country.emoji}`}
        </button>
      ))}
      <h2>Add your own</h2>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          name="name"
          value={formInputs.name}
          placeholder="Country name"
        ></input>
        <input
          onChange={handleInputChange}
          name="emoji"
          value={formInputs.emoji}
          placeholder="flag emoji"
        ></input>
        <input
          onChange={handleInputChange}
          name="code"
          value={formInputs.code}
          placeholder="code"
        ></input>
        <button type="submit">Add new country</button>
      </form>
    </>
  );
}

export default App;
