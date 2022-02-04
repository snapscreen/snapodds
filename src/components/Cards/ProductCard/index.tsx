import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { CardProps } from "@/definitions";
import { Button } from "@/components";

import "../Card.styles.css";

export const ProductCard: React.FC<CardProps> = ({
  name,
  title,
  body,
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
        <h3 className="text-3xl mt-2">{name}</h3>
        <p className="lead mt-4">{title}</p>
        <section className="cardTeaserCopy">
          <MDXRenderer>{body}</MDXRenderer>
        </section>
      </div>
      <div className="flex justify-end mt-6 space-x-8">
        <Button as="link" styleType="ghost" to={`/products${slug}`}>
          Learn more
        </Button>
        {children}
      </div>
    </article>
  );
};
