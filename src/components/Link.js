import GatsbyLink from "gatsby-link";
import * as React from "react";

const Link = ({ children, to, ...other }) => {
  // Tailor the following test to your environment.
  // This example assumes that any internal link (intended for Gatsby)
  // will start with exactly one slash, and that anything else is external.
  const internal = /^\/(?!\/)/.test(to);
  if(to === "http://iotmaker.vn"){
    console.log(interval)
  }

  // Use gatsby-link for internal links, and <a> for others
  if (internal) {
    return (
      <GatsbyLink to={to} {...other}>
        {children}
      </GatsbyLink>
    );
  }
  return (
    <a target="_blank" href={to} {...other}>
      {children}
    </a>
  );
};

export default Link;