import React from "react";
import Image from "next/image";

const loading = () => {
  return (
    <div className="flex justify-center mt-16">
      <Image className="h-52" src="spinner.svp" alt="loading..." />
    </div>
  );
};

export default loading;
