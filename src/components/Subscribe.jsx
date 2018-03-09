// @flow

import React from 'react';
import { Trans } from '@lingui/react';

export default ({ i18n }: Props) => (
  <section className="section section-inverse py-6" style={{ backgroundColor: '#00b38d' }}>
    <div className="container">
      <form className="row gap-y align-items-center" action="https://ledgy.us16.list-manage.com/subscribe/post?u=d6181c123b4d20b2104c4652f&amp;id=c9cfbb11a6" method="post" target="_blank">
        <div className="col-12 col-md-3 offset-md-1 col-lg-2 offset-lg-2 py-1">
          <h4 className="mb-0 text-center text-white"><Trans>Stay up to date</Trans></h4>
        </div>

        <div className="col-md-8 col-xl-6 input-glass input-round">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text"><i className="fa fa-envelope" /></span>
            </div>
            <input type="text" name="EMAIL" className="form-control" placeholder={i18n.t`Email Adress`} />
            <span className="input-group-append">
              <button className="btn btn-light">Subscribe</button>
            </span>
          </div>
        </div>

      </form>
    </div>
  </section>
);
