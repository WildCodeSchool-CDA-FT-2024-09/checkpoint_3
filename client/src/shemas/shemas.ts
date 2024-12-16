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

export const ADDCOUNTRY = gql`
  mutation AddNewCountry($name: String!, $emoji: String!, $code: String!) {
    addCountry(data: { name: $name, emoji: $emoji, code: $code }) {
      name
      emoji
      code
    }
  }
`;
