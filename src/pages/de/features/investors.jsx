export default from '../../../components/InvestorsPage';

// eslint-disable-next-line no-undef
export const pageQuery = graphql`
  query InvestorsDeQuery {
    ...InvestorsPageFragment
  }
`;
