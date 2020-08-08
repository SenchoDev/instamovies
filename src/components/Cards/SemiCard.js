import React from "react";
import { useSemiCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import TertiarySkeleton from "./TertiarySkeleton";
import { formatDate } from "../../utils/formatDate";

function SemiCard({ card, showRating = false}) {
  
  const { original_title, release_date, poster_path, vote_average } = card;
  
  const classes = useSemiCardStyles({ vote_average });
  
  const [loading, setLoading] = React.useState(true);
  
  setTimeout(() => setLoading(false), 2000);
  
  if (loading) return <TertiarySkeleton />;
  

  return (
    <Link to="/m/asdf" className={classes.container}>
      <img src={`https://image.tmdb.org/t/p/w185/${poster_path}`} alt="movie" className={classes.image}/>
      <Typography variant="subtitle1" className={classes.title}>{original_title}</Typography>
      <p className={classes.date}>{formatDate(release_date)}</p>
      {showRating && <p className={classes.rating}>{vote_average}</p>}
    </Link>
  )
}

export default SemiCard;
