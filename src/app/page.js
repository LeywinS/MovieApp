import axios from "axios";
import Results from "@/components/Results";
const API_KEY = process.env.API_KEY;
const Home = async ({ searchParams }) => {
  const genre = searchParams.genre || "fetchTrending";
  const res = await fetch(
    `https://api.themoviedb.org/3${
      genre === "fetchTopRated" ? `/movie/top_rated` : `/trending/all/week`
    }?api_key=${API_KEY}&language=fr-FR&page=1`
  );
  const data = await res.json();
  if (!res.ok) {
    throw new Error("Fail to fetch data");
  }
  const results = data.results;

  return (
    <div>
      <Results results={results} />
    </div>
  );
};

export default Home;
