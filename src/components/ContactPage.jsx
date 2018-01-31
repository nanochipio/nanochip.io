// @flow

import React from 'react';
import { translate } from 'react-i18next';

const Header = ({ t }: Object) => (
  <header className="header header-inverse" style={{ backgroundColor: '#60ae50' }}>
    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1>{t('contactPage.getInTouch')}</h1>
          <p className="fs-20 opacity-70">{t('contactPage.hereAreTheWays')}</p>
        </div>
      </div>
    </div>
  </header>
);

class Map extends React.Component<{}> {
  componentDidMount() {
    if (window.thesaas && window.google) {
      window.thesaas.map();
    }
  }
  render() {
    return (<div
      id="map"
      className="h-400"
      data-provide="map"
      data-lat="47.3627638"
      data-lng="8.5579592"
      data-marker-lat="47.3627638"
      data-marker-lng="8.5579592"
      data-zoom="14"
    />);
  }
}

const IndexPage = (props: Object) => {
  const { t } = props;
  return (
    <div>
      <Header {...props} />
      <main className="main-content">

        <div className="section">
          <div className="container">

            <div className="row gap-y">
              <div className="col-12 col-md-6">

                <form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="form-group">
                    <input className="form-control form-control-lg" type="text" name="name" placeholder={t('contactPage.yourName')} />
                  </div>

                  <div className="form-group">
                    <input className="form-control form-control-lg" type="email" name="email" placeholder={t('contactPage.yourEmail')} />
                  </div>

                  <div className="form-group">
                    <textarea className="form-control form-control-lg" name="message" rows="4" placeholder={t('contactPage.yourMessage')} />
                  </div>


                  <button className="btn btn-lg btn-primary btn-block" type="submit">{t('contactPage.send')}</button>
                </form>

              </div>


              <div className="col-12 col-md-5 offset-md-1">
                <div className="bg-grey h-full p-20">
                  <p>{t('contactPage.giveUsACall')}</p>

                  <hr className="w-80" />

                  <p className="lead">Ledgy AG<br />Forchstrasse 60<br />{t('contactPage.postcode')}</p>

                  <div>
                    <span className="d-inline-block w-20 text-lighter" title="Email">E:</span>
                    <span className="fs-14">contact@ledgy.com</span>
                  </div>

                  <div>
                    <span className="d-inline-block w-20 text-lighter" title="Phone">P:</span>
                    <span className="fs-14">+41 44 585 21 23</span>
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

export default translate()(IndexPage);
