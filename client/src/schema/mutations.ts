import { gql } from "@apollo/client";

export const CREATE_COUNTRY = gql` 
mutation addCountry($data: NewCountryInput!) {
  addCountry(data: $data) {
    name
    emoji
    code
  }
}
`