import React from "react";
import { useProfileTabsStyles } from "../../styles";
import { Divider, Hidden, Tabs, Tab, Typography } from "@material-ui/core";
import { SaveIcon, LikeIcon } from "../../icons";
import GridPost from "../shared/GridPost";

function ProfileTabs({ user, isOwner }) {
  const classes = useProfileTabsStyles();

  const [value, setValue] = React.useState(0);

  return (
    <React.Fragment>
      <section className={classes.section}>
        <Hidden xsDown>
          <Divider />
        </Hidden>
        <Hidden xsDown>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={
                <LikeIcon
                  className={classes.likeIcon}
                  fill={value === 0 ? "#AA2CA8" : undefined}
                />
              }
              label="FAVORITES"
              classes={{
                root: classes.tabRoot,
                labelIcon: classes.tabLabelIcon,
                wrapper: classes.tabWrapper,
              }}
            />
            {isOwner && (
              <Tab
                icon={<span className={classes.savedIconLarge} />}
                label="WATCHLIST"
                classes={{
                  root: classes.tabRoot,
                  labelIcon: classes.tabLabelIcon,
                  wrapper: classes.tabWrapper,
                }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>
          <Tabs
            value={value}
            onChange={(_, value) => setValue(value)}
            centered
            className={classes.tabs}
            classes={{ indicator: classes.tabsIndicator }}
          >
            <Tab
              icon={<LikeIcon fill={value === 0 ? "#AA2CA8" : undefined} />}
              classes={{ root: classes.tabRoot }}
            />
            {isOwner && (
              <Tab
                icon={<SaveIcon fill={value === 1 ? "#AA2CA8" : undefined} />}
                classes={{ root: classes.tabRoot }}
              />
            )}
          </Tabs>
        </Hidden>
        <Hidden smUp>{user.favorite_movies.length === 0 && <Divider />}</Hidden>
        {value === 0 && <ProfilePosts user={user} isOwner={isOwner} />}
        {value === 1 && <SavedPosts user={user} />}
      </section>
    </React.Fragment>
  );
}

function ProfilePosts({ user, isOwner }) {
  const classes = useProfileTabsStyles();

  if (user.favorite_movies.length === 0) {
    return (
      <section className={classes.profilePostsSection}>
        <div className={classes.noContent}>
          <div className={classes.uploadPhotoIcon} />
          <Typography variant="h4" align="center">
            {isOwner
              ? "Find and save your favorite movies"
              : "No favorite movies"}
          </Typography>
        </div>
      </section>
    );
  }

  return (
    <article className={classes.article}>
      <div className={classes.postContainer}>
        {user.favorite_movies.map((card) => (
          <GridPost key={card.id} card={card} />
        ))}
      </div>
    </article>
  );
}

function SavedPosts({ user }) {
  const classes = useProfileTabsStyles();

  if (user.watchlist_movies.length === 0) {
    return (
      <section className={classes.savedPostsSection}>
        <div className={classes.noContent}>
          <div className={classes.savePhotoIcon} />
          <Typography variant="h4">Add to watchlist</Typography>
          <Typography align="center">
            Save movies and tv that you want to watch. No one is notified, and
            only you can see what you've added.
          </Typography>
        </div>
      </section>
    );
  }
  return (
    <article className={classes.article}>
      <div className={classes.postContainer}>
        {user.watchlist_movies.map(card => (
          <GridPost key={card.id} card={card} />
        ))}
      </div>
    </article>
  );
}

export default ProfileTabs;
