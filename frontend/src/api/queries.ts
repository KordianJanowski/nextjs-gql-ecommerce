import { gql } from "@apollo/client"

export const GET_MAIN_CATEGORIES = gql`
  query GET_MAIN_CATEGORIES {
    categories {
      data {
        attributes {
          title
          emoji,
          slug
        }
      }
    }
  }
`