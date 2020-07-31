import { useReducer, useEffect } from "react";
import axios from "axios";

const ACTIONS = {
  FETCH_MOVIES_START: "FETCH_MOVIES_START",
  FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
  FETCH_TRAILERS_SUCCESS: "FETCH_TRAILERS_SUCCESS",
};

const key = `08f4c34f1c690e232fe2e660f41ed739`;
const cors = `https://cors-anywhere.herokuapp.com/`;

const BASE_URL1 = `${cors}https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
const BASE_URL2 = `${cors}https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;
const BASE_URL3 = `${cors}https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;

const BASE_URL4 = `${cors}https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos`;
const BASE_URL5 = `${cors}https://api.themoviedb.org/3/movie/583083?api_key=${key}&append_to_response=videos`;
const BASE_URL6 = `${cors}https://api.themoviedb.org/3/movie/516486?api_key=${key}&append_to_response=videos`;

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_MOVIES_START:
      return { loading: true, data: {} };
    case ACTIONS.FETCH_MOVIES_SUCCESS:
      return {
        ...state,
        loading: false,
        data: {
          popularMovies: action.payload.popularMovies,
          popularTvShows: action.payload.popularTvShows,
          upcoming: action.payload.upcoming,
        },
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
    dispatch({ type: ACTIONS.FETCH_MOVIES_START });
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
            type: ACTIONS.FETCH_MOVIES_SUCCESS,
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
        dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
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
