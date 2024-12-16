import React, { useState } from "react";

function Nav() {
  // Définir les états pour chaque champ
  const [name, setName] = useState("");
  const [emoji, setEmoji] = useState("");
  const [code, setCode] = useState("");

  // Gérer la soumission (pour le moment, sans logique de mutation)
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Nom:", name);
    console.log("Emoji:", emoji);
    console.log("Code:", code);
    // Tu peux ajouter la logique pour soumettre les données ici plus tard
  };

  return (
    <div className="nav-container">
      <h2>Créer un pays</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Nom du pays</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="emoji">Emoji du pays</label>
          <input
            type="text"
            id="emoji"
            value={emoji}
            onChange={(e) => setEmoji(e.target.value)}
            required
          />
        </div>

        <div className="input-group">
          <label htmlFor="code">Code du pays</label>
          <input
            type="text"
            id="code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            required
          />
        </div>

        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default Nav;
