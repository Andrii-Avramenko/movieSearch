import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "../../service/moviedb";
import {
  ReviewsList,
  ReviewCard,
  ReviewAuthor,
  AuthorImage,
  Name,
  Username,
  PostDate,
  ReviewContent,
} from "./Review.styled";

export const Review = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    getMovieReviews(movieId, 1)
      .then(({ results }) => setReviews(results))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, [movieId]);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <h2>Error</h2>;
  if (!reviews || !reviews.length) return <h2>No reviews found!</h2>;

  console.log(reviews);

  return (
    <ReviewsList>
      {reviews.map((review) => (
        <ReviewCard key={review.id}>
          <ReviewAuthor>
            <AuthorImage $path={review.author_details.avatar_path} />
            <div>
              <Name>{review.author}</Name>
              <Username>@{review.author_details.username}</Username>
            </div>
            <PostDate>{new Date(review.created_at).toDateString()}</PostDate>
          </ReviewAuthor>
          <ReviewContent>{review.content}</ReviewContent>
        </ReviewCard>
      ))}
    </ReviewsList>
  );
};
