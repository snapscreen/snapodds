const path = require(`path`);
const { createFilePath } = require(`gatsby-source-filesystem`);

const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      plugins: [new TsconfigPathsPlugin()],
    },
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  ///////////////////////////////////////////////
  // Define a template for blog post
  const blogPostTemplate = path.resolve(`./src/templates/BlogPost/index.tsx`);
  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allMdx(
          filter: { frontmatter: { type: { eq: "article" } } }
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              slug
              frontmatter {
                tags
              }
            }
          }
        }
      }
    `
  );

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading the articles.`,
      result.errors
    );
    return;
  }
  // Create blog posts pages
  const posts = result.data.allMdx.edges;
  if (posts.length > 0) {
    posts.forEach((post, index) => {
      const previousPostId = index === 0 ? null : posts[index - 1].node.id;
      const nextPostId =
        index === posts.length - 1 ? null : posts[index + 1].node.id;
      createPage({
        path: `/news/${post.node.slug}`,
        component: blogPostTemplate,
        context: {
          id: post.node.id,
          previousPostId,
          nextPostId,
        },
      });
    });
  }

  ///////////////////////////////////////////////
  // Define a template for product page
  const productPageTemplate = path.resolve(
    `./src/templates/ProductPage/index.tsx`
  );
  // Get all markdown products sorted by name
  const productResult = await graphql(
    `
      {
        allMdx(
          filter: { frontmatter: { type: { eq: "product" } } }
          sort: { fields: [frontmatter___order], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
              slug
              frontmatter {
                order
              }
            }
          }
        }
      }
    `
  );

  if (productResult.errors) {
    reporter.panicOnBuild(
      `There was an error loading the products.`,
      productResult.errors
    );
    return;
  }
  // Create product pages
  const products = productResult.data.allMdx.edges;
  if (products.length > 0) {
    products.forEach((product) => {
      createPage({
        path: `/products/${product.node.slug}`,
        component: productPageTemplate,
        context: {
          id: product.node.id,
          product,
        },
      });
    });
  }
};

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });

    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions;
  createTypes(`
    type SiteSiteMetadata {
      author: Author
      siteUrl: String
      social: Social
    }

    type Author {
      name: String
      summary: String
    }

    type Social {
      twitter: String
      linkedin: String
      medium: String
    }

    type Mdx implements Node {
      frontmatter: Frontmatter
      fields: Fields
    }

    type Frontmatter {
      linkType: String
      title: String
      name: String
      description: String
      tags: String
      date: Date @dateformat
    }

    type Fields {
      slug: String
    }
  `);
};
