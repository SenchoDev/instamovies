import React from "react";
import { useSmallCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainSkeleton from "../Cards/MainSkeleton";
import { limitRecipeTitle } from "../../utils/liimitMovieTitle";

function SmallCard({card, showRating = false}, loading){
  const classes = useSmallCardStyles();

  if(loading) return <MainSkeleton/>
  

  const { original_title, original_name, release_date, first_air_date, poster_path, vote_average } = card;

  return (
    <Link to="/m/asdf" className={classes.container}>
      <img src={`https://image.tmdb.org/t/p/w154/${poster_path}`} className={classes.smallImage} alt="movie"/>
      <Typography variant="subtitle2" className={classes.title}>{limitRecipeTitle(original_title || original_name)}</Typography>
      <p className={classes.date}>{release_date || first_air_date}</p>
      {showRating && <p className={classes.rating}>{vote_average}</p>}
    </Link>
  )
}

export default SmallCard;
