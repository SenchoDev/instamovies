import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import MainHeader from "../components/Main/MainHeader";
import MainAbout from "../components/Main/MainAbout";
import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import BigCard from "../components/shared/BigCard";
import { getTrailerCard } from "../data";
import Footer from '../components/shared/Footer';

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
          {Array.from({ length: 3 }, () => getTrailerCard()).map((card) => (
            <BigCard key={card.id} card={card} />
          ))}
        </div>
      </div>
      {/* Slider 2*/}
      <div className={classes.slider}>
        <Heading textHeader="Trending" textButton="TV Shows" />
        <SliderA />
      </div>
      {/* About */}
      <MainAbout />
      {/*  Slider  3 */}

      <div className={classes.slider}>
        <Heading textHeader="Upcoming" textButton="TV Shows & Movies" />
        <SliderA />
      </div>
    </Layout>
  );
}

export default MainPage;
