require("dotenv").config();
import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Gatsby TIL Presentation`,
    siteUrl: `https://www.yourdomain.tld`,
    author: `Yeonjoo Yoo`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-mdx`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/mdx/`,
      },
    },
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: process.env.COTENTFUL_ACCESS_TOKEN,
        spaceId: "sku5r05w2j7i",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp", // Needed for dynamic images
  ],
};

export default config;
