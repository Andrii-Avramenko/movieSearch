import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const Movies = lazy(() => import("./pages/Movies"));
const MovieDetails = lazy(() => import("./pages/MovieDetails/MovieDetails"));
const MovieSearch = lazy(() => import("./pages/MovieSearch/MovieSearch"));
const Overview = lazy(() => import("./components/Overview/Overview"));
const Cast = lazy(() => import("./components/Cast/Cast"));
const Review = lazy(() => import("./components/Review/Review"));
import { GlobalStyle } from "./components/GlobalStyle";
import { HeaderNav } from "./components/HeaderNav/HeaderNav";
import { NotFound } from "./pages/NotFound/NotFound";

function App() {
  return (
    <>
      <HeaderNav />
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      <GlobalStyle />
    </>
  );
}

export default App;
