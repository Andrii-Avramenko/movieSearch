import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";
import { GlobalStyle } from "./components/GlobalStyle";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import MovieSearch from "./pages/MovieSearch/MovieSearch";
import Overview from "./components/Overview/Overview";
import Cast from "./components/Cast/Cast";
import Review from "./components/Review/Review";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <HeaderNav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="movies" element={<Movies />}>
          <Route index element={<MovieSearch />} />
          <Route path=":movieId" element={<MovieDetails />}>
            <Route index element={<Overview />} />
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Review />} />
          </Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <GlobalStyle />
    </>
  );
}

export default App;
