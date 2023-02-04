import React from "react";

import Layout from "../../components/Layout";
import { Link, PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const Example = ({ data }: PageProps<Queries.MountainsQuery>) => (
  <Layout>
    <h1>완등한 산</h1>
    <ul>
      {data.allContentfulMountain.nodes.map((row) => (
        <li key={row.id}>
          <Link to={`/example/${row.id}`}>{row.name}</Link>
        </li>
      ))}
    </ul>
  </Layout>
);

export const query = graphql`
  query Mountains {
    allContentfulMountain(sort: { date: ASC }) {
      nodes {
        id
        name
      }
    }
  }
`;

export default Example;
