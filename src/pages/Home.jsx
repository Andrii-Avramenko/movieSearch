import { useEffect, useState } from "react";
import { getTrending } from "../service/moviedb";
import MovieList from "../components/MovieList/MovieList";

function Home() {
  const [trends, setTrends] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true)
    async function loadTrending() {
      const results = await getTrending();
      setTrends(results.results);
      setIsLoading(false)
    }

    loadTrending();
  }, []);

  console.log(trends)
  return (
    <main>
      <h2 style={{margin: '80px 0 20px', textAlign: 'center'}}>Trending today</h2>
      {!!trends && !isLoading && <MovieList movies={trends} />}
      {isLoading && <p>Loading...</p>}
    </main>
  );
}

export default Home;
