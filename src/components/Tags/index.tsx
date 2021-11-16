import React from "react";
import { Link } from "gatsby";
import { ITag } from "@/definitions";
import { InlineList } from "@/components";

export const Tags: React.FC<ITag> = ({ tags }) => {
  if (!tags) {
    return null;
  }
  return (
    <InlineList>
      {tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag.length > 0)
        .map((tag) => (
          <li key={tag}>
            <Link to={`/tag/${tag}`}>{tag}</Link>
          </li>
        ))}
    </InlineList>
  );
};
