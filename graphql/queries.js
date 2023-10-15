import { gql } from '@apollo/client';


export const GET_USERS = gql`
  query GetUsers {
    users {
      id
      firstName
      username
      # Add more fields as needed
    }
  }
`;