// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import { I18nProvider, withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';

import '../assets/scss/page.scss';

import logoDefault from '../img/logo_black.png';
import logoInverse from '../img/logo_white.png';

import en from '../locale/en/messages.json';
import de from '../locale/de/messages.json';


type LayoutProps = {
  prefix: string,
  lang: string,
}

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link href to={`${props.prefix}/#start`} className="navbar-brand">
    <img className="logo-dark" src={logoDefault} width={100} height={40} alt="Ledgy" />
    {props.inverse &&
      <img className="logo-inverse" src={logoInverse} width={100} height={40} alt="Ledgy" />}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav className="navbar navbar-expand-lg navbar-light navbar-stick-dark" data-navbar="sticky">
    <div className="container">

      <div className="navbar-left">
        <button className="navbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>

      <section className="navbar-mobile">
        <nav className="nav nav-navbar ml-auto">
          <Link className="nav-link" href to={`${props.prefix}/features`}><Trans>Why it’s great</Trans></Link>
          <Link className="nav-link" href to={`${props.prefix}/about-us`}><Trans>About us</Trans></Link>
          <Link className="nav-link" href to={`${props.prefix}/blog`}><Trans>Blog</Trans></Link>
        </nav>

        <span className="navbar-divider" />

        <div>
          <a className="btn btn-sm btn-round btn-outline-light ml-lg-4 mr-2" href="https://app.ledgy.com"><Trans>Sign In</Trans></a>
        </div>
      </section>

    </div>
  </nav>
);

const Footer = (props: LayoutProps) => (
  <div>
    <section className="section bg-pale-secondary p-6">
      <div className="container">
        <div className="row gap-y align-items-center">
          <div className="col-md-5 text-center text-md-left">
            <h3>Try it for free</h3>
            <p>Already using Ledgy? <a href="https://app.ledgy.com/login">Sign in</a></p>
          </div>

          <div className="col-md-auto ml-auto text-center text-md-right">
            <a className="btn btn-round btn-xl btn-primary mb-2" href="https://app.ledgy.com/signup">Get Started</a>
          </div>
        </div>
      </div>
    </section>
    <footer className="footer py-7">
      <div className="container">
        <div className="row gap-y">

          <div className="col-md-6 col-xl-4">
            <p><Logo {...props} /></p>
          </div>

          <div className="col-6 col-md-3 col-xl-2">
            <h6 className="mb-4 mt-1"><strong>Company</strong></h6>
            <div className="nav flex-column">
              <Link className="nav-link" href to={`${props.prefix}/about-us`}><Trans>About us</Trans></Link>
              <a className="nav-link" href="https://blog.ledgy.com">Blog</a>
              <Link className="nav-link" href to={`${props.prefix}/contact`}><Trans>Contact</Trans></Link>
            </div>
          </div>

          <div className="col-6 col-md-3 col-xl-2">
            <h6 className="mb-4 mt-1"><strong>Product</strong></h6>
            <div className="nav flex-column">
              <Link className="nav-link" href to={`${props.prefix}/features`}><Trans>Why Ledgy?</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/round-modeling`}><Trans>Round Modeling</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/esop`}><Trans>ESOP</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/consistency`}><Trans>Consistency</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/reporting`}><Trans>Reporting</Trans></Link>
              <Link className="nav-link" href to={`${props.prefix}/features/investors`}><Trans>Investors</Trans></Link>
            </div>
          </div>

          <div className="col-6 col-md-6 col-xl-2 text-center">
            <div className="social social-bordered">
              <a className="social-twitter" href="https://twitter.com/LedgyCom"><i className="fa fa-twitter" /></a>
              <a className="social-linkedin" href="https://www.linkedin.com/company/ledgy"><i className="fa fa-linkedin" /></a>
              <a className="social-facebook" href="https://www.facebook.com/LedgyCom/"><i className="fa fa-facebook" /></a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  </div>
);


type SiteProps = {
  ...$Exact<Props>,
  lang: string,
  data: { site: { siteMetadata: {
    name: string, siteUrl: string,
  } } },
  children: () => React.Node,
}

const TemplateWrapper = withI18n()((props: SiteProps) => {
  const { i18n } = props;
  const { siteUrl } = props.data.site.siteMetadata;
  const prefix = props.lang === 'de' ? '/de' : '';
  const title = `${i18n.t`site.title`} — ${i18n.t`site.slogan`} | ${i18n.t`site.name`}`;
  const thumbnail = `${siteUrl}/thumbnail.png`;
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={i18n.t`site.description`} />
        <meta name="keywords" content={i18n.t`site.keywords`} />

        {/* Facebook social card */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={i18n.t`site.description`} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter social card */}
        <meta name="twitter:site" content="@LedgyCom" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={i18n.t`site.description`} />
        <meta name="twitter:image" content={thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Nav {...props} prefix={prefix} />
      {props.children({ ...props, prefix })}
      <Footer {...props} prefix={prefix} />
    </div>
  );
});

export default (props: Object) => {
  const lang = props.location.pathname.startsWith('/de/') ? 'de' : 'en';
  return (
    <I18nProvider language={lang} catalogs={{ en: { messages: en }, de: { messages: de } }}>
      <TemplateWrapper {...props} lang={lang} />
    </I18nProvider>
  );
};

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
