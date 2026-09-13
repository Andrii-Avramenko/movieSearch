import { useEffect, useState } from "react";
import { getTrending } from "../service/moviedb";

function Home() {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    async function loadTrending() {
      const results = await getTrending();
      setTrends(results.results);
    }

    loadTrending()
  }, []);

  return (
    <main>
      <h2>Trending today</h2>
      <ul>
        {trends.map((trend) => (
          <li key={trend.id}>
            <a href={`movieSearch/movies/${trend.id}`}>{trend.title || trend.name}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}

export default Home;
