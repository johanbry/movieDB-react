import useFetch from "../../../hooks/useFetch";
import { useState, useCallback } from "react";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";
import "./movielist.css";

const MovieList = () => {
  const defaultUrl =
    import.meta.env.VITE_API_URL +
    "popular?api_key=" +
    import.meta.env.VITE_API_KEY;

  const [url, setUrl] = useState(defaultUrl);

  const { data: movies, isLoading, errorMessage } = useFetch(url);
  //console.log(movies, isLoading, errorMessage);

  const handleFilterChange = useCallback((category) => {
    console.log("handleFilter parent", category);
    setUrl(
      import.meta.env.VITE_API_URL +
        category +
        "?api_key=" +
        import.meta.env.VITE_API_KEY
    );
  }, []);
  //(category) => {

  //};

  //api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  return (
    <div>
      <FilterDropDown handleFilterChange={handleFilterChange} />
      {isLoading && <p>Laddar...</p>}
      {errorMessage && <p>Något gick fel</p>}
      {/* <section>{movies && <MovieCard movies={movies} />}</section> */}

      <section className="movie-grid">
        {movies &&
          movies.results.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
      </section>
    </div>
  );
};

export default MovieList;
