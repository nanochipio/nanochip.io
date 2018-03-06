// @flow

import * as React from 'react';
import Link from 'gatsby-link';
import { I18nProvider, withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/css/scss/thesaas.scss';
import '../assets/vendor/swiper/css/swiper.css';
import '../fonts';
import logoDefault from '../img/logo_black.png';
import logoInverse from '../img/logo_white.png';


type LayoutProps = {
  prefix: string,
  lang: string,
}

const Logo = (props: { prefix: string, inverse: boolean }) => (
  <Link href to={`${props.prefix}/#start`}>
    <img className="logo-default" src={logoDefault} width={75} height={30} alt="logo" />
    {props.inverse &&
      <img className="logo-inverse" src={logoInverse} width={75} height={30} alt="logo" />}
  </Link>
);

const Nav = (props: LayoutProps) => (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">

      <div className="topbar-brand">
        <button className="topbar-toggler">&#9776;</button>
        <Logo {...props} inverse />
      </div>


      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item">
            <button className="nav-link active btn-link text-left"><Trans>Product</Trans> <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <Link className="nav-link active" href to={`${props.prefix}/#testimonials`}><Trans>Testimonials</Trans></Link>
              <Link className="nav-link active" href to={`${props.prefix}/#pricing`}><Trans>Pricing</Trans></Link>
              <Link className="nav-link active" href to={`${props.prefix}/#features`}><Trans>Features</Trans></Link>
              <Link className="nav-link active" href to={`${props.prefix}/#demo`}><Trans>Demo</Trans></Link>
              <Link className="nav-link active" href to={`${props.prefix}/#future`}><Trans>The Future</Trans></Link>
            </div>
          </li>
          <li className="nav-item"><Link className="nav-link active" href to={`${props.prefix}/about`}><Trans>About</Trans></Link></li>
          <li className="nav-item"><Link className="nav-link active" href to={`${props.prefix}/contact`}><Trans>Contact</Trans></Link></li>
          <li className="nav-item"><a className="nav-link active" href="https://blog.ledgy.com"><Trans>Blog</Trans></a></li>
          <div className="nav-item d-block">
            <Link href className="nav-link d-inline active" to="/#start">
              {props.lang === 'en' ? <u>EN</u> : 'EN'}
            </Link>&nbsp;|&nbsp;
            <Link href className="nav-link d-inline active" to="/de/#start">
              {props.lang === 'de' ? <u>DE</u> : 'DE'}
            </Link>
          </div>
          <div className="hidden-md-up lh-2">
            <a className="btn btn-block btn-outline btn-primary" href="https://app.ledgy.com/login"><Trans>Login</Trans></a>
            <a className="btn btn-block btn-success" href="https://app.ledgy.com/signup"><Trans>Signup</Trans></a>
            <h4 className="mt-3"><Trans>Try for free</Trans></h4>
          </div>
        </ul>
        <div className="d-inline-flex ml-30 hidden-sm-down">
          <a className="btn btn-sm btn-outline btn-white mr-4" href="https://app.ledgy.com/login"><Trans>Login</Trans></a>
          <a className="btn btn-sm btn-success" href="https://app.ledgy.com/signup"><Trans>Signup</Trans></a>
        </div>
      </div>

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
  const { t } = props.i18n;
  const { name, siteUrl } = props.data.site.siteMetadata;
  const prefix = props.lang === 'de' ? '/de' : '';
  const newProps = { ...props, prefix };
  const title = `${name} - ${t`title`}`;
  const thumbnail = `${siteUrl}/thumbnail.png`;
  return (
    <div>
      <Helmet>
        <title>{name} - {t`title`}</title>
        <meta name="description" content={t`description`} />
        <meta name="keywords" content={t`keywords`} />

        {/* Facebook social card */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={t`description`} />
        <meta property="og:image" content={thumbnail} />
        <meta property="og:url" content={siteUrl} />

        {/* Twitter social card */}
        <meta name="twitter:site" content="@LedgyCom" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={t`description`} />
        <meta name="twitter:image" content={thumbnail} />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <Nav {...newProps} />
      {props.children()}
      <Footer {...newProps} />
    </div>
  );
});

export default (props: Object) => {
  const lang = props.location.pathname.startsWith('/de/') ? 'de' : 'en';
  return (
    <I18nProvider language={lang}>
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
