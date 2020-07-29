import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

import MainHeader from "../components/Main/MainHeader";
import MainAbout from "../components/Main/MainAbout";
import SliderA from "../components/shared/Slider";
import Heading from "../components/shared/Heading";
import BigCard from "../components/Cards/BigCard";
import { getTrailerCard } from "../data";
import LoadingScreen from "../components/shared/LoadingScreen";
import SecondSkeleton from "../components/Cards/MainSkeleton";

function MainPage() {
  const classes = useMainPageStyles();

  const loading = false;

  if (loading) return <LoadingScreen />;

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
            <React.Suspense key={card.id} fallback={<SecondSkeleton/>}>
              <BigCard card={card} />
            </React.Suspense>
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
