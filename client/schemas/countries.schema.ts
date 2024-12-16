import { gql } from '@apollo/client';

export const GET_COUNTRIES = gql`
  query Countries {
    countries {
      code
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
      emoji
      id
      name
      continent {
        id
        name
      }
    }
  }
`;

export const ADD_COUNTRY = gql`
  mutation AddCountry($data: NewCountryInput!) {
    addCountry(data: $data) {
      code
      emoji
      id
      name
      continent {
        id
        name
      }
    }
  }
`;