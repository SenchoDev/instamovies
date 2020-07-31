import React from "react";
import { useMainPageStyles } from "../../styles";
import { Link } from "react-router-dom";
import { Typography, Hidden } from "@material-ui/core";
import { SearchContext } from "../../App";

function MainHeader() {
  const classes = useMainPageStyles();
  const [query, setQuery] = React.useState('');
  const { dispatch } = React.useContext(SearchContext);

  function moveToSearchPage(){
    dispatch({ type: "ADD_QUERY", payload: { searchMovie: query } } );
  }

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
                onChange={(event) => setQuery(event.target.value)}
                type="text"
                className={classes.field}
                placeholder="Search over 100 000 movies and TV shows"
                value={query}
              />
            </Hidden>
            <Link to='/search' className={classes.btnSearch} onClick={moveToSearchPage} >
              Search
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default MainHeader;
