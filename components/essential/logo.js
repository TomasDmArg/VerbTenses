import React from "react";
import Link from "next/link";
import Image from "next/image";

export const Logo = ({ src }) => {
  const LINK = "/";
  return (
    <Link href={LINK}>
      <a className="components__essential--logo">
        <Image
          src={src}
          alt="logo"
          width={40}
          height={40}
          className="components__essential--logo--image"
        />
      </a>
    </Link>
  );
};
