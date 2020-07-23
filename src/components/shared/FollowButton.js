import React from "react";
import { useFollowButtonStyles } from "../../styles";
import { Button } from "@material-ui/core";

function FollowButton() {
  const classes = useFollowButtonStyles();
  const [isFollowing, setFollowing] = React.useState(false);

  const followButton = (
    <Button
      variant="contained"
      color="secondary"
      className={classes.button}
      onClick={() => setFollowing(true)}
      fullWidth
    >
      Follow
    </Button>
  );
  const followingButton = (
    <Button
      variant={"outlined"}
      className={classes.button}
      onClick={() => setFollowing(false)}
      fullWidth
    >
      Following
    </Button>
  );
  return isFollowing ? followingButton : followButton;
}

export default FollowButton;
