import { gql } from "@apollo/client";

export const GET_ALL_MESSAGES = gql`
  query Query {
    countries {
      id
      name
      emoji
      continent {
        id
        name
      }
    }
  }
`;
