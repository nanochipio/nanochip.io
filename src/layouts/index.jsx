// @flow

import React from 'react';
import Img from 'gatsby-image';

import '../assets/vendor/bootstrap/css/bootstrap.css';
import '../assets/css/scss/thesaas.scss';
import '../assets/vendor/font-awesome/css/font-awesome.css';

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

const Nav = ({ data }: Object) => (
  <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
    <div className="container">

      <div className="topbar-left">
        <button className="topbar-toggler">&#9776;</button>
        <a className="topbar-brand" href="index.html">
          <Img className="logo-default logo-inverse" resolutions={data.logo.resolutions} alt="logo" />
        </a>
      </div>


      <div className="topbar-right">
        <ul className="topbar-nav nav">
          <li className="nav-item"><a className="nav-link active" href="index.html">Home</a></li>
          <li className="nav-item">
            <button className="nav-link btn-link">Samples <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link" href="demo-helpato.html">Helpato</a>
              <a className="nav-link" href="demo-trello.html">Trello</a>
              <a className="nav-link" href="demo-gmail.html">Gmail</a>
              <a className="nav-link" href="demo-skype.html">Skype</a>
              <a className="nav-link" href="demo-github.html">GitHub</a>
              <a className="nav-link" href="demo-app.html">Mobile App</a>
              <a className="nav-link" href="demo-bootstrap.html">Bootstrap</a>
              <a className="nav-link" href="demo-slack.html">Slack</a>
              <a className="nav-link" href="demo-zendesk.html">Zendesk</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Headers <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link active" href="header-color.html">Solid Color</a>
              <a className="nav-link" href="header-gradient.html">Gradient</a>
              <a className="nav-link" href="header-particle.html">Particle</a>
              <a className="nav-link" href="header-typing.html">Typing Text</a>
              <a className="nav-link" href="header-image.html">Background Image</a>
              <a className="nav-link" href="header-video.html">Background Video</a>
              <a className="nav-link" href="header-parallax.html">Parallax</a>
              <a className="nav-link" href="header-slider.html">Slider</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Blocks <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu cols-2">
              <a className="nav-link" href="block-feature.html">Feature</a>
              <a className="nav-link" href="block-feature-textual.html">Textual feature</a>
              <a className="nav-link" href="block-content.html">Content</a>
              <a className="nav-link" href="block-portfolio.html">Portfolio</a>
              <a className="nav-link" href="block-pricing.html">Pricing</a>
              <a className="nav-link" href="block-cta.html">Call to action</a>
              <a className="nav-link" href="block-testimonial.html">Testimonial</a>
              <a className="nav-link" href="block-team.html">Team</a>
              <a className="nav-link" href="block-contact.html">Contact</a>
              <a className="nav-link" href="block-signup.html">Signup</a>
              <a className="nav-link" href="block-subscribe.html">Subscribe</a>
              <a className="nav-link" href="block-partner.html">Partner</a>
              <a className="nav-link" href="block-topbar.html">Topbar</a>
              <a className="nav-link" href="block-footer.html">Footer</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Blog <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link" href="blog-classic.html">Layout classic</a>
              <a className="nav-link" href="blog-grid.html">Layout grid</a>
              <a className="nav-link" href="blog-list.html">Layout list</a>
              <a className="nav-link" href="blog-single.html">Single post</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Shop <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link" href="shop-list.html">Product list</a>
              <a className="nav-link" href="shop-single.html">Single product</a>
              <a className="nav-link" href="shop-cart.html">Cart overview</a>
              <a className="nav-link" href="shop-checkout.html">Checkout</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Pages <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link" href="page-how-it-works.html">How it works</a>
              <a className="nav-link" href="page-pricing.html">Pricing</a>
              <a className="nav-link" href="page-portfolio.html">Portfolio</a>
              <a className="nav-link" href="page-project.html">Project</a>
              <a className="nav-link" href="page-job.html">Jobs</a>
              <a className="nav-link" href="page-job-single.html">Job Info</a>
              <a className="nav-link" href="page-demo.html">Request Demo</a>
              <a className="nav-link" href="page-press.html">Press</a>
              <a className="nav-link" href="page-about.html">About</a>
              <a className="nav-link" href="page-contact.html">Contact</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Extra <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu">
              <a className="nav-link" href="page-login.html">Login</a>
              <a className="nav-link" href="page-register.html">Register</a>
              <a className="nav-link" href="page-faq.html">FAQ</a>
              <a className="nav-link" href="page-coming-soon.html">Coming soon</a>
              <a className="nav-link" href="page-privacy.html">Privacy Policy</a>
              <a className="nav-link" href="page-404.html">Error 404</a>
            </div>
          </li>

          <li className="nav-item">
            <button className="nav-link btn-link" href="">Doc <i className="fa fa-caret-down" /></button>
            <div className="nav-submenu align-right">
              <a className="nav-link" href="doc-element.html">Elements</a>
              <a className="nav-link" href="doc-component.html">Components</a>
              <a className="nav-link" href="doc-section.html">Sections</a>
              <a className="nav-link" href="doc-card.html">Cards</a>
              <a className="nav-link" href="doc-typography.html">Typography</a>
              <a className="nav-link" href="doc-utility.html">Utility Classes</a>
            </div>
          </li>
        </ul>
      </div>

    </div>
  </nav>
);

const Header = () => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }}>
    <canvas className="constellation" />

    <div className="container text-center">

      <div className="row h-full">
        <div className="col-12 col-lg-10 offset-lg-1 align-self-center">

          <h1 className="display-2 hidden-sm-down">Online Share Register</h1>
          <h1 className="display-4 hidden-md-up">Online Share Register</h1>
          <br />
          <p className="fs-20 w-400 mx-auto hidden-sm-down">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>
          <p className="fs-16 w-250 mx-auto hidden-md-up">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>

          <hr className="w-80" />
          <br />

          <form className="row gap-y form-glass form-round">

            <div className="input-group">
              <input type="text" className="form-control" placeholder="Search for..." />
              <span className="input-group-btn">
                <button className="btn btn-primary" type="button">Go!</button>
              </span>
            </div>
          </form>

          <a className="btn btn-xl btn-round btn-white w-200 hidden-sm-down" href="https://demo.ledgy.com">Launch Demo</a>
          <a className="btn btn-lg btn-round btn-white w-200 hidden-md-up" href="https://demo.ledgy.com">Launch Demo</a>

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
