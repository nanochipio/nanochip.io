// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { chain, includes } from 'lodash';

export const name = 'Ledgy';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://app.ledgy.com';
export const blogUrl = 'https://blog.ledgy.com';

export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
}) => (
  <Helmet>
    <title>{props.title} {props.section && `| ${props.section}`} | {name}</title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '' };

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

export const PrivacyElement
  = ({ icon, title, body }: {icon: string, title: string, body: string}) => (
    <div className="col-12 col-md-6">
      <i className={`${icon} fa-3x d-block`} />
      {title}<br />
      {body}
    </div>
  );
