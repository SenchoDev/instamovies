import React from "react";
import { useMainPageStyles } from "../styles";
import Layout from "../components/shared/Layout";

function MainPage() {
  const classes = useMainPageStyles();

  return (
    <Layout>
      <h1>hello</h1>
    </Layout>
  );
}

export default MainPage;
