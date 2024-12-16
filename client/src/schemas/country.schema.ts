import { gql } from "@apollo/client";

export const GET_CONTINENTS_AND_COUNTRIES = gql`
  query ContinentsAndCountries {
    continents {
      name
      id
    }
    countries {
      code
      id
      name
    }
  }
`;
export const GET_COUNTRY = gql`
  query Country($countryCode2: String!) {
    country(code: $countryCode2) {
      code
      continent {
        name
      }
      emoji
      id
      name
    }
  }
`;
