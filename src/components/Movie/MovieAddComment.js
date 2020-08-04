import React from "react";
import { useMovieStyles } from "../../styles";
import { Avatar, TextField, Button } from "@material-ui/core";
import { defaultUser } from "../../data";
import { UserContext } from "../../App";
import { useMutation } from "@apollo/react-hooks";
import { CREATE_COMMENT } from "../../graphql/mutations";


function MovieAddComment({ movieId }) {
  const classes = useMovieStyles();
  const [content, setContent] = React.useState("");
  const { currentUserId } = React.useContext(UserContext);
  const [createComment] = useMutation(CREATE_COMMENT)

  function handleAddComment() {
    const variables = {
      content,
      movieId,
      userId: currentUserId,
    };
    createComment({ variables });
    setContent('')
  }
  return (
    <div className={classes.addComment}>
      <Avatar
        src={defaultUser.profile_image}
        className={classes.addCommentImage}
      />
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
