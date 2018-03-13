// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';
import Img from 'gatsby-image';

import { FeatureLinks } from './Features';
import { name } from '../constants';


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Helmet>
      <title>{i18n.t`Investor Dashboard`} | {i18n.t`Features`} | {name}</title>
    </Helmet>
    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1><Trans>Investor Dashboard</Trans></h1>
          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container text-left">

          <div>
            <header className="section-header text-left">
              <h2>Your portfolio at a glance</h2>
              <p>
                <Trans>
                  Also as an investor you can profit a lot from Ledgy.
                  Any of your portfolio companies that uses our platform will
                  appear in your investment dashboard.
                  See your key performance indicators of your investments at a glance.
                  <br />
                  Never lose track about how much, where and in what you invested.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-8 mx-auto mb-7" data-aos="fade-up" data-aos-duration="500">
                <Img {...props.data.dashboardCards} alt="Investment overview" />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left">
              <p>
                The detailed investment table gives an overview over the metrics of
                your investments. Check out what’s your stake in the company,
                how many shares you own and how much you initially invested.
                <br />
                Each update that the founders enter into their share register on Ledgy
                will subsequently be used to compute the current value of your shares
                and your return.
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-left" data-aos-duration="500">
                <Img {...props.data.dashboardShares} alt="Share details" />
              </div>
            </div>
          </div>

          <div>
            <header className="section-header text-left mt-3">
              <p>
                <Trans>
                  The transaction history will tell you exactly what happened to
                  your shares at what time.
                  Keep track of when you bought or sold shares, at which price, or
                  simply how much your convertible was worth and whether there was
                  a cap, discount or interest.
                </Trans>
              </p>
            </header>

            <div className="row gap-y">
              <div className="col-md-10 mx-auto mb-7" data-aos="fade-up-right" data-aos-duration="500">
                <Img {...props.data.dashboardHistory} alt="Transaction history" />
              </div>
            </div>
          </div>

          <FeatureLinks {...props} page="investors" />

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment InvestorsPageFragment on RootQueryType {
    ...FeaturesFragment

    dashboardCards: imageSharp(id: { regex: "/dashboard-cards.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    dashboardShares: imageSharp(id: { regex: "/dashboard-shares.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    dashboardHistory: imageSharp(id: { regex: "/dashboard-history.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
