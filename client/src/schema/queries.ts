import { gql } from "@apollo/client";

export const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;

export const GET_COUNTRY_DETAILS = gql`
query Country($code: String!) {
  country(code: $code) {
    id
    name
    code
    continent {
      name
    }
    emoji
  }
}
`;