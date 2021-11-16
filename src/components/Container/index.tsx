import React from "react";
import { EmptyProps } from "@/definitions";

import "./Container.styles.css";

export const Container: React.FC<EmptyProps> = ({ children }) => {
  return (
    <div className="container">
      <div>{children}</div>
    </div>
  );
};
