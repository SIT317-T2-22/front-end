import { gql } from '@apollo/client';

const mutations = {
  signUp: gql`
    mutation Mutation($user: NewUser!) {
      addUser(user: $user) {
        _id
        name
        email
      }
    }
  `,
};

export default mutations;
