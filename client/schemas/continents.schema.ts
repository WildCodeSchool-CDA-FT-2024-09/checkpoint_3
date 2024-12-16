import { gql } from '@apollo/client';

export const GET_CONTINENTS = gql`
  query Continents {
    continents {
        id
        name
    }
  }
`;

export const ADD_CONTINENT = gql`
  mutation AddContinent($data: NewContinentInput!) {
    addContinent(data: $data) {
      id
      name
    }
  }
`;