"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Suspense } from "react";

const SearchBox = () => {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/search/${search}`);
  };
  return (
    <Suspense>
      <form
        className="flex justify-between px-5 max-w-6xl mx-auto"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search..."
          className="w-full h-14 placeholder-gray-500 outline-none bg-transparent flex-1"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="text-amber-600" disabled={!search}>
          Search
        </button>
      </form>
    </Suspense>
  );
};

export default SearchBox;
