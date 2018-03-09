export default from '../components/FeaturesPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query FeaturesQuery {
    ...FeaturesPageFragment
  }
`;
