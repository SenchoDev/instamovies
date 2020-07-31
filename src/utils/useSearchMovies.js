  
const API_KEY = '981f13a0';
const MOVIE_API_BASE_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;

const getMovies = async searchTerm => {
  try {
    const request = await fetch(`${MOVIE_API_BASE_URL}&s=${searchTerm}`);
    const json = await request.json();
    return json;
  } catch (error) {
    console.error('API:getMovies', error);
  }
};

const getMovie = async id => {
  try {
    const request = await fetch(`${MOVIE_API_BASE_URL}&i=${id}`);
    const json = await request.json();
    return json;
  } catch (error) {
    console.error('API:getMovie', error);
  }
};

export { getMovies, getMovie };