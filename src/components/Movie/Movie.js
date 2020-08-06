import React from "react";
import { useMovieStyles, PurpleTooltip } from "../../styles";
import { Typography, Zoom, Fab, Button } from "@material-ui/core";
import PlayArrowRoundedIcon from "@material-ui/icons/PlayArrowRounded";
import Img from "react-graceful-image";

import {
  SaveIcon,
  RemoveIcon,
  LikeIconWhite,
  LikeActiveIconWhite,
} from "../../icons";
import { limitMovieText } from "../../utils/limitMovieText";
import { useMutation } from "@apollo/react-hooks";
import { UserContext } from "../../App";
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, ADD_TO_WATCHLIST, REMOVE_FROM_WATCHLIST} from "../../graphql/mutations";
import { useParams } from "react-router-dom";

function Movie({ movie, setDialog, favoriteMovies, watchlistMovies}) {
  const classes = useMovieStyles();
  const { movieId } = useParams();
  const {
    original_title,
    genres,
    runtime,
    poster_path,
    vote_average,
    overview,
    crew,
  } = movie;



  function listElementsWithComma(array) {
    return array.map(
      (el, index) => `${el.name}${index === array.length - 1 ? "" : ","} `
    );
  }

  return (
    <section className={classes.about}>
      <Img
        placeholderColor='rgba(170, 44, 168, 0.5)'
        src={`https://image.tmdb.org/t/p/w342/${poster_path}`}
        alt="movie"
        className={classes.image}
        
      />
      <div className={classes.info}>
        <Typography variant="h4" className={classes.heading}>
          {original_title}
        </Typography>
        <Typography variant="body1">
          {genres && listElementsWithComma(genres)} · {`${runtime || '0'}m`}
        </Typography>
        <div className={classes.buttons}>
          <p
            className={classes.rating}
            style={{
              background:
                vote_average >= 7.5
                  ? "#0C7A29"
                  : vote_average >= 4
                  ? "#FFB008"
                  : vote_average > 0
                  ? "#FF414E"
                  : "#636363"
            }}
          >
            {vote_average}
          </p>
          <PurpleTooltip
            arrow
            TransitionComponent={Zoom}
            title="Add this movie to watchlist"
          >
            <div>
              <SaveButton watchlistMovies={watchlistMovies} movieId={movieId} movieImage={poster_path}/>
            </div>
          </PurpleTooltip>
          <PurpleTooltip
            arrow
            TransitionComponent={Zoom}
            title="Add this move to your favorite list"
          >
            <div>
              <LikeButton favoriteMovies={favoriteMovies} movieId={movieId} movieImage={poster_path} />
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
          {limitMovieText(overview, 260)}
        </Typography>
        <Typography variant="h4">Directors & Creators</Typography>
        <Typography variant="body2" style={{ width: "45vw" }}>
          {crew && listElementsWithComma(crew.slice(0, 4))}
        </Typography>
      </div>
    </section>
  );
}

function SaveButton({ watchlistMovies, movieId, movieImage}) {
  const classes = useMovieStyles();
  const { currentUserId } = React.useContext(UserContext);
  const isAlreadySaved = watchlistMovies.some(
    ({ user_id }) => user_id === currentUserId
  )
  const [addToWatchlist] = useMutation(ADD_TO_WATCHLIST);
  const [removeFromWatchlist] = useMutation(REMOVE_FROM_WATCHLIST);
  const [saved, setSaved] = React.useState(isAlreadySaved);
  const Icon = saved ? RemoveIcon : SaveIcon;
  const onClick = saved ? handleRemove : handleSave;
  
  function handleSave() {
    const variables = { 
      movieId,
      userId: currentUserId,
      movieImage,
    }
    addToWatchlist({ variables })
    setSaved(true);
  }

  function handleRemove() {
    const variables = { 
      movieId,
      userId: currentUserId,
    }
    removeFromWatchlist({ variables })
    setSaved(false);
  }

  return (
    <Fab className={classes.fab} onClick={onClick}>
      <Icon className={classes.saveIcon} />
    </Fab>
  );
}

function LikeButton({ favoriteMovies, movieId, movieImage}) {
  const classes = useMovieStyles();
  const { currentUserId } = React.useContext(UserContext);
  const isAlreadySaved = favoriteMovies.some(({ user_id }) => user_id === currentUserId);
  const [addToFavorites] = useMutation(ADD_TO_FAVORITES);
  const [removeFromFavorites] = useMutation(REMOVE_FROM_FAVORITES);
  const [liked, setLiked] = React.useState(isAlreadySaved);
  const Icon = liked ? LikeActiveIconWhite : LikeIconWhite;
  const onClick = liked ? handleRemoveFromFavorites : handleAddToFavorites;

  function handleAddToFavorites() {
    const variables = { 
      movieId,
      userId: currentUserId,
      movieImage,
    }
    setLiked(true);
    addToFavorites({ variables })
  }

  function handleRemoveFromFavorites() {
    const variables = { 
      movieId,
      userId: currentUserId,
    }
    setLiked(false);
    removeFromFavorites({ variables })
  }

  return (
    <Fab className={classes.fab} onClick={onClick}>
      <Icon className={classes.saveIcon} />
    </Fab>
  );
}

export default Movie;
