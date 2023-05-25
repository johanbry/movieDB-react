import useFetch from "../../../hooks/useFetch";
//import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterDropDown from "../FilterDropDown/FilterDropDown";
import MovieCard from "../MovieCard/MovieCard";
import "./movielist.css";

const MovieList = () => {
  //const [filter, setFilter] = useState("popular");
  const [filter, setFilter] = useSearchParams({ filter: "popular" });

  const url =
    import.meta.env.VITE_API_URL +
    filter.get("filter") +
    "?api_key=" +
    import.meta.env.VITE_API_KEY;

  const { data: movies, isLoading, errorMessage } = useFetch(url);

  /* useEffect(() => {
  const fetchMovies = async () => {
    const res = fetch(url);
    const data = await res.json();
    setMovies(data);
  };
  fetchMovies();
}), []; */

  //(category) => {

  //};

  //api.themoviedb.org/3/movie/popular?api_key=<<api_key>>&language=en-US&page=1
  return (
    <div>
      <FilterDropDown filter={filter.get("filter")} setFilter={setFilter} />
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
