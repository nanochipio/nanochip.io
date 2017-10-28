// @flow

import React from 'react';
import Img from 'gatsby-image';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/css/scss/thesaas.scss';
import '../fonts';

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
            <a className="btn btn-block btn-outline btn-primary" href="https://app.ledgy.com/login">Login</a>
            <a className="btn btn-block btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
            <h4 className="mt-3">19 CHF/month. So Easy!</h4>
          </div>
        </ul>
        <div className="d-inline-flex ml-30 hidden-sm-down">
          <a className="btn btn-sm btn-outline btn-white mr-4" href="https://app.ledgy.com/login">Login</a>
          <a className="btn btn-sm btn-success" href="https://app.ledgy.com/signup">Sign Up</a>
        </div>
      </div>

    </div>
  </nav>
);


const Footer = ({ data }: Object) => (
  <footer className="site-footer">
    <div className="container">
      <div className="row gap-y align-items-center">
        <div className="col-12 col-lg-3">
          <div className="text-center text-lg-left">
            <a href="/">
              <Img className="logo-default logo-inverse" resolutions={data.logo.resolutions} alt="logo" />
            </a>
          </div>
        </div>

        <div className="col-12 col-lg-6">
          <ul className="nav nav-primary nav-hero">
            <li className="nav-item">
              <a className="nav-link" href="/features">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="col-12 col-lg-3">
          <div className="social text-center text-lg-right">
            <a className="social-twitter" href="https://twitter.com/LedgyCom"><i className="fa fa-twitter" /></a>
            <a className="social-facebook" href="https://www.facebook.com/LedgyCom/"><i className="fa fa-facebook" /></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

const TemplateWrapper = ({ children, ...props }: { children: () => any }) => (
  <div>
    <Nav {...props} />
    {children()}
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
