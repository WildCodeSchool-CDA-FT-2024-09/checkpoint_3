import * as React from "react";
import { useNavigate } from "react-router";
import "./CountryCard.css";

interface CountryCardProps {
  name: string;
  emoji: string;
  code: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, emoji, code }) => {
  const navigate = useNavigate();

  const handleDetailsClick = () => {
    navigate(`/country/${code}`);
  };

  return (
    <div className="country-card">
      <div className="country-card-content">
        <h4 className="country-name">{name}</h4>
        <div className="country-emoji">{emoji}</div>
        <button className="details-button" onClick={handleDetailsClick}>
          Détails
        </button>
      </div>
    </div>

  );
};

export default CountryCard;
