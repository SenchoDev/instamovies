import React from "react";
import { useMovieStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { Typography, Dialog, DialogContent, Divider } from "@material-ui/core";
import ReactPlayer from "react-player/youtube";

import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import Movie from "../components/Movie/Movie";
import MovieCastSlider from "../components/Movie/MovieCastSlider";
import MovieComments from "../components/Movie/MovieComments";
import MovieAddComment from "../components/Movie/MovieAddComment";
import { fetchIndividualMovie, fetchRecommendations } from "../utils/useSearchMovies";
import { useParams, useLocation } from "react-router-dom";
import { useMutation, useSubscription, useQuery } from "@apollo/react-hooks";
import { ADD_COMMENTS } from "../graphql/mutations";
import { GET_COMMENTS } from "../graphql/subscriptions";
import { CHECK_IF_THERE_IS_MOVIE } from "../graphql/queries";
import LoadingScreen from "../components/shared/LoadingScreen";

function MoviePage() {
  const { movieId } = useParams();
  const classes = useMovieStyles();
  const [showDialog, setDialog] = React.useState(false);
  const [movieInfo, setMovieInfo] = React.useState({});
  const [recommendations, setRecommendations] = React.useState([]);
  const location = useLocation();
  const variables = { movieId };
  const {data: data1, loading: loading1} = useQuery(CHECK_IF_THERE_IS_MOVIE, {variables});
  const {data: data2, loading: loading2} = useSubscription(GET_COMMENTS, { variables });
  const [addComments] = useMutation(ADD_COMMENTS);
  const tv = location.state?.tv;

  React.useEffect(() => {
    if(data1?.comments.length === 0 && !loading1){
      addComments({variables})
    }
  }, [data1])
  
  React.useEffect(() => {
    fetchIndividualMovie(setMovieInfo, movieId, tv);
    fetchRecommendations(setRecommendations, movieId, tv);
    window.scrollTo(0, 0);
  }, [movieId, tv]);
  
  if(loading2 || (data2?.comments_by_pk === null || data2 === undefined)) {
    return <LoadingScreen/>
  }
  

  function handleCloseDialog() {
    setDialog(false);
  }
  
  const { backdrop_path, videos, cast, original_title, genres, runtime, poster_path, vote_average, overview, crew, original_name, episode_run_time} = movieInfo;
  const otherData = { original_title, genres, runtime, poster_path, vote_average, overview, crew, original_name, episode_run_time};
  const { comment, favorite_movies, watchlist_movies } = data2?.comments_by_pk;
  

  return (
    <Layout movieLarge image={backdrop_path}>
      {/* Trailer Dialog */}
      <Dialog
        open={showDialog}
        onClose={handleCloseDialog}
        className={classes.trailerVideo}
        fullWidth={true}
        maxWidth={"md"}
        PaperProps={{
          style: {
            backgroundColor: "transparent",
            boxShadow: "none",
            border: "transparent",
          },
        }}
      >
        <DialogContent>
          <div className={classes.trailerVideo}>
            <ReactPlayer
              url={`https://www.youtube.com/watch?v=${videos?.results[0]?.key}`}
              width={760}
              height={500}
              style={{ marginLeft: "50px" }}
              controls={true}
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* About Movie */}
      <Movie isTv={tv} movie={otherData} setDialog={setDialog}  favoriteMovies={favorite_movies} watchlistMovies={watchlist_movies}/>

      {/* Movie Cast */}
      <div className={classes.seriesCast}>
        <Typography variant="h4">Series Cast</Typography>
        <MovieCastSlider seriesCast={cast} />
      </div>
      <Divider style={{ marginBottom: "20px" }} />

      {/* Comments */}
      <MovieComments comments={comment} loading={loading2} />
      <Divider />

      {/* Add Comment */}
      <MovieAddComment movieId={movieId}  />

      {/* Suggestions Slider */}
      <div className={classes.moviesRecommendation}>
        <Heading textHeader="Recommendations" textButton="TV Shows & Movies" />
        {recommendations.length > 0 ? (<SliderA data={recommendations} loading={loading1}/>) : (<Typography variant="h4" color="secondary" align="center" className={classes.noRecommendations}>No recommedations for this movie</Typography>)}
      </div>
    </Layout>
  );
}
export default MoviePage;
