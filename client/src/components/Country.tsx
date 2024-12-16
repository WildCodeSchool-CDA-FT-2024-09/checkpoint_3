import { ReactElement } from "react";
import { Country as CountryType } from "../generated/graphql-types.ts";

export default function Country({
  data,
}: {
  data: Partial<CountryType>;
}): ReactElement {
  return (
    <div className="flex flex-col w-fit h-fit p-3 border rounded justify-center items-center">
      <span>{data.name}</span>
      <p>{data.emoji}</p>
    </div>
  );
}
