// @flow

import React from 'react';
import { Trans } from '@lingui/react';

export default ({ i18n }: Props) => (
  <section className="section section-inverse py-40" style={{ backgroundColor: '#00b38d' }}>
    <div className="container">
      <form className="form-glass row gap-y align-items-center" action="https://ledgy.us16.list-manage.com/subscribe/post?u=d6181c123b4d20b2104c4652f&amp;id=c9cfbb11a6" method="post" target="_blank">
        <div className="col-12 col-md-3 offset-md-1 col-lg-2 offset-lg-2 py-1">
          <h4 className="mb-0 text-center"><Trans>Stay up to date</Trans></h4>
        </div>
        <div className="col-12 col-md-4 col-lg-4 py-1">
          <div className="input-group input-group-lg">
            <span className="input-group-addon"><i className="fa fa-envelope" /></span>
            <input type="email" name="EMAIL" className="form-control" placeholder={i18n.t`Enter email …`} />
          </div>
        </div>

        <div className="col-12 col-md-3 py-1">
          <button className="btn btn-lg btn-success btn-block text-center"><Trans>Subscribe</Trans></button>
        </div>
      </form>
    </div>
  </section>
);
