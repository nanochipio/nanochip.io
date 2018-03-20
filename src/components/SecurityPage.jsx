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
          <h1><Trans>Security</Trans></h1>
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
                We understand how sensitive cap table information is for any business.
                Here is what we do to protect your data.
              </Trans>
            </p>
            <p>
              <Trans>
                If you have any questions, just <a href="mailto:contact@ledgy.com">write us</a>.
              </Trans>
            </p>

            <div className="row gap-y text-center my-5">

              <div className="col-12 col-md-6">
                <i className="fa fa-key fa-3x d-block" />
                <Trans>
                  Strong passwords<br />
                  Users have to set a <a target="_blank" rel="noopener noreferrer" href="https://blogs.dropbox.com/tech/2012/04/zxcvbn-realistic-password-strength-estimation/">very strong password</a>
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-lock fa-3x d-block" />
                <Trans>
                  Secure passwords<br />
                  Only transmitted/stored encrypted with the battle-tested <a target="_blank" rel="noopener noreferrer" href="https://codahale.com/how-to-safely-store-a-password/">bcrypt algorithm</a>
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-shield fa-3x d-block" />
                <Trans>
                  Two-factor authentication<br />
                  For an even better protection of accounts
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-user-plus fa-3x d-block" />
                <Trans>
                  Peer-reviewed code<br />
                  The code is always reviewed by at least one other engineer
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-exchange fa-3x d-block" />
                <Trans>
                  Server call rate limit<br />
                  The frequency of server calls is limited to prevent brute-force attacks
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-user-secret fa-3x d-block" />
                <Trans>
                  Encrypted connection<br />
                  The site is accessible only through HTTPS (<a target="_blank" rel="noopener noreferrer" href="https://www.ssllabs.com/ssltest/analyze?d=app.ledgy.com">A+ rating</a>)
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-desktop fa-3x d-block" />
                <Trans>
                  Content-Security-Policy<br />
                  HTTP headers prevent cross-site scripting and code injection (<a target="_blank" rel="noopener noreferrer" href="https://observatory.mozilla.org/analyze.html?host=app.ledgy.com">A+ rating</a>)
                </Trans>
              </div>

              <div className="col-12 col-md-6">
                <i className="fa fa-database fa-3x d-block" />
                <Trans>
                  Backups<br />
                  Daily backups ensure nothing is ever lost
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
