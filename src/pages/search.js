import React from "react";
import { useSearchStyles } from "../styles";
import Layout from "../components/shared/Layout";
import SmallCard from "../components/Cards/SmallCard";
import Pagination from "@material-ui/lab/Pagination";
import SearchInput from "../components/Search/SearchInput";
import { useSearchMovies } from "../utils/useSearchMovies";
import MainSkeleton from "../components/Cards/MainSkeleton";
import { SearchContext } from "../App";
import { Typography } from "@material-ui/core";

import { LoadingLargeIcon } from "../icons";

function SearchPage() {
  const classes = useSearchStyles();
  const [search, setSearch] = React.useState("");
  const [page, setPage] = React.useState(1);
  const { state } = React.useContext(SearchContext);
  const [searchRequest, setSearchRequest] = React.useState("");

  const { data, loading } = useSearchMovies(searchRequest, page);

  function submitSearch() {
    setSearchRequest(search);
  }

  function handleSearchChange(event) {
    setPage(1);
    setSearch(event.target.value);
  }

  const handleChange = (event, value) => {
    setPage(value);
  };

  React.useEffect(() => {
    state.searchMovie && setSearchRequest(state.searchMovie);
  }, [state.searchMovie]);


  return (
    <Layout>
      <div className={classes.section}>
        <SearchInput
          handleSearchChange={handleSearchChange}
          submitSearch={submitSearch}
          search={search}
        />
      </div>
      {loading &&  (
        <div className={classes.loading}>
          <LoadingLargeIcon />
        </div>
      )}
      <div className={classes.moviesWrapper}>
        {data.length > 0 ? (
          data.map((card) => (
            <React.Suspense
              key={card.id}
              fallback={<MainSkeleton key={card.id} />}
            >
              <SmallCard card={card} showRating />
            </React.Suspense>
          ))
        ) : data.length === undefined ? (
          <Typography variant="h4" className={classes.returnText}>
            Search movies
          </Typography>
        ) : (
          <Typography variant="h4" className={classes.returnText}>
            Search again
          </Typography>
        )}
      </div>
      {data.length > 0 && (
        <Pagination
          count={2}
          page={page}
          color="secondary"
          className={classes.pagination}
          onChange={handleChange}
        />
      )}
    </Layout>
  );
}

export default SearchPage;
