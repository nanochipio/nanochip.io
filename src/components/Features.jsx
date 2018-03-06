// @flow

import * as React from 'react';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';


const Feature = ({ title, children, img, right }: {
  title: string, children: React.Node, img: Object, right?: boolean
}) => (
  <div className="row gap-y align-items-center">
    {!right &&
      <div className="col-12 col-md-5">
        <Img className="rounded shadow-2" {...img} alt={title} />
      </div>}

    <div className="col-12 col-md-7">
      <h4>{title}</h4>
      <p>{children}</p>
    </div>

    {right &&
      <div className="col-12 col-md-5">
        <Img className="rounded shadow-2" {...img} alt={title} />
      </div>}
  </div>
);
Feature.defaultProps = { right: false };

export default ({ data, i18n }: Props) => (
  <section className="section" id="features">
    <header className="section-header">
      <small><Trans>Features</Trans></small>
    </header>

    <div className="container">
      <Feature
        title={i18n.t`Financing Round Modeling`}
        img={data.feature1}
      >
        <Trans>
          Plan investment rounds by simulating their effect on the cap table.
        </Trans>
      </Feature>

      <hr />

      <Feature
        right
        title={i18n.t`Convertible notes and employee stock options`}
        img={data.feature2}
      >
        <Trans>
          You create convertible notes, Ledgy takes care of all the
          calculations. Enter employee incentive plans with vesting
          and track them over time.
        </Trans>
      </Feature>

      <hr />

      <Feature
        title={i18n.t`Export PDFs and send tax certificates`}
        img={data.feature3}
      >
        <Trans>
          Per Swiss law, a share register must be signed
          by the board of directors to be valid. For this
          purpose, it can be exported as a PDF. Automatically
          generate tax certificates and send them to your shareholders.
        </Trans>
      </Feature>
    </div>
  </section>
);
