import React from "react";
import { useMovieStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { Typography, Dialog, DialogContent, Divider } from "@material-ui/core";
import { defaultMovie } from "../data";
import ReactPlayer from "react-player";

import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import Movie from "../components/Movie/Movie";
import MovieCastSlider from "../components/Movie/MovieCastSlider";
import MovieComments from "../components/Movie/MovieComments";
import MovieAddComment from "../components/Movie/MovieAddComment";
import { fetchIndividualMovie, fetchRecommendations } from "../utils/useSearchMovies";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { movieId } = useParams();
  const classes = useMovieStyles();
  const [showDialog, setDialog] = React.useState(false);
  const [movieInfo, setMovieInfo] = React.useState({});
  const [recommendations, setRecommendations] = React.useState([]);
  /*
    comments: id, movieId, indvidualComments(array relationship).

    indvidualComments: id, commentsId(object realtionship), userId(opbject realtionship), created_at, content,
   

    ---------------
    we are making table with movie id
    it will have object relationship with user
    it will use subscription to fetch data, if there is not table with that id, create new table
    mutation to add new comment to comments
  */

  function handleCloseDialog() {
    setDialog(false);
  }
  React.useEffect(() => {
    fetchRecommendations(setRecommendations, movieId);
    window.scrollTo(0, 0);
    fetchIndividualMovie(setMovieInfo, movieId);
  }, [movieId]);
  console.log(recommendations)
  const { backdrop_path, videos, cast, original_title, genres, runtime, poster_path, vote_average, overview, crew } = movieInfo;
  const otherData = { original_title, genres, runtime, poster_path, vote_average, overview, crew}
  const { comments } = defaultMovie;
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
              url={`https://www.youtube.com/watch?v=${videos && videos.results[0].key}`}
              width={760}
              height={500}
              style={{ marginLeft: "50px" }}
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* About Movie */}
      <Movie movie={otherData} setDialog={setDialog} />

      {/* Movie Cast */}
      <div className={classes.seriesCast}>
        <Typography variant="h4">Series Cast</Typography>
        <MovieCastSlider seriesCast={cast} />
      </div>
      <Divider style={{ marginBottom: "20px" }} />

      {/* Comments */}
      <MovieComments comments={comments} />
      <Divider />

      {/* Add Comment */}
      <MovieAddComment />

      {/* Suggestions Slider */}
      <div className={classes.moviesRecommendation}>
        <Heading textHeader="Recommendations" textButton="TV Shows & Movies" />
        <SliderA data={recommendations} />
      </div>
    </Layout>
  );
}
// <SliderA />
export default MoviePage;
