export default from '../../components/ReportingPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ReportingQuery {
    ...ReportingPageFragment
  }
`;
