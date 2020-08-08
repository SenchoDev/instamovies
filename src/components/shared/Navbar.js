import React from "react";
import { useNavbarStyles, RedTooltip } from "../../styles";
import { AppBar, Typography, Zoom, Avatar, Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/instamovies.png";
import { LikeIcon, LikeActiveIcon } from "../../icons";

import NotificationList from "../notification/NotificationList";
import NotificationTooltip from "../notification/NotificationTooltip";
import { useNProgress } from "@tanem/react-nprogress";
import useOutsideClick from "@rooks/use-outside-click";
import { UserContext } from "../../App";
import { isAfter } from "date-fns/esm";

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

function Links({ path }) {
  const classes = useNavbarStyles();
  const { me, currentUserId }= React.useContext(UserContext)
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
      {showList && <NotificationList notifications={me.notifications} handleHideList={handleHideList} currentUserId={currentUserId}/>}

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
          title={<NotificationTooltip notifications={newNotifications}/>}
        >
          <div className={hasNotifications ? classes.notifications : ""} onClick={handleToggleList}>
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
        <Link to={`/${me.username}`}>
          <div
            className={
              path === `/${me.username}`
                ? classes.profileActive
                : ""
            }
          ></div>
          <Avatar
            src={me.profile_image}
            className={classes.profileImage}
          />
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
    <Grid ref={listContainerRef} container className={classes.listContainer} style={{
      marginLeft: '85px'
    }}>
      <Grid item className={classes.listWrapper}>
        <Link to="/movies">
          <Typography variant="subtitle2">Popular</Typography>
        </Link>
        <Link to="/movies">
          <Typography variant="subtitle2">On TV</Typography>
        </Link>
        <Link to="/movies">
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
        <Link to="/movies/popular">
          <Typography variant="subtitle2" >Popular</Typography>
        </Link>
        <Link to="/movies/upcoming">
          <Typography variant="subtitle2">Upcoming</Typography>
        </Link>
        <Link to="/movies/top_rated">
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
