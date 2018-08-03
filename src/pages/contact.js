// @flow

import * as React from "react";
import { withI18n, Trans } from "@lingui/react";

import { Title } from "../layouts/utils";

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`Infomation`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1 style={{ fontFamily: "Roboto" }}>
            <Trans>Let’s Get In Touch</Trans>
          </h1>
          <p className="font-family-open-sans">
            <Trans>Here are the ways you can contact us</Trans>
          </p>
        </div>
      </div>
    </div>
  </header>
);

class Map extends React.Component<{}> {
  componentDidMount() {
    if (window.page && window.google) {
      window.page.initMap();
    }
  }
  render() {
    return (
      <div
        id="map"
        className="h-400"
        data-provide="map"
        data-lat="10.7867953"
        data-lng="106.6839766"
        data-marker-lat="10.7867953"
        data-marker-lng="106.6839766"
        data-zoom="16"
      />
    );
  }
}

const IndexPage = (props: Object) => {
  const { i18n } = props;
  return (
    <div>
      <Header {...props} />

      <main className="main-content">
        <div className="section">
          <div className="container">
            <div className="row gap-y">
              <div className="col-12 col-xl-6">
                <form
                  name="contact"
                  method="post"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="text"
                      name="name"
                      placeholder={i18n.t`Your name`}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      className="form-control form-control-lg"
                      type="email"
                      name="email"
                      placeholder={i18n.t`Your email`}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      className="form-control form-control-lg"
                      name="message"
                      rows="4"
                      placeholder={i18n.t`Your message`}
                    />
                  </div>
                  <button
                    className="btn btn-xl btn-lg btn-primary btn-block"
                    type="submit"
                  >{i18n.t`Send message`}</button>
                </form>
              </div>

              <div className="col-12 col-xl-6">
                <div className="bg-gray h-full p-5 imprint">
                  <h5 style={{ fontFamily: "Open Sans" }}>
                    <Trans>Head Office</Trans>
                  </h5>

                  <div className="row">
                    <div className="col-md-6">
                      <h6 style={{ fontFamily: "Open Sans" }}>
                        <Trans>Address</Trans>
                      </h6>
                      <p className="font-family-roboto">
                        <Trans>Mezzanine floor An Phu Plaza </Trans>
                        <br />
                        <Trans>117-119 Ly Chinh Thang, Ward 7, Dist. 3</Trans>
                        <br />
                        <Trans>Ho Chi Minh City, Vietnam</Trans>
                      </p>
                    </div>
                    <div className="col-md-6">
                      {/* <p>
                        <h6><Trans>VAT number</Trans></h6>
                        0313885664
                      </p> */}
                      <h6 style={{ fontFamily: "Open Sans" }}>
                        <Trans>Contact</Trans>
                      </h6>
                      <a href="mailto:hello@nanochip.io">hello@nanochip.io</a>
                      <br />
                      <Trans>+84 2866 824 204</Trans>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Map />
      </main>
    </div>
  );
};

export default withI18n()(IndexPage);
