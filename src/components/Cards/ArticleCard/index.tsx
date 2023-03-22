import React from "react";
import { Link } from "gatsby";
import { GatsbyImage, getImage, IGatsbyImageData } from "gatsby-plugin-image";
import { renderRichText } from "gatsby-source-contentful/rich-text";
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
  const img = getImage(image);
  return (
    <article
      itemScope
      itemType="http://schema.org/Article"
      className="card group prose prose-lg"
    >
      <header className="card__header">
        {image && <GatsbyImage image={img as IGatsbyImageData} alt={title} />}
        <div className="cardTitle">
          {type === "link" ? (
            <a href={link} itemProp="url" target="_blank">
              <h3 itemProp="headline">{title}</h3>
              <p className="url">{link}</p>
            </a>
          ) : (
            <Link to={`/news/${link}`} itemProp="url">
              <h3 itemProp="headline">{title}</h3>
            </Link>
          )}
        </div>
      </header>
      {shortText && (
        <section className="card__body">
          <div itemProp="description" className="cardCopy">
            {shortText}
          </div>
        </section>
      )}
      <footer className="card__footer">
        <span>{date}</span>
        {type === "link" ? (
          <a href={link} itemProp="url" target="_blank">
            <span>Follow link</span>
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
