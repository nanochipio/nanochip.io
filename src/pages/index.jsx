// @flow

import React from 'react';

const Header = () => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }}>
    {/* <canvas className="constellation" /> */}

    <div className="container text-center">

      <div className="row h-full">
        <div className="col-12 col-lg-10 offset-lg-1 align-self-center">

          <h1 className="display-2">Online Share Register</h1>
          <br />
          <p className="fs-20 w-400 mx-auto hidden-sm-down">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>
          <p className="fs-18 w-250 mx-auto hidden-md-up">
            Make your life easy with the leading share register and cap table tool for Switzerland.
          </p>

          <div className="col-10 offset-1 col-md-8 offset-md-2">

            <form className="form-glass row" action="https://app.ledgy.com/signup" method="get">
              <div className="col-12 col-md-7 my-1">
                <input type="text" name="email" className="form-control form-control-lg" placeholder="Enter your email..." />
              </div>
              <div className="col-12 col-md-5 my-1">
                <button style={{ height: '100%' }} className="btn btn-block btn-lg btn-success">Try for free</button>
              </div>
            </form>
            <div className="row mt-2 pr-3 float-right">
              <a
                style={{ textDecoration: 'underline' }}
                className="text-white"
                href="https://demo.ledgy.com"
              >Watch the demo
              </a>
            </div>

          </div>
        </div>

        <div className="col-12 align-self-end text-center">
          <a className="scroll-down-3 scroll-down-inverse" href="#section-intro" data-scrollto="section-intro"><span /></a>
        </div>

      </div>

    </div>
  </header>
);

type TestimonialProps = {
  name: string,
  company: string,
  img: string,
  children: string,
}
const Testimonial = ({ name, company, img, children }: TestimonialProps) => (
  <div className="col-12 col-md-3" >
    <div className="card">
      <div className="card-block px-10">
        <p className="text-quoted mb-0">{children}</p>
        <div className="media align-items-center pb-0">
          <img className="avatar avatar-xs" src={img} alt="..." />
          <div className="media-body lh-1">
            <h6 className="mb-0">{name}</h6>
            <small>{company}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
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
      <section className="section" id="section-intro">
        <div className="container">
          <header className="section-header">
            <small>Testimonials</small>
          </header>

          <div className="row gap-y">
            <Testimonial name="Reto Lämmler" company="TestingTime AG" img="/test">
              Wow, so mind-blowing. The UX is amazing. I’m jealous!
            </Testimonial>
            <Testimonial name="David Christen" company="quitt.ch" img="/test">
              I thought cap tables are boring. Ledgy proved me wrong.
            </Testimonial>
            <Testimonial text="Lorem ipsum" name="Bernadette Leuzinger" company="CryptoFund AG" img="/test">
              We were looking for a intuitive cap table tool. This is just great!
            </Testimonial>
            <Testimonial text="Lorem ipsum" name="Mathias Brenner" company="Sherpany AG" img="/test">
              How did earth even turn before there was Ledgy? Total mistery.
            </Testimonial>
          </div>

        </div>
      </section>

      <section className="section section-inverse py-40" style={{ backgroundColor: '#00b0c0' }}>
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-12 col-md-5 offset-md-3">
              <h4 className="mb-0">First 3 months for free. Then 19 CHF/month</h4>
            </div>

            <div className="col-12 col-md-2">
              <a className="btn btn-round btn-block btn-white" href="https://app.ledgy.com/sigun">Sign Up Now</a>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <header className="section-header">
          <small>Features</small>
          <h2>More to Discover</h2>
          <hr />
          <p className="lead">We waited until we could do it right. Then we did! Instead of creating a carbon copy.</p>
        </header>
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

      <section className="section section-inverse py-40" style={{ backgroundColor: '#00b38d' }}>
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-12 col-md-2 offset-md-2">
              <h4 className="mb-0">Stay up to date</h4>
            </div>

            <div className="col-12 col-md-7">
              <form className="form-glass justify-content-center row  gap-y align-items-center" action="" method="post" target="_blank">

                <div className="col-12 col-md-7">
                  <div className="input-group input-group-lg">
                    <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                    <input type="email" name="EMAIL" className="form-control" placeholder="Email Address" />
                  </div>
                </div>

                <div className="col-12 col-md-3">
                  <button className="btn btn-lg btn-success btn-block">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>


    </main>
  </div>
);

export default IndexPage;
