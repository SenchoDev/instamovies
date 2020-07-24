import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import { Typography } from "@material-ui/core";

import MainHeader from "../components/Main/MainHeader";
import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";

function MainPage() {
  const classes = useMainPageStyles();

  return (
    <Layout>
      {/* Header */}
      <MainHeader />

      {/* Slider 1 */}
      <div className={classes.slider}>
        <Heading textHeader="Whats Popular" textButton="Movies" />
        <SliderA />
      </div>
      {/* Trailer */}
      <div className={classes.trailer}>
        <Heading textHeader="Whats Popular" textButton="Trailers" />
      </div>
    </Layout>
  );
}

export default MainPage;
