import { useNavigate } from "react-router-dom"; // Importer le hook useNavigate
import "./listingPays.css";

type Country = {
  emoji: string;
  code: string;
  name: string;
  id: string | number;
};

interface CountryChoiceListProps {
  isLoading: boolean;
  error: any;
  countries: Country[];
  emptyMessage: string;
  onCountryClick?: (code: string) => void;
}

export default function CountryChoiceList({
  isLoading,
  error,
  countries,
  emptyMessage,
  onCountryClick,
}: CountryChoiceListProps) {
  const navigate = useNavigate();

  if (isLoading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur lors du chargement</p>;
  if (!countries.length) return <p>{emptyMessage}</p>;

  const handleCountryClick = (code: string) => {
    navigate(`/new?countryCode=${code}`);

    if (onCountryClick) {
      onCountryClick(code);
    }
  };

  return (
    <ul>
      {countries.map((country) => (
        <li key={country.id} onClick={() => handleCountryClick(country.code)}>
          <div>{country.name}</div>
          <div className="emojie">{country.emoji}</div>
        </li>
      ))}
    </ul>
  );
}
