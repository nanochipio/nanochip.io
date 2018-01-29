export default from '../../components/IndexPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query IndexDeQuery {
    ...IndexPageFragment
  }
`;
