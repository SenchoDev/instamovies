import React from "react";
import { useBigCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";

function BigCard({ card, setDialog, setTrailerVideo }) {
  const classes = useBigCardStyles();

  const {
    original_title,
    backdrop_path,
    videos
  } = card;

  function handleTrailerSettings(){
    setDialog(true)
    setTrailerVideo(`https://www.youtube.com/watch?v=${videos.results[0].key}`);
  }

  return (
    <div className={classes.card} onClick={handleTrailerSettings}>
      <img src={`https://image.tmdb.org/t/p/w300/${backdrop_path}`} alt="trailer" className={classes.image} />
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        className={classes.heading}
      >
        {original_title}
      </Typography>
      <Typography variant="body2" color="secondary" align="center">
        Official Trailer
      </Typography>
    </div>
  );
}

export default BigCard;
