import { gql } from '@apollo/client'

export const REGISTER = gql`
  mutation ($username: String!, $email: String!, $password: String!) {
    register(
      input: { username: $username, email: $email, password: $password }
    ) {
      jwt
      user {
        username
        email
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
      }
    }
  }
`
