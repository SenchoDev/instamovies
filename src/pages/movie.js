import React from "react";
import { useMovieStyles, PurpleTooltip } from "../styles";
import Layout from "../components/shared/Layout";
import {
  Typography,
  Zoom,
  Fab,
  Button,
  Dialog,
  DialogActions,
  DialogTitle,
  DialogContent,
  Card,
  CardMedia,
} from "@material-ui/core";
import { defaultMovie, getActorCard } from "../data";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import ReactPlayer from "react-player";

import {
  SaveIcon,
  RemoveIcon,
  LikeIconWhite,
  LikeActiveIconWhite,
} from "../icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MoviePage() {
  const classes = useMovieStyles();

  const [showTooltip, setTooltip] = React.useState(true);
  const [showDialog, setDialog] = React.useState(false);

  function handleToggleTooltip() {
    setTooltip((prev) => !prev);
  }

  function handleCloseDialog() {
    setDialog(false);
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
            <Button className={classes.trailer} onClick={() => setDialog(true)}>
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
      <div className={classes.seriesCast}>
        <Typography variant="h4">Series Cast</Typography>
        <ActorSlider seriesCast={seriesCast}/>
      </div>
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

function ActorSlider({ seriesCast }) {
  const classes = useMovieStyles();
  return (
    <div className={classes.container}>
      <Slider
        className={classes.slide}
        dots={false}
        infinite
        speed={1000}
        touchThreshold={1000}
        variableWidth
        swipeToSlide
        arrows
        slidesToScroll={4}
        easing="ease-in-out"
      >
        {Array.from({ length: 10 }, () => getActorCard()).map((card) => (
          <ActorCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
}

function ActorCard({card}) {
  const classes = useMovieStyles();
  return(
    <div className={classes.actor}>
      <img src={card.image} alt="actor"/>
      <Typography variant="body2" >{card.realName}</Typography>
      <p className={classes.name}>{card.name}</p>
    </div>
  );
}

export default MoviePage;

// background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)),
//     url(../img/hero-small.jpg);
//   background-size:cover;
//   background-position: top;
