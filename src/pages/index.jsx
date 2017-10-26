// @flow

import React from 'react';
import Img from 'gatsby-image';

const IndexPage = ({ data }: Object) => (
  <section className="section" id="section-intro">
    <div className="container">
      <header className="section-header">
        <small>Headers</small>
        <h2>More Headers</h2>
        <hr />
        <p className="lead">TheSaaS includes several header examples which can be use just by copy and paste the code</p>
      </header>


      <div className="row gap-y">

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-color.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerColor.sizes} />
            <h6>Solid Color</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-gradient.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerGradient.sizes} />
            <h6>Gradient</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-particle.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerParticle.sizes} />
            <h6>Particle</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-typing.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerTyping.sizes} />
            <h6>Typing Text</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-image.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerImage.sizes} />
            <h6>Background Image</h6>
          </a>
        </div>


        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-video.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerVideo.sizes} />
            <h6>Background Video</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-parallax.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerParallax.sizes} />
            <h6>Parallax</h6>
          </a>
        </div>

        <div className="col-12 col-md-6 col-lg-4">
          <a className="text-center" href="header-slider.html">
            <Img className="shadow-2 hover-shadow-5 mb-3" title="..." sizes={data.headerSlider.sizes} />
            <h6>Slider</h6>
          </a>
        </div>
      </div>

    </div>
  </section>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query HeadersQuery {
    headerColor: imageSharp(id: { regex: "/header-color/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerGradient: imageSharp(id: { regex: "/header-gradient/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerParticle: imageSharp(id: { regex: "/header-particle/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerTyping: imageSharp(id: { regex: "/header-typing/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerImage: imageSharp(id: { regex: "/header-image/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerVideo: imageSharp(id: { regex: "/header-video/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerParallax: imageSharp(id: { regex: "/header-parallax/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    headerSlider: imageSharp(id: { regex: "/header-slider/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
