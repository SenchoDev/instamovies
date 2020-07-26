import React from "react";
import { useProfilePageStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { Hidden } from "@material-ui/core";
import { defaultCurrentUser } from "../data";
import ProfilePicture from "../components/shared/ProfilePicture";

function ProfilePage() {
  const classes = useProfilePageStyles();

  const isOwner = true;
  return (
    <Layout hideFooter title={`${defaultCurrentUser.name} (@${defaultCurrentUser.username})`}>
      <div className={classes.container}>
        <Hidden xsDown>
          <ProfilePicture isOwner={isOwner} />
        </Hidden>
      </div>
    </Layout>
  );
}

export default ProfilePage;
