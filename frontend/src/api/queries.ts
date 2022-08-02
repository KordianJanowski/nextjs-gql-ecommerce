import { gql } from "@apollo/client"

export const GET_MAIN_CATEGORIES = gql`
  query GET_MAIN_CATEGORIES {
    categories {
      data {
        attributes {
          title
          emoji
          slug
          description
        }
      }
    }
  }
`

export const GET_SIX_RANDOM_PRODUCTS = gql`
  query GET_SIX_RANDOM_PRODUCTS {
    products(pagination: { limit: 6 }) {
      data {
        attributes {
          title
          price
          image
        }
      }
    }
  }
`