import React from "react";
import { ListProps } from "@/definitions";

import "./InlineList.styles.css";

export const InlineList: React.FC<ListProps> = ({ children }) => {
  return <ul className="inlineList">{children}</ul>;
};
