import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
};

const key = process.env.REACT_APP_API;

export function useFetchList(setMovieData, list, type) {
  let BASE_URL = `https://api.themoviedb.org/3/${type}/${list}?api_key=${key}&language=en-US&page=1`;
  let cancelToken1 = axios.CancelToken.source();
  axios.get(BASE_URL, {
    cancelToken: cancelToken1.token,
  }).then(res => {
    setMovieData(res.data.results)
    
  }).catch(e => {
    if (axios.isCancel(e)) return;
  })
  
  return () => {
    cancelToken1.cancel();
  };
}