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
        {seriesCast?.slice(0, 25).map((card) => (
          <ActorCard key={card.id} card={card} />
        ))}
      </Slider>
    </div>
  );
}

function ActorCard({ card }) {
  const classes = useMovieStyles();
  const { profile_path, character, name } = card;
  return (
    <div className={classes.actor}>
      <img src={profile_path ? `https://image.tmdb.org/t/p/w154/${profile_path}` : `https://i.ibb.co/s23qmSS/Group-40.png` } alt="actor" className={classes.imageCard} />
      <div className={classes.imgTextContainer}>
        <Typography variant="body2" className={classes.realName}>
          {name}
        </Typography>
        <p className={classes.name}>{character}</p>
      </div>
    </div>
  );
}

export default MovieCastSlider;
