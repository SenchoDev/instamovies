import React from "react";
import { useMovieStyles } from "../../styles";
import { Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";

function MovieComments({ comments }) {
  
  const classes = useMovieStyles();
  return (
    <div className={classes.comments}>
      <Typography variant="h5">Comments section</Typography>
      {comments.map((comment) => (
        <div key={comment.id} className={classes.commentContainer}>
          <Link to={`/${comment.user.username}`}>
            <Avatar
              className={classes.commentImage}
              src={comment.user.profile_image}
            />
          </Link>
          <div className={classes.commentsInfo}>
            <div className={classes.commentsInfoHeader}>
              <Typography variant="body2" className={classes.commentName}>
                {comment.user.username}
              </Typography>
              <Typography variant="body1" className={classes.commentDate}>
                {comment.date}
              </Typography>
            </div>
            <Typography variant="body2" className={classes.commentContent}>
              {comment.content}
            </Typography>
          </div>
        </div>
      ))}
    </div>
  );
}

/**const variables = {
      content,
      postId,
      userId: currentUserId,
    };
    createComment({ variables, update: handleUpdate }); */


export default MovieComments;
