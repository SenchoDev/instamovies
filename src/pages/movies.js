import React from "react";
import { useMoviesStyles } from "../styles";
import { Typography } from "@material-ui/core";
import { getSemiCard } from "../data";
import Layout from "../components/shared/Layout";
import SemiCard from "../components/Cards/SemiCard";
import TertiarySkeleton from "../components/Cards/TertiarySkeleton";

function MoviesPage() {
  const classes = useMoviesStyles();

  return (
    <Layout>
      <Typography variant="h4" color="secondary" className={classes.heading}>
        Top Rated Tv Shows
      </Typography>
      <div className={classes.movies}>
        {Array.from({ length: 20 }, () => getSemiCard()).map((card) => (
          <React.Suspense key={card.id} fallback={<TertiarySkeleton />}>
            <SemiCard showRating card={card} />
          </React.Suspense>
        ))}
      </div>
    </Layout>
  );
}

export default MoviesPage;
