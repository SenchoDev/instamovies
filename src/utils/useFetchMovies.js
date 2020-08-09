import { useReducer, useEffect } from "react";
import axios from "axios";
import { reducer, ACTIONS } from "../reducer";

const key = process.env.REACT_APP_API;

//const cors = `https://cors-anywhere.herokuapp.com`;
const base = `https://api.themoviedb.org/3/`

const BASE_URL1 = `${base}movie/popular?api_key=${key}&language=en-US&page=1`;
const BASE_URL2 = `${base}tv/popular?api_key=${key}&language=en-US&page=1`;
const BASE_URL3 = `${base}movie/upcoming?api_key=${key}&language=en-US&page=1`;

const BASE_URL4 = `${base}movie/157336?api_key=${key}&append_to_response=videos`;
const BASE_URL5 = `${base}movie/583083?api_key=${key}&append_to_response=videos`;
const BASE_URL6 = `${base}movie/516486?api_key=${key}&append_to_response=videos`;


export function useFetchMovies() {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    loading: true,
  });
  useEffect(() => {
    const requestOne = axios.get(BASE_URL1);
    const requestTwo = axios.get(BASE_URL2);
    const requestThree = axios.get(BASE_URL3);

    const cancelToken1 = axios.CancelToken.source();
    dispatch({ type: ACTIONS.FETCH_START });
    axios
      .all([requestOne, requestTwo, requestThree], {
        cancelToken: cancelToken1.token,
      })
      .then(
        axios.spread((...responses) => {
          const responseOne = responses[0];
          const responseTwo = responses[1];

          const responesThree = responses[2];
          dispatch({
            type: ACTIONS.FETCH_MOVIE_SUCCESS,
            payload: {
              popularMovies: responseOne.data.results,
              popularTvShows: responseTwo.data.results,
              upcoming: responesThree.data.results,
            },
          });
        })
      )
      .catch((e) => {
        if (axios.isCancel(e)) return;
        dispatch({ type: ACTIONS.FETCH_FAILURE, payload: { error: e } });
      });

    return () => {
      cancelToken1.cancel();
    };
  }, []);

  return state;
}

export function fetchTrailer(setTrailers) {
  const requestOne = axios.get(BASE_URL4);
  const requestTwo = axios.get(BASE_URL5);
  const requestThree = axios.get(BASE_URL6);
  let cancelToken1 = axios.CancelToken.source();
  axios
    .all([requestOne, requestTwo, requestThree], {
      cancelToken: cancelToken1.token,
    })
    .then(
      axios.spread((...responses) => {
        const responseOne = responses[0];
        const responseTwo = responses[1];
        const responseThree = responses[2];
        setTrailers([responseOne.data, responseTwo.data, responseThree.data]);
      })
    )
    .catch((e) => {
      if (axios.isCancel(e)) return;
    });
  return () => {
    cancelToken1.cancel();
  };
}


