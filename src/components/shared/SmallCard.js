import React from "react";
import { useSmallCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";

function SmallCard({card}) {
  const classes = useSmallCardStyles();

  const { title, date, image} = card;

  return (
    <div className={classes.container}>
      <img src={image} alt="movie"/>
      <Typography variant="subtitle2" className={classes.title}>{title}</Typography>
      <p className={classes.date}>{date}</p>
    </div>
  )
}

export default SmallCard;
