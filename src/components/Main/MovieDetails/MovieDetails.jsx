import { AiFillStar } from "react-icons/ai";

import useFetch from "../../../hooks/useFetch";
import { useParams } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import MovieActors from "./MovieActors/MovieActors";
import { minutesToHours, roundToOneDec } from "../../../utils/helpers";
import "./moviedetails.css";

const MovieDetails = () => {
  let { id } = useParams();

  const url =
    import.meta.env.VITE_API_URL +
    id +
    "?api_key=" +
    import.meta.env.VITE_API_KEY +
    "&append_to_response=credits,videos";

  const { data: movie, isLoading, errorMessage } = useFetch(url);
  console.log("detail page", movie);

  let imgUrl = `https://image.tmdb.org/t/p/w1280`;
  let posterImgUrl = `https://image.tmdb.org/t/p/w300`;

  return (
    <>
      {isLoading && <p>Laddar...</p>}
      {errorMessage && <p>Något gick fel</p>}
      {movie && (
        <>
          <section
            className="movie-wrapper"
            style={{ "--img": `url(${imgUrl}${movie.backdrop_path})` }}
          >
            <div className="content-wrapper">
              <img
                src={`${posterImgUrl}${movie.poster_path}`}
                alt={`${movie.title} poster image`}
              />
              <div className="content-container">
                <div className="content-top">
                  <h1>
                    {movie.title} ({movie.release_date.slice(0, 4)})
                  </h1>
                  <div>
                    <p>
                      {movie.release_date} (
                      {movie.original_language.toUpperCase()})
                    </p>
                    <div className="genre-buttons">
                      {movie.genres.map((genre) => (
                        <button key={genre.id}>{genre.name}</button>
                      ))}
                    </div>
                    <p>{minutesToHours(movie.runtime)}</p>
                  </div>
                </div>
                <div className="content-middle">
                  <p>
                    <AiFillStar />
                    <span>{roundToOneDec(movie.vote_average)}</span>/10
                  </p>
                  <MarkAsSeenBtn />
                </div>
                <div className="content-bottom">
                  <h2>Overview</h2>
                  <p>{movie.overview}</p>
                </div>
              </div>
            </div>
          </section>
          <MovieActors cast={movie.credits.cast} />
        </>
      )}
    </>
  );
};

export default MovieDetails;
