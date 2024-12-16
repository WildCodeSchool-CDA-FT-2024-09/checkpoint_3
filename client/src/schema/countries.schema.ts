import { gql } from "@apollo/client";

export const ALL_COUNTRIES = gql`
  query Countries {
    countries {
      code
      continent {
        id
        name
      }
      emoji
      id
      name
    }
  }
`
