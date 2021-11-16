module.exports = {
  pathPrefix: `/snapodds`,
  siteMetadata: {
    title: "SnapOdds",
    author: {
      name: `Matthias Grieder`,
    },
    description: `SnapOdds Website`,
    siteUrl: `https://zeitvertrieb.github.io/snapodds/`,
    social: {
      linkedin: `snapodds`,
      github: `zeitvertrieb/snapodds`,
    },
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatting: {
          format: "MMM DD YYYY",
        },
      },
    },
    // Articles
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/articles`,
        name: "articles",
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [".mdx", ".md"],
        plugins: [`gatsby-remark-images`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
              linkImagesToOriginal: false,
              withWebp: true,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map((edge) => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                });
              });
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___order] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      slug
                      frontmatter {
                        order
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "SnapOdds RSS feed",
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SnapOdds`,
        short_name: `SnapOdds`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#2DD4BF`,
        display: `minimal-ui`,
        icon: `src/images/SnapOdds_Icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
