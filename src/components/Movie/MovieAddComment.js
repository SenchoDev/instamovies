import React from "react";
import { useMovieStyles } from "../../styles";
import { Avatar, TextField, Button } from "@material-ui/core";
import { UserContext } from "../../App";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "../../graphql/mutations";
import { Link } from "react-router-dom";

function MovieAddComment({ movieId }) {
  const classes = useMovieStyles();
  const [content, setContent] = React.useState("");
  const { currentUserId } = React.useContext(UserContext);
  const [createComment] = useMutation(CREATE_COMMENT);
  const { me } = React.useContext(UserContext);

  function handleAddComment() {
    const variables = {
      content,
      movieId,
      userId: currentUserId,
    };
    createComment({ variables });
    setContent("");
  }
  return (
    <div className={classes.addComment}>
      <Link to={`/${me.username}`}>
        <Avatar src={me.profile_image} className={classes.addCommentImage} />
      </Link>
      <TextField
        className={classes.urlInput}
        onChange={(event) => setContent(event.target.value)}
        fullWidth
        margin="normal"
        placeholder="Add a comment..."
        color="secondary"
        value={content}
        type="comment"
      />
      <Button
        color="secondary"
        variant="contained"
        disabled={!content.trim()}
        className={classes.commentButton}
        onClick={handleAddComment}
      >
        Post
      </Button>
    </div>
  );
}

export default MovieAddComment;
