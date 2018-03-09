export default from '../../components/RoundModelingPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query RoundModelingQuery {
    ...RoundModelingPageFragment
  }
`;
