import React from "react";
import { useSliderStyles } from "../../styles";
import { getSmallCard } from "../../data";
import { LoadingLargeIcon } from "../../icons";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSkeleton from "./MainSkeleton";
const SmallCard = React.lazy(() => import("./SmallCard"));


function SliderA() {
  const classes = useSliderStyles();
  let loading = false;

  return (
    <div className={classes.container}>
      {loading ? (
        <LoadingLargeIcon />
      ) : (
        <Slider
          className={classes.slide}
          dots={false}
          infinite
          speed={1000}
          touchThreshold={1000}
          variableWidth
          swipeToSlide
          arrows
          slidesToScroll={3}
          easing="ease-in-out"
        >
          {Array.from({ length: 10 }, () => getSmallCard()).map((card) => (
            <React.Suspense key={card.id} fallback={<MainSkeleton />}>
              <SmallCard card={card} />
            </React.Suspense>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderA;
