import { useEffect, useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { getMovieDetails } from "../../service/moviedb";
import {
  BgWrapper,
  BgImage,
  Title,
  InfoWrapper,
  StyledNav,
  StyledLink,
} from "./MovieDetails.styled";
import { MdCameraRoll, MdPeople, MdReviews } from "react-icons/md";

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieDetails(movieId)
      .then(setMovie)
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;
  if (!movie) return null;
  
  const { backdrop_path, name, title } = movie;

  return (
    <div>
      <BgWrapper>
        <BgImage
          src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`}
          alt=""
        />
      </BgWrapper>
      <InfoWrapper>
        <Title>{title || name}</Title>
        <StyledNav>
          <StyledLink to="." end><MdCameraRoll /> Overview</StyledLink>
          <StyledLink to="./cast"><MdPeople /> Cast</StyledLink>
          <StyledLink to="./reviews"><MdReviews /> Reviews</StyledLink>
        </StyledNav>
        <Outlet context={movie} />
      </InfoWrapper>
    </div>
  );
};
