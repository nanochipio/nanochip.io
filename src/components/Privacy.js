// @flow

import * as React from 'react';

const PrivacyElement = ({ icon, title, body }: {
  icon: string, title: string | React.Element<any>, body?: string | React.Element<any>
}) => (
  <div className="col-12 col-md-6">
    <div className="media">
      <i className={`${icon} fa-3x fa-fw mr-2`} />
      <p className="media-body mb-0">
        <strong className="d-block">{title}</strong>
        {body && body}
      </p>
    </div>
  </div>
);
PrivacyElement.defaultProps = { body: '' };

export default PrivacyElement;
