import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_TRAILERS_SUCCESS: "FETCH_TRAILERS_SUCCESS",
};
const cors = `https://cors-anywhere.herokuapp.com/`;
const key = process.env.REACT_APP_API;

const BASE_URL = `${cors}https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&page=1&include_adult=false&query=avengers`;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_MOVIES_START:
      return { loading: true, data: {} };
    case ACTIONS.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: action.payload.data
      };
    case ACTIONS.FETCH_MOVIES_FAILURE:
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
export function useSearchMovies() {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    loading: true,
  });
  useEffect(() => {

    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.FETCH_MOVIES_START });

    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
    }).then(res => {
      dispatch({ type: ACTIONS.FETCH_MOVIES_SUCCESS, payload: { data: res.data.results} })
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.ERROR, payload: { error: e } }) 
    })

    return () => {
      cancelToken1.cancel();
    };
  }, []);

  return state;
}
// const getMovies = async searchTerm => {
//   try {
//     const request = await fetch(`${MOVIE_API_BASE_URL}&s=${searchTerm}`);
//     const json = await request.json();
//     return json;
//   } catch (error) {
//     console.error('API:getMovies', error);
//   }
// };

// const getMovie = async id => {
//   try {
//     const request = await fetch(`${MOVIE_API_BASE_URL}&i=${id}`);
//     const json = await request.json();
//     return json;
//   } catch (error) {
//     console.error('API:getMovie', error);
//   }
// };

// export { getMovies, getMovie };