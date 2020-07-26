import React from "react";
import { useSecondSkeletonStyles } from "../../styles";

function SecondSkeleton() {
  const classes = useSecondSkeletonStyles();
  return (
    <div className={classes.container}>
      <div className={classes.mediaSkeleton} />
      <div className={classes.title} />
      <div className={classes.rating} />
    </div>
  );
}

export default SecondSkeleton;
