import Image from "next/image";
import React from "react";
import { AiOutlineLike } from "react-icons/ai";

const MoviePage = async ({ params }) => {
  const movieId = params.id;
  const res = await fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.API_KEY}`
  );
  const movie = await res.json();

  return (
    <div className=" max-w-6xl mx-auto flex flex-col">
      <h2 className="text-center text-3xl underline underline-offset-8 mt-5">
        {movie.title || movie.name}
      </h2>
      <div className="mt-10 mx-auto">
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            movie.backdrop_path || movie.poster_path
          }`}
          width={500}
          height={300}
          alt="pic"
        />
      </div>
      <div>
        <p className="text-xl mt-5">{movie.overview}</p>
        <div className="flex items-center justify-between mt-4">
          <p className="ml-5">{movie.release_date || movie.first_air_date}</p>
          <p className="flex items-center gap-2 mr-5">
            <AiOutlineLike />
            {movie.vote_count}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MoviePage;
