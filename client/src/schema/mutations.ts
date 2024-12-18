import { gql } from "@apollo/client";

const ADD_COUNTRY = gql`
  mutation AddCountry($addCountryData: NewCountryInput!) {
    addCountry(data: $addCountryData) {
      id
      code
      emoji
      name
    }
  }
`;

export default { ADD_COUNTRY };
