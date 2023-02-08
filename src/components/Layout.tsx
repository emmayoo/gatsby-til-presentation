import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<Queries.PageListQuery>(graphql`
    query PageList {
      allMdx(sort: { frontmatter: { sort: ASC } }) {
        nodes {
          frontmatter {
            description
            title
            slug
          }
          id
          excerpt
        }
      }
    }
  `);

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">
              <StaticImage
                height={22}
                src="../images/icon.png"
                alt="gatsby icon"
                style={{ verticalAlign: "middle" }}
              />
            </Link>
          </li>
        </ul>
        <ul>
          {data.allMdx.nodes.map((file) => (
            <li key={file.id}>
              <Link to={`/gatsby/${file.frontmatter?.slug}`}>
                {file.frontmatter?.title}
              </Link>
            </li>
          ))}
          <li>
            <Link to="/example">Example (CMS)</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
