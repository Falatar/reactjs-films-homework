import { connect } from 'react-redux';
import { switchPage } from '../../modules/filmListModule/filmListModuleActions';
import { getNumberOfPages } from '../../modules/filmListModule/filmListModuleSelector';
import ScrollPanel from './ScrollPanel';

const mapStateToProps = (store) => ({
  totalPages: getNumberOfPages(store),
});

const mapDispatchToProps = (dispatch) => ({
  scroll: (value) => dispatch(switchPage(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ScrollPanel);
