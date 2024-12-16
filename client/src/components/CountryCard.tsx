import "./Country.css";

interface Country {
  name: string;
  emoji: string;
}

export default function CountryCard({ name, emoji }: Country) {
  return (
    <section className="CardCountry">
      <div> {name}</div>
      <div> {emoji}</div>
    </section>
  );
}
