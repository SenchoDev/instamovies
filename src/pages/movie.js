import React from "react";
import { useMovieStyles, PurpleTooltip } from "../styles";
import Layout from "../components/shared/Layout";
import { Typography, Zoom, Fab, Button } from "@material-ui/core";
import { defaultMovie } from "../data";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import {
  SaveIcon,
  RemoveIcon,
  LikeIconWhite,
  LikeActiveIconWhite,
} from "../icons";

function MoviePage() {
  const classes = useMovieStyles();

  const [showTooltip, setTooltip] = React.useState(true);

  function handleToggleTooltip() {
    setTooltip((prev) => !prev);
  }

  function listElementsWithComma(array) {
    return array.map(
      (el, index) => `${el}${index === array.length - 1 ? "" : ","} `
    );
  }

  const {
    id,
    title,
    genres,
    time,
    movieImage,
    backgroundImage,
    rating,
    trailer,
    overview,
    directors,
    seriesCast,
  } = defaultMovie;
  return (
    <Layout movieLarge image={backgroundImage}>
      <section className={classes.about}>
        <img src={movieImage} alt="movie" className={classes.image} />

        <div className={classes.info}>
          <Typography variant="h4" className={classes.heading}>
            {title}
          </Typography>
          <Typography variant="body1">
            {listElementsWithComma(genres)}· {time}
          </Typography>
          <div className={classes.buttons}>
            <p
              className={classes.rating}
              style={{
                background: "#0C7A29",
              }}
            >
              {rating}
            </p>
            <PurpleTooltip
              arrow
              TransitionComponent={Zoom}
              title="Add this movie to watchlist"
            >
              <div>
                <SaveButton />
              </div>
            </PurpleTooltip>
            <PurpleTooltip
              arrow
              TransitionComponent={Zoom}
              title="Add this move to your favorite list"
            >
              <div>
                <LikeButton />
              </div>
            </PurpleTooltip>
            <Button className={classes.trailer}>
              <PlayArrowRoundedIcon />
              <Typography variant="h5" className={classes.trailerText}>
                Play trailer
              </Typography>
            </Button>
          </div>
          <Typography variant="h4">Overview</Typography>
          <Typography
            variant="body2"
            style={{ width: "45vw", marginBottom: "15px" }}
          >
            {overview}
          </Typography>
          <Typography variant="h4">Directors & Creators</Typography>
          <Typography variant="body2" style={{ width: "45vw" }}>
            {listElementsWithComma(directors)}
          </Typography>
        </div>
      </section>
    </Layout>
  );
}

function SaveButton() {
  const classes = useMovieStyles();
  const [saved, setSaved] = React.useState(false);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;

  function handleSave() {
    console.log("save");
    setSaved(true);
  }

  function handleRemove() {
    console.log("remove");
    setSaved(false);
  }

  return (
    <Fab className={classes.fab} onClick={onClick}>
      <Icon className={classes.saveIcon} />
    </Fab>
  );
}

function LikeButton() {
  const classes = useMovieStyles();
  const [liked, setLiked] = React.useState(false);
  const Icon = liked ? LikeActiveIconWhite : LikeIconWhite;
  const onClick = liked ? handleRemove : handleLike;

  function handleLike() {
    console.log("liked");
    setLiked(true);
  }

  function handleRemove() {
    console.log("");
    setLiked(false);
  }

  return (
    <Fab className={classes.fab} onClick={onClick}>
      <Icon className={classes.saveIcon} />
    </Fab>
  );
}

export default MoviePage;

// background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)),
//     url(../img/hero-small.jpg);
//   background-size:cover;
//   background-position: top;
