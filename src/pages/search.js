import React from "react";
import { useSearchStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { Button, TextField } from "@material-ui/core";
import { getSmallCard } from "../data";
import SmallCard from "../components/shared/SmallCard";

function SearchPage() {
  const classes = useSearchStyles();

  return (
    <Layout>
      <div className={classes.section}>
        <SearchInput />
      </div>
      <div className={classes.moviesWrapper}>
        {Array.from({ length: 24 }, () => getSmallCard()).map((card) => (
          <SmallCard key={card.id} card={card} showRating/>
        ))}
      </div>
    </Layout>
  );
}

function SearchInput() {
  const classes = useSearchStyles();
  const [search, setSearch] = React.useState("");
  return (
    <div className={classes.searchField}>
      <TextField
        className={classes.urlInput}
        onChange={(event) => setSearch(event.target.value)}
        fullWidth
        margin="normal"
        placeholder="Search for a movie, tv show, person..."
        color="secondary"
        value={search}
        type="search"
        variant="outlined"
        InputProps={{
          style: {
            height: 40,
          },
        }}
      />
      <Button
        color="secondary"
        variant="contained"
        disabled={!search.trim()}
        className={classes.searchButton}
      >
        Search
      </Button>
    </div>
  );
}

export default SearchPage;
