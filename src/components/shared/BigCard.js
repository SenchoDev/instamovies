import React from "react";
import { useBigCardStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import SecondSkeleton from "./SecondSkeleton";

function BigCard({ card }) {
  const classes = useBigCardStyles();

  const [loading, setLoading] = React.useState(true);

  setTimeout(() => setLoading(false), 2000);

  if (loading) return <SecondSkeleton />;

  const { title, image } = card;

  return (
    <Link to={`/${title}`} className={classes.card}>
      <img src={image} alt="trailer" className={classes.image} />
      <Typography
        variant="h5"
        color="secondary"
        align="center"
        className={classes.heading}
      >
        {title}
      </Typography>
      <Typography variant="body2" color="secondary" align="center">
        Official Trailer
      </Typography>
    </Link>
  );
}

export default BigCard;
