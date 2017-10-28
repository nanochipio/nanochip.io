// @flow

import React from 'react';

const Header = () => (
  <header className="header header-inverse" style={{ backgroundColor: '#00b0c0' }}>
    <div className="container text-center">

      <div className="row">
        <div className="col-12 col-lg-8 offset-lg-2">

          <h1>More to Discover</h1>
          <p className="fs-20 opacity-70">We waited until we could do it right. Then we did!</p>

        </div>
      </div>

    </div>
  </header>
);


const Feature = ({ title, text, right }: { title: string, text: string, right?: boolean }) => (
  <div className="row gap-y align-items-center">
    {!right &&
      <div className="col-12 col-md-5">
        <img className="rounded shadow-2 aos-init aos-animate" src="assets/img/demo/github/feature-1.png" alt="..." data-aos="zoom-in" />
      </div>}

    <div className="col-12 col-md-7">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>

    {right &&
      <div className="col-12 col-md-5">
        <img className="rounded shadow-2 aos-init aos-animate" src="assets/img/demo/github/feature-1.png" alt="..." data-aos="zoom-in" />
      </div>}
  </div>
);
Feature.defaultProps = { right: false };

const IndexPage = () => (
  <div>
    <Header />
    <main className="main-content">
      <section className="section bg-gray">
        <div className="container">

          <Feature
            title="Getting Started page"
            text="As part of efforts to improve user onboarding, I shipped an experiment to a subset of new users showing them a Getting Started page immediately after signup to help them get to what we think are some of the most important actions for new users to take. We compared the subset of users against a control group to see whether such an experience improved engagement over a period of time."
          />

          <hr />

          <Feature
            right
            title="Outdated comments toggling"
            text="Last week we shipped outdated comments...well, brought them back, actually. We used to show collapsed comments on outdated diffs as a single line, but removed that when we shipped code review recently. We brought that back last week with an improvement: you can now toggle open threads on outdated diffs in a review individually."
          />

          <hr />

          <Feature
            title="Code review illustrations"
            text="Less an illustration, and more a literal proxy. These show up when the feature's introduced. Monotonectally leverage existing standards compliant ideas with distributed data. Efficiently simplify cross-unit systems whereas adaptive testing. Monotonectally leverage existing standards compliant ideas with distributed data. Efficiently simplify cross-unit systems whereas adaptive testing."
          />

        </div>
      </section>
    </main>
  </div>
);

export default IndexPage;
