import React from "react";
import { useMovieStyles, PurpleTooltip } from "../styles";
import Layout from "../components/shared/Layout";
import { Typography, Zoom, Tooltip, Fab } from "@material-ui/core";
import { defaultMovie } from "../data";
import { SaveIcon, RemoveIcon } from "../icons";

function MoviePage() {
  const classes = useMovieStyles();

  const [showTooltip, setTooltip] = React.useState(true);

  function handleToggleTooltip() {
    setTooltip((prev) => !prev);
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
            {genres.map(
              (genre, index) =>
                `${genre}${index === genres.length - 1 ? "" : ","} `
            )}
            · {time}
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
              title="Add movie to watchlist"
            >
              <div>
                <SaveButton />
              </div>
            </PurpleTooltip>
          </div>
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

export default MoviePage;

// background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)),
//     url(../img/hero-small.jpg);
//   background-size:cover;
//   background-position: top;
