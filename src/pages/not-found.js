import React from "react";
import Layout from "../components/shared/Layout";
import { Typography } from "@material-ui/core";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <Layout minimalNavbar title="Page Not Found" marginTop={100} hideFooter>
      <Typography variant="h5" align="center">
      Sorry, this page isn't available.
      </Typography>
      <Typography align="center">
        The link you followed may be broken, or the page may have been removed.
        <Link to="/">
          {" "}
          <Typography color="secondary" component="span">
            Go back to Instagram.
          </Typography>
        </Link>
      </Typography>
    </Layout>
  );
}

export default NotFoundPage;
