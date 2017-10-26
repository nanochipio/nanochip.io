/* eslint-disable */
import React from 'react';
import favicon16 from './img/favicon-16x16.png';
import favicon32 from './img/favicon-32x32.png';

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
    return (
      <html {...this.props.htmlAttributes}>
        <head>
          <title>Ledgy - Online Share Register</title>
          <meta name="description" content="Ledgy" />
          <meta name="keywords" content="cap table, share register" />
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <script src="script.min.js" async />
          <link rel="icon" type="image/png" sizes="16x16" href={favicon16} />
          <link rel="icon" type="image/png" sizes="32x32" href={favicon32} />
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
