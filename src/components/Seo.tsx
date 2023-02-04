import React from "react";

interface HeadProps {
  title: string;
}

export const Seo = ({ title }: HeadProps) => (
  <React.Fragment>
    <title>{title} | SF TIL</title>
    <link rel="shortcut icon" href="#" />
  </React.Fragment>
);
