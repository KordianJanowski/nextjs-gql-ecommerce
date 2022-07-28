import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://nextjs-gql-ecommerce-backend.herokuapp.com/graphql',
  cache: new InMemoryCache(),
})

export default client
