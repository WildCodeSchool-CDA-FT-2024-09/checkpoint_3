import { gql } from "@apollo/client";

const ADD_COUNTRY = gql`
  mutation AddCountry($addCountryData: NewCountryInput!) {
    addCountry(data: $addCountryData) {
      id
    }
  }
`;

export default { ADD_COUNTRY };
