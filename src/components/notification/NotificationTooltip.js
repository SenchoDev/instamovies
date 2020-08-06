import React from "react";
import { useNavbarStyles } from "../../styles";
import { Typography } from "@material-ui/core";

function NotificationTooltip({ notifications }) {
  const classes = useNavbarStyles();


  return (
    <div className={classes.tooltipContainer}>
      {notifications.length > 0 && <div className={classes.tooltip}>
        <span aria-label="Followers" className={classes.followers} />
        <Typography>{notifications.length}</Typography>
      </div> }

    </div>
  );
}

export default NotificationTooltip;
