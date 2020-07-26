import React from "react";
import { useSmallCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import MainSkeleton from "../Cards/MainSkeleton";

function SmallCard({card, showRating = false}) {
  const classes = useSmallCardStyles();
  
  const [loading, setLoading] = React.useState(true)

  setTimeout(() => setLoading(false), 2000)

  if(loading) return <MainSkeleton/>

  const { title, date, image, rating} = card;

  return (
    <Link to="/m/asdf" className={classes.container}>
      <img src={image} alt="movie"/>
      <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
      <p className={classes.date}>{date}</p>
      {showRating && <p className={classes.rating}>{rating}</p>}
    </Link>
  )
}

export default SmallCard;
