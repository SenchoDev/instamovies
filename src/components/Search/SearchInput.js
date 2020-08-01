import React from "react";
import { useSearchStyles } from "../../styles";
import { Button, TextField } from "@material-ui/core";

function SearchInput({handleSearchChange, search, submitSearch}) {
  const classes = useSearchStyles();

  return (
    <div className={classes.searchField}>
      <TextField
        className={classes.urlInput}
        onChange={handleSearchChange}
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
        onClick={submitSearch}
      >
        Search
      </Button>
    </div>
  );
}
export default SearchInput;
