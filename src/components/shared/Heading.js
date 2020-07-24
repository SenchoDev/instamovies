import React from "react";
import { Typography } from "@material-ui/core";
import { useMainPageStyles } from "../../styles";

function Heading({textHeader, textButton}) {
  
  const classes = useMainPageStyles();
  return (
    
      <div className={classes.movieHeader}>
        <Typography variant="h5">{textHeader}</Typography>
        <div className={classes.movieAbout}>
          <Typography variant="body2" className={classes.movieAboutText}>
            {textButton}
          </Typography>
        </div>
      </div>
    
  );
}
export default Heading;
