import React from "react";
import { Link } from "gatsby";
import { CardProps } from "@/definitions";

import "../Card.styles.css";

export const ProductCard: React.FC<CardProps> = ({
  customers,
  shortText,
  slug,
}) => {
  return (
    <Link to={`/products/${slug}`} className="border-none">
      <article
        itemScope
        itemType="http://schema.org/Article"
        className="flex flex-col h-full justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light"
      >
        <div>
          <h3 className="text-3xl mt-2">{customers}</h3>
          <p className="lead !text-skin-fg mt-4">
            {shortText}
          </p>
        </div>
      </article>
    </Link>
  );
};
