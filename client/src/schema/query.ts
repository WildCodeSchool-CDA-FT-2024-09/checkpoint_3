import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
      id
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      emoji
      id
      name
      continent {
        name
        id
      }
    }
  }
`;

export const GET_COUNTRY_BY_CODE = gql`
  query Country($code: String!) {
    country(code: $code) {
      code
      continent {
        name
        id
      }
      emoji
      id
      name
    }
  }
`;
