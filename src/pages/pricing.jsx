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

            <h1><Trans>Ledgy is free.</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section">
        <div className="container">
          <header className="section-header">
            <p>
              <Trans>
                Our goal is to truly benefit founders at work. We want to give as
                many people as possible access to our online cap table solution.
                At our current stage, we consider it more valuable to really understand
                our users’ needs than adding a few numbers to our bank account.
                Nevertheless, we leave it open to introduce paid premium features
                in the future. But the basic version will always remain free of charge.
              </Trans>
            </p>
            <hr />
            <p>
              <Trans>
                In case you came here looking for fancy option
                plans, we got you covered:
              </Trans>
            </p>
          </header>


          <div className="row gap-y">

            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>3 Dude(tte)s in a Garage</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><Trans>Full Transaction History</Trans></li>
                  <li><Trans>Consistency Checks</Trans></li>
                  <li><Trans>Convertible Loans</Trans></li>
                  <li><Trans>Customizable PDF Reports</Trans></li>
                  <li><Trans>Unlimited Share Classes</Trans></li>
                  <li><Trans>Transaction Filters</Trans></li>
                  <li><Trans>Numbered shares</Trans></li>
                  <li><Trans>Up to 20 shareholders</Trans></li>
                </ul>
                <a className="btn btn-round btn-outline-primary btn-xl" href="#try"><Trans>Get Started</Trans></a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 popular border rounded">
                <span className="popular-tag"><Trans>Best choice</Trans></span>
                <h6><Trans>Fast-growing Startup</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><Trans>Round Modeling</Trans></li>
                  <li><Trans>Employee Incentives</Trans></li>
                  <li><Trans>Vesting Schedules</Trans></li>
                  <li><Trans>Fully-diluted View</Trans></li>
                  <li><Trans>Investor Dashboard</Trans></li>
                  <li><Trans>Employee Login</Trans></li>
                  <li><Trans>Stock Split</Trans></li>
                  <li><Trans>Unlimited shareholders</Trans></li>
                </ul>
                <a className="btn btn-round btn-primary btn-xl" href="#try"><Trans>Get Started</Trans></a>
              </div>
            </div>


            <div className="col-lg-4">
              <div className="pricing-3 border rounded">
                <h6><Trans>Unicorn</Trans></h6>
                <h2 className="price"><Trans>$0</Trans></h2>
                <ul className="text-left">
                  <li><Trans>Cap Table Import</Trans></li>
                  <li><Trans>Document Management</Trans></li>
                  <li><Trans>Automated Tax Reports</Trans></li>
                  <li><Trans>Multiple Administrators</Trans></li>
                  <li><Trans>CSV Export</Trans></li>
                  <li><Trans>Two-Factor Authentication</Trans></li>
                  <li><Trans>Audit Trails</Trans></li>
                  <li><Trans>24/7 Support</Trans></li>
                </ul>
                <a className="btn btn-round btn-outline-primary btn-xl" href="#try"><Trans>Get Started</Trans></a>
              </div>
            </div>

          </div>

        </div>
      </section>


    </main>
  </div>
));
