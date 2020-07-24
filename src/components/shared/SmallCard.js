import React from "react";
import { useSmallCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function SmallCard({card}) {
  const classes = useSmallCardStyles();

  const { title, date, image} = card;

  return (
    <Link to="/" className={classes.container}>
      <img src={image} alt="movie"/>
      <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
      <p className={classes.date}>{date}</p>
    </Link>
  )
}

export default SmallCard;
