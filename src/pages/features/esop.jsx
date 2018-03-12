export default from '../../components/ESOPPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query ESOPQuery {
    ...ESOPPageFragment
  }
`;
