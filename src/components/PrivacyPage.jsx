// @flow

import * as React from 'react';
import { withI18n, Trans } from '@lingui/react';

import { Title } from '../layouts/utils';

const Header = ({ i18n }: Props) => (
  <header className="header text-white bg-ledgy">
    <Title title={i18n.t`Privacy`} />

    <div className="container text-center">
      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">
          <h1><Trans>Privacy</Trans></h1>
        </div>
      </div>
    </div>
  </header>
);

const IndexPage = (props: Object) => (
  <div>
    <Header {...props} />

    <main className="main-content">

      <div className="section">
        <div className="container">

          <header className="section-header text-left">
            <p>
              <Trans>
                Your privacy and your data’s security is extremely important to us.
                We understand how sensitive captable information is for any business.
                And we also know how little anyone likes to read long and difficult to
                understand privacy policies.
                That’s why we give you a human-readable overview up-front.
              </Trans>
            </p>


            <h2><Trans>What we collect</Trans></h2>

            <div className="row gap-y text-center mb-5">
              <div className="col-12 col-md-6">
                <i className="fa fa-sign-in fa-3x d-block" />
                <Trans>
                  Your login information <br />
                  Name, email, encrypted password
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-users fa-3x d-block" />
                <Trans>
                  Company and captable information<br />
                  Names, addresses and stakes of each shareholder
                  if you choose to enter them
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-bar-chart fa-3x d-block" />
                <Trans>
                  General activity<br />
                  Name, time and which action you perform when using app.ledgy.com
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-desktop fa-3x d-block" />
                <Trans>
                  Device and browser specs<br />
                  In case a crash happens, so we can fix it as fast as possible
                </Trans>
              </div>
            </div>


            <h2><Trans>Who we share it with</Trans></h2>

            <div className="row gap-y text-center mb-5">
              <div className="col-12 col-md-6">
                <i className="fa fa-user fa-3x d-block text-success" />
                <i className="fa fa-check mr-2 text-success" />
                <Trans>
                  Your shareholders<br />
                   Their own stake in your company, no further details.
                   Only if they are registered on Ledgy
                   with the same email address you used to add them.
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-plug fa-3x d-block text-success" />
                <i className="fa fa-check mr-2 text-success" />
                <Trans>
                  Third-party integrations<br />
                  Which we use to run and improve our service for you.
                  It contains no captable or other sensitive data.
                  They are listed below.
                </Trans>
              </div>

              <div className="col-12 col-md-6 text-muted">
                <i className="fa fa-sitemap fa-3x d-block" />
                <i className="fa fa-times mr-2" /><Trans>Ad networks</Trans>
              </div>

              <div className="col-12 col-md-6 text-muted">
                <i className="fa fa-shopping-cart fa-3x d-block mt-3" />
                <i className="fa fa-times mr-2" /><Trans>Data resellers</Trans>
              </div>

            </div>


            <h2><Trans>How we treat your data</Trans></h2>

            <div className="row gap-y text-center mb-5">
              <div className="col-12 col-md-6 ">
                <i className="fa fa-cloud fa-3x d-block" />
                <Trans>
                  Stored in the EU<br />
                  Your cap table data is stored at
                  an <a target="_blank" rel="noopener noreferrer" href="https://www.clever-cloud.com/">independent provider</a> in Paris.
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-database fa-3x d-block" />
                <Trans>
                  Backups<br />
                  Regular backups ensure nothing is ever lost.
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-lock fa-3x d-block" />
                <Trans>
                  Security<br />
                  Highest security standards give you peace of
                  mind. <a href="/security">Read more</a>.
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-question-circle fa-3x d-block" />
                <Trans>
                  Deleting your personal data<br />
                  Please write
                  to <a href="mailto:contact@ledgy.com">contact@ledgy.com</a>.
                </Trans>
              </div>

            </div>

          </header>

        </div>
      </div>
    </main>
  </div>
);

export default withI18n()(IndexPage);
