import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {

  return (
    <div className="px-6 ">
      <h1 className="text-3xl py-4 text-white">{title}</h1>
      <div div className="flex overflow-x-scroll" style={{ overflow: "auto", scrollbarWidth: "thin" }
      }>
        <div className="flex">
          {movies && movies.length > 0 && movies.map((movie) => (
            <MovieCard key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div >
    </div >
  );
};

export default MovieList;
