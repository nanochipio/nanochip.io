// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';

import { FeatureLinks } from './Features';
import { name } from '../constants';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Helmet>
      <title>{i18n.t`ESOP`} | {i18n.t`Features`} | {name}</title>
    </Helmet>
    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Employee Stock Ownership Plans</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2><Trans>Make your employees happy</Trans></h2>
              <p>
                <Trans>
                  You’re building a fast growing company and want your valuable
                  employees to be part of your success?
                  Ledgy offers you a powerful module to manage your
                  employee stock ownership plans.
                  No matter if you transfer real stock from your company to your employees,
                  options from a fixed-size options pool, or even phantom stock.
                  <br /><br />
                  Add a vesting schedule to your ESOPs and track their status in real-time.
                  Coolest thing ever, let your employees log into Ledgy and allow them
                  to see at any point in time how much stock they have already vested and
                  how many shares are still outstanding.
                  <br /><br />
                  Go to your “Transactions” page and click
                  the “Add incentive” button to get started.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7">
                <img src="/img/add-incentive.png" alt="Create incentive plan" data-aos="fade-up" data-aos-duration="500" />
              </div>
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4">
              <p>
                <Trans>
                  You can define a detailed vesting schedule by defining over how
                  many months the shares are to be vested, if there’s a cliff and
                  how often a new batch of shares get assigned to the employee.<br />
                  As soon as you enter the first numbers, you will see a visual representation
                  of the  current schedule.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 ml-auto" data-aos="fade-right" data-aos-duration="500">
              <img src="/img/vesting-schedule.png" alt="Vesting schedule for ESOPs" />
            </div>
          </div>

          <hr className="my-8" />

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  In the case that your employee shares are implemented as options
                  or phantom stock, you might want to define a pool first.
                  Click the “Add pool” to create an options or
                  phantom stock pool of a given share class and a fixed size.
                </Trans>
              </p>
            </div>

            <div className="col-md-8 order-md-first" data-aos="fade-right" data-aos-duration="500">
              <img src="/img/add-pool.png" alt="Add an incentives pool" />
            </div>
          </div>

          <div className="row align-items-center my-8">
            <div className="col-md-4 ml-auto">
              <p>
                <Trans>
                  After you have added a pool, you can select it from the incentives
                  screen.
                  Check back at your “Cap Table” and
                  press “Fully diluted” to see your newly created
                  pool and employee incentives!
                </Trans>
              </p>
            </div>

            <div className="col-md-8" data-aos="fade-right" data-aos-duration="500">
              <img src="/img/add-incentive-psop.png" alt="Add incentives from a pool" />
            </div>
          </div>

          <hr className="my-8" />

          <div>
            <header className="section-header text-left">
              <h1><Trans>Keep your employees engaged</Trans></h1>
              <p>
                Once your incentives are submitted to Ledgy it’s time to
                engage your employees.
                They are able to log into Ledgy themselves with their email
                address at any time and see how many shares they have already vested.
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7">
                <img src="/img/incentives-dashboard.png" alt="ESOPs in the employee dashboard" data-aos="fade-left" data-aos-duration="500" />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} page="esop" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment ESOPPageFragment on RootQueryType {
    ...FeaturesFragment
  }
`;
