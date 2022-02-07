import React from "react";
import { ListProps } from "@/definitions";

import "./DefinitionList.styles.css";

export const DefinitionList: React.FC<ListProps> = ({ term, definition }) => {
  return (
    <dl className="definitionList">
      <div className="flex flex-col">
        <dt>{term}</dt>
        <dd>{definition}</dd>
      </div>
    </dl>
  );
};
