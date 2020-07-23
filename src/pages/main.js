import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import MainBg from "../images/background1.png";
import { Typography, InputBase } from "@material-ui/core";
import { Link } from "react-router-dom";

function MainPage() {
  const classes = useMainPageStyles();

  const [query, setQuery] = React.useState("");

  return (
    <Layout>
      <main className={classes.header}>
        <img src={MainBg} alt="main" className={classes.imageHeader} />
        <div className={classes.headerWrapper}>
          <Typography variant="h4" className={classes.heading}>
            Welcome. <br />
            Millions of movies, TV shows and people to discover.
          </Typography>
          <div className={classes.search}>
            <form className={classes.box}>
              <input
                type="text"
                className={classes.field}
                placeholder="Search over 100 000 movies and TV shows"
              />
              <Link to="/search" class="btn-search search__btn">
                Search
              </Link>
            </form>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default MainPage;
