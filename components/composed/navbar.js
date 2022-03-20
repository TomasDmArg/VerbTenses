import React from "react";
import { Logo } from "../essential/logo";
import { SecButton } from "../essential/buttons";
import { useRouter } from "next/router";
export const Navbar = ({ active }) => {
  const Routes = [
    ["/", "Home"],
    ["/tenses/present-simple", "Present Simple"],
    ["/tenses/present-continuous", "Present Continuous"],
    ["/tenses/past-simple", "Past Simple"],
    ["/tenses/future", "Future"],
  ];
  let pathname = Routes.find(([path, text]) => path === active);
  pathname = pathname ? pathname : "/";
  // pathname = (pathname.length > 1) ? pathname.join("") : pathname;
  return (
    <header className="header">
      <Logo src="/logo.png" />
      <nav className="header__nav">
        {Routes.map((route) => (
          <SecButton
            key={route[0]}
            href={route[0]}
            text={route[1]}
            isActive={route[0] == pathname[0]}
          />
        ))}
      </nav>
    </header>
  );
};
