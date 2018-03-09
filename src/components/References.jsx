// @flow

import React from 'react';
import Img from 'gatsby-image';
import { Trans } from '@lingui/react';

const Partner = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px' }} className="m-4">
    <Img {...img} alt={name} style={{ overflow: 'visible', margin: 0 }} />
  </div>
);

const References = ({ data }: Props) => (
  <section className="section py-7" id="references">
    <div className="container">
      <header className="section-header mb-3">
        <h2><Trans>You’re in good company</Trans></h2>
        <hr className="my-2" />
        <p className="lead">Many successful companies already use Ledgy to keep track of their share register</p>
      </header>

      <div className="partner mx-auto" style={{ maxWidth: '1200px' }}>
        <Partner img={data.testingtime} name="TestingTime" />
        <Partner img={data.quitt} name="quitt.ch" />
        <Partner img={data.cryptofund} name="CryptoFund" />
        <Partner img={data.frontify} name="Frontify" />
        <Partner img={data.sherpany} name="Sherpany" />
        <Partner img={data.apiax} name="Apiax" />
        <Partner img={data.allthings} name="Allthings Technologies" />
        <Partner img={data.farmy} name="Farmy" />
      </div>
    </div>

  </section>
);

export default References;
