import * as React from "react";
import { Link, PageProps, graphql, useStaticQuery } from "gatsby";

import { Seo } from "../components/Seo";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage: React.FC<PageProps<Queries.GatsbyConfigDataQuery>> = ({
  data,
}) => {
  const date = new Date();

  return (
    <div>
      <StaticImage
        height={300}
        src="https://images.unsplash.com/photo-1535271968495-080edd1ba35c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Z2F0c2J5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
        alt="gatsby flow"
      />
      <h1>{data.site?.siteMetadata?.title}</h1>
      <h3>
        {new Intl.DateTimeFormat("kr-KR", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(date)}
      </h3>
      <h3>{data.site?.siteMetadata?.author}</h3>
      <p>
        <Link to="gatsby">발표 시작</Link>
      </p>
    </div>
  );
};

export const query = graphql`
  query GatsbyConfigData {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <Seo title="Gatsby" />;
