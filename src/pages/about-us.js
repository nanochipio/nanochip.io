// @flow

import * as React from "react";
import Img from "gatsby-image";
import { withI18n, Trans } from "@lingui/react";

import { Title } from "../layouts/utils";

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`About Us`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1 style={{ fontFamily: "Roboto" }}>
            <Trans>
              Who are we? <br />
              and <br />
              What we do?
            </Trans>
          </h1>
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
  fade: string
};
type FounderProps = {
  ...$Exact<ProfileProps>,
  twitterlink: string,
  linkedinlink: string,
  mail: string
};

const Founder = ({
  name,
  func,
  description,
  img,
  twitterlink,
  fade,
  linkedinlink,
  mail
}: FounderProps) => (
  <div className="col-12 col-md-6 col-lg-4 team-1">
    {img && (
      <div data-aos={`fade-${fade}`}>
        <Img {...img} alt={name} />
      </div>
    )}
    <h6>{name}</h6>
    <small>{func}</small>
    <p>{description}</p>
    <div className="social social-boxed social-rounded social-gray">
      <a className="social-mail" href={`mailto:${mail}`}>
        <i className="fa fa-envelope" />
      </a>
      <a className="social-twitter" href={twitterlink}>
        <i className="fa fa-twitter" />
      </a>
      <a className="social-linkedin" href={linkedinlink}>
        <i className="fa fa-linkedin" />
      </a>
    </div>
  </div>
);

const Investor = ({ name, func, description, img, fade }: ProfileProps) => (
  <div className="col-12 col-md-4 team-2">
    {img && (
      <div data-aos={`fade-${fade}`}>
        <Img {...img} alt={name} />
      </div>
    )}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const Advisor = ({ name, func, description, img, fade }: ProfileProps) => (
  <div className="col-12 col-md-6 team-2">
    {img && (
      <div data-aos={`fade-${fade}`}>
        <Img {...img} alt={name} />
      </div>
    )}
    <h5>{name}</h5>
    <small>{func}</small>
    <p>{description}</p>
  </div>
);

const IndexPage = (props: Props) => {
  const { data, i18n } = props;
  return (
    <div>
      <Header {...props} />
      <main className="main-content">
        <section className="section py-150 bg-gray">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Establish</Trans>
              </h2>
            </header>
            <div className="row">
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-left"
              >
                <Img
                  {...data.mission}
                  className="shadow-3"
                  alt={i18n.t`Space elevator`}
                />
              </div>
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <p className="lead font-family-arial">
                  <Trans>
                    Được thành lập từ ngày 29/6/2016, Trải qua nhiều khó khăn và
                    thử thách, hiện nay chúng tôi đã nhận được nhiều sự ủng hộ
                    từ cộng đồng IoT và điện tử qua nhiều dự án về IoT, dự án
                    ứng dụng thực tế,... IoT là một trong những xu hướng phát
                    triển mới trong tương lai, kết nối con người và công nghệ.
                    Với sự phát triển mạnh mẽ không ngừng của Internet of Thing
                    (IoT), chúng tôi luôn mong muốn đem đến cho bạn những sản
                    phẩm mới để bạn xây dựng và phát triển những dự án IoT ứng
                    dụng cao.
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Our Missions</Trans>
              </h2>
            </header>
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <p className="lead font-family-arial">
                  <Trans>
                    Với mục tiêu trở thành một công ty phát triển và sản xuất
                    các sản phẩm về IoT hàng đầu, chúng tôi luôn không ngừng
                    nghiên cứu, tìm hiểu nhu cầu của khách hàng, nghiên cứu và
                    phát triển các ứng dụng về IoT và công nghệ, đem đến khách
                    hàng các sản phẩm thử nghiệm và các sản phẩm ứng dụng cho
                    các dự án thực tế với chất lượng và sự phục vụ tốt nhất, hỗ
                    trợ khi cần để khách hàng dễ dàng phát triển và xây dựng dự
                    án một cách tối ưu và hiệu quả.
                  </Trans>
                </p>
              </div>
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-left"
              >
                <Img {...data.goal} className="shadow-3" alt={i18n.t`Goal`} />
              </div>
            </div>
          </div>
        </section>
        <p className="col-md-6 offset-md-5 text-right text-lighter small-2">
          <Trans>Free images are downloaded on</Trans>{" "}
          <a href="https://www.freepik.com/">Freepik</a>
        </p>

        {/* <section className="section py-150 bg-gray">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Team</Trans>
              </h2>
            </header>

            <div className="row gap-y">
              <Founder
                name="Timo Horstschaefer"
                func="Physics MSc ETH"
                description={i18n.t`Computer vision background, badminton guy, wants to build a space elevator`}
                twitterlink="https://twitter.com/thrstschfr"
                linkedinlink="https://www.linkedin.com/in/timohorstschaefer/"
                mail="timo@ledgy.com"
                img={data.timo}
                fade="up-right"
              />
              <Founder
                name="Ben Brandt"
                func="Physics MSc ETH"
                description={i18n.t`Battery science background, martial arts, fascinated by electric cars`}
                twitterlink="https://twitter.com/bebinoy"
                linkedinlink="https://www.linkedin.com/in/ben-elias-brandt-680a95110/"
                mail="ben@ledgy.com"
                img={data.ben}
                fade="up"
              />
              <Founder
                name="Yoko Spirig"
                func="Physics MSc ETH"
                description={i18n.t`Medical physics background, loves running, wondering about brain-machine interfaces`}
                twitterlink="https://twitter.com/YokoSpirig"
                linkedinlink="https://www.linkedin.com/in/yokospirig/"
                mail="yoko@ledgy.com"
                img={data.yoko}
                fade="up-left"
              />
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <header className="section-header">
              <h2>
                <Trans>Board and Advisors</Trans>
              </h2>
            </header>

            <div className="row gap-y">
              <Investor
                name="Myke Näf"
                func="Board Member"
                description={i18n.t`Entrepreneur, Business Angel, Founder of Doodle.com`}
                img={data.myke}
                fade="down-right"
              />
              <Investor
                name="Dr. Paul E. Sevinç"
                func="Board Member"
                description={i18n.t`Entrepreneur, Technologist, Founder of Doodle.com`}
                img={data.paul}
                fade="down"
              />
              <Investor
                name="Luzius Meisser"
                func="Advisor"
                description={i18n.t`Founder of Meisser Economics, Bitcoin Association Switzerland, and Wuala`}
                img={data.luzius}
                fade="down-left"
              />
            </div>

            <div className="row gap-y col-12 col-md-10 offset-md-1">
              <Advisor
                name="Adrian Bührer"
                func="Advisor"
                description={i18n.t`Investor & Consultant (Farmy.ch, Flatfox.ch), Founder of Students.ch`}
                img={data.adrian}
                fade="up-right"
              />
              <Advisor
                name="Elena Walder-Schiavone"
                func="Advisor"
                description={i18n.t`M&A and Private Equity Lawyer with a focus on start-up legal advise, Smartuplaw.ch`}
                img={data.elena}
                fade="up-left"
              />
            </div>
          </div>
        </section> */}
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query AboutQuery {
    mission: imageSharp(id: { regex: "/mission.jpg/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    goal: imageSharp(id: { regex: "/goal/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`;
