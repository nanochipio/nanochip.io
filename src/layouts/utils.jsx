// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';

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

export const PrivacyElement = ({ icon, title, body }: {
  icon: string, title: string | React.Element<any>, body?: string | React.Element<any>
}) => (
  <div className="col-12 col-md-6 d-flex">
    <div className="float-left mr-2">
      <i className={`${icon} fa-3x fa-fw`} />
    </div>
    <p>
      <strong className="d-block">{title}</strong>
      {body && body}
    </p>
  </div>
);
PrivacyElement.defaultProps = { body: '' };
