import React from "react";
import { useMainPageStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Typography, Hidden } from "@material-ui/core";

function MainHeader() {
  const classes = useMainPageStyles();

  return (
    <main className={classes.header}>
      <div alt="main" className={classes.imageHeader} />
      <div className={classes.headerWrapper}>
        <Typography variant="h4" className={classes.heading}>
          Welcome. <br />
          Millions of movies,
          <Hidden smUp>
            <br />
          </Hidden>{" "}
          TV shows and people to discover.
        </Typography>

        <div className={classes.search}>
          <div className={classes.box}>
            <Hidden xsDown>
              <input
                type="text"
                className={classes.field}
                placeholder="Search over 100 000 movies and TV shows"
              />
            </Hidden>
            <Link to="/search" className={classes.btnSearch}>
              Search
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHeader;
