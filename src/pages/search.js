import React from "react";
import { useSearchStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { getSmallCard } from "../data";
import SmallCard from "../components/Cards/SmallCard";
import Pagination from "@material-ui/lab/Pagination";
import SearchInput from "../components/Search/SearchInput";
import { useSearchMovies } from "../utils/useSearchMovies";
import MainSkeleton from "../components/Cards/MainSkeleton";
import { SearchContext } from "../App";
import { Typography } from "@material-ui/core";

function SearchPage() {
  const classes = useSearchStyles();
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { state } = React.useContext(SearchContext);
  const { data, loading } = useSearchMovies(search, page);

  function handleSearchChange(event) {
    setPage(1);
    setSearch(event.target.value);
  }
  React.useEffect(() => {
    state.searchMovie && setSearch(state.searchMovie);
  }, [state.searchMovie]);

  return (
    <Layout>
      <div className={classes.section}>
        <SearchInput handleSearchChange={handleSearchChange} search={search} />
      </div>
      <div className={classes.moviesWrapper}>
        {loading ? (
          <React.Fragment>
            {Array.from({ length: data.length > 0 ? data.length : 12 }).map(
              (_, index) => (
                <MainSkeleton key={index} />
              )
            )}
          </React.Fragment>
        ) : data.length > 0 ? (
          data.map((card) => <SmallCard key={card.id} card={card} showRating />)
        ) : (
          <Typography
            className={classes.returnText}
            variant="h4"
            color="secondary"
          >
            Search movies
          </Typography>
        )}
      </div>
      <Pagination count={10} color="secondary" className={classes.pagination} />
    </Layout>
  );
}

export default SearchPage;
