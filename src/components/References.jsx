// @flow

import React from 'react';
import Img from 'gatsby-image';

const Partner = ({ img, name }: { img: Object, name: string }) => (
  <div style={{ width: '200px', height: '80px', verticalAlign: 'middle' }}>
    <Img {...img} alt={name} style={{ overflow: 'visible', margin: 0 }} />
  </div>
);

const References = ({ data }: Object) => (
  <section className="section" id="testimonials">
    <header className="section-header mb-40">
      <small>Testimonials</small>
      <p className="lead">Switzerland’s best companies manage their cap table with Ledgy.</p>
    </header>

    <div className="partner">
      <Partner img={data.testingtime} name="TestingTime" />
      <Partner img={data.quitt} name="quitt.ch" />
      <Partner img={data.cryptofund} name="CryptoFund" />
      <Partner img={data.frontify} name="Frontify" />
      <Partner img={data.sherpany} name="Sherpany" />
      <Partner img={data.apiax} name="Apiax" />
    </div>


    <header className="section-header mb-40">
      <p className="lead">Partners & Associations</p>
    </header>

    <div className="partner">
      <Partner img={data.lykke} name="Lykke" />
      <Partner img={data.swissfintech} name="SwissFintech" />
      <Partner img={data.investiere} name="investiere" />
    </div>
  </section>
);

export default References;
