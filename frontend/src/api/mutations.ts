import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        id
      }
    }
  }
`
export const LOGIN = gql`
  mutation ($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        username
        id
      }
    }
  }
`

export const ADD_FAVORITE_PRODUCT = gql`
  mutation ($productID: ID!, $userID: ID!, $publishedAt: DateTime!) {
    createFavoriteProduct(
      data: {
        product: $productID,
        users_permissions_user: $userID,
        publishedAt: $publishedAt
      }
    ) {
      data {
        id
      }
    }
  }
`

export const REMOVE_FAVORITE_PRODUCT = gql`
  mutation ($favoriteProductID: ID!) {
    deleteFavoriteProduct( id: $favoriteProductID ) {
      data {
        id
      }
    }
  }
`