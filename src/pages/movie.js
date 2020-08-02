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
import { fetchIndividualMovie } from "../utils/useSearchMovies";
import { useParams } from "react-router-dom";

function MoviePage() {
  const { movieId } = useParams();
  const classes = useMovieStyles();
  const [showDialog, setDialog] = React.useState(false);
  const [movieInfo, setMovieInfo] = React.useState({});

  function handleCloseDialog() {
    setDialog(false);
  }
  React.useEffect(() => {
    fetchIndividualMovie(setMovieInfo, movieId);
  }, [movieId]);

  console.log(movieInfo)
  const { backgroundImage, trailer, seriesCast, comments } = defaultMovie;
  return (
    <Layout movieLarge image={backgroundImage}>
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
              url={trailer}
              width={760}
              height={500}
              style={{ marginLeft: "50px" }}
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* About Movie */}
      <Movie movie={defaultMovie} setDialog={setDialog} />

      {/* Movie Cast */}
      <div className={classes.seriesCast}>
        <Typography variant="h4">Series Cast</Typography>
        <MovieCastSlider seriesCast={seriesCast} />
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
        
      </div>
    </Layout>
  );
}
// <SliderA />
export default MoviePage;
