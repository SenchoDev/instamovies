import React from "react";
import { useSearchStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { getSmallCard } from "../data";
import SmallCard from "../components/Cards/SmallCard";
import Pagination from '@material-ui/lab/Pagination'
import SearchInput from '../components/Search/SearchInput'

function SearchPage() {
  const classes = useSearchStyles();
  
  return (
    <Layout>
      <div className={classes.section}>
        <SearchInput />
      </div>
      <div className={classes.moviesWrapper}>
        
      </div>
      <Pagination count={10} color="secondary" className={classes.pagination} />
    </Layout>
  );
}

/**
 * {Array.from({ length: 24 }, () => getSmallCard()).map((card) => (
          <SmallCard key={card.id} card={card} showRating/>
        ))}
 */


export default SearchPage;
