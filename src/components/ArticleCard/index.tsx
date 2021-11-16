import React from "react";
import { Link } from "gatsby";
import { ArticleCardProps } from "@/definitions";
import { Tags } from "@/components";

import "./ArticleCard.styles.css";

export const ArticleCard: React.FC<ArticleCardProps> = ({
  link,
  title,
  order,
  description,
  tags,
  date,
}) => {
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="card group"
    >
      <header className="card__header">
        <h2 className="cardTitle">
          <Link to={link} itemProp="url">
            <span itemProp="headline">{title}</span>
          </Link>
        </h2>
      </header>
      <section className="card__body">
        <p
          dangerouslySetInnerHTML={{
            __html: description,
          }}
          itemProp="description"
          className="cardCopy"
        />
        <Tags tags={tags} />
      </section>
      <footer className="card__footer">
        <span>{date}</span>
        <Link to={link} itemProp="url">
          <span>Read</span>
        </Link>
      </footer>
    </article>
  );
};
