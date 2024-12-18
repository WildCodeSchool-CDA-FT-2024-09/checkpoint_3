import { useState } from "react";

const initialValue = {
  name: "",
  code: "",
  emoji: "",
};

type Country = {
  name: string;
  code: string;
  emoji: string;
};

function AddCountryForm() {
  const [country, setCountry] = useState<Country>(initialValue);

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const addCountry = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.info(country);
  };

  return (
    <form className="row" onSubmit={addCountry}>
      <h3 className="text-center">AddCountryForm</h3>
      <label htmlFor="">
        name
        <input
          type="text"
          name="name"
          required
          value={country.name}
          onChange={handleCountry}
        />
      </label>
      <label htmlFor="">
        emoji
        <input
          type="text"
          name="emoji"
          required
          value={country.emoji}
          onChange={handleCountry}
        />
      </label>
      <label htmlFor="">
        code
        <input
          type="text"
          name="code"
          required
          value={country.code}
          onChange={handleCountry}
        />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddCountryForm;
