export default from '../../components/AboutPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query AboutDeQuery {
    ...AboutPageFragment
  }
`;
