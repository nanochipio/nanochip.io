// @flow

import * as React from "react";
import Img from "gatsby-image";
import { withI18n, Trans } from "@lingui/react";

import { Title } from "../layouts/utils";

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`About us`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1 style={{ fontFamily: "Roboto" }}>
            <Trans>Products are made by IoT Maker Vietnam</Trans>
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
        <section className="section py-150 bg-gray font-family-roboto">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2 style={{ fontFamily: "Roboto" }}>
                  <Trans>ESP8266 WiFi Uno</Trans>
                </h2>
                <p className="text-justify font-family-arial">
                  <Trans>
                    This is the first circuit board designed in our Open Source
                    project. board using the ESP8266 microprocessor developed by
                    Espressif. ESP8266 WiFi Uno is designed according to the
                    size of the Arduino Uno, so it is compatible with most
                    Arduino Uno expansion circuits. In addition to the basic
                    features of the Arudino Uno, the ESP8266 WiFi Uno can also
                    connect to WiFi. Because of its outstanding features, this
                    is a circuit board suitable for studying and researching to
                    make IoT (Internet of Things) devices - data collection and
                    control devices over WiFi. Currently the ESP8266 WiFi Uno
                    can be programmed using the Arduino IDE, MicroPython,
                    NodeMCU - Lua.
                  </Trans>
                </p>
              </div>
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-left"
              >
                <Img
                  {...data.esp8266}
                  className="shadow-3"
                  alt={i18n.t`ESP8266 WiFi Uno`}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-right"
              >
                <Img
                  {...data.esp32}
                  className="shadow-3"
                  alt={i18n.t`ESP32 IoT Uno`}
                />
              </div>
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2 style={{ fontFamily: "Roboto" }}>
                  <Trans>ESP32 IoT Uno</Trans>
                </h2>
                <p className="text-justify font-family-arial">
                  <Trans>
                    This is the main circuit board in the Open Source project
                    series. Using the ESP32 processor, is an upgraded version of
                    the ESP8266. In addition to the ESP8266 WiFi Uno features,
                    the ESP32 IoT Uno also features outstanding features such as
                    Bluetooth wireless interface 4.2, audio programming, support
                    for wired connections: <i>Serial, CAN, Ethernet, I2C , SPI, IRDA, TOUCH ... </i>ESP32 IoT Uno can now be programmed on many tools such as Arduino
                    IDE, ESP-IDF, ESP-ADF, MicroPython, NodeMCU - LUA, …
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section py-150 bg-gray">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2 style={{ fontFamily: "Roboto" }}>
                  <Trans>IoT Maker UnoX</Trans>
                </h2>
                <p className="text-justify font-family-arial">
                  <Trans>
                   An other circuit board developed in the Open Source project series. Is an Arduino Uno circuit board developed by IoT Maker Viet Nam, with more improvements. Use ATMega328P microprocessor paste instead of conventional pin plugs. Uses the popular Micro Usb type B port on the market, adding extra pins for the most popular modules such as OLED, Servo, common sensor module (temperature, humidity, light , ...). And of course IoT Maker UnoX can also be programmed on the Arduino IDE software, as a regular Arduino Uno board.
                  </Trans>
                </p>
              </div>
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-left"
              >
                <Img
                  {...data.arduino}
                  className="shadow-3"
                  alt={i18n.t`IoT Maker UnoX`}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="row">
              <div
                className="col-12 col-lg-6 p-50 align-self-center"
                data-aos="fade-right"
              >
                <Img
                  {...data.ironsolder}
                  className="shadow-3"
                  alt={i18n.t`Soldering IoT Maker SR01`}
                />
              </div>
              <div className="col-12 col-lg-6 pl-50 pr-80">
                <h2 style={{ fontFamily: "Roboto" }}>
                  <Trans>Soldering IoT Maker SR01</Trans>
                </h2>
                <p className="text-justify font-family-arial">
                  <Trans>
                  This is a product designed and manufactured by IoT Maker Vietnam. IoT Maker welding station with small, compact, sturdy aluminum box, comes with high quality Hako 65W welding torch, fast heating. The temperature is controlled by an encoder and displayed on 8 LEDs corresponding to the temperature level. The encoder has the ability to rotate non-stop, so it is easy to adjust. Can be used with low power adapter (24V-2A), the welding torches will be heated slowly, without shock, as the small power adapter off suddenly.
                  </Trans>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ProductsQuery {
    mission: imageSharp(id: { regex: "/mission/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    esp32: imageSharp(id: { regex: "/esp32/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    esp8266: imageSharp(id: { regex: "/esp8266/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    arduino: imageSharp(id: { regex: "/arduino/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
      }
    }
    ironsolder: imageSharp(id: { regex: "/iron-solder/" }) {
      sizes(maxWidth: 600) {
        ...GatsbyImageSharpSizes
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
