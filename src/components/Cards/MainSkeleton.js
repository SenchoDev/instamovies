import React from "react";
import { useMainSkeletonStyles } from "../../styles";

function MainSkeleton() {
  const classes = useMainSkeletonStyles();
  return <div className={classes.container}>
    <div className={classes.mediaSkeleton}/>
    <div className={classes.title}/>
    <div className={classes.release}/>
  </div>
}

export default MainSkeleton;
