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
  onCountryClick?: (code: string) => void; // On récupère le code du pays
}

export default function CountryChoiceList({
  isLoading,
  error,
  countries,
  emptyMessage,
  onCountryClick,
}: CountryChoiceListProps) {
  if (isLoading) return <p>Chargement en cours...</p>;
  if (error) return <p>Erreur lors du chargement</p>;
  if (!countries.length) return <p>{emptyMessage}</p>;

  return (
    <ul className="flex flex-wrap gap-4 justify-center">
      {countries.map((country) => (
        <li
          key={country.id}
          className="flex flex-col items-center cursor-pointer w-[100px] h-[120px] p-2 rounded-[10px] bg-[rgba(24,121,205,0.6)] text-center font-bold transition-opacity duration-300 hover:opacity-100"
          onClick={
            onCountryClick ? () => onCountryClick(country.code) : undefined
          }
        >
          <div className="text-[16px]">{country.name}</div>
          <div className="emojie">{country.emoji}</div>
        </li>
      ))}
    </ul>
  );
}
