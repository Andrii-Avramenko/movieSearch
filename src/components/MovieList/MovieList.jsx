import MoviePreview from "../MoviePreview/MoviePreview";
import { StyledList } from "./MovieList.styled";

function MovieList({ movies }) {
  return (
    <StyledList>
      {movies.map((movie) => (
        <MoviePreview
          key={movie.id}
          id={movie.id}
          title={movie.title || movie.name}
          overview={movie.overview}
          posterPath={movie.poster_path}
          releaseDate={movie.release_date || movie.first_air_date}
        />
      ))}
    </StyledList>
  );
}

export default MovieList