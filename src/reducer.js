export const ACTIONS = {
  FETCH_START: "FETCH_START",
  FETCH_MOVIE_SUCCESS: "FETCH_MOVIE_SUCCESS",
  FETCH_SEARCH_SUCCESS: "FETCH_SEARCH_SUCCESS",
  FETCH_FAILURE: "FETCH_FAILURE",
};

export function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_START:
      return { loading: true, data: {} };
    case ACTIONS.FETCH_MOVIE_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          popularMovies: action.payload.popularMovies,
          popularTvShows: action.payload.popularTvShows,
          upcoming: action.payload.upcoming,
        },
      };
    case ACTIONS.FETCH_SEARCH_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data,
      };
    case ACTIONS.FETCH_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        data: {},
      };
    default:
      return state;
  }
}
