import { gql } from "apollo-boost";

export const CHECK_IF_USERNAME_TAKEN = gql`
  query checkIfUsernameTaken($username: String!) {
    users(where: { username: { _eq: $username } }) {
      username
    }
  }
`;

export const GET_USER_EMAIL = gql`
  query getUserEmail($input: String!) {
    users(
      where: {
        _or: [{ username: { _eq: $input } }, { phone_number: { _eq: $input } }]
      }
    ) {
      email
    }
  }
`;

export const GET_EDIT_USER_PROFILE = gql`
  query getEditUserProfile($id: uuid!) {
    users_by_pk(id: $id) {
      id
      name
      username
      bio
      email
      profile_image
      website
      phone_number
    }
  }
`;


export const CHECK_IF_THERE_IS_MOVIE = gql`
  query checkIfThereIsMovie($movieId: String!) {
    comments(where: { movie_id: { _eq: $movieId } }) {
      movie_id
    }
  }
`;