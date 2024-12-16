import React, { useState } from "react";
import { useAddCountryMutation } from "../../generated/graphql-types";
import "./Nav.css";

function CreateCountryForm() {
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");
  const [addCountry, { loading, error }] = useAddCountryMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const countryData = {
      name,
      emoji,
      code,
    };

    try {
      const response = await addCountry({
        variables: { data: countryData },
      });

      console.log("Pays ajouté avec succès:", response.data?.addCountry);
    } catch (err) {
      console.error("Erreur lors de l'ajout du pays:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="inputeNav"
        type="text"
        placeholder="Nom du pays"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="inputeNav"
        type="text"
        placeholder="Emoji du pays"
        value={emoji}
        onChange={(e) => setEmoji(e.target.value)}
        required
      />
      <input
        className="inputeNav"
        type="text"
        placeholder="Code du pays"
        value={code}
        onChange={(e) => setCode(e.target.value)}
        required
      />
      <button type="submit" disabled={loading}>
        {loading ? "En cours..." : "Créer le pays"}
      </button>
      {error && <p>Erreur: {error.message}</p>}
    </form>
  );
}

export default CreateCountryForm;
