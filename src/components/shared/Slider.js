import React from "react";
import { useSliderStyles } from "../../styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSkeleton from "../Cards/MainSkeleton";
const SmallCard = React.lazy(() => import("../Cards/SmallCard"));

function SliderA({ data, loading }) {
  const classes = useSliderStyles();

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.wrap}>
          {Array.from({ length: 5 }).map((_, index) => (
            <MainSkeleton  key={index}/>
          ))}
        </div>
      ) : (
        <Slider
          className={classes.slide}
          dots={false}
          infinite
          speed={1000}
          touchThreshold={1000}
          variableWidth
          swipeToSlide
          arrows
          slidesToScroll={3}
          easing="ease-in-out"
        >
          {data.map((card, index) => (
            <React.Suspense key={index} fallback={<MainSkeleton />}>
              <SmallCard card={card} />
            </React.Suspense>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderA;



// import { useReducer, useEffect } from "react";
// import axios from "axios";

// const ACTIONS = {
//   FETCH_MOVIES_START: "FETCH_MOVIES_START",
//   FETCH_MOVIES_SUCCESS: "FETCH_MOVIES_SUCCESS",
//   FETCH_TRAILERS_SUCCESS: "FETCH_TRAILERS_SUCCESS",
//   FETCH_MOVIES_FAILURE: "FETCH_MOVIES_FAILURE",
// };

// const key = `08f4c34f1c690e232fe2e660f41ed739`;
// const cors = `https://cors-anywhere.herokuapp.com/`;

// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.FETCH_MOVIES_START:
//       return { loading: true, data: {}};
//     case ACTIONS.FETCH_MOVIES_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         data: {
//           popularMovies: action.payload.popularMovies,
//           popularTvShows: action.payload.popularTvShows,
//           upcoming: action.payload.upcoming,
//           trailers: action.payload.trailers
//         },
//       };
//     case ACTIONS.FETCH_MOVIES_FAILURE:
//       return {
//         ...state,
//         loading: false,
//         error: action.payload.error,
//         data: {},
//       };
//     default:
//       return state;
//   }
// }

// const BASE_URL1 = `${cors}https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`;
// const BASE_URL2 = `${cors}https://api.themoviedb.org/3/tv/popular?api_key=${key}&language=en-US&page=1`;
// const BASE_URL3 = `${cors}https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`;

// const BASE_URL4 = `${cors}https://api.themoviedb.org/3/movie/157336?api_key=${key}&append_to_response=videos`;
// const BASE_URL5 = `${cors}https://api.themoviedb.org/3/movie/583083?api_key=${key}&append_to_response=videos`;
// const BASE_URL6 = `${cors}https://api.themoviedb.org/3/movie/516486?api_key=${key}&append_to_response=videos`;

// export default function useFetchMovies() {
//   const [state, dispatch] = useReducer(reducer, {
//     data: { trailers: []},
//     trailers: [],
//     loading: true,
//   });
//   useEffect(() => {
//     let requestOne, requestTwo, requestThree, requestFour, requestFive, requestSix;
//     const requests = [
//       (requestOne = axios.get(BASE_URL1)),
//       (requestTwo = axios.get(BASE_URL2)),
//       (requestThree = axios.get(BASE_URL3)),
//       (requestFour = axios.get(BASE_URL4)),
//       (requestFive = axios.get(BASE_URL5)),
//       (requestSix = axios.get(BASE_URL6)),
//     ];

//     const cancelToken1 = axios.CancelToken.source();
//     dispatch({ type: ACTIONS.FETCH_MOVIES_START });
//     axios
//       .all([...requests], { cancelToken: cancelToken1.token })
//       .then(
//         axios.spread((...responses) => {
//           const responseOne = responses[0];
//           const responseTwo = responses[1];
//           const responseThree = responses[2];
//           const responseFour = responses[3];
//           const responseFive = responses[4];
//           const responseSix = responses[5];
//           dispatch({
//             type: ACTIONS.FETCH_MOVIES_SUCCESS,
//             payload: {
//               popularMovies: responseOne.data.results,
//               popularTvShows: responseTwo.data.results,
//               upcoming: responseThree.data.results,
//               trailers: [responseFour.data, responseFive.data, responseSix.data]
//             },
//           });
//         })
//       )
//       .catch((e) => {
//         if (axios.isCancel(e)) return;
//         dispatch({ type: ACTIONS.ERROR, payload: { error: e } });
//       });


    

//     return () => {
//       cancelToken1.cancel();
//     };
//   }, []);

//   return state;
// }