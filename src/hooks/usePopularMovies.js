//fetch data from tmdb api and update store
import { API_OPTIONS } from '../utils/constants';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addPopularMovies } from '../utils/moviesSlice';

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = useSelector(store => store.movies.popularMovies)

  const getPopularMovies = async () => {
    try {
      const data = await fetch("https://api.themoviedb.org/3/movie/popular?page=1", API_OPTIONS);

      if (!data.ok) {
        throw new Error(`HTTP error! Status: ${data.status}`);
      }

      const json = await data.json();

      dispatch(addPopularMovies(json.results));
    } catch (error) {
      console.error("Error fetching popular movies:", error);
    }
  };

  useEffect(() => {
    popularMovies && getPopularMovies();
  }, []);
};

export default usePopularMovies;
