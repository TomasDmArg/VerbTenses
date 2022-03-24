import React from "react";
import { Logo } from "../essential/logo";
import { SecButton } from "../essential/buttons";
import { useRouter } from "next/router";
import { IoMenuOutline, IoCloseOutline } from "react-icons/io5";
export const Navbar = ({ active }) => {
  const [toggle, setToggle] = React.useState(false);
  const Routes = [
    ["/", "Home"],
    ["/tenses/present-simple", "Present Simple"],
    ["/tenses/present-continuous", "Present Continuous"],
    ["/tenses/past-simple", "Past Simple"],
    ["/tenses/future", "Future"],
    ["https://tmdm.stoplight.io/docs/verbtenses/", "API Docs"],
    ["https://github.com/TomasDmArg/VerbTenses", "Source"],

  ];
  let pathname = Routes.find(([path, text]) => path === active);
  pathname = pathname ? pathname : "/";
  // pathname = (pathname.length > 1) ? pathname.join("") : pathname;
  return (
    <header className="header">
      <Logo src="/logo.png" />
      <nav className={`header__nav ${toggle ? 'mb-toggle-enabled' : ''}`}>
        {Routes.map((route) => (
          <SecButton
            key={route[0]}
            href={route[0]}
            text={route[1]}
            isActive={route[0] == pathname[0]}
          />
        ))}
        <a className="only-mb close" onClick={
          () => setToggle(!toggle)
        }><IoCloseOutline stroke="#171717" /> Cerrar</a>
      </nav>
      <IoMenuOutline stroke="#12130F" className="menu-icon" onClick={
        () => setToggle(!toggle)
      } />
    </header>
  );
};
