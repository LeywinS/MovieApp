import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <>
      <div className="text-center mt-20">
        <Link className="p-5 text-center border rounded-lg" href={"/"}>
          Go to Home
        </Link>
      </div>
      <div className="mt-72 text-center text-3xl">Not Found</div>
    </>
  );
};

export default NotFound;
