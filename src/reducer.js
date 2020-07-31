function searchReducer(state, action) {
  switch (action.type) {
    case "ADD_QUERY": {
      return {
        ...state,
        searchMovie: action.payload.searchMovie,
      };
    }
    default:
      return state;
  }
}

export default searchReducer;