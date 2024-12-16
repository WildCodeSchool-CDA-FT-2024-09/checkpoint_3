import { useCountriesQuery } from "@/gql/graphql-types";
import { Link } from "react-router-dom";
import { useAddCountryMutation } from "../gql/graphql-types";
import { useState } from "react";

export default function CountriesPage() {
  const { data, loading, error } = useCountriesQuery();
  const [addCountry] = useAddCountryMutation();
  const [formDetails, setFormDetails] = useState({
    name: "",
    emoji: "",
    code: "",
  });

  const handleSubmit = async () => {
    await addCountry({
      variables: {
        data: {
          name: formDetails.name,
          emoji: formDetails.emoji,
          code: formDetails.code,
        },
      },
    });
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  if (!data) return <p>No data</p>;
  return (
    <>
      <form
        className="flex flex-row w-full justify-center items-center gap-8 my-8"
        aria-label="Add Country Form"
      >
        <label htmlFor="name" className="sr-only">
          Name
        </label>
        <input
          type="text"
          id="name"
          className="px-2 py-1"
          placeholder="Name"
          aria-label="Country Name"
          onChange={(e) =>
            setFormDetails({ ...formDetails, name: e.target.value })
          }
        />
        <label htmlFor="emoji" className="sr-only">
          Emoji
        </label>
        <input
          type="text"
          id="emoji"
          className="px-2 py-1"
          placeholder="Emoji"
          aria-label="Country Emoji"
          onChange={(e) =>
            setFormDetails({ ...formDetails, emoji: e.target.value })
          }
        />
        <label htmlFor="code" className="sr-only">
          Code
        </label>
        <input
          type="text"
          id="code"
          className="px-2 py-1"
          placeholder="Code"
          aria-label="Country Code"
          onChange={(e) =>
            setFormDetails({ ...formDetails, code: e.target.value })
          }
        />
        <button
          className="border border-zinc-500 rounded px-2 py-1"
          onClick={handleSubmit}
          aria-label="Add Country"
        >
          Add to my countries
        </button>
      </form>
      <div className="flex flex-row w-full justify-center items-center gap-8 my-8">
        {data &&
          data.countries.map((country) => (
            <Link
              to={`/country/${country.code}`}
              key={country.code}
              className="border-zinc-500 p-4 text-center min-w-24 rounded border"
            >
              <h2 className="text-black">{country.name}</h2>
              <p>{country.emoji}</p>
            </Link>
          ))}
      </div>
    </>
  );
}
