import { gql } from "@apollo/client";

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      id
      name
      emoji
      code
      continent {
        id
        name
      }
    }
  }
`;

export const GET_COUNTRY = gql`
  query Country($code: String!) {
    country(code: $code) {
      id
      name
      code
      emoji
      continent {
        id
        name
      }
    }
  }
`;
