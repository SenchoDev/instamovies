import React from "react";
import { useSemiCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { limitMovieText } from "../../utils/limitMovieText";

function SemiCard({ card, showRating = false}) {
  
  const { original_title, original_name, release_date, first_air_date, poster_path, vote_average } = card;
  
  const classes = useSemiCardStyles({ vote_average });
  return (
    <Link to="/m/asdf" className={classes.container}>
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="movie" className={classes.image}/>
      <Typography variant="subtitle1" className={classes.title}>{limitMovieText(original_title || original_name, 43)}</Typography>
      <p className={classes.date}>{formatDate(release_date || first_air_date)}</p>
      {showRating && <p className={classes.rating}>{vote_average}</p>}
    </Link>
  )
}

export default SemiCard;
