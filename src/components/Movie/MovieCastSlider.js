import React from "react";
import { useMovieStyles } from "../../styles";
import { getActorCard } from "../../data";
import { Typography } from "@material-ui/core";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieCastSlider({ seriesCast }) {
  const classes = useMovieStyles();
  return (
    <div className={classes.sliderContainer}>
      <Slider
        className={classes.slide}
        dots={false}
        infinite
        speed={1000}
        touchThreshold={1000}
        variableWidth
        swipeToSlide
        arrows
        slidesToScroll={4}
        easing="ease-in-out"
      >
        {Array.from({ length: 10 }, () => getActorCard()).map((card) => (
          <ActorCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
}

function ActorCard({ card }) {
  const classes = useMovieStyles();
  return (
    <div className={classes.actor}>
      <img src={card.image} alt="actor" className={classes.imageCard} />
      <div className={classes.imgTextContainer}>
        <Typography variant="body2" className={classes.realName}>
          {card.realName}
        </Typography>
        <p className={classes.name}>{card.name}</p>
      </div>
    </div>
  );
}

export default MovieCastSlider;
