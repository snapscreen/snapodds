import * as React from "react";
import { Link } from "gatsby";
import { LinkProps } from "react-router-dom";

import "./Button.styles.css";

type BaseProps = {
  children: React.ReactNode;
  className?: string;
  styleType?: "primary" | "normal" | "ghost" | "icon";
  onClick?: (event: React.MouseEvent<HTMLElement>) => void;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    as?: "button" | "submit" | "reset";
  };

type ButtonAsUnstyled = Omit<ButtonAsButton, "as" | "styleType"> & {
  as: "unstyled";
  styleType?: BaseProps["styleType"];
};

type ButtonAsLink = BaseProps &
  Omit<LinkProps, keyof BaseProps> & {
    as: "link";
  };

type ButtonAsExternal = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    as: "externalLink";
  };

type ButtonProps =
  | ButtonAsButton
  | ButtonAsExternal
  | ButtonAsLink
  | ButtonAsUnstyled;

export function Button(props: ButtonProps): JSX.Element {
  const allClassNames = `${props.styleType ? props.styleType : ""} ${
    props.className ? props.className : ""
  }`;

  if (props.as === "link") {
    // don't pass unnecessary props to component
    const { className, styleType, as, ...rest } = props;
    return <Link className={"btn " + allClassNames} {...rest} />;
  } else if (props.as === "externalLink") {
    const { className, styleType, as, ...rest } = props;
    return (
      <a
        className={"btn " + allClassNames}
        // provide good + secure defaults while still allowing them to be overwritten
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {props.children}
      </a>
    );
  } else if (props.as === "unstyled") {
    const { className, styleType, as, ...rest } = props;
    return <button className={className} {...rest} />;
  } else {
    const { className, styleType, as, ...rest } = props;
    return <button className={"btn " + allClassNames} {...rest} />;
  }
}
