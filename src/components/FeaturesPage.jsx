// @flow

import React from 'react';
import { withI18n, Trans } from '@lingui/react';
import { Helmet } from 'react-helmet';
import Link from 'gatsby-link';

type FeatureProps = {
  prefix: string,
  name: string,
  title: ?string,
  children: React.Node,
  url: string,
}

const FeatureRight = (props: FeatureProps) => (
  <div className="row align-items-center">
    <div className="col-md-6 ml-auto">
      <h2>{props.title || props.name}</h2>
      <p>{props.children}</p>
      <Link href to={`${props.prefix}/features/${props.url}`}>
        Read More about {props.name} <i className="ti-angle-right fs-10 ml-1" />
      </Link>
    </div>

    <div className="col-md-5 order-md-first">
      <img src={`/img/${props.url}.png`} alt={props.name} />
    </div>
  </div>
);


const FeatureLeft = (props: FeatureProps) => (
  <div className="row align-items-center">
    <div className="col-md-5 ml-auto">
      <img src={`/img/${props.url}.png`} alt={props.name} />
    </div>
    <div className="col-md-6 order-md-first">
      <h2>{props.title || props.name}</h2>
      <p>
        {props.children}
      </p>
      <Link href to={`${props.prefix}/features/${props.url}`}>
        Read More about {props.name} <i className="ti-angle-right fs-10 ml-1" />
      </Link>
    </div>

  </div>
);

const Hr = () => <hr className="my-3" />;


export default withI18n()(({ i18n, ...props }: Props) => (
  <div>
    <Helmet>
      <title>Features | {i18n.t`site.name`}</title>
    </Helmet>
    <header className="header text-white bg-ledgy">
      <div className="container text-center">

        <div className="row">
          <div className="col-12 col-lg-8 offset-lg-2">

            <h1><Trans>Manage your shares.<br />Not your Excel.</Trans></h1>

          </div>
        </div>

      </div>
    </header>
    <main className="main-content">


      <section className="section overflow-hidden">
        <div className="container">

          <FeatureRight
            {...props}
            name="Financing Round Modeling"
            url="round-modeling"
          >
            What’s the percentage of the founders if a VC
            invests $2,000,000 at a valuation of $7,500,000 taking into account
            the 2 convertibles and the ESOP pool?<br />
            Seriously, we don’t know. But Ledgy does.
          </FeatureRight>

          <Hr />

          <FeatureLeft
            {...props}
            name="Employee Stock Option Plans"
            url="esop"
          >
            Let your employees take part in your companies success.
            Ledgy supports vesting schedules, real stock, options, with
            pool, without pool, and much more.<br />
            Employees can even log into Ledgy and see their vested shares in real-time.
          </FeatureLeft>

          <Hr />

          <FeatureRight
            {...props}
            name="Consistency"
            title="Guaranteed Error-Free"
            url="consistency"
          >
            Did you know that the many share registers are incomplete or
            just wrong?
            Building a share register with Excel or Word can easily lead to
            inconsistencies. We have you covered. Set up your shares with Ledgy
            and be assured, that all data is consistent.
          </FeatureRight>

          <Hr />

          <FeatureLeft
            {...props}
            name="Reporting"
            url="reporting"
          >
            Oh, it’s tax season again and there are 50 holding confirmations
            waiting to be sent to your shareholders.
            Pasting names into document templates, computing the tax value of all share …<br />
            Don’t worry. Generate all holding confirmations with a single click.
          </FeatureLeft>

          <Hr />

          <FeatureRight
            {...props}
            title="Investor Dashboard"
            name="the Investor Dashboard"
            url="investor-dashboard"
          >
            You are an investor and want to your portfolio companies?
            The founders are busy and the numbers they give you are different
            from your own records?
            With their share register on Ledgy, there’s only a single source of truth.
            Stop tracking your investments meticulously and simply convince
            your portfolio companies to use Ledgy.
          </FeatureRight>

        </div>
      </section>


    </main>
  </div>
));


// eslint-disable-next-line no-undef
export const pageFragment = graphql`
  fragment FeaturesPageFragment on RootQueryType {
    feature1: imageSharp(id: { regex: "/src\/img\/feature-1.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature2: imageSharp(id: { regex: "/src\/img\/feature-2.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
    feature3: imageSharp(id: { regex: "/src\/img\/feature-3.png/" }) {
      sizes(maxWidth: 800) { ...GatsbyImageSharpSizes }
    }
  }
`;
