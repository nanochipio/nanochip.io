// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';


import References from './References';
import Subscribe from './Subscribe';

const Header = () => (
  <header className="header text-white" style={{ backgroundImage: 'linear-gradient(135deg, #20a8d8 0%, #00afc9 100%)' }}>
    <div className="container">
      <div className="row align-items-center my-8">

        <div className="col-md-5">
          <img src="/img/laptop-1.png" alt="img" />
        </div>
        <div className="col-md-6 ml-auto">
          <h1><Trans>Online Captable —<br /> Excel was yesterday</Trans></h1>
          <p className="lead mt-5 mb-7">
            <Trans>
              Having headaches with your cap table in Excel?
              Use Ledgy to track all your shares, manage your ESOP and
              model detailed financing rounds.<br /><br />
              You are an investor or employee? Get a detailed overview of
              your investment and check the status of your
              vesting schedule.
            </Trans>
          </p>
          <a className="btn btn-round btn-xl btn-outline-light" href="https://demo.ledgy.com/">See demo</a>
          <a className="btn btn-round btn-xl btn-light ml-3" href="https://app.ledgy.com/signup"><Trans>Get Started</Trans></a>
        </div>


      </div>
    </div>
  </header>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">

      <References {...props} />
      <Subscribe {...props} />

    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const indexPageFragment = graphql`
  fragment IndexPageFragment on RootQueryType {
    feature1: imageSharp(id: { regex: "/src\/img\/feature-1.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature2: imageSharp(id: { regex: "/src\/img\/feature-2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature3: imageSharp(id: { regex: "/src\/img\/feature-3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }

    testingtime: imageSharp(id: { regex: "/testingtime/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    quitt: imageSharp(id: { regex: "/quitt/" }) {
      resolutions(width: 80) { ...GatsbyImageSharpResolutions }
    }
    cryptofund: imageSharp(id: { regex: "/cryptofund/" }) {
      resolutions(width: 180) { ...GatsbyImageSharpResolutions }
    }
    sherpany: imageSharp(id: { regex: "/sherpany/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    frontify: imageSharp(id: { regex: "/frontify/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    apiax: imageSharp(id: { regex: "/apiax/" }) {
      resolutions(width: 110) { ...GatsbyImageSharpResolutions }
    }
    allthings: imageSharp(id: { regex: "/allthings/" }) {
      resolutions(width: 150) { ...GatsbyImageSharpResolutions }
    }
    farmy: imageSharp(id: { regex: "/farmy/" }) {
      resolutions(width: 130) { ...GatsbyImageSharpResolutions }
    }
  }
`;
