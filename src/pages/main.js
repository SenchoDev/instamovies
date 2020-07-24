import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import { Typography } from "@material-ui/core";

import MainHeader from "../components/Main/MainHeader";
import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import BigCard from "../components/shared/BigCard";
import { getTrailerCard } from "../data";

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
        <div className={classes.trailerContainer}>
          {Array.from({length: 3}, () => getTrailerCard()).map(card => (
            <BigCard key={card.id} card={card} />
          ))}
        </div>
      </div>
            {/* Slider 1 */}
      <div className={classes.slider}>
        <Heading textHeader="Whats Popular" textButton="Movies" />
        <SliderA />
      </div>
    </Layout>
  );
}

export default MainPage;
