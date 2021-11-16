import React from "react";
import { ListProps } from "@/definitions";

import "./DefinitionList.styles.css";

export const DefinitionList: React.FC<ListProps> = ({ term, definition }) => {
  return (
    <dl className="definitionList">
      <dt>{term}</dt>
      <dd>{definition}</dd>
    </dl>
  );
};
