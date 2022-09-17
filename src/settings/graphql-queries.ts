import { gql } from '@apollo/client';

const queries = {
  signIn: gql`
    query Query($email: String!, $password: String!) {
      signIn(email: $email, password: $password)
    }
  `
};

export default queries;
