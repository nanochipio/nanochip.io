// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';


const Header = () => (
  <header className="header text-white bg-ledgy">
    <div className="container">
      <div className="row align-items-center mt-5 mb-7">

        <div className="col-lg-6 ml-auto mb-5">
          <h1><Trans id="site.title" /> —<br /> <Trans id="site.slogan" /></h1>
          <div className="mb-6">
            <Trans>
              <p>
              Having headaches with your cap table in Excel?
              Use Ledgy to track all your shares, manage your ESOP and
              model detailed financing rounds.
              </p>
              <p>
              You are an investor or employee? Get a detailed overview of
              your investment and check the status of your
              vesting schedule.
              </p>
            </Trans>
          </div>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-outline-light" href="https://demo.ledgy.com/">See demo</a>
          <a className="btn btn-block d-sm-inline btn-xl mx-1 btn-round btn-light" href="https://app.ledgy.com/signup"><Trans>Get Started</Trans></a>
        </div>

        <div className="col-lg-5 order-lg-first" data-aos="fade-up" data-aos-duration="1000" >
          <img src="/img/laptop-1.png" alt="img" />
        </div>


      </div>
    </div>
  </header>
);

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px' }} className="m-4">
    <Img {...img} alt={name} style={{ overflow: 'visible', margin: 0 }} />
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">


      <section className="section py-7" id="references">
        <div className="container">
          <header className="section-header mb-3">
            <h2><Trans>You’re in good company</Trans></h2>
            <hr className="my-2" />
            <p>Many successful companies already use Ledgy to keep track of their share register</p>
          </header>

          <div className="partner mx-auto" style={{ maxWidth: '1200px' }}>
            <Reference img={props.data.testingtime} name="TestingTime" />
            <Reference img={props.data.quitt} name="quitt.ch" />
            <Reference img={props.data.cryptofund} name="CryptoFund" />
            <Reference img={props.data.frontify} name="Frontify" />
            <Reference img={props.data.sherpany} name="Sherpany" />
            <Reference img={props.data.apiax} name="Apiax" />
            <Reference img={props.data.allthings} name="Allthings Technologies" />
            <Reference img={props.data.farmy} name="Farmy" />

          </div>

          <div className="mx-auto text-center">
            <Link href to={`${props.prefix}/features`} className="btn btn-round btn-xl btn-success mt-6" >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div>

        </div>

      </section>

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
