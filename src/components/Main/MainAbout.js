import React from "react";
import { useMainPageStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Typography, Hidden } from "@material-ui/core";

function MainHeader() {
  const classes = useMainPageStyles();

  return (
    <main className={classes.header}>
      <div alt="main" className={classes.aboutHeader} />
      <div className={classes.headerWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Our service provides everything about
          <Hidden smUp>
            <br />
          </Hidden>{" "}
          movies in one place. <br />
          Discover, save & review your{" "}
          <Hidden smUp>
            <br />
          </Hidden>{" "}
          favorite movies.
        </Typography>
        <div className={classes.buttonWrap}>
          <Link to="/" className={classes.profileButton}>
            Go to your profile
          </Link>
        </div>
      </div>
    </main>
  );
}

export default MainHeader;
