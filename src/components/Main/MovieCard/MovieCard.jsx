import { Link } from "react-router-dom";
import MarkAsSeenBtn from "../MarkAsSeenBtn/MarkAsSeenBtn";
import "./moviecard.css";

const MovieCard = ({ movie }) => {
  const imgUrl = "https://image.tmdb.org/t/p/w500/";
  return (
    <>
      <article className="gradient">
        <Link to={movie.id.toString()}>
          <img
            src={imgUrl + movie.poster_path}
            alt={movie.title}
            style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          />
          <div className="movie-details">
            <h3>{movie.title}</h3>
            <MarkAsSeenBtn />
          </div>
        </Link>
      </article>
    </>
  );
};
export default MovieCard;
