import React from "react";
import { useSliderStyles } from "../../styles";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MainSkeleton from "../Cards/MainSkeleton";
const SmallCard = React.lazy(() => import("../Cards/SmallCard"));

function SliderA({ data, loading }) {
  const classes = useSliderStyles();

  return (
    <div className={classes.container}>
      {loading ? (
        <div className={classes.wrap}>
          {Array.from({ length: 5 }).map((_, index) => (
            <MainSkeleton key={index}/>
          ))}
        </div>
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
          {data.map((card, index) => (
            <React.Suspense key={index} fallback={<MainSkeleton />}>
              <SmallCard card={card} />
            </React.Suspense>
          ))}
        </Slider>
      )}
    </div>
  );
}

export default SliderA;
