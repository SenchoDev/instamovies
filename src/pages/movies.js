import React from "react";
import { useMoviesStyles } from "../styles";
import { Typography } from "@material-ui/core";
import Layout from "../components/shared/Layout";
import SemiCard from "../components/Cards/SemiCard";
import TertiarySkeleton from "../components/Cards/TertiarySkeleton";
import { useParams } from "react-router-dom";
import { useFetchList } from "../utils/useFetchList";

function MoviesPage() {
  const { list } = useParams();
  const [movieData, setMovieData] = React.useState({});

  //useFetchList(setMovieData, list, "movie");
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useMoviesStyles();
  const displayText =
    list === "top_rated"
      ? "Top Rated Movies"
      : list === "upcoming"
      ? "Upcoming Movies"
      : list === "popular"
      ? "Popular Movies"
      : "Not Found";
  return (
    <Layout>
      <Typography variant="h4" color="secondary" className={classes.heading}>
        {displayText}
      </Typography>
      <div className={classes.movies}>
        {movieData.length > 0 &&
          movieData.map((card) => (
            <React.Suspense key={card.id} fallback={<TertiarySkeleton />}>
              <SemiCard showRating card={card} />
            </React.Suspense>
          ))}
      </div>
    </Layout>
  );
}

export default MoviesPage;
