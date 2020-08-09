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
      followers {
        user {
          id
          user_id
        }
      }
      following {
        user {
          id
          user_id
        }
      }
      notifications(order_by: { created_at: desc }) {
        id
        created_at
        user {
          id
          username
          profile_image
        }
      }
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
      favorite_movies {
        user_id
      }
      watchlist_movies {
        user_id
      }
    }
  }
`;
