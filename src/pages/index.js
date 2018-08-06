// @flow

import * as React from "react";
import { withI18n, Trans } from "@lingui/react";
import Link from "gatsby-link";
import Img from "gatsby-image";

import { FeatureLinks } from "../components/Features";
import { demoUrl } from "../layouts/utils";

const Header = ({ i18n, data, prefix }: Props) => (
  <header className="header bg-ledgy pb-0">
    <div className="container">
      <div className="row align-items-center gap-y mt-5 pb-7">
        <div className="col-lg-6 ml-auto mb-4 text-white">
          <h1 style={{ fontFamily: "Roboto" }}>
            <Trans> Not just the idea, it's the solution!</Trans>
          </h1>
          <p className="font-family-arial">
            <Trans>
              Are you looking for a technology solution to solve the problem
              around you? Are you in need of an IoT application for your
              customers?
              <br />
              <br />
              Come to Nanochip, we will solve the problem for you! With your
              ideas and requirements, we will have the appropriate and optimal
              solution.
            </Trans>
          </p>
          <p className="font-family-arial">
            <Trans>
              Contact with us{" "}
              <Link href to={`${prefix}/contact/`}>
                now
              </Link>.
            </Trans>
          </p>
        </div>
        <div className="col-lg-6 order-lg-first" data-aos="fade-up">
          <Img {...data.laptop} alt={i18n.t`Screenshot of the Ledgy app`} />
        </div>
      </div>
    </div>
  </header>
);

const Reference = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: "200px" }} className="my-4">
    <Img {...img} alt={name} />
  </div>
);

const IndexPage = (props: Props) => (
  <div>
    <Header {...props} />
    <main className="main-content">
      <section className="section py-7" id="references">
        <div className="container">
          <header className="section-header mb-3">
            <h2 className="font-family-roboto">
              <Trans>Partner</Trans>
            </h2>
            <hr className="my-2" />
            <p className="font-family-arial">
              <Trans>
                Always listen and provide for all customers with the best
                technology and service.
              </Trans>
            </p>
          </header>

          <div className="partner">
            <Reference img={props.data.vtcacademy} name="VTC Academy" />
            <Reference img={props.data.cytron} name="Cytron Technologies" />
            <Reference img={props.data.topdev} name="TopDev" />
            <Reference
              img={props.data.techforvietnam}
              name="Tech for Vietnam"
            />
            <Reference img={props.data.randp} name="Reliable and Perfect" />
          </div>

          {/* <div className="mx-auto text-center mt-5">
            <Link
              href
              to={`${props.prefix}/services/`}
              className="btn btn-block d-sm-inline btn-round btn-xl btn-outline-primary mt-6"
            >
              <Trans>Find out why they trust us</Trans>
            </Link>
          </div> */}

          <FeatureLinks {...props} page="index" />
        </div>
      </section>
    </main>
  </div>
);

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexQuery {
    ...FeaturesFragment

    laptop: imageSharp(id: { regex: "/laptop.png/" }) {
      sizes(maxWidth: 2000) {
        ...GatsbyImageSharpSizes_noBase64
      }
    }

    cytron: imageSharp(id: { regex: "/cytron/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    vtcacademy: imageSharp(id: { regex: "/vtcacademy/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    techforvietnam: imageSharp(id: { regex: "/techforvietnam/" }) {
      resolutions(width: 130) {
        ...GatsbyImageSharpResolutions
      }
    }
    sunshine: imageSharp(id: { regex: "/sunshine/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
    randp: imageSharp(id: { regex: "/randp/" }) {
      resolutions(width: 100) {
        ...GatsbyImageSharpResolutions
      }
    }
    topdev: imageSharp(id: { regex: "/topdev/" }) {
      resolutions(width: 150) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
