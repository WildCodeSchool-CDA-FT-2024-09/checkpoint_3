import { useNavigate } from "react-router-dom";

function NotFound({ text }) {
  const navigate = useNavigate();

  const returnToMenu = () => {
    navigate("/");
  };

  return (
    <>
      <h1>{text}</h1>
      <button onClick={returnToMenu}>Return to country selection</button>
    </>
  );
}

export default NotFound;
