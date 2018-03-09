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
          <Link className="nav-link" href to={`${props.prefix}/features`}><Trans>Why Ledgy?</Trans></Link>
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
  <footer className="site-footer">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-lg-3">
          <div className="text-center text-lg-left">
            <Logo {...props} inverse={false} />
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <ul className="nav nav-primary nav-hero d-block d-sm-flex text-center">
            <li className="nav-item">
              <Link className="nav-link" href to={`${props.prefix}/#product`}><Trans>Product</Trans></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href to={`${props.prefix}/about`}><Trans>About</Trans></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href to={`${props.prefix}/contact`}><Trans>Contact</Trans></Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="https://blog.ledgy.com"><Trans>Blog</Trans></a>
            </li>
            <li className="nav-item d-block d-sm-flex">
              <Link href className="nav-link d-inline" to="/#start">
                {props.lang === 'en' ? <u>EN</u> : 'EN'}
              </Link> |&nbsp;
              <Link href className="nav-link d-inline" to="/de/#start">
                {props.lang === 'de' ? <u>DE</u> : 'DE'}
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-twitter" href="https://twitter.com/LedgyCom"><i className="fa fa-twitter" /></a>
            <a className="social-facebook" href="https://www.facebook.com/LedgyCom/"><i className="fa fa-facebook" /></a>
            <a className="social-linkedin" href="https://www.linkedin.com/company/ledgy"><i className="fa fa-linkedin" /></a>
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
  data: { site: { siteMetadata: {
    name: string, siteUrl: string,
  } } },
  children: () => React.Node,
}

const TemplateWrapper = withI18n()((props: SiteProps) => {
  const { i18n } = props;
  const { name, siteUrl } = props.data.site.siteMetadata;
  const prefix = props.lang === 'de' ? '/de' : '';
  const title = `${name} - ${i18n.t`site.title`}`;
  const thumbnail = `${siteUrl}/thumbnail.png`;
  return (
    <div>
      <Helmet>
        <title>{name} - {i18n.t`site.title`}</title>
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
      {props.children()}
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
        name
      }
    }
  }
`;
