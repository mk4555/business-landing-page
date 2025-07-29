import React from "react";
import Image from "next/image";

export const Carousel = () => {
  return (
    <div>
      <Image
        src="/carousel-image.jpg"
        alt="Carousel Image"
        className="w-full h-auto"
      />
      Carousel
    </div>
  );
};
