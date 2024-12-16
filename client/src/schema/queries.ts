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

export const GET_COUNTRY_CODE = gql`
 query Country($code: String!) {
  country(code: $code) {
      code
      name
      emoji
    }
  }
`;
