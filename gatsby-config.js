require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  pathPrefix: `/`,
  siteMetadata: {
    siteUrl: `https://snapodds.com/`,
    title: `SnapOdds`,
    description: `It’s a Snap converting viewers into bettors!`,
    author: {
      name: `Matthias Grieder`,
    },
    email: `hello@snapodds.com`,
    social: {
      linkedin: `snapodds`,
    },
    team: [
      {
        user: "willo",
        name: "Thomas Willomitzer",
        role: "Founder, CEO",
      },
      {
        user: "matthias",
        name: "Matthias Grieder",
        role: "Co-Founder, Design",
      },
      {
        user: "markus",
        name: "Markus Rumler",
        role: "Co-Founder, Head of Marketing",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.GATSBY_CONTENTFUL_SPACE_ID,
        accessToken: process.env.GATSBY_CONTENTFUL_ACCESS_TOKEN,
        enableTags: true,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          process.env.GATSBY_PUBLIC_GA_MEASUREMENT_ID, // Google Analytics / GA
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `SnapOdds`,
        short_name: `SnapOdds`,
        start_url: `/`,
        background_color: `#00172e`,
        theme_color: `#2DD4BF`,
        display: `minimal-ui`,
        icon: `src/images/SnapOdds_Icon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
  ],
};
