import React from 'react'
import { useMovieStyles } from '../styles';
import Layout from '../components/shared/Layout';


function MoviePage() {

  const classes = useMovieStyles();
  return (
    <Layout movieLarge image={'https://i.ibb.co/BHpXCkS/movie-Large.png'}>
      hello
    </Layout>
  )
}

export default MoviePage;

// background-image: linear-gradient(to right bottom, rgba($color-primary-light, 0.8), rgba($color-primary-dark, 0.8)),
//     url(../img/hero-small.jpg);
//   background-size:cover;
//   background-position: top;
