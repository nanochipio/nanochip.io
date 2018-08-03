// @flow

import * as React from "react";
import { navigateTo } from "gatsby-link";
import Link from "../components/Link";
import { I18nProvider, withI18n, Trans } from "@lingui/react";
import { Helmet } from "react-helmet";

import { Title, name, appUrl, blogUrl, demoUrl } from "./utils";
import { catalogs, langFromPath, langPrefix, getLocale } from "../i18n-config";

import "../assets/scss/page.scss";

import logoDefault from "../assets/img/nanochip-light.svg";
import logoInverse from "../assets/img/nanochip-dark.svg";

type LayoutProps = {
  ...$Exact<Props>,
  lang: string,
  location: { pathname: string }
};

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link
    href
    to={`${props.prefix}/`}
    className="navbar-brand"
    style={{ width: "180px" }}
  >
    <img
      className="logo-dark"
      src={logoDefault}
      width={140}
      height={40}
      alt={name}
    />
    {props.inverse && (
      <img
        className="logo-light"
        src={logoInverse}
        width={140}
        height={40}
        alt={name}
      />
    )}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav
    className="navbar navbar-expand-lg navbar-light navbar-stick-dark"
    data-navbar="sticky"
  >
    <div className="container">
      <div className="navbar-left">
        <button className="navbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>

      <section className="navbar-mobile">
        <h6 className="d-sm-none">Nanochip</h6>
        <nav className="nav nav-navbar ml-auto font-family-roboto">
          <Link className="nav-link" href to={`${props.prefix}/services/`}>
            <Trans>Services</Trans>
          </Link>
          <Link className="nav-link" href to={`${props.prefix}/products/`}>
            <Trans>Products</Trans>
          </Link>
          <Link className="nav-link" href to={`${props.prefix}/about-us/`}>
            <Trans>About Us</Trans>
          </Link>
          <Link className="nav-link" href to={`${props.prefix}/contact/`}>
            <Trans>Contact Us</Trans>
          </Link>
        </nav>

        <span className="navbar-divider" />
        {props.lang === "vi" ? (
          <Link
            href
            to={props.location.pathname.substr(3)}
            className="btn btn-round btn-outline-light ml-lg-4 mr-2"
          >
            English
          </Link>
        ) : (
          <Link
            href
            to={`/vi${props.location.pathname}`}
            className="btn btn-round btn-outline-light ml-lg-4 mr-2"
          >
            Vietnamese
          </Link>
        )}
      </section>
    </div>
  </nav>
);

const Footer = (props: LayoutProps) => (
  <footer className="footer py-7 bg-gray">
    <div className="container ">
      <div className="row gap-y">
        <div className="col-md-6 col-xl-3">
          <Logo {...props} inverse={false} />
        </div>

        <div className="col-6 col-md-3 col-xl-2">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Company</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/about-us/`}>
              <Trans>About Us</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/privacy/`}>
              <Trans>Privacy</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/security/`}>
              <Trans>Security</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/contact/`}>
              <Trans>Contact Us</Trans>
            </Link>
          </div>
        </div>

        <div className="col-6 col-md-3 col-xl-3">
          <h6 className="mb-4 mt-1">
            <strong>
              <Trans>Business</Trans>
            </strong>
          </h6>
          <div className="nav flex-column">
            <Link className="nav-link" href to={`${props.prefix}/products/`}>
              <Trans>Products</Trans>
            </Link>
            <Link className="nav-link" href to={`${props.prefix}/services/`}>
              <Trans>Services</Trans>
            </Link>
            <Link className="nav-link" href={"https://iotmaker.vn"}>
              <Trans>Store</Trans>
            </Link>
          </div>
        </div>
        <div className="col-6 col-md-5 col-xl-3 px-1">
          <div className="social social-bordered">
            <h7 className="fw-500">
              <Trans>Follow us on: </Trans>
            </h7>
            <a
              className="offset-1 social-facebook"
              href="https://www.facebook.com/iotmaker.vn/"
            >
              <i className="fa fa-facebook" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div data-provide="map" />
  </footer>
);

type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  data: {
    site: {
      siteMetadata: {
        name: string,
        siteUrl: string
      }
    }
  },
  children: Object => React.Node,
  location: { pathname: string }
};

const TemplateWrapper = withI18n()((props: SiteProps) => {
  const { i18n } = props;
  const { siteUrl } = props.data.site.siteMetadata;
  const prefix = langPrefix(props.lang);
  const thumbnailUrl = `${siteUrl}/thumbnail.png`;
  const { pathname } = props.location;
  const EnPathname = `${siteUrl}${
    pathname.startsWith("/vi") ? pathname.substr(3) : pathname
  }`;
  return (
    <div>
      <Title
        title={i18n.t`Make your world more intelligence`}
        description={i18n.t`We are a team which good enginers, we will help you control your life esier and more intelligence.`}
      />
      <Helmet>
        <html lang={props.lang} />
        <meta
          name="keywords"
          content={i18n.t`startup, esp, esp32, esp8266, arduino, UnoX, IoT, iotmaker, espressif, nanochip`}
        />
        <meta name="author" content="nanochip" />

        {/* Facebook social card */}
        <meta property="og:site_name" content={name} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content={thumbnailUrl} />

        <link rel="alternate" href={EnPathname} hrefLang="x-default" />
        <link rel="alternate" href={EnPathname} hrefLang="en" />
        <link
          rel="alternate"
          href={`${siteUrl}${
            pathname.startsWith("/vi") ? "" : "/vi"
          }${pathname}`}
          hrefLang="vi"
        />

        {/* Disable AOS for Google */}
        <noscript>
          {`
            <style>
              [data-aos] {
                  opacity: 1 !important;
                  transform: translate(0) scale(1) !important;
              }
            </style>
          `}
        </noscript>
      </Helmet>
      <Nav {...props} prefix={prefix} />
      {props.children({ ...props, prefix })}
      <Footer {...props} prefix={prefix} />
    </div>
  );
});

export default class extends React.Component<{
  location: { pathname: string }
}> {
  componentDidMount = () => {
    require("../assets/js/page"); // eslint-disable-line global-require
    require("../assets/js/script"); // eslint-disable-line global-require

    const { pathname } = this.props.location;
    if (getLocale() === "vi" && !pathname.startsWith("/vi")) {
      navigateTo(`/vi${this.props.location.pathname}`);
    }
  };
  render = () => {
    const lang = langFromPath(this.props.location.pathname);
    return (
      <I18nProvider language={lang} catalogs={catalogs}>
        <TemplateWrapper {...this.props} lang={lang} />
      </I18nProvider>
    );
  };
}

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        siteUrl
      }
    }
  }
`;
