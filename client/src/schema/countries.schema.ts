import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query Countries {
    countries {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
export const COUNTRY_BY_CODE = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`;
