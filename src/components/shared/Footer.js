import React from "react";
import { useFooterStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { ReactComponent as Logo } from "../../images/MovieDB.svg";
import { Link } from "react-router-dom";

function Footer() {
  const classes = useFooterStyles();

  return (
    <div className={classes.container}>
      <div className={classes.logoContainer}>
        <Typography variant="h4" className={classes.text}>
          Powered by:
        </Typography>
        <Logo />
      </div>
      <div className={classes.sections}>
        <Typography variant="h5">
          <Link to="/">RESOURCES</Link>{" "}
        </Typography>
        <Typography variant="h5">
          <Link to="/">FAQ</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">CONTACT</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">ABOUT</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">PRIVACY POLICY</Link>
        </Typography>
        <Typography variant="h5">
          <Link to="/">TERMS OF USE</Link>
        </Typography>
      </div>
      <Typography variant="h5" className={classes.created}>
        @ 2020 Made with love by sencho
      </Typography>
    </div>
  );
}

export default Footer;
