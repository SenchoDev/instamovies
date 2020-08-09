import React from "react";
import { useSemiCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { formatDate } from "../../utils/formatDate";
import { limitMovieText } from "../../utils/limitMovieText";

function SemiCard({ card, showRating = false}) {
  const history = useHistory();

  function handleSetFetchTvShow() {
    history.push({
      pathname: `/m/${id}`,
      state: {
        tv: original_name !== undefined ? true : false,
      },
    });
  }

  const { original_title, original_name, release_date, first_air_date, poster_path, vote_average, id} = card;
  
  const classes = useSemiCardStyles({ vote_average });
  return (
    <div onClick={handleSetFetchTvShow} className={classes.container}>
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="movie" className={classes.image}/>
      <Typography variant="subtitle1" className={classes.title}>{limitMovieText(original_title || original_name, 38)}</Typography>
      <p className={classes.date}>{formatDate(release_date || first_air_date)}</p>
      {showRating && <p className={classes.rating}>{vote_average}</p>}
    </div>
  )
}

export default SemiCard;
