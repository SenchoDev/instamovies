import React from "react";
import { useSemiCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import TertiarySkeleton from "./TertiarySkeleton";

function SemiCard({ card, showRating = false}) {
  const classes = useSemiCardStyles();

  const [loading, setLoading] = React.useState(false);

  setTimeout(() => setLoading(false), 2000);

  if (loading) return <TertiarySkeleton />;

  const { title, date, image, rating} = card;

  return (
    <Link to="/m/asdf" className={classes.container}>
      <img src={image} alt="movie" className={classes.image}/>
      <Typography variant="subtitle1" className={classes.title}>{title}</Typography>
      <p className={classes.date}>{date}</p>
      {showRating && <p className={classes.rating}>{rating}</p>}
    </Link>
  )
}

export default SemiCard;
