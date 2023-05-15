import NavLinks from "./NavLinks/NavLinks";
import MyMovies from "./MyMovies/MyMovies";
import "./header.css";

const Header = () => {
  return (
    <header>
      <h1>
        Movie<span>DB</span>
      </h1>
      <div>
        <NavLinks />
        <MyMovies />
      </div>
    </header>
  );
};

export default Header;
