import { gql } from '@apollo/client';

export const TEST_QUERY = gql`
query Continents {
  continents {
    id
    name
  }
}

`;