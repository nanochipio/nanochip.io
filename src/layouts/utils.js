// @flow

import * as React from 'react';
import { Helmet } from 'react-helmet';

export const name = 'Nanochip';
export const appUrl = 'https://app.ledgy.com';
export const demoUrl = 'https://demo.ledgy.com';
export const blogUrl = 'https://blog.ledgy.com';

export const Title = (props: {
  title: string,
  section?: string,
  description?: string,
}) => (
  <Helmet>
    <title> {name} | {props.title} - {props.section && `| ${props.section}`} </title>
    {props.description && <meta name="description" content={props.description} />}

    <meta property="og:title" content={props.title} />
    {props.description && <meta property="og:description" content={props.description} />}

    <meta name="twitter:title" content={props.title} />
    {props.description && <meta name="twitter:description" content={props.description} />}
  </Helmet>
);
Title.defaultProps = { section: '', description: '' };
