import * as React from "react";
import { Link, PageProps, graphql, useStaticQuery } from "gatsby";

import { Seo } from "../components/Seo";

const IndexPage: React.FC<PageProps<Queries.GatsbyConfigDataQuery>> = ({
  data,
}) => {
  const date = new Date();

  return (
    <div>
      <h1>{data.site?.siteMetadata?.title}</h1>
      <h3>
        {new Intl.DateTimeFormat("kr-KR", {
          dateStyle: "full",
          timeStyle: "long",
        }).format(date)}
      </h3>
      <h3>{data.site?.siteMetadata?.author}</h3>
      <p>
        <Link to="about-gatsby">발표 시작</Link>
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
