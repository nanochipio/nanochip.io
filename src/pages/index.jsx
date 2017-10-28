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
            <br />
            <strong>19 CHF/month. So Easy.</strong>
          </p>
          <p className="fs-18 w-250 mx-auto hidden-md-up">
            Make your life easy with the leading share register and cap table tool for Switzerland.
            <br />
            <strong>19 CHF/month. So Easy!</strong>
          </p>

          <br />

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
              <h4 className="fw-300 mb-0">All features included: <strong>19 CHF/month</strong></h4>
            </div>

            <div className="col-12 col-md-2">
              <a className="btn btn-round btn-block btn-white" href="https://app.ledgy.com/sigun">Sign Up Now</a>
            </div>
          </div>
        </div>
      </section>


      <section className="section">
        <div className="container">
          <header className="section-header">
            <small>Features</small>
            <h2>So Intuitive, So Easy</h2>
            <hr />
            <p className="lead">We are so excited and proud of our product.
              It’s really easy to create a landing page for your awesome product.
            </p>
          </header>

          <div className="row gap-y">

            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-dark"><i className="icon-mobile" /></p>
              <h5>Responsive</h5>
              <p>Your landing page displays smoothly on any device: desktop, tablet or mobile.</p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-info"><i className="icon-gears" /></p>
              <h5>Customizable</h5>
              <p>You can easily modify any block data to fits your need;
                image, title, text, etc.
              </p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon"><i className="icon-tools" /></p>
              <h5>UI Kit</h5>
              <p>There is an extensive amount of UI
                elements and shortcodes to easily develop your blocks.
              </p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-warning"><i className="icon-layers" /></p>
              <h5>Lego Base</h5>
              <p>Designing a page is like playing with Lego!
                Just stack blocks above each other.
              </p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-danger"><i className="icon-recycle" /></p>
              <h5>Clean Code</h5>
              <p>You can find our code well organized,
                commented, readable and easy for modification.
              </p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-success"><i className="icon-chat" /></p>
              <h5>Support</h5>
              <p>Apart from free and regular updates, we are always ready to help you.</p>
            </div>

          </div>

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
                  <button className="btn btn-lg btn-primary btn-block">Subscribe</button>
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
