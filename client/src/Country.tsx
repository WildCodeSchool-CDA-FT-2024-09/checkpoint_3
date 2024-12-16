import { useParams } from "react-router-dom";

function Country() {
  const urlparams = useParams();

  return (
    <>
      <h1>Hello Country: {urlparams.id}</h1>
    </>
  );
}

export default Country;
