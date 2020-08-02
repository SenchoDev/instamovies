import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_TRAILERS_SUCCESS: "FETCH_TRAILERS_SUCCESS",
  UPDATE_HAS_NEXT_PAGE: 'UPDATE_HAS_NEXT_PAGE'
};
const cors = `https://cors-anywhere.herokuapp.com/`;
const key = process.env.REACT_APP_API;



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
export function useSearchMovies(search, page) {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    loading: true,
  });
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.FETCH_MOVIES_START });
    let BASE_URL = `${cors}https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=${page}&include_adult=false&query=${search}`;
    
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
  }, [search, page]);

  return state;
}

export function fetchIndividualMovie(setMovieInfo, movieId) {
  let BASE_URL = `${cors}https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&append_to_response=videos`;
  
  let cancelToken1 = axios.CancelToken.source();
  axios.get(BASE_URL, {
    cancelToken: cancelToken1.token,
  }).then(res => {
    setMovieInfo(res.data)
  }).catch(e => {
    if (axios.isCancel(e)) return;
  })
  
  return () => {
    cancelToken1.cancel();
  };
}