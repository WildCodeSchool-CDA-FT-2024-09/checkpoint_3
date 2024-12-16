import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query GetAllCountries {
    countries {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const COUNTRY_BY_CODE = gql`
  query GetCountryByCode($code: String!) {
    country(code: $code) {
      id
      code
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;

export const ALL_CONTINENTS = gql`
  query GetAllContinents {
    continents {
      id
      name
      countries {
        id
        code
        name
        emoji
      }
    }
  }
`;
