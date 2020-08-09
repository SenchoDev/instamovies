import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "../reducer";

const key = process.env.REACT_APP_API;

export function useFetchList(list, type, page) {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    loading: true,
  });
 
  useEffect(() => {
    let cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.FETCH_START });
    let BASE_URL = `https://api.themoviedb.org/3/${type}/${list}?api_key=${key}&language=en-US&page=1`;
    axios.get(BASE_URL, {
      cancelToken: cancelToken1.token,
    }).then(res => {
      
      dispatch({ type: ACTIONS.FETCH_SUCCESS, payload: { data: res.data.results} })
    }).catch(e => {
      if (axios.isCancel(e)) return;
      dispatch({ type: ACTIONS.FETCH_FAILURE, payload: { error: e } }) 
    })
    
    return () => {
      cancelToken1.cancel();
    };
  }, [list, type]);

  return state;
}