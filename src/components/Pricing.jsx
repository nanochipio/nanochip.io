// @flow

import React from 'react';

export default () => (
  <section className="section section-inverse" id="pricing" style={{ backgroundColor: '#00b0c0' }}>
    <header className="section-header mb-40">
      <small>Pricing</small>
      <p className="lead">As straightforward as the tool. One package, everything included.</p>
    </header>
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-md-4 col-lg-3 offset-md-2 offset-lg-3 text-center text-md-left">
          <h4 className="mb-0">First 3 months for free<br />Then 19 CHF/month</h4>
        </div>

        <div className="col-12 col-md-4 col-lg-3">
          <a className="btn btn-block btn-lg btn-white" href="https://app.ledgy.com/signup">Sign Up Now</a>
        </div>
      </div>
    </div>
  </section>
);
