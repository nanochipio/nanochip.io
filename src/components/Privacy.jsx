// @flow

import * as React from 'react';

const PrivacyElement = ({ icon, title, body }: {
  icon: string, title: string | React.Element<any>, body?: string | React.Element<any>
}) => (
  <div className="col-12 col-md-6 d-flex">
    <div className="float-left mr-2">
      <i className={`${icon} fa-3x fa-fw`} />
    </div>
    <p>
      <strong className="d-block">{title}</strong>
      {body && body}
    </p>
  </div>
);
PrivacyElement.defaultProps = { body: '' };

export default PrivacyElement;
