// @flow

import * as React from "react";
import { withI18n, Trans } from "@lingui/react";
import Link from "gatsby-link";

import { Feature } from "../components/Features";
import { Title } from "../layouts/utils";

const Hr = () => <hr className="my-3" />;

export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Title title={i18n.t`Features`} />

    <header className="header text-white bg-ledgy">
      <div className="container text-center">
        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">
            <h1 style={{ fontFamily: "Roboto" }}>
              <Trans>Do what we do best</Trans>
            </h1>
          </div>
        </div>
      </div>
    </header>
    <main className="main-content">
      <section className="section pt-5">
        <div className="container">
          <Feature
            {...props}
            name={i18n.t`Design Hardware`}
            url="design-hardware"
          >
            <p className="text-justify font-family-arial ">
              <Trans>
                IoT hardware design serves prototype and application to actual
                IoT projects. These products are designed according to customer
                criteria, to help customers easier. The hardware is based on
                open source ...
              </Trans>
            </p>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Firmware`} url="firmware" left>
            <p className="text-justify font-family-arial">
              <Trans>
                With hardware solutions, we offer tailor-made package designs to
                optimize the hardware to build and develop high-performance,
                high-performance IoT projects.
              </Trans>
            </p>
          </Feature>

          <Hr />

          <Feature
            {...props}
            name={i18n.t`Supply Module Prototype`}
            url="supply"
          >
            <p className="text-justify font-family-arial">
              <Trans>
                In addition to the hardware products designed and manufactured,
                we also provide modules for WiFi, Wireless and GPRS / GSM
                modules, new IoT development modules updated in the world:
                ESP8266, Arduino, Orange Pi, .. .
              </Trans>
            </p>
          </Feature>

          <Hr />

          <Feature {...props} name={i18n.t`Ebook`} url="ebook" left>
            <p className="text-justify font-family-arial">
              <Trans>
                In order to better support our users, we publish eBooks, which
                teaches more detailed, detailed lessons for each small demo.
                From these demos, the user develops the project in a realistic
                way easier. These eBooks will be more suitable with subjects in
                education, teaching and beginners learn about programming.
              </Trans>
            </p>
          </Feature>

          <hr className="my-8 w-20" />

          <div className="row gap-y text-center">
            <div className="col-md-6 offset-xl-2 col-xl-4">
              <i className="text-primary fa fa-shield fa-3x mb-2" />
              <h5>
                <Trans>Privacy</Trans>
              </h5>
              <p>
                <Trans>
                  Cap table data is sensitive. That’s why we genuinely care
                  about your privacy.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/privacy/`}>
                  <Trans>Read more</Trans>{" "}
                  <i className="ti-angle-right fs-10 ml-1" />
                </Link>
              </p>
            </div>

            <div className="col-md-6 col-xl-4">
              <i className="text-success fa fa-lock fa-3x mb-2" />
              <h5>
                <Trans>Security</Trans>
              </h5>
              <p>
                <Trans>
                  Your data is safe with us. Enjoy the highest security
                  standards. No kidding.
                </Trans>
                <br />
                <Link href to={`${props.prefix}/security/`}>
                  <Trans>Read more</Trans>{" "}
                  <i className="ti-angle-right fs-10 ml-1" />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
));

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query FeaturesPageQuery {
    ...FeaturesFragment
  }
`;
