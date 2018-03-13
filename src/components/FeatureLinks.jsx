// @flow

import React from 'react';
import { Trans } from '@lingui/react';
import Link from 'gatsby-link';

const FeatureLink = (props: {
  name: string,
  url: string,
  prefix: string,
  page: string,
}) => (
  props.page !== props.url &&
  <div className="col-6 px-3 col-lg-3">
    <Link href to={`${props.prefix}/features/${props.url}`}>
      <div className="card border hover-shadow-8">
        <div className="card-body mb-0 pb-0 px-2">
          <h6 className="card-title text-center">{props.name}</h6>
        </div>
        <div className="mx-auto" style={{ height: '8rem', width: '8rem' }}>
          <img
            className="card-img-bottom"
            src={`/img/${props.url}.png`}
            alt={props.name}
            style={{ maxHeight: '100%', maxWidth: '100%' }}
          />
        </div>
      </div>
    </Link>
  </div>

);

export default (props: {
  prefix: string,
  page: string,
}) => (
  <div>
    <hr className="my-5" />

    <header className="section-header ">
      <h2><Trans>Discover more about Ledgy</Trans></h2>
    </header>

    <div className="row gap-y">

      <FeatureLink {...props} name="Consistency" url="consistency" />
      <FeatureLink {...props} name="Round Modeling" url="round-modeling" />
      <FeatureLink {...props} name="ESOP" url="esop" />
      <FeatureLink {...props} name="Reporting" url="reporting" />
      <FeatureLink {...props} name="Investors" url="investors" />

    </div>
  </div>
);
