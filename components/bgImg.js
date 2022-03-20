import React from "react";
import Image from "next/image";
export const BgImg = ({ src, nextPage }) => {
  return (
    <section className={`components__bg-img ${nextPage ? "next" : ""}`}>
      <Image
        src={src}
        alt="bgImg"
        layout="fill"
        className="components__bg-img--image"
      />
    </section>
  );
};
