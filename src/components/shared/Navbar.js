import React from "react";
import { useNavbarStyles, RedTooltip } from "../../styles";
import { AppBar, Typography, Zoom } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/instamovies.png";
import {
  LoadingIcon,
  LikeIcon,
  LikeActiveIcon,
} from "../../icons";

import { defaultCurrentUser, getDefaultUser } from "../../data";
import NotificationList from "../notification/NotificationList";
import NotificationTooltip from "../notification/NotificationTooltip";

function Navbar({ minimalNavbar }) {
  const classes = useNavbarStyles();

  const history = useHistory();
  const path = history.location.pathname;

  return (
    <AppBar className={classes.appBar}>
      <section className={classes.section}>
        <Logo />
        {!minimalNavbar && 
        <Links path={path}/>}
      </section>
    </AppBar>
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

  const [showList, setList] = React.useState(false);
  const [showTooltip, setTooltip] = React.useState(true);

  React.useEffect(() => {
    const timeout =  setTimeout(handleHideTooltip, 5000)
    return () => {
      clearTimeout(timeout);
    }
  })
  function handleToggleList() {
    setList(prev => !prev);
  }

  function handleHideTooltip() {
    setTooltip(false);
  }

  function handleHideList() {
    setList(false);
  }
  return (
    <div className={classes.linksContainer}>
      {showList && <NotificationList handleHideList={handleHideList} />}
      <div className={classes.linksWrapper}>
        <Typography className={classes.navLink}  >Movies</Typography>
        <Typography color="secondary" className={classes.navLink} >TV Shows</Typography>
        <RedTooltip 
          arrow
          open={showTooltip}
          onOpen={handleHideTooltip}
          TransitionComponent={Zoom}
          title={<NotificationTooltip />}
        >
          <div className={classes.notifications} onClick={handleToggleList}>
            {showList ? <LikeActiveIcon /> : <LikeIcon />}
          </div>
        </RedTooltip>
      </div>
    </div>
  )
}


export default Navbar;
