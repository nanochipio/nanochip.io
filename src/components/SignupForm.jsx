// @flow

import * as React from 'react';
import { Trans } from '@lingui/react';

import { appUrl } from '../layouts/utils';

export default class extends React.Component<Props, { email: string, invalid: boolean }> {
  state = { email: '', invalid: false };
  re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; // eslint-disable-line no-useless-escape
  handleChange = (e: SyntheticInputEvent<HTMLInputElement>) => {
    e.preventDefault();
    this.setState({ email: e.target.value, invalid: false });
  }
  handleSubmit = (e: any) => {
    e.preventDefault();
    const valid = this.re.test(this.state.email);
    if (!valid) {
      this.setState({ invalid: true });
      return;
    }
    const email = encodeURIComponent(this.state.email);

    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: 'signup' });
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `form-name=signup&email=${email}&referrer=${encodeURIComponent(document.referrer)}`,
    });

    window.location.href = `${appUrl}/signup?email=${email}`;
  }
  render = () => {
    const { i18n } = this.props;
    return (
      <form
        name="signup"
        className="input-round py-5"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <div className="form-group input-group bg-white gap-y p-2 mb-0">
          <input
            type="text"
            name="email"
            className="form-control form-control-md"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={i18n.t`Enter your email…`}
          />
          <div className="input-group-append">
            <button type="submit" className="btn btn-primary btn-xl"><Trans>Sign Up Free</Trans></button>
          </div>
        </div>
        <div className="d-none">
          <label htmlFor="bot-field">Don’t fill this out if you’re human: <input name="bot-field" /></label>
          <input name="referrer" />
        </div>
        <small className={`text-danger ${this.state.invalid ? '' : 'invisible'}`}>
          Oops. This email address is invalid.
        </small>
      </form>
    );
  }
}
