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


export { GET_COUTNRY}