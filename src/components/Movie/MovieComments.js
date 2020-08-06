import React from "react";
import { useMovieStyles } from "../../styles";
import { Typography, Avatar } from "@material-ui/core";
import { Link } from "react-router-dom";
import { formatDateToNowShort } from "../../utils/formatDate";
import { LoadingIcon } from "../../icons";

function MovieComments({ comments, loading }) {
  const classes = useMovieStyles();
  if (loading || comments === null) return <LoadingIcon />;
  return (
    <div className={classes.comments}>
      <Typography variant="h4">Comments section</Typography>
      {comments.length === 0 ? (
        <Typography
          variant="h5"
          color="secondary"
          style={{ marginTop: "20px" }}
        >
          No commments
        </Typography>
      ) : null}
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
                {formatDateToNowShort(comment.created_at)} 
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
export default MovieComments;
