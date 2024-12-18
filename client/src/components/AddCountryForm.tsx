import { useState } from "react";
import {
  NewCountryInput,
  useAddCountryMutation,
} from "../generated/graphql-types";

const initialValue = {
  name: "",
  code: "",
  emoji: "",
};

type Props = {
  refetch: () => void;
};

type Country = Omit<NewCountryInput, "continent">;

function AddCountryForm({ refetch }: Props) {
  const [country, setCountry] = useState<Country>(initialValue);
  const [addCountryMutation] = useAddCountryMutation();

  const handleCountry = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCountry((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const addCountry = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await addCountryMutation({
        variables: {
          addCountryData: country,
        },
      });
      refetch();
    } catch (error) {
      console.error(error);
    }
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
