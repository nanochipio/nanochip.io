export default from '../../../components/ConsistencyPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ConsistencyDeQuery {
    ...ConsistencyPageFragment
  }
`;
