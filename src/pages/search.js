import React from "react";
import { useSearchStyles } from "../styles";
import Layout from "../components/shared/Layout";
import { getSmallCard } from "../data";
import SmallCard from "../components/Cards/SmallCard";
import Pagination from '@material-ui/lab/Pagination'
import SearchInput from '../components/Search/SearchInput'
import { useSearchMovies } from "../utils/useSearchMovies";
import MainSkeleton from "../components/Cards/MainSkeleton";

function SearchPage() {
  const classes = useSearchStyles();

  const { data, loading } = useSearchMovies();

  console.log(data);
  
  return (
    <Layout>
      <div className={classes.section}>
        <SearchInput />
      </div>
      <div className={classes.moviesWrapper}>
      {loading ? (
        <div className={classes.wrap}>
          {Array.from({ length: 5 }).map((_, index) => (
            <MainSkeleton key={index}/>
          ))}
        </div>
      ) : data.map((card) => (
        <SmallCard key={card.id} card={card} showRating/>
      )) }
      
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
