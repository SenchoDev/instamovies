import React from "react";
import { useMovieStyles } from "../../styles";
import { Avatar, TextField, Button } from "@material-ui/core";
import { defaultUser } from "../../data";

function MovieAddComment({ comments }) {
  const classes = useMovieStyles();

  const [comment, setComment] = React.useState("");
  return (
    <div className={classes.addComment}>
      <Avatar
        src={defaultUser.profile_image}
        className={classes.addCommentImage}
      />
      <TextField
        className={classes.urlInput}
        onChange={(event) => setComment(event.target.value)}
        fullWidth
        margin="normal"
        placeholder="Add a comment..."
        color="secondary"
        value={comment}
        type="comment"
      />
      <Button
        color="secondary"
        variant="contained"
        disabled={!comment.trim()}
        className={classes.commentButton}
      >
        Post
      </Button>
    </div>
  );
}

export default MovieAddComment;
