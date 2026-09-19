import { Routes, Route } from "react-router-dom";
import { StyledNav, StyledLink } from "./components/HeaderNav/StyledNav.styled";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { GlobalStyle } from "./components/GlobalStyle";
import { MovieDetails } from "./pages/MovieDetails/MovieDetails";
import { MovieSearch } from "./pages/MovieSearch";
import { Overview } from "./components/Overview/Overview";
import { Cast } from "./components/Cast/Cast";
import { Review } from "./components/Review/Review";

function App() {
  return (
    <>
      <StyledNav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/movies">Movies</StyledLink>
      </StyledNav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MovieSearch />}></Route>
          <Route path=":movieId" element={<MovieDetails />}>
            <Route index element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
            <Route />
            <Route />
          </Route>
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
