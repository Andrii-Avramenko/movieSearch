import PropTypes from "prop-types";
import { Card, StyledLink, Image, MovieTitle, MovieTime, MovieDesc } from "./MoviePreview.styled";

const truncate = (str, max, suffix) => {
  if (!str) return;
  return str.length < max
    ? str
    : `${str.substr(0, str.substr(0, max - suffix.length).lastIndexOf(" "))}${suffix}`;
};

function MoviePreview({ id, title, posterPath, overview, releaseDate }) {
  const date = new Date(releaseDate)
  return (
    <Card>
      <StyledLink to={`/movies/${id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w600_and_h900_face${posterPath}`}
          alt={`${title}'s Poster`}
        />
        <div>
          <MovieTitle>{title}</MovieTitle>
          {!!date && <MovieTime>{date.toDateString()}</MovieTime>}
          {!!overview && <MovieDesc>{truncate(overview, 150, "...")}</MovieDesc>}
        </div>
      </StyledLink>
    </Card>
  );
}

export default MoviePreview;

MoviePreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  posterPath: PropTypes.string.isRequired,
  overview: PropTypes.string,
  releaseDate: PropTypes.string,
};