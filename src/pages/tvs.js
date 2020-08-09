import React from "react";
import { useMoviesStyles } from "../styles";
import { Typography } from "@material-ui/core";
import Layout from "../components/shared/Layout";
import SemiCard from "../components/Cards/SemiCard";
import TertiarySkeleton from "../components/Cards/TertiarySkeleton";
import { useParams } from "react-router-dom";
import { useFetchList } from "../utils/useFetchList";
import usePageBottom from "../utils/usePageBottom";

function TvsPage() {
  const { list } = useParams();
  const { data, loading, error } = useFetchList(list, "tv");
  const isPageBottom = usePageBottom();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const classes = useMoviesStyles();
  const displayText =
    list === "top_rated"
      ? "Top Rated Tv Shows"
      : list === "airing_today"
      ? "On TV"
      : list === "popular"
      ? "Popular Tv Shows"
      : "Not Found";
  return (
    <Layout>
      <Typography variant="h4" color="secondary" className={classes.heading}>
        {error ? "Error. Cannot found movies" : displayText}
      </Typography>
      <div className={classes.movies}>
        {loading &&
          Array.from({ length: 20 }).map((_, index) => (
            <TertiarySkeleton key={index} />
          ))}
        {data.length > 0 &&
          data.map((card) => (
            <SemiCard key={card.id} showRating card={card} loading={loading} />
          ))}
      </div>
    </Layout>
  );
}

export default TvsPage;
