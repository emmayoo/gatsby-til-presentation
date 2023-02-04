import React from "react";

import Layout from "../../components/Layout";
import { graphql } from "gatsby";
import { Seo } from "../../components/Seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

interface GatsbyDetailProps {
  data: Queries.PostDetailQuery;
  children: React.ReactNode;
}

const GatsbyDetail = ({ data, children }: GatsbyDetailProps) => {
  const imageSharp = data.mdx?.frontmatter?.titleImage?.childrenImageSharp;
  let image;
  if (imageSharp && imageSharp.length > 0) {
    image = getImage(imageSharp[0]?.gatsbyImageData!);
  }

  return (
    <Layout>
      {image && (
        <GatsbyImage image={image} alt={data.mdx?.frontmatter?.title!} />
      )}
      <h2>{data.mdx?.frontmatter?.title}</h2>
      <div>{children}</div>
    </Layout>
  );
};

export const query = graphql`
  query PostDetail($frontmatter__slug: String) {
    mdx(frontmatter: { slug: { eq: $frontmatter__slug } }) {
      frontmatter {
        title
        date
        description
        slug
        titleImage {
          childrenImageSharp {
            gatsbyImageData(height: 300, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;

export default GatsbyDetail;

export const Head = ({ data }: GatsbyDetailProps) => (
  <Seo title={data.mdx?.frontmatter?.title!} />
);
