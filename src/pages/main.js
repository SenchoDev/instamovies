import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import { Typography } from "@material-ui/core";

import MainHeader from "../components/Main/MainHeader";
import SliderA from "../components/shared/Slider";

function MainPage() {
  const classes = useMainPageStyles();

  return (
    <Layout>
      {/* Header */}
      <MainHeader />

      {/* Slider 1 */}
      <div className={classes.slider}>
        <div className={classes.sliderHeader}>
          <Typography variant="h5">Whats Popular</Typography>
          <div className={classes.sliderAbout}>
            <Typography variant="body2" className={classes.sliderAboutText}>Movies</Typography>
          </div>
        </div>
        <SliderA/>
      </div>
      {/* Slider 1 */}
    </Layout>
  );
}

export default MainPage;
