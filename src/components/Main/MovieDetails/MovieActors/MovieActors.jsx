import { Link } from "react-router-dom";
import "./movieActors.css";
const MovieActors = ({ cast }) => {
  let actorUrl = `https://image.tmdb.org/t/p/w185`;

  return (
    <section className="actors-list">
      <h3>Actors</h3>
      <div>
        {cast.map((actor) => (
          <Link to={`/actor/${actor.id}`} key={actor.id}>
            <div>
              <img
                src={`${actorUrl}${actor.profile_path}`}
                alt={`${actor.name} profile image`}
              />
              <p>{actor.name}</p>
              <p>as {actor.character}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MovieActors;
