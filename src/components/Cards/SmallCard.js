import React from "react";
import { useSmallCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { limitMovieText } from "../../utils/limitMovieText";
import Img from "react-graceful-image";

function SmallCard({ card, showRating = false }) {
  const history = useHistory();

  function handleSetFetchTvShow() {
    history.push({
      pathname: `/m/${id}`,
      state: {
        tv: original_name !== undefined ? true : false,
      },
    });
  }

  const {
    original_title,
    original_name,
    release_date,
    first_air_date,
    poster_path,
    vote_average,
    id,
  } = card;

  const classes = useSmallCardStyles({ vote_average });

  return (
    <div onClick={handleSetFetchTvShow} className={classes.container}>
      <Img
        noLazyLoad
        src={`https://image.tmdb.org/t/p/w154/${poster_path}`}
        className={classes.smallImage}
        alt="movie"
      />
      <Typography variant="subtitle2" className={classes.title}>
        {limitMovieText(original_title || original_name)}
      </Typography>
      <p className={classes.date}>
        {formatDate(release_date || first_air_date)}
      </p>
      {showRating && <p className={classes.rating}>{vote_average}</p>}
    </div>
  );
}

export default SmallCard;
