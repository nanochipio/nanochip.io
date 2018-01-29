/* eslint-disable */
import React from 'react';
import { siteMetadata } from '../gatsby-config';

let stylesStr;
if (process.env.NODE_ENV === 'production') {
  try {
    stylesStr = require('!raw-loader!../public/styles.css');
  } catch (e) {
    console.log(e);
  }
}

module.exports = class HTML extends React.Component {
  render() {
    let css;
    if (process.env.NODE_ENV === 'production') {
      css = (
        <style
          id="gatsby-inlined-css"
          dangerouslySetInnerHTML={{ __html: stylesStr }}
        />
      );
    }
    const title = `${siteMetadata.name} - ${siteMetadata.title}`;
    const thumbnail = `${siteMetadata.siteUrl}/thumbnail.png`;
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>{title}</title>
          <meta name="description" content={siteMetadata.description} />
          <meta name="keywords" content="cap table, stock ledger, shares register" />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />

          {/* Facebook social card */}
          <meta property="og:title" content={title} />
          <meta property="og:description" content={siteMetadata.description} />
          <meta property="og:image" content={thumbnail} />
          <meta property="og:url" content={siteMetadata.siteUrl} />

          {/* Twitter social card */}
          <meta name="twitter:site" content="@LedgyCom" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={siteMetadata.description} />
          <meta name="twitter:image" content={thumbnail} />
          <meta name="twitter:card" content="summary_large_image" />


          <script src="script.min.js" async />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          {this.props.headComponents}
          {css}
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key="body"
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
        </body>
      </html>
    );
  }
};
