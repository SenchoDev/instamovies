import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "../reducer";

//const cors = `https://cors-anywhere.herokuapp.com`;
const key = process.env.REACT_APP_API;

export function useSearchMovies(search, page) {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    loading: true,
  });
  useEffect(() => {
    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.FETCH_START });
    let BASE_URL = `https://api.themoviedb.org/3/search/multi?api_key=${key}&language=en-US&page=${page}&include_adult=false&query=${search}`;
    
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
    }).then(res => {
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data: res.data.results} })
    }).catch(e => {
      if (axios.isCancel(e)) return
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: { error: e } }) 
    })
    
    return () => {
      cancelToken1.cancel();
    };
  }, [search, page]);

  return state;
}

export function fetchIndividualMovie(setMovieInfo, movieId, tv) {
  let BASE_URL = `https://api.themoviedb.org/3/${tv ? 'tv' : 'movie'}/${movieId}?api_key=${key}&append_to_response=videos`;
  let BASE_URL2 = `https://api.themoviedb.org/3/${tv ? 'tv' : 'movie'}/${movieId}/credits?api_key=${key}`
  
  
  const requestMovie = axios.get(BASE_URL);
  const requestCredits = axios.get(BASE_URL2);

  let cancelToken1 = axios.CancelToken.source();
  axios.all([ requestMovie,  requestCredits], {
    cancelToken: cancelToken1.token,
  }).then(axios.spread((...responses) => {
    const res1 = responses[0];
    const res2 = responses[1];
    setMovieInfo({...res1.data, ...res2.data})
  })).catch(e => {
    if (axios.isCancel(e)) return;
  })
  
  return () => {
    cancelToken1.cancel();
  };
}


export function fetchRecommendations(setRecommendations, movieId) {
  let BASE_URL = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${key}&language=en-US&page=1`;
  
  let cancelToken1 = axios.CancelToken.source();
  axios.get(BASE_URL, {
    cancelToken: cancelToken1.token,
  }).then(res => {
    setRecommendations(res.data.results)
  }).catch(e => {
    if (axios.isCancel(e)) return;
  })
  
  return () => {
    cancelToken1.cancel();
  };
}
