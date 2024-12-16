import "./index.css";

const CountryButton = ({ name, emoji, action }) => {
  return (
    <button className="country-button" onClick={action}>
      <p>
        {name} <span className="emoji">{emoji}</span>
      </p>
    </button>
  );
};

export default CountryButton;
