import { connect } from 'react-redux';
import { startSearch } from '../../modules/filmListModule/filmListModuleActions';
import Search from './Search';


export const mapDispatchToProps = (dispatch) => ({
  search: (searchString) => dispatch(startSearch(searchString)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Search);
