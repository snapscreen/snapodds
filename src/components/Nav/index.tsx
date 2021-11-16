import React from "react";
import { Link } from "gatsby";

import "./Nav.styles.css";

export const Nav = (props: { links: Array<{ name: string; to: string }> }) => {
  const { links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string }) => {
      return (
        <li key={link.name}>
          <Link className="navLink" to={link.to}>
            {link.name}
          </Link>
        </li>
      );
    });

  return (
    <nav className="nav">
      <ul>
        <NavLinks />
      </ul>
    </nav>
  );
};
