import React from 'react'
import { useMoviesStyles } from "../styles";
import { Typography } from "@material-ui/core";
import Layout from "../components/shared/Layout";
import SemiCard from "../components/Cards/SemiCard";
import TertiarySkeleton from "../components/Cards/TertiarySkeleton";
import { useParams } from "react-router-dom";
import { useFetchList } from "../utils/useFetchList";

function TvsPage() {
  const { type } = useParams();
  const [movieData, setMovieData] = React.useState({})

  React.useEffect(() => {
    //useFetchList(setMovieData, type);
    window.scrollTo(0, 0);
  }, [type]);

  
  const classes = useMoviesStyles();
  const displayText =
    type === "top_rated"
      ? "Top Rated Movies"
      : type === "upcoming"
      ? "Upcoming Movies"
      : type === "popular"
      ? "Popular Movies"
      : "Not Found";
  return (
    <Layout>
      <Typography variant="h4" color="secondary" className={classes.heading}>
        {displayText}
      </Typography>
      <div className={classes.movies}>
        {movieData.length > 0 && movieData.map((card) => (
          <React.Suspense key={card.id} fallback={<TertiarySkeleton />}>
            <SemiCard showRating card={card} />
          </React.Suspense>
        ))}
      </div>
    </Layout>
  );
}

export default TvsPage;
