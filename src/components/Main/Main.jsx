import { Route, Routes } from "react-router-dom";
import About from "./About/About";
import Contact from "./Contact/Contact";
import MovieDetails from "./MovieDetails/MovieDetails";
import MovieList from "./MovieList/MovieList";
import Actor from "./Actor/Actor";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path=":id" element={<MovieDetails />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="actor/:id" element={<Actor />} />
      </Routes>
    </main>
  );
};

export default Main;
