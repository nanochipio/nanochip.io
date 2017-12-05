// @flow

import * as React from 'react';
import Img from 'gatsby-image';


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

export default ({ data }: Object) => (
  <section className="section" id="features">
    <header className="section-header">
      <small>Features</small>
    </header>

    <div className="container">
      <Feature
        title="All your information safely located in one place"
        img={data.feature1}
      >
        The current cap table is always accessible and related documents can be
        uploaded and attached to transactions. Inconsistencies in transactions
        are automatically detected.
      </Feature>

      <hr />

      <Feature
        right
        title="Convertible notes and employee stock options"
        img={data.feature2}
      >
        You create convertible notes, Ledgy takes care of all the calculations.<br />
        Enter employee incentive plans with vesting and track them over time.
      </Feature>

      <hr />

      <Feature
        title="Export and share PDFs"
        img={data.feature3}
      >
        Per Swiss law, a share register must be signed by the board of directors to be valid.
        For this purpose, it can be exported as a PDF.
      </Feature>
    </div>
  </section>
);
