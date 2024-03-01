import Results from "@/components/Results";
import React from "react";

const SearchPage = async ({ params }) => {
  const searchTerm = params.searchTerm;
  const res = await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY}&query=${searchTerm}&language=fr-FR&page=1&include_adult=true`
  );
  const data = await res.json();
  const results = data.results;
  return (
    <div>
      {results &&
        results.length ===
        <h1 className="text-center pt-6">No results found</h1>}
      {results &&
        results.map((result) => {
          return <Results results={results} key={result.id} />;
        })}
    </div>
  );
};

export default SearchPage;
