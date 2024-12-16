import { Link } from "react-router-dom";

interface CountryCardProps {
  code: string;
  name: string;
  emoji: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ code, name, emoji }) => {
  return (
    <div className="border-2 border-black p-4 rounded-lg flex flex-col items-center">
      <Link to={`/country/${code}`}>
        <h2 className="text-lg font-semibold">{name}</h2>
        <span className="text-2xl">{emoji}</span>
      </Link>
    </div>
  );
};

export default CountryCard;
