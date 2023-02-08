import React from "react";
import { Link, PageProps, graphql } from "gatsby";

import Layout from "../../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Example = ({ data }: PageProps<Queries.MountainsQuery>) => (
  <Layout>
    <h5>Example (CMS)</h5>
    <h1>등산</h1>
    <div className="grid">
      {data.allContentfulMountain.nodes.map((row) => (
        <div key={row.id}>
          <Link to={`/example/${row.id}`}>
            <GatsbyImage
              image={getImage(row!.photo?.gatsbyImageData!)!}
              alt={row!.name!}
            />
            {row.name}
            <br />
            {row.date}
          </Link>
        </div>
      ))}
    </div>
    <p
      style={{
        color: "gray",
        fontStyle: "italic",
        fontSize: "12px",
        float: "right",
        marginTop: "20px",
      }}
    >
      with Gatsby & Contentful (CMS) & GraphQL & Github & Netlify
    </p>
  </Layout>
);

export const query = graphql`
  query Mountains {
    allContentfulMountain(sort: { date: DESC }) {
      nodes {
        id
        name
        photo {
          gatsbyImageData(height: 400, placeholder: BLURRED)
        }
        date(formatString: "YYYY-MM-DD")
      }
    }
  }
`;

export default Example;
