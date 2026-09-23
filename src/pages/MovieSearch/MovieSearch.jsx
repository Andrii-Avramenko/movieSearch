import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "../../service/moviedb";
import MovieList from "../../components/MovieList/MovieList";
import { Container, Input } from "./MovieSearch.styled";

export const MovieSearch = () => {
  const [results, setResults] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams("");
  const query = searchParams.get("query");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!query) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    const timeoutId = setTimeout(async () => {
      const data = await searchMovie(query, 1);
      setResults(data.results);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter your search query"
        value={query}
        onChange={(e) => setSearchParams({ query: e.target.value })}
      />
      <h2>{!query ? "Search movies" : "Search results for " + query}</h2>
      {!!results && !isLoading && <MovieList movies={results} />}
      {isLoading && <p>Loading...</p>}
    </Container>
  );
};
