import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query GetAllCountries  {
    countries {
      emoji
      id
      name
      code
    }
  }
`;

export const GET_COUNTRIES = gql`
  query GetCountryByCode($code: String!) {
    country(code: $code) {
      code
      emoji
      id
      name
      continent {
        name
      }
    }
  }
`;