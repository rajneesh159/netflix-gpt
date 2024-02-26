import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondaryContainer = () => {

  const movies = useSelector(store => store.movies)
  return (
    <div className=' bg-black'>

      <div className='-mt-24 md:-mt-50 pl-4 md:pl-12 relative z-20'>
        <MovieList title={"Now Playing"}
          movies={movies.nowPlayingMovies} />
        <MovieList title={"Tredning "}
          movies={movies.nowPlayingMovies} />
        <MovieList title={"Popular "}
          movies={movies.nowPlayingMovies} />
        <MovieList title={"Upcoming Movies"}
          movies={movies.nowPlayingMovies} />
        <MovieList title={"Thirller"}
          movies={movies.nowPlayingMovies} />
      </div>


    </div>
  )
}

export default SecondaryContainer