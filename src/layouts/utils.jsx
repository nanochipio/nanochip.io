// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { chain, includes } from 'lodash';

export const name = 'Ledgy';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://app.ledgy.com';
export const blogUrl = 'https://blog.ledgy.com';

export const Title = (props: { title: string, section?: string }) => {
  const title = props.section ?
    `${props.title} | ${props.section} | ${name}` :
    `${props.title} | ${name}`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta name="twitter:title" content={title} />
    </Helmet>
  );
};
Title.defaultProps = { section: '' };

const browserLanguagePropertyKeys = ['languages', 'language', 'browserLanguage', 'userLanguage', 'systemLanguage'];
const availableLanguages = ['de', 'en'];
export const getLocale = () => chain(window.navigator)
  .pick(browserLanguagePropertyKeys)
  .values()
  .flatten()
  .compact()
  .map(s => s.substr(0, 2))
  .find(s => includes(availableLanguages, s))
  .value() || 'en';
