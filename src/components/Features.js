// @flow

import * as React from "react";
import { Trans } from "@lingui/react";
import Link from "gatsby-link";
import Img from "gatsby-image";

const hyphenToCamelCase = (s: string) =>
  s.replace(/-([a-z])/g, g => g[1].toUpperCase());

export const Feature = (props: {
  prefix: string,
  name: string,
  title?: string,
  children: React.Node,
  url: string,
  left?: boolean,
  data: Object
}) => (
  <div className="row align-items-center">
    <div className="col-md-5 ml-auto">
      <h2 id={props.url} className="font-family-roboto">
        {props.title || props.name}
      </h2>
      <p>{props.children}</p>
      <p>
        {/* <Link href to={`${props.prefix}/services/${props.url}/`}>
          <Trans>Learn more about</Trans> {props.name}
        </Link> */}
      </p>
    </div>

    <div
      className={`col-md-5 ml-auto ${props.left ? "order-md-first" : ""}`}
      data-aos={props.left ? "fade-right" : "fade-left"}
    >
      <Img {...props.data[hyphenToCamelCase(props.url)]} alt={props.name} />
    </div>
  </div>
);
Feature.defaultProps = {
  title: "",
  left: false
};

const FeatureLink = (props: {
  name: string,
  url: string,
  prefix: string,
  page: string,
  data: Object
}) =>
  props.page !== props.url && (
    <div className="col-6 px-3 col-lg-3">
      <Link href to={`${props.prefix}/services#${props.url}`}>
        <div className="card border hover-shadow-8">
          <div className="card-body mb-0 pb-0 px-2 h-125">
            <h6 className="card-title text-center">{props.name}</h6>
          </div>
          <div
            className="mx-auto"
            style={{
              height: "8rem",
              width: "8rem"
            }}
          >
            <Img
              className="card-img-bottom"
              {...props.data[hyphenToCamelCase(props.url)]}
              alt={props.name}
              style={{
                maxHeight: "100%",
                maxWidth: "100%"
              }}
            />
          </div>
        </div>
      </Link>
    </div>
  );

export const FeatureLinks = ({
  i18n,
  ...props
}: {
  prefix: string,
  page: string,
  data: Object,
  i18n: I18n
}) => (
  <div>
    <header className="section-header ">
      <hr className="mt-7 mb-5" />
      <h2>
        <Trans>Services</Trans>
      </h2>
    </header>

    <div className="row gap-y">
      <FeatureLink
        {...props}
        name={i18n.t`Design Hardware`}
        url="design-hardware"
      />
      <FeatureLink {...props} name={i18n.t`Firmware`} url="firmware" />
      <FeatureLink
        {...props}
        name={i18n.t`Supply Module Prototype`}
        url="supply"
      />
      <FeatureLink {...props} name={i18n.t`Ebook`} url="ebook" />
    </div>
  </div>
);

// eslint-disable-next-line no-undef
export const FeaturesFragment = graphql`
  fragment FeaturesFragment on RootQueryType {
    designHardware: imageSharp(id: { regex: "/design-hardware.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    firmware: imageSharp(id: { regex: "/firmware.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    supply: imageSharp(id: { regex: "/supply.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
    ebook: imageSharp(id: { regex: "/ebook.png/" }) {
      sizes(maxWidth: 800) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
