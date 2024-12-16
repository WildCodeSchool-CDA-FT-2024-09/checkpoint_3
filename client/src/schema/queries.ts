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
      code
      emoji
      id
      name
    }
  }
`;