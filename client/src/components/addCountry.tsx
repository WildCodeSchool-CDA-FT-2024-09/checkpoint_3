import { useAddCountryMutation } from "../generated/graphql-types";
import { useState } from "react";
import "./addCountry.css"

export default function AddCountry() {
  const [addCountry] = useAddCountryMutation();
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [emoji, setEmoji] = useState("");

  const handleAdd = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await addCountry({
        variables: {
          data: {
            name,
            code,
            emoji,
          },
        },
      });
      setName("")
      setCode("")
      setEmoji("")
  
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <section className="sectionAdd">
      <form className="containerAddForm" onSubmit={handleAdd}>
        <div className="fields"> 
        <label htmlFor="name"> Name :</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <div className="fields"> 
        <label htmlFor="emoji"> Emoji :</label>
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
        />
        </div>
        <div className="fields"> 
        <label htmlFor="code"> Code :</label>
        <input
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
        />
        </div>
        <button type="submit" className="buttonAdd"> Add </button>
      </form>
    </section>
  );
}
