import React from "react";
import { useNotificationListStyles } from "../../styles";
import { defaultNotifications } from "../../data";
import { Grid, Avatar, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import FollowButton from "../shared/FollowButton";
import useOutsideClick from "@rooks/use-outside-click";

function NotificationList({ handleHideList,  notifications, currentUserId }) {
  const classes = useNotificationListStyles();
  const listContainerRef = React.useRef();
  useOutsideClick(listContainerRef, handleHideList);

  React.useEffect(() => {
    const variables = {
      userId: currentUserId,
      lastChecked: newDate().toISOString()
    }
  }, [])

  return (
    <Grid ref={listContainerRef} container className={classes.listContainer}>
      {notifications.map((notification) => {
        return (
          <Grid key={notification.id} item className={classes.listItem}>
            <div className={classes.listItemWrapper}>
              <div className={classes.avatarWrapper}>
                <Avatar
                  src={notification.user.profile_image}
                  alt="User avatar"
                />
              </div>
              <div className={classes.nameWrapper}>
                <Link to={`/${notification.user.username}`}>
                  <Typography variant="body1">
                    {notification.user.username}
                  </Typography>
                </Link>
                <Typography
                  variant="body2"
                  color="secondary"
                  className={classes.typography}
                >
                  {`started following you. ${notification.created_at}`}
                </Typography>
              </div>
            </div>
            <div>
              <FollowButton id={notification.user.id}/>
            </div>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default NotificationList;
