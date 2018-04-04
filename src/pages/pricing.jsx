// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';


export default withI18n()(({ i18n }: Props) => (
  <div>
    <Title title={i18n.t`Pricing`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Pricing</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section">
        <div className="container">
          <header className="section-header">
            <h2><Trans>Ledgy is free.</Trans></h2>
            <hr />
            <p>
              <Trans>
                Yes, Ledgy is a free tool. Free as in beer.<br />
                In case you came here looking for fancy option
                plans, we got you covered:
              </Trans>
            </p>
          </header>


          <div className="row gap-y">

            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>Garage Company</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><i className="ti-check text-success" /> <Trans>Cap Table Upload</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Full Transaction History</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Shareholder Login</Trans></li>
                  <li><i className="ti-close text-danger" /> <Trans>Up to 20 shareholders</Trans></li>
                </ul>
                <br />
                <a className="btn btn-round btn-outline-primary btn-xl" href="https://app.ledgy.com/signup"><Trans>Get started</Trans></a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded">
                <span className="popular-tag"><Trans>Best choice</Trans></span>
                <h6><Trans>Fast-growing Startup</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><i className="ti-check text-success" /> <Trans>Consistency Checks</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Employee Incentives</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Round Modeling</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Unlimited shareholders</Trans></li>
                </ul>
                <br />
                <a className="btn btn-round btn-primary btn-xl" href="https://app.ledgy.com/signup"><Trans>Get started</Trans></a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>Unicorn</Trans></h6>
                <h2 className="price"><Trans>$0</Trans><sup>1</sup></h2>
                <ul className="text-left">
                  <li><i className="ti-check text-success" /> <Trans>Document Management</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Automated Tax Reports</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>Audit Trails</Trans></li>
                  <li><i className="ti-check text-success" /> <Trans>24/7 Support</Trans></li>
                </ul>
                <br />
                <a className="btn btn-round btn-outline-primary btn-xl" href="https://app.ledgy.com/signup"><Trans>Get started</Trans></a>
              </div>
            </div>
            <small className="col-lg-4 ml-auto text-muted">
              <sup>1</sup>
              <Trans>
                Our goal is to truly benefit founders at work. Giving as many
                people as possible access to our tool is our utmost priority.
                Nevertheless, we leave it open to introduce paid premium features
                in the future.
              </Trans>
            </small>

          </div>

        </div>
      </section>


    </main>
  </div>
));
