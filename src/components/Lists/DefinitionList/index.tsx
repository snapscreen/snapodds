import React from "react";
import { ListProps } from "@/definitions";

import "./DefinitionList.styles.css";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export const DefinitionList: React.FC<ListProps> = ({ term, definition, inline }) => {
  return (
    <dl
      className={classNames(
        "definitionList",
        inline ? "-inline" : ""
      )}
    >
      <dt>{term}</dt>
      <dd>{definition}</dd>
    </dl>
  );
};
