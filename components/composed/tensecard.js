import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";

export const Card = ({ bgimg, name, desc, url }) => {
  const router = useRouter();
  const urlRoute = router.pathname;
  let img = "/" + bgimg.split("/")[1];
  return (
    <section
      className="components__card"
      onClick={() => {
        router.push(url);
      }}
    >
      <section className="components__card--img">
        <Image src={img} alt={name} layout="fill" />
      </section>
      <section className="components__card--content">
        <h3 className="components__card--title">{name}</h3>
        <p className="components__card--text">{desc}</p>
      </section>
    </section>
  );
};
