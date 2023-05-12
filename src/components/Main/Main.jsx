import About from "./About/About";
import Contact from "./Contact/Contact";
import MovieDetails from "./MovieDetails/MovieDetails";
import MovieList from "./MovieList/MovieList";

const Main = () => {
  return (
    <div>
      <h1>Main</h1>
      <MovieList />
      <MovieDetails />
      <About />
      <Contact />
    </div>
  );
};

export default Main;
