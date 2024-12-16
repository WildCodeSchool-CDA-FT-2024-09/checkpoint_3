import { useParams } from "react-router-dom";
import { useCountryQuery } from "@/gql/graphql-types";
import { useAddCountryMutation } from "../gql/graphql-types";
import { useState } from "react";

export default function CountryPage() {
  const { code } = useParams<{ code: string }>() as { code: string };

  const { data, loading, error } = useCountryQuery({
    variables: { code },
  });

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
      <form className="flex flex-col w-full justify-center items-center gap-8 my-8">
        TEST
        <input
          type="text"
          placeholder="Name"
          onChange={(e) =>
            setFormDetails({ ...formDetails, name: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Emoji"
          onChange={(e) =>
            setFormDetails({ ...formDetails, emoji: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Code"
          onChange={(e) =>
            setFormDetails({ ...formDetails, code: e.target.value })
          }
        />
        <button onClick={handleSubmit}>Add to my countries</button>
      </form>

      <div className="flex flex-col w-full justify-center items-center gap-8 my-8">
        <p className="text-2xl">{data.country.emoji}</p>
        <h2 className=" text-black">Name: {data.country.name}</h2>
        <p className="text-lg">
          Continent: {data.country?.continent?.name || "n/a"}
        </p>
      </div>
    </>
  );
}
