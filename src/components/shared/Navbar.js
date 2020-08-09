import React from "react";
import { useNavbarStyles, RedTooltip, WhiteTooltip } from "../../styles";
import { AppBar, Typography, Zoom, Avatar, Grid, Hidden, Fade, InputBase } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/instamovies.png";
import { LikeIcon, LikeActiveIcon, LoadingIcon } from "../../icons";

import NotificationList from "../notification/NotificationList";
import NotificationTooltip from "../notification/NotificationTooltip";
import { useNProgress } from "@tanem/react-nprogress";
import useOutsideClick from "@rooks/use-outside-click";
import { UserContext } from "../../App";
import { isAfter } from "date-fns/esm";
import { useLazyQuery } from "@apollo/react-hooks";
import { SEARCH_USERS } from "../../graphql/queries";

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();
  const [isLoadingPage, setLoadingPage] = React.useState(true);
  const history = useHistory();
  const path = history.location.pathname;

  React.useEffect(() => {
    setLoadingPage(false);
  }, [path]);

  return (
    <React.Fragment>
      <Progress isAnimating={isLoadingPage} />
      <AppBar className={classes.appBar}>
        <section className={classes.section}>
          <Logo />
          <Search history={history} />
          {!minimalNavbar && <Links path={path} />}
        </section>
      </AppBar>
    </React.Fragment>
  );
}

function Logo() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.logoContainer}>
      <Link to="/">
        <div className={classes.logoWrapper}>
          <img src={logo} alt="Instagram" className={classes.logo} />
        </div>
      </Link>
    </div>
  );
}

function Search({ history }) {
  const classes = useNavbarStyles();
  const [results, setResults] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [query, setQuery] = React.useState("");
  const [searchUsers, { data }] = useLazyQuery(SEARCH_USERS);

  const hasResults = Boolean(query) && results.length > 0;

  React.useEffect(() => {
    if(!query.trim()) return;
    setLoading(true);
    const variables = { query: `%${query}%`};
    searchUsers({ variables });
    if(data){
      setResults(data.users);
      setLoading(false);
    }
  }, [query, data, searchUsers])
  function handleClearInput() {
    setQuery("");
  }

  return (
    <Hidden xsDown>
      <WhiteTooltip
        arrow
        interactive
        TransitionComponent={Fade}
        open={hasResults}
        title={
          hasResults && (
            <Grid container className={classes.resultContainer}>
              {results.map((result) => (
                <Grid
                  item
                  key={result.id}
                  className={classes.resultLink}
                  onClick={() => {
                    history.push(`/${result.username}`);
                    handleClearInput();
                  }}
                >
                  <div className={classes.resultWrapper}>
                    <div className={classes.avatarWrapper}>
                      <Avatar src={result.profile_image} alt="user avatar" />
                    </div>
                    <div className={classes.nameWrapper}>
                      <Typography varaint="body1">{result.username}</Typography>
                      <Typography varaint="body2" color="textSecondary">
                        {result.name}
                      </Typography>
                    </div>
                  </div>
                </Grid>
              ))}
            </Grid>
          )
        }
      >
        <InputBase
          className={classes.input}
          onChange={(event) => setQuery(event.target.value)}
          startAdornment={<span className={classes.searchIcon} />}
          endAdornment={
            loading ? (
              <LoadingIcon />
            ) : (
              <span onClick={handleClearInput} className={classes.clearIcon} />
            )
          }
          placeholder="Search users"
          value={query}
        />
      </WhiteTooltip>
    </Hidden>
  );
}
function Links({ path }) {
  const classes = useNavbarStyles();
  const { me, currentUserId } = React.useContext(UserContext);
  const newNotifications = me.notifications.filter(({ created_at }) =>
    isAfter(new Date(created_at), new Date(me.last_checked))
  );
  const hasNotifications = newNotifications.length > 0;
  const [showList, setList] = React.useState(false);
  const [showTooltip, setTooltip] = React.useState(hasNotifications);
  const [showMovies, setMovies] = React.useState(false);
  const [showTv, setTv] = React.useState(false);

  React.useEffect(() => {
    const timeout = setTimeout(handleHideTooltip, 5000);
    return () => {
      clearTimeout(timeout);
    };
  });
  function handleToggleList() {
    setList((prev) => !prev);
  }

  function handleHideTooltip() {
    setTooltip(false);
  }
  function handleHideList() {
    setList(false);
  }
  function handleToggleMovies() {
    setMovies((prev) => !prev);
  }
  function handleHideMovies() {
    setMovies(false);
  }
  function handleToggleTv() {
    setTv((prev) => !prev);
  }
  function handleHideTv() {
    setTv(false);
  }
  return (
    <div className={classes.linksContainer}>
      {showList && (
        <NotificationList
          notifications={me.notifications}
          handleHideList={handleHideList}
          currentUserId={currentUserId}
        />
      )}

      <div className={classes.linksWrapper}>
        <Typography className={classes.navLink1} onClick={handleToggleMovies}>
          Movies
        </Typography>
        {showMovies && <MoviesList handleHideMovies={handleHideMovies} />}
        <Typography
          color="secondary"
          className={classes.navLink}
          onClick={handleToggleTv}
        >
          TV Shows
        </Typography>
        {showTv && <TvList handleHideTv={handleHideTv} />}
        <RedTooltip
          arrow
          open={showTooltip}
          onOpen={handleHideTooltip}
          TransitionComponent={Zoom}
          title={<NotificationTooltip notifications={newNotifications} />}
        >
          <div
            className={hasNotifications ? classes.notifications : ""}
            onClick={handleToggleList}
          >
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
        <Link to={`/${me.username}`}>
          <div
            className={path === `/${me.username}` ? classes.profileActive : ""}
          ></div>
          <Avatar src={me.profile_image} className={classes.profileImage} />
        </Link>
      </div>
    </div>
  );
}

function TvList({ handleHideTv }) {
  const classes = useNavbarStyles();
  const listContainerRef = React.useRef();
  useOutsideClick(listContainerRef, handleHideTv);

  return (
    <Grid
      ref={listContainerRef}
      container
      className={classes.listContainer}
      style={{
        marginLeft: "85px",
      }}
    >
      <Grid item className={classes.listWrapper}>
        <Link to="/tv/popular">
          <Typography variant="subtitle2">Popular</Typography>
        </Link>
        <Link to="/tv/airing_today">
          <Typography variant="subtitle2">On TV</Typography>
        </Link>
        <Link to="/tv/top_rated">
          <Typography variant="subtitle2">Top Rated</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

function MoviesList({ handleHideMovies }) {
  const classes = useNavbarStyles();
  const listContainerRef = React.useRef();
  useOutsideClick(listContainerRef, handleHideMovies);

  return (
    <Grid ref={listContainerRef} container className={classes.listContainer}>
      <Grid item className={classes.listWrapper}>
        <Link to="/movie/popular">
          <Typography variant="subtitle2">Popular</Typography>
        </Link>
        <Link to="/movie/upcoming">
          <Typography variant="subtitle2">Upcoming</Typography>
        </Link>
        <Link to="/movie/top_rated">
          <Typography variant="subtitle2">Top Rated</Typography>
        </Link>
      </Grid>
    </Grid>
  );
}

function Progress({ isAnimating }) {
  const classes = useNavbarStyles();
  const { animationDuration, isFinished, progress } = useNProgress({
    isAnimating,
  });

  return (
    <div
      className={classes.progressContainer}
      style={{
        opacity: isFinished ? 0 : 1,
        transition: `opacity ${animationDuration}ms linear`,
      }}
    >
      <div
        className={classes.progressBar}
        style={{
          marginLeft: `${(-1 + progress) * 100}%`,
          transition: `margin-left ${animationDuration}ms linear`,
        }}
      >
        <div className={classes.progressBackground} />
      </div>
    </div>
  );
}

export default Navbar;
