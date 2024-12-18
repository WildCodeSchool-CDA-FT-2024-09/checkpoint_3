import { gql } from "@apollo/client";

const GET_COUTNRY = gql`
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
`;

const GET_ONE_COUNTRY = gql`
  query OneCountry($code: String!) {
    country(code: $code) {
      continent {
        name
        id
      }
      emoji
      id
      name
      code
    }
  }
`;

export { GET_COUTNRY, GET_ONE_COUNTRY };
