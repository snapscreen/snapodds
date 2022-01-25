import React from "react";
import { Link } from "gatsby";

import "./Nav.styles.css";

export const Nav = (props: {
  links: Array<{ name: string; to: string; externalLink?: boolean }>;
}) => {
  const { links } = props;
  const NavLinks: any = () =>
    links.map((link: { name: string; to: string; externalLink?: boolean }) => {
      return (
        <li key={link.name}>
          {link.externalLink ? (
            <a className="navLink" href={link.to} target="_blank">
              {link.name}
            </a>
          ) : (
            <Link className="navLink" to={link.to}>
              {link.name}
            </Link>
          )}
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
