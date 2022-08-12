import { gql } from "@apollo/client"

export const GET_CATEGORIES = gql`
  query {
    categories (sort: "id:ASC") {
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

export const GET_CATEGORIES_SLUG = gql`
  query {
    categories (sort: "id:ASC") {
      data {
        attributes {
          slug
        }
      }
    }
  }
`


export const GET_CATEGORY_BY_SLUG = gql`
  query ($slug: String!) {
    categories (filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          emoji
          slug
        }
      }
    }
  }
`

export const GET_PRODUCTS_SLUG = gql`
  query {
    products {
      data {
        attributes {
          slug
        }
      }
    }
  }
`

export const GET_PRODUCT_BY_SLUG = gql`
  query ($slug: String!) {
    products (filters: { slug: { eq: $slug } }) {
      data {
        attributes {
          title
          price
          image
          brand
          slug
          description
        }
      }
    }
  }
`

export const GET_PRODUCTS_OF_CATEGORY = gql`
  query ($categorySlug: String!) {
    categories (filters: { slug: { eq: $categorySlug } }) {
      data {
        attributes {
          title
          products {
            data {
              attributes {
                title
                price
                image
                brand
                slug
                description
              }
            }
          }
        }
      }
    }
  }
`

export const GET_SIX_RANDOM_PRODUCTS = gql`
  query {
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
