// @flow

import React from 'react';
import Img from 'gatsby-image';

const Header = () => (
  <header className="header header-inverse h-fullscreen pb-80" style={{ backgroundColor: '#20a8d8' }} id="start">

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
          <a className="scroll-down-3 scroll-down-inverse" href="#testimonials" data-scrollto="testimonials"><span /></a>
        </div>

      </div>

    </div>
  </header>
);

type TestimonialProps = {
  name: string,
  company: string,
  img: Object,
  text: string,
}
const Testimonial = ({ name, company, img, text }: TestimonialProps) => (
  <div className="col-12 col-md-3" >
    <div className="card">
      <div className="card-block px-10">
        <p className="text-quoted mb-0">{text}</p>
        <div className="media align-items-center pb-0">
          <Img className="avatar avatar-xs" {...img} alt={company} />
          <div className="media-body lh-1">
            <h6 className="mb-0">{name}</h6>
            <small>{company}</small>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const Feature =
({ title, text, img, right }: { title: string, text: string, img: Object, right?: boolean}) => (
  <div className="row gap-y align-items-center">
    {!right &&
    <div className="col-12 col-md-5">
      <Img className="rounded shadow-2" {...img} alt={title} />
    </div>}

    <div className="col-12 col-md-7">
      <h4>{title}</h4>
      <p>{text}</p>
    </div>

    {right &&
    <div className="col-12 col-md-5">
      <Img className="rounded shadow-2" {...img} alt={title} />
    </div>}
  </div>
);
Feature.defaultProps = { right: false };

// type FAQProps = {
//   question: string,
//   answer: string,
// }
// const FAQ = ({ question, answer }: FAQProps) => (
//   <div className="col-12 col-md-6 col-lg-4">
//     <h6 className="fw-400">{question}</h6>
//     <p>{answer}</p>
//   </div>
// );

const IndexPage = ({ data }: Object) => (
  <div>
    <Header />
    <main className="main-content">
      <section className="section" id="testimonials">
        <div className="container">
          <header className="section-header">
            <small>What our users say</small>
          </header>

          <div className="row gap-y">
            <Testimonial
              text="Wow, so mind-blowing. The UX is amazing. I’m jealous!"
              name="Reto Lämmler"
              company="TestingTime AG"
              img={data.testingtime}
            />
            <Testimonial
              text="I thought cap tables were boring. Ledgy proved me wrong."
              name="David Christen"
              company="quitt.ch"
              img={data.quitt}
            />
            <Testimonial
              text="We were looking for a intuitive cap table tool. This is just great!"
              name="Bernadette Leuzinger"
              company="CryptoFund AG"
              img={data.cryptofund}
            />
            <Testimonial
              text="How did earth even turn before there was Ledgy? Total mistery."
              name="Mathias Brenner"
              company="Sherpany AG"
              img={data.sherpany}
            />
          </div>

        </div>
      </section>

      <section className="section section-inverse" id="pricing" style={{ backgroundColor: '#00b0c0' }}>
        <header className="section-header mb-40">
          <small>Pricing</small>
          <p className="lead">As straightforward as the tool. One package, everything included.</p>
        </header>
        <div className="container">
          <div className="row gap-y align-items-center">
            <div className="col-12 col-md-4 col-lg-3 offset-md-2 offset-lg-3 text-center text-md-left">
              <h4 className="mb-0">First 3 months for free<br />Then 19 CHF/month</h4>
            </div>

            <div className="col-12 col-md-4 col-lg-3">
              <a className="btn btn-block btn-lg btn-white" href="https://app.ledgy.com/signup">Sign Up Now</a>
            </div>
          </div>
        </div>
      </section>


      <section className="section" id="features">
        <header className="section-header">
          <small>Features</small>
          {/* <h2>Features</h2> */}
          {/* <hr /> */}
        </header>

        <div className="container">
          <Feature
            title="All information in one place"
            text="Always have the current cap table ready and save all related documents in the Ledgy cloud.
            Understand who owns what in your company at a glance through the interactive charts."
            img={data.feature1}
          />

          <hr />

          <Feature
            right
            title="Avoid costly errors"
            text="Your cap table is build up from the past transactions.
            Its history ensures transparency and inconsistencies are automatically detected by the software.
            This prepares your company for legal requirements and audits in the future."
            img={data.feature2}
          />

          <hr />

          <Feature
            title="Export and share pdf"
            text="Legally in Switzerland your share register has to be signed by
            the board of directors to be valid. For this purpose it can be exported as pdf on Ledgy."
            img={data.feature3}
          />
        </div>
      </section>

      <section className="section section-inverse py-40" style={{ backgroundColor: '#60ae50' }}>
        <div className="col-6 offset-3 col-md-4 offset-md-4">
          <a className="btn btn-lg btn-success btn-block text-center" href="https://demo.ledgy.com">Watch Demo</a>
        </div>
      </section>


      <section className="section bg-gray">
        <div className="container">
          <header className="section-header">
            <small>Features</small>
            <h2>Coming Soon</h2>
            <hr />
            <p className="lead">
              We’re working hard on bringing new features online for you
              in the next couple of months!
            </p>
          </header>

          <div className="row gap-y">

            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-warning"><i className="icon-linegraph" /></p>
              <h5>Employee Options</h5>
              <p>Enter your employee incentive plan and track it over time.</p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-danger"><i className="icon-telescope" /></p>
              <h5>Investment Scenarios</h5>
              <p>
                Plan investment rounds by simulating their effect on the cap table.
              </p>
            </div>


            <div className="col-12 col-md-6 col-xl-4 feature-1">
              <p className="feature-icon text-success"><i className="icon-profile-female" /></p>
              <h5>Shareholder Login</h5>
              <p>
                Your shareholders can see all their investments anytime on Ledgy.
              </p>
            </div>


          </div>
        </div>
      </section>


      <section className="section section-inverse py-40" style={{ backgroundColor: '#00b38d' }}>
        <div className="container">
          <form className="form-glass row gap-y align-items-center" action="https://ledgy.us16.list-manage.com/subscribe/post?u=d6181c123b4d20b2104c4652f&amp;id=c9cfbb11a6" method="post" target="_blank">
            <div className="col-12 col-md-3 offset-md-1 col-lg-2 offset-lg-2 py-1">
              <h4 className="mb-0 text-center">Stay up to date</h4>
            </div>
            <div className="col-12 col-md-4 col-lg-4 py-1">
              <div className="input-group input-group-lg">
                <span className="input-group-addon"><i className="fa fa-envelope" /></span>
                <input type="email" name="EMAIL" className="form-control" placeholder="Email Address" />
              </div>
            </div>

            <div className="col-12 col-md-3 col-lg-2 py-1">
              <button className="btn btn-lg btn-success btn-block text-center">Subscribe</button>
            </div>
          </form>
        </div>
      </section>


      {/* <section className="section" id="faq">
        <div className="container">
          <header className="section-header">
            <small>Faq</small>
            <h2>Frequently Asked Questions</h2>
            <hr />
            <p className="lead">Drop us an email if you couldn’t find an answer
            to your question in the following list.</p>
          </header>

          <div className="row gap-y gap-3">
            <FAQ
              question="What is TheSaaS?"
              answer="It is a collection of layouts, design patterns, components,
              and guidelines for creating admin templates, SaaS startups, and complex dashboards."
            />
            <FAQ
              question="How long does it take?"
              answer="It is a collection of layouts, design patterns, components,
              and guidelines for creating admin templates, SaaS startups, and complex dashboards."
            />
            <FAQ
              question="What payment services do you support?"
              answer="We accept all major credit cards."
            />
            <FAQ
              question="Can I update my card details?"
              answer="Yes. Go to the billing section of your dashboard and
              update your payment information."
            />
            <FAQ
              question="Can I cancel my subscription?"
              answer="You can cancel your subscription at any time. Cancelling
              your plan comes into effect the following month."
            />
            <FAQ
              question="Can I get refund?"
              answer="Unfortunately, not at this time! Please try our free plan
              for a while to make sure Helpato is what you want."
            />
          </div>
        </div>
      </section> */}


    </main>
  </div>
);

export default IndexPage;

// eslint-disable-next-line no-undef
export const query = graphql`
  query IndexQuery {
    feature1: imageSharp(id: { regex: "/src\/img\/feature-1.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature2: imageSharp(id: { regex: "/src\/img\/feature-2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature3: imageSharp(id: { regex: "/src\/img\/feature-3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }

    testingtime: imageSharp(id: { regex: "/testingtime/" }) {
      sizes(maxWidth: 200) { ...GatsbyImageSharpSizes }
    }
    quitt: imageSharp(id: { regex: "/quitt/" }) {
      sizes(maxWidth: 200) { ...GatsbyImageSharpSizes }
    }
    cryptofund: imageSharp(id: { regex: "/cryptofund/" }) {
      sizes(maxWidth: 200) { ...GatsbyImageSharpSizes }
    }
    sherpany: imageSharp(id: { regex: "/sherpany/" }) {
      sizes(maxWidth: 200) { ...GatsbyImageSharpSizes }
    }
  }
`;
