import React from "react";
import { Link } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { CardProps } from "@/definitions";
// import { Tags } from "@/components";

import "./ArticleCard.styles.css";

export const ArticleCard: React.FC<CardProps> = ({
  link,
  title,
  description,
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
        <GatsbyImage image={image} alt={title} />
        <h3 className="cardTitle">
          {type === "link" ? (
            <a href={link} itemProp="url" target="_blank">
              <span itemProp="headline">{title}</span>
            </a>
          ) : (
            <Link to={link} itemProp="url">
              <span itemProp="headline">{title}</span>
            </Link>
          )}
        </h3>
      </header>
      <section className="card__body">
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          itemProp="description"
          className="cardCopy"
        />
        {/* <Tags tags={tags} /> */}
      </section>
      <footer className="card__footer">
        <span>{date}</span>
        {type === "link" ? (
          <a href={link} itemProp="url" target="_blank">
            <span>{link}</span>
          </a>
        ) : (
          <Link to={link} itemProp="url">
            <span>Read more</span>
          </Link>
        )}
      </footer>
    </article>
  );
};
