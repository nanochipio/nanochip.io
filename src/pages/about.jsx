// @flow

import React from 'react';
import Img from 'gatsby-image';

import aboutUs from '../assets/img/about-us.jpg';

const Header = () => (
  <header className="header header-inverse" style={{ backgroundColor: '#00b38d' }}>
    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">

          <h1>About Us</h1>
          <p className="fs-20 opacity-70">Find out about our mission, services and meet our great team</p>

        </div>
      </div>

    </div>
  </header>
);

type ProfileProps = {
  name: string,
}
type FounderProps = {
  ...$Exact<ProfileProps>,
  img: Object,
}
const Founder = ({ name, img }: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && <Img resolutions={img.resolutions} alt={name} />}
    <h6>{name} <small>Co-Founder &amp; CEO</small></h6>
    <p>Uniquely grow resource maximizing outsourcing for excellent core competencies.</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-twitter" href="https://twitter.com"><i className="fa fa-twitter" /></a>
      <a className="social-linkedin" href="https://linkedin.com"><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

const Investor = ({ name }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    <img src="assets/img/avatar/2.jpg" alt="..." />
    <h5>{name}</h5>
    <small>Co-Founder &amp; CTO</small>
    <p>
      So firmament sea them sea.
      Set saying land signs had the us replenish seed moved rule, place let.
    </p>
  </div>
);


const Advisor = ({ name }: ProfileProps) => (
  <div className="col-12 col-md-6 team-2">
    <h5>{name}</h5>
    <small>Co-Founder &amp; CTO</small>
    <p>
      So firmament sea them sea.
      Set saying land signs had the us replenish seed moved rule, place let.
    </p>
  </div>
);

const IndexPage = ({ data }: Object) => (
  <div>
    <Header />
    <main className="main-content">
      <section className="section py-150 bg-gray">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 pl-50 pr-80">
              <h2>Our Mission</h2>
              <p className="lead">Energistically transform pandemic manufactured products whereas premier solutions. Compellingly streamline an expanded array of web-readiness rather.</p>
              <br />
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Deliver a high quality web design</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Support our customers once signing a contract</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Streamline an expanded array of web</span>
              </p>
              <p>
                <i className="ti-check text-success mr-8" />
                <span className="fs-14">Pursue web-enabled niche markets with professionals</span>
              </p>
            </div>
            <div className="col-lg-6 hidden-md-down align-self-center">
              <img className="shadow-3 aos-init aos-animate" src={aboutUs} alt="..." data-aos="fade-left" data-aos-duration="1500" />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Team</small>
            <h2>Who we are</h2>
            <hr />
            <p className="lead">Meet out small team that make those great products.</p>
          </header>


          <div className="row gap-y">
            <Founder name="Timo Horstschaefer" img={data.timo} />
            <Founder name="Ben-Elias Brandt" img={data.ben} />
            <Founder name="Yoko Spirig" img={data.yoko} />
          </div>

        </div>
      </section>

      <section className="section bg-gray">
        <div className="container">
          <header className="section-header">
            <small>Investors</small>
            <h2>Backed by leading investors from Switzerland</h2>
            <hr />
            <p className="lead">Meet the team working to make customer support simpler for you.</p>
          </header>


          <div className="row gap-y">
            <Investor name="Myke Naef" />
            <Investor name="Paul E. Sevinc" />
            <Investor name="Luzius Meisser" />
          </div>

          <div className="row gap-y col-12 col-md-10 offset-md-1">
            <Advisor name="Adrian Buehrer" />
            <Advisor name="Elena Walder-Schiavone" />
          </div>


        </div>
      </section>
    </main>
  </div>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query AboutQuery {
    ben: imageSharp(id: { regex: "/ben.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    yoko: imageSharp(id: { regex: "/yoko.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
    timo: imageSharp(id: { regex: "/timo.jpg/" }) {
      resolutions(width: 255, height: 255) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
