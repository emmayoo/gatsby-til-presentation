import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const data = useStaticQuery<Queries.PageListQuery>(graphql`
    query PageList {
      allMdx {
        nodes {
          frontmatter {
            description
            title
            slug
          }
          excerpt
          id
        }
      }
    }
  `);

  return (
    <div className="container">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
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
