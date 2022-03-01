import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { CardProps } from "@/definitions";
// import { Tags } from "@/components";

import "../Card.styles.css";

export const ArticleCard: React.FC<CardProps> = ({
  link,
  title,
  shortText,
  date,
  image,
  type,
}) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="card group prose prose-lg"
    >
      <header className="card__header">
        {image && <GatsbyImage image={getImage(image)} alt={title} />}
        <h3 className="cardTitle">
          {type === "link" ? (
            <a href={link} itemProp="url" target="_blank">
              <span itemProp="headline">{title}</span>
            </a>
          ) : (
            <Link to={`/news/${link}`} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          )}
        </h3>
      </header>
      {shortText && (
        <section className="card__body">
          <div itemProp="description" className="cardCopy">
            <MDXRenderer>{shortText}</MDXRenderer>
          </div>
        </section>
      )}
      <footer className="card__footer">
        <span>{date}</span>
        {type === "link" ? (
          <a href={link} itemProp="url" target="_blank">
            <span>{link}</span>
          </a>
        ) : (
          <Link to={`/news/${link}`} itemProp="url">
            <span>Read more</span>
          </Link>
        )}
      </footer>
    </article>
  );
};
