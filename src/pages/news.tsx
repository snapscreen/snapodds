import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { INode, PageProps } from "@/definitions";
import {
  Layout,
  ArticleCard,
  Container,
  Hero,
  Button,
  Seo,
} from "@/components";
import { DownloadIcon } from "@heroicons/react/outline";

const News: React.FC<PageProps> = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`;
  const posts = data.allMdx.edges;

  if (posts.length === 0) {
    return (
      <Layout location={location} title={siteTitle}>
        <Seo title="Newsroom and Press" />
        <Hero title="Sorry." lead="There is a problem loading our articles." />
      </Layout>
    );
  }

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="Newsroom and Press" />
      <Hero
        title="Newsroom and Press"
        lead="Thanks for following our journey. Find here our press releases and brand assets."
      />
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <section>
            <div className="prose prose-lg sm:p-4">
              <h2>SnapOdds Brand Assets</h2>
              <div className="py-2">
                <Button
                  as="externalLink"
                  styleType="primary"
                  href="https://github.com/zeitvertrieb/snapodds/raw/main/static/SnapOdds-Logo-Kit.zip"
                >
                  <span>Get Logo Kit</span>
                  <DownloadIcon className="w-6 h-6" />
                </Button>
                <p>
                  SnapOdds logo is composed of a clean, modern logotype and
                  viewfinder borders that represents our technology. The
                  standard color is SnapOdds is teal (#2dd4bf) with white or
                  black being acceptable on dark or light backgrounds. Please
                  don’t alter the logo in any way.
                </p>
              </div>
              <h2>About Snapscreen, Inc.</h2>
              <div className="py-2">
                Based in New York with offices in Austria and Australia,
                Snapscreen is a technology company focused on the use of mobile
                devices and image recognition in the world of sports and
                entertainment. Snapscreen is a Techstars portfolio company.
              </div>
              <h2>Images for Press</h2>
              <div className="py-2">
                <div className="flex flex-col sm:flex-row sm:space-x-4 items-center">
                  <StaticImage
                    src="../images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                    alt="Portrait of Thomas Willomitzer, CEO Snapscreen Inc."
                    placeholder="blurred"
                    layout="fixed"
                    height={300}
                    width={380}
                  />
                  <figcaption>
                    <p>
                      Portrait of Thomas Willomitzer, CEO – Snapscreen, Inc.
                    </p>
                    <Button
                      as="externalLink"
                      href="https://raw.githubusercontent.com/zeitvertrieb/snapodds/main/src/images/Thomas-Willomitzer-Portrait-SnapOdds.jpg"
                    >
                      <span>Download JPG</span>
                      <DownloadIcon className="w-6 h-6" />
                    </Button>
                  </figcaption>
                </div>
              </div>
            </div>
            <hr className="mt-4" />
          </section>
          <section>
            <div className="prose prose-lg sm:p-4 mb-8 md:mb-0">
              <h2>Press releases</h2>
            </div>
            <ol className="-mx-4 sm:mx-0 lg:mx-1">
              {posts.map(({ node }: { node: INode }) => {
                const title = node.frontmatter.title || node.fields.slug;
                return (
                  <li key={node.fields.slug} className="group">
                    <ArticleCard
                      link={node.fields.slug}
                      title={title}
                      description={node.frontmatter.description}
                      tags={node.frontmatter.tags}
                      date={node.frontmatter.date}
                    />
                  </li>
                );
              })}
            </ol>
          </section>
        </div>
      </Container>
    </Layout>
  );
};

export default News;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            tags
          }
        }
      }
    }
  }
`;
