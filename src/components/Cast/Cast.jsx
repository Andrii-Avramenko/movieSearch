import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../service/moviedb";
import {
  CardCollection,
  Card,
  Image,
  ActorInfo,
  Name,
  Character,
} from "./Cast.styled";

export const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieCredits(movieId)
      .then(({ cast }) => setCast(cast))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <h2>Error</h2>;
  if (!cast) return null;

  return (
    <CardCollection>
      {cast.map((actor) => (
        <Card key={actor.id}>
          <Image
            src={`https://image.tmdb.org/t/p/w138_and_h175_face${actor.profile_path}`}
            alt={`${actor.name}'s picture`}
          />
          <ActorInfo>
            <Name>{actor.name}</Name>
            <Character>{actor.character}</Character>
          </ActorInfo>
        </Card>
      ))}
    </CardCollection>
  );
};
