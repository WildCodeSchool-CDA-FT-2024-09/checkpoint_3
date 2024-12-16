interface CountryCardProps {
  id: number;
  name: string;
  emoji: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, emoji }) => {
  return (
    <div className="card">
      <h2>{name}</h2>
      <span>{emoji}</span>
    </div>
  );
};

export default CountryCard;
