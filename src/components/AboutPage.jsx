// @flow

import React from 'react';
import Img from 'gatsby-image';
import { translate } from 'react-i18next';

const Header = ({ t }: Object) => (
  <header className="header header-inverse" style={{ backgroundColor: '#00b38d' }}>
    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">

          <h1>{t('about.aboutUs')}</h1>
          <p className="fs-20 opacity-70">{t('about.findOutAboutOurMission')}</p>

        </div>
      </div>

    </div>
  </header>
);

type ProfileProps = {
  name: string,
  func: string,
  description: string,
  img: Object,
}
type FounderProps = {
  ...$Exact<ProfileProps>,
  twitterlink: string,
  linkedinlink: string,
}

const Founder = ({ name, func, description, img, twitterlink, linkedinlink }: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && <Img {...img} alt={name} />}
    <h6>{name}</h6>
    <small>{func}</small>
    <p>{description}</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-twitter" href={twitterlink}><i className="fa fa-twitter" /></a>
      <a className="social-linkedin" href={linkedinlink}><i className="fa fa-linkedin" /></a>
    </div>
  </div>
);

const Investor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);


const Advisor = ({ name, func, description, img }: ProfileProps) => (
  <div className="col-12 col-md-6 team-2">
    {img && <Img {...img} alt={name} />}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const IndexPage = (props: Object) => {
  const { data, t } = props;
  return (
    <div>
      <Header {...props} />
      <main className="main-content">
        <section className="section py-150 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2>{t('about.ourMission')}</h2>
                <p className="lead">
                  {t('about.ourMissionDescription')}
                </p>
              </div>
              <div className="col-12 col-lg-6 p-50 align-self-center">
                <Img {...data.mission} className="shadow-3 aos-init aos-animate" alt="mission" data-aos="fade-left" data-aos-duration="1500" />
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <small>{t('about.team')}</small>
              <h2>{t('about.whoWeAre')}</h2>
              <hr />
            </header>


            <div className="row gap-y">
              <Founder
                name="Timo Horstschaefer"
                func="Physics MSc ETH"
                description={t('about.timo')}
                twitterlink="https://twitter.com/thrstschfr"
                linkedinlink="https://www.linkedin.com/in/timohorstschaefer/"
                img={data.timo}
              />
              <Founder
                name="Ben-Elias Brandt"
                func="Physics MSc ETH"
                description={t('about.ben')}
                twitterlink="https://twitter.com/bebinoy"
                linkedinlink="https://www.linkedin.com/in/ben-elias-brandt-680a95110/"
                img={data.ben}
              />
              <Founder
                name="Yoko Spirig"
                func="Physics MSc ETH"
                description={t('about.yoko')}
                twitterlink="https://twitter.com/YokoSpirig"
                linkedinlink="https://www.linkedin.com/in/yokospirig/"
                img={data.yoko}
              />
            </div>

          </div>
        </section>

        <section className="section bg-gray">
          <div className="container">
            <header className="section-header">
              <small>{t('about.advisors')}</small>
              <h2>{t('about.backedBy')}</h2>
            </header>

            <div className="row gap-y">
              <Investor
                name="Myke Näf"
                func="Board Member"
                description={t('about.myke')}
                img={data.myke}
              />
              <Investor
                name="Dr. Paul E. Sevinç"
                func="Board Member"
                description={t('about.paul')}
                img={data.paul}
              />
              <Investor
                name="Luzius Meisser"
                func="Advisor"
                description={t('about.luzius')}
                img={data.luzius}
              />
            </div>

            <div className="row gap-y col-12 col-md-10 offset-md-1">
              <Advisor
                name="Adrian Bührer"
                func="Advisor"
                description={t('about.adrian')}
                img={data.adrian}
              />
              <Advisor
                name="Elena Walder-Schiavone"
                func="Advisor"
                description={t('about.elena')}
                img={data.elena}
              />
            </div>

          </div>
        </section>
      </main>
    </div>
  );
};

export default translate()(IndexPage);

// eslint-disable-next-line no-undef
export const aboutPageFragment = graphql`
  fragment AboutPageFragment on RootQueryType {
    mission: imageSharp(id: { regex: "/mission/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
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


    myke: imageSharp(id: { regex: "/myke.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    paul: imageSharp(id: { regex: "/paul.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    luzius: imageSharp(id: { regex: "/luzius.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    adrian: imageSharp(id: { regex: "/adrian.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
    elena: imageSharp(id: { regex: "/elena.jpg/" }) {
      resolutions(width: 128, height: 128) {
        ...GatsbyImageSharpResolutions
      }
    }
  }
`;
