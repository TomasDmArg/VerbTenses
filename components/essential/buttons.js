import React from "react";
import Link from "next/link";
export const Button = ({ href, text }) => {
  return (
    <React.Fragment>
      <Link href={href}>
        <a className="components__essential--button">{text}</a>
      </Link>
    </React.Fragment>
  );
};
export const CustomButton = ({ children }) => {
  return <a className="components__essential--button">{children}</a>;
};
export const SecButton = ({ href, text, isActive }) => {
  return (
    <Link href={href}>
      <a className={`components__essential--link ${isActive ? "active" : ""}`}>
        {text}
      </a>
    </Link>
  );
};
