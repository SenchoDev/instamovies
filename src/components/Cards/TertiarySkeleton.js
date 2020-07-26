import React from "react";
import { useTertiarySkeletonStyles } from "../../styles";

function TertiarySkeleton() {
  const classes = useTertiarySkeletonStyles();
  return (
    <div className={classes.container}>
      <div className={classes.mediaSkeleton} />
      <div className={classes.title} />
      <div className={classes.release} />
    </div>
  );
}

export default TertiarySkeleton;
