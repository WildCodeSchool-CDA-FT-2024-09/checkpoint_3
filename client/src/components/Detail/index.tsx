import "./index.css";

const Detail = ({ title, value }) => {
  return (
    <li className="detail">
      <h3>{title} :</h3>
      <p>{value}</p>
    </li>
  );
};

export default Detail;
