// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { GET_COUNTRY_DETAILS } from "../schema/queries";
// import './Detail.css';

// interface RouteParams {
//   countryId: string;
// }

// export default function Detail() {
//   const { countryId } = useParams<RouteParams>(); 

//   const { loading, error, data } = useQuery(GET_COUNTRY_DETAILS, {
//     variables:  { code: countryId }, 
//   });

//   if (loading) return <div className="loader">Chargement...</div>;
//   if (error) return <p>Error: {error.message}</p>;

//   const { name, code, emoji, continent } = data.country;

//   return (
// <div className="detail-container">
//       <h2>Détails du pays</h2>
//       <div className="country-details">
//         <h3>
//           {name} ({code})
//         </h3>
//         <p><strong>Code:</strong> {code}</p>
//         <p><strong>Emoji:</strong> {emoji}</p>
//         <p><strong>Continent:</strong> {continent.name}</p>
//         <p><strong>Emoji:</strong> {emoji}</p>
//       </div>
//     </div>
//   );
// }
