import { useAddCountryMutation } from "../types/graphql";
import { useState } from "react";

function AddACountry() {
  const [addCountry] = useAddCountryMutation();

  const [code, setCode] = useState("");
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await addCountry({
        variables: {
          data: {
            code,
            name,
            emoji,
          },
        },
      });

      console.log(data);
      setCode("");
      setName("");
      setEmoji("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add a Country</h1>
      <form>
        <div>
          <label htmlFor="code">Code</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="emoji">Emoji</label>
          <input
            type="text"
            id="emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
          />
        </div>
        <button onClick={handleSubmit}>Add Country</button>
      </form>
    </div>
  );
}

export default AddACountry;
