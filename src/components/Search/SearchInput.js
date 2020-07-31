import React from "react";
import { useSearchStyles } from "../../styles";
import { Button, TextField } from "@material-ui/core";
import { SearchContext } from "../../App";

function SearchInput() {
  const classes = useSearchStyles();
  const [search, setSearch] = React.useState("");
  const { state } = React.useContext(SearchContext);
  React.useEffect(() => {
    state.searchMovie && setSearch(state.searchMovie);
  }, [])
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
export default SearchInput;
