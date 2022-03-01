import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { CardProps } from "@/definitions";
import { Button } from "@/components";

import "../Card.styles.css";

export const ProductCard: React.FC<CardProps> = ({
  customers,
  title,
  shortText,
  benefits,
  slug,
  children,
}) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="flex flex-col justify-between prose relative bg-skin-base-flash p-8 shadow-sm transition-all focus-within:ring-2 focus-within:ring-offset-2 hover:shadow-light"
    >
      <div>
        <h3 className="text-3xl mt-2">{customers}</h3>
        <p className="lead mt-4">{title}</p>
        <section className="cardTeaserCopy">
          <MDXRenderer>{shortText}</MDXRenderer>
          <MDXRenderer>{benefits}</MDXRenderer>
        </section>
      </div>
      <div className="flex flex-col sm:flex-row justify-end mt-6 space-y-4 sm:space-y-0 sm:space-x-8">
        <Button as="link" styleType="ghost" to={`/products/${slug}`}>
          Learn more
        </Button>
        {children}
      </div>
    </article>
  );
};
