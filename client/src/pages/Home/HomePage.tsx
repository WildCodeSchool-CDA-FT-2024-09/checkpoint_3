import CountriesList from "../../components/CountriesList/CountriesList";
import NewCountryForm from "../../components/NewCountryForm/NewCountryForm";

export default function HomePage() {
  return (
    <>
      <NewCountryForm />
      <CountriesList />
    </>
  );
}
