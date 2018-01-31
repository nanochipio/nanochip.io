// @flow

import React from 'react';

export default ({ t }: Object) => (
  <section className="section" id="future">
    <div className="container">
      <header className="section-header">
        <small>{t('theFuture')}</small>
        <h2>{t('comingSoon')}</h2>
        <hr />
        <p className="lead">
          {t('wereWorkingHard')}
        </p>
      </header>


      <div className="row gap-y">


        <div className="col-12 feature-1">
          <p className="feature-icon text-success"><i className="icon-profile-female" /></p>
          <h5>{t('shareholderLogin')}</h5>
          <p>{t('shareholderLoginDescription')}</p>
        </div>


      </div>
    </div>
  </section>

);
