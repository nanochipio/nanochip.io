// @flow

import React from 'react';
import Img from 'gatsby-image';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/css/scss/thesaas.scss';
import '../assets/vendor/font-awesome/css/font-awesome.css';
import '../assets/vendor/themify-icons/css/themify-icons.css';

import '../fonts/dosis-v7-latin-regular.eot';
import '../fonts/dosis-v7-latin-regular.svg';
import '../fonts/dosis-v7-latin-regular.ttf';
import '../fonts/dosis-v7-latin-regular.woff';
import '../fonts/dosis-v7-latin-regular.woff2';

import '../fonts/open-sans-v15-latin-regular.eot';
import '../fonts/open-sans-v15-latin-regular.svg';
import '../fonts/open-sans-v15-latin-regular.ttf';
import '../fonts/open-sans-v15-latin-regular.woff';
import '../fonts/open-sans-v15-latin-regular.woff2';

import '../assets/vendor/font-awesome/fonts/fontawesome-webfont.eot';
import '../assets/vendor/font-awesome/fonts/fontawesome-webfont.svg';
import '../assets/vendor/font-awesome/fonts/fontawesome-webfont.woff';
import '../assets/vendor/font-awesome/fonts/fontawesome-webfont.woff2';

import '../assets/vendor/themify-icons/fonts/themify.eot';
import '../assets/vendor/themify-icons/fonts/themify.svg';
import '../assets/vendor/themify-icons/fonts/themify.ttf';
import '../assets/vendor/themify-icons/fonts/themify.woff';

const Nav = ({ data }: Object) => (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">

      <div className="topbar-left">
        <button className="topbar-toggler">&#9776;</button>
        <a className="topbar-brand" href="/">
          <Img className="logo-default logo-inverse" resolutions={data.logo.resolutions} alt="logo" />
        </a>
      </div>


      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item"><a className="nav-link active" href="/features">Features</a></li>
          <li className="nav-item"><a className="nav-link active" href="/about">About</a></li>
          <li className="nav-item"><a className="nav-link active" href="/contact">Contact</a></li>
          <div className="hidden-md-up lh-2">
            <a className="btn btn-block btn-outline btn-secondary" href="https://app.ledgy.com/login">Login</a>
            <a className="btn btn-block btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
          </div>
        </ul>
        <div className="d-inline-flex ml-30 hidden-sm-down">
          <a className="btn btn-sm btn-outline btn-secondary mr-4" href="https://app.ledgy.com/login">Login</a>
          <a className="btn btn-sm btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
        </div>
      </div>

    </div>
  </nav>
);

const Header = () => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }}>
    {/* <canvas className="constellation" /> */}

    <div className="container text-center">

      <div className="row h-full">
        <div className="col-12 col-lg-10 offset-lg-1 align-self-center">

          <h1 className="display-2">Online Share Register</h1>
          <br />
          <p className="fs-20 w-400 mx-auto hidden-sm-down">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>
          <p className="fs-18 w-250 mx-auto hidden-md-up">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>

          <br />

          <div className="col-10 offset-1 col-md-8 offset-md-2">

            <form className="form-glass row" action="https://app.ledgy.com/signup" method="get">
              <div className="col-12 col-md-7">
                <input type="text" name="email" className="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div className="col-12 col-md-5 py-2">
                <button style={{ height: '100%' }} className="btn btn-block btn-lg btn-success">Get Started</button>
              </div>
            </form>
            <div className="row mt-2 pr-3 float-right">
              <a
                style={{ textDecoration: 'underline' }}
                className="text-white"
                href="https://demo.ledgy.com"
              >Watch the demo
              </a>
            </div>

          </div>
        </div>

        <div className="col-12 align-self-end text-center">
          <a className="scroll-down-1 scroll-down-inverse" href="#section-intro" data-scrollto="section-intro"><span /></a>
        </div>

      </div>

    </div>
  </header>
);

const Footer = ({ data }: Object) => (
  <footer className="site-footer">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-lg-3">
          <div className="text-center text-lg-left">
            <a href="index.html">
              <Img className="logo-default logo-inverse" resolutions={data.logo.resolutions} alt="logo" />
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <ul className="nav nav-primary nav-hero">
            <li className="nav-item">
              <a className="nav-link" href="index.html">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="blog.html">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="block-feature.html">Features</a>
            </li>
            <li className="nav-item hidden-sm-down">
              <a className="nav-link" href="page-pricing.html">Pricing</a>
            </li>
            <li className="nav-item hidden-sm-down">
              <a className="nav-link" href="page-contact.html">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-facebook" href="https://www.facebook.com/thethemeio"><i className="fa fa-facebook" /></a>
            <a className="social-twitter" href="https://twitter.com/thethemeio"><i className="fa fa-twitter" /></a>
            <a className="social-instagram" href="https://www.instagram.com/thethemeio/"><i className="fa fa-instagram" /></a>
            <a className="social-dribbble" href="https://dribbble.com/thethemeio"><i className="fa fa-dribbble" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const TemplateWrapper = ({ children, ...props }: { children: () => any }) => (
  <div>
    <Nav {...props} />
    <Header />
    <main className="main-content">
      {children()}
    </main>
    <Footer {...props} />
  </div>
);

export default TemplateWrapper;

// eslint-disable-next-line no-undef
export const query = graphql`
  query LogoQuery {
    logo: imageSharp(id: { regex: "/logo/" }) {
      resolutions(width: 80) {
        ...GatsbyImageSharpResolutions_noBase64
      }
    }
  }
`;
