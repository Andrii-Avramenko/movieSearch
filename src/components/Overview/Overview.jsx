import { useOutletContext } from "react-router-dom";
import { OverviewWrapper, Title, Desc } from "./Overview.styled";
import { InfoCard } from "../InfoCard.styled";

export const Overview = () => {
  const movie = useOutletContext();
  return (
    <>
      <Title>Descibtion</Title>
      <OverviewWrapper>
        <Desc>{movie.overview}</Desc>
        <InfoCard>
          {!!movie.status && (
            <div>
              <h3>Status</h3>
              <p>{movie.status}</p>
            </div>
          )}
          {!!movie.release_date && (
            <div>
              <h3>Release Date</h3>
              <p>{new Date(movie.release_date).toDateString()}</p>
            </div>
          )}
          {!!movie.budget && (
            <div>
              <h3>Budget</h3>
              <p>${movie.budget}</p>
            </div>
          )}
          {!!movie.revenue && (
            <div>
              <h3>Revenue</h3>
              <p>${movie.revenue}</p>
            </div>
          )}
          {!!movie.genres && (
            <div>
              <h3>Genres</h3>
              <p>{movie.genres.map(g => g.name).join(', ')}</p>
            </div>
          )}
          {!!movie.homepage && (
            <div>
              <h3>Website</h3>
              <a href={movie.homepage} target="_blank">{movie.homepage}</a>
            </div>
          )}
        </InfoCard>
      </OverviewWrapper>
    </>
  );
};
