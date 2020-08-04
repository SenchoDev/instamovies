import { gql } from "apollo-boost";

export const ME = gql`
  subscription me($userId: String) {
    users(where: { user_id: { _eq: $userId } }) {
      id
      user_id
      name
      username
      profile_image
      last_checked
    }
  }
`;

export const CHECK_IF_THERE_IS_MOVIE = gql`
  subscription checkIfThereIsMovie($movieId: String!) {
    comments(where: { movie_id: { _eq: $movieId } }) {
      movie_id
    }
  }
`;

export const GET_COMMENTS = gql`
  subscription getComments($movieId: String!) {
    comments_by_pk(movie_id: $movieId) {
      comment(order_by: { created_at: asc }) {
        created_at
        content
        id
        user {
          profile_image
          username
          id
        }
      }
    }
  }
`;
