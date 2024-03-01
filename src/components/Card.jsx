import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FiThumbsUp } from "react-icons/fi";

const Card = ({ result }) => {
  return (
    <div className="group cursor-pointer sm:hover:shadow-slate-400 rounded-lg sm:border sm:border-slate-400 shadow-slate-300 m-1">
      <Link href={`/movies/${result.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            result.backdrop_path ||
            result.poster_path ||
            "https://firebasestorage.googleapis.com/v0/b/mern-blog-ff822.appspot.com/o/nOTFOUND.jpg?alt=media&token=36034bce-3c99-4adb-a359-8ded1c07b1de"
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-75 transition-opacity duration-3000"
          alt="result.original_title"
        />
        <div className="pl-2">
          <p className="line-clamp-2 text-md">{result.overview}</p>
          <h2 className="text-lg font-bold truncate text-center">
            {result.title || result.name}
          </h2>
          <div className="flex items-center justify-center">
            <p>{result.release_date || result.first_air_date}</p>
            <FiThumbsUp className="h-5 mr-1 ml-3" />
            {result.vote_count}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
