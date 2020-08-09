import React from "react";
import { useGridPostStyles } from "../../styles";
import { Typography } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function GridPost({ card }) {
  const history = useHistory();
  const classes = useGridPostStyles();
  function handleChangeMovie() {
    history.push({
      pathname: `/m/${card.movie_id}`,
      state: {
        tv: card.movie_type === 'tv' ? true : false,
      },
    });
  }

  const commentsCount = card?.comment.comment_aggregate.aggregate.count;
  const favoriteMoviesCount = card?.comment.favorite_movies_aggregate.aggregate.count

  return (
    <div onClick={handleChangeMovie} className={classes.gridPostContainer}>
      <div className={classes.gridPostOverlay}>
        <div className={classes.gridPostInfo}>
          <span className={classes.likes} />
          <Typography>{favoriteMoviesCount}</Typography>
        </div>
        <div className={classes.gridPostInfo}>
          <span className={classes.comments} />
          <Typography>{commentsCount}</Typography>
        </div>
      </div>
      <img src={`https://image.tmdb.org/t/p/w185/${card.movie_image}`} alt="Post cover" className={classes.image} />
    </div>
  );
}

export default GridPost;
