import { gql } from '@apollo/client';

export const GET_ALL_COUNTRIES = gql`
  query Countries {
    countries {
      emoji
      id
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
  query Country($code: String!) {
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