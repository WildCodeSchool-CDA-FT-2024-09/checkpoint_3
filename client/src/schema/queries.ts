import { gql } from "@apollo/client";

export const GET_COUNTRY = gql`
  query Countries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;
