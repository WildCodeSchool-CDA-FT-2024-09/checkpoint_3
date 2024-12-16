interface Country {
  name: string
  emoji: string
}

export default function CountryCard({name, emoji} : Country) {


  return <p> {name} {emoji} </p>;
}
