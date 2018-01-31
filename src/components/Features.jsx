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

export default ({ data, t }: Object) => (
  <section className="section" id="features">
    <header className="section-header">
      <small>{t('features')}</small>
    </header>

    <div className="container">
      <Feature
        title={t('roundModeling')}
        img={data.feature1}
      >
        {t('roundModelingDesc')}
      </Feature>

      <hr />

      <Feature
        right
        title={t('convertibles')}
        img={data.feature2}
      >
        {t('convertiblesDescription')}
      </Feature>

      <hr />

      <Feature
        title={t('export')}
        img={data.feature3}
      >
        {t('exportDescription')}
      </Feature>
    </div>
  </section>
);
