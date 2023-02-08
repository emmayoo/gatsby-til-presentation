import React from "react";

import Layout from "../../components/Layout";
import { PageProps, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

const MountainDetail = ({ data }: PageProps<Queries.MountainDetailQuery>) => {
  const detail = data.contentfulMountain;
  return (
    <Layout>
      <section key={detail!.id} style={{ padding: "20px" }}>
        <GatsbyImage
          image={getImage(detail!.photo?.gatsbyImageData!)!}
          alt={detail!.name!}
        />
        <h3>{detail!.name!}</h3>
        <h5>{detail!.date!}</h5>
        <h4>{detail!.note!}</h4>
      </section>
    </Layout>
  );
};

export const query = graphql`
  query MountainDetail($id: String) {
    contentfulMountain(id: { eq: $id }) {
      date(formatString: "YYYY-MM-DD")
      id
      name
      photo {
        gatsbyImageData(height: 400, placeholder: BLURRED)
      }
      note
    }
  }
`;

export default MountainDetail;
