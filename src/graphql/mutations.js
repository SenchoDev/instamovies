import { gql } from "apollo-boost";

export const CREATE_USER = gql`
  mutation createUsers(
    $userId: String!
    $name: String!
    $username: String!
    $email: String!
    $bio: String!
    $website: String!
    $profileImage: String!
    $phoneNumber: String!
  ) {
    insert_users(
      objects: {
        user_id: $userId
        username: $username
        website: $website
        profile_image: $profileImage
        phone_number: $phoneNumber
        name: $name
        email: $email
        bio: $bio
      }
    ) {
      affected_rows
    }
  }
`;

export const EDIT_USER = gql`
  mutation editUser(
    $id: uuid!
    $name: String!
    $username: String!
    $website: String!
    $bio: String!
    $email: String!
    $phoneNumber: String!
  ) {
    update_users(
      where: { id: { _eq: $id } }
      _set: {
        name: $name
        username: $username
        website: $website
        bio: $bio
        email: $email
        phone_number: $phoneNumber
      }
    ) {
      affected_rows
    }
  }
`;

export const EDIT_USER_AVATAR = gql`
  mutation editUserAvatar($id: uuid!, $profileImage: String!) {
    update_users(
      where: { id: { _eq: $id } }
      _set: { profile_image: $profileImage }
    ) {
      affected_rows
    }
  }
`;

export const ADD_COMMENTS = gql`
  mutation addComments($movieId: String!) {
    insert_comments(objects: { movie_id: $movieId }) {
      affected_rows
    }
  }
`;

export const CREATE_COMMENT = gql`
  mutation createComment($movieId: String!, $userId: uuid!, $content: String!) {
    insert_comment(
      objects: { comment_id: $movieId, user_id: $userId, content: $content }
    ) {
      affected_rows
    }
  }
`;

export const ADD_TO_FAVORITES = gql`
  mutation addToFavorites(
    $userId: uuid!
    $movieId: String!
    $movieImage: String!
  ) {
    insert_favorite_movies(
      objects: {
        user_id: $userId
        movie_id: $movieId
        movie_image: $movieImage
      }
    ) {
      affected_rows
    }
  }
`;

export const REMOVE_FROM_FAVORITES = gql`
  mutation removeFromFavorites($movieId: String!, $userId: uuid!) {
    delete_favorite_movies(
      where: { movie_id: { _eq: $movieId }, user_id: { _eq: $userId } }
    ) {
      affected_rows
    }
  }
`;


export const ADD_TO_WATCHLIST = gql`
  mutation addToWatchlist(
    $userId: uuid!
    $movieId: String!
    $movieImage: String!
  ) {
    insert_watchlist_movies(
      objects: {
        user_id: $userId
        movie_id: $movieId
        movie_image: $movieImage
      }
    ) {
      affected_rows
    }
  }
`;

export const REMOVE_FROM_WATCHLIST = gql`
  mutation removeFromWatchlist($movieId: String!, $userId: uuid!) {
    delete_watchlist_movies(
      where: { movie_id: { _eq: $movieId }, user_id: { _eq: $userId } }
    ) {
      affected_rows
    }
  }
`;
