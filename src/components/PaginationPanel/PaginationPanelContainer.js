import { connect } from 'react-redux';
import {
  moveLeft,
  moveRight,
  moveLeftToEnd,
  moveRightToEnd,
} from '../../modules/filmListModule/filmListModuleActions';
import { getNumberOfFilms, getCurrentPage } from '../../modules/filmListModule/filmListModuleSelector';
import PaginationPanel from './PaginationPanel';

const mapStateToProps = (store) => ({
  totalFilms: getNumberOfFilms(store),
  actualPage: getCurrentPage(store),
});

const mapDispatchToProps = (dispatch) => ({
  left: (value) => dispatch(moveLeft(value)),
  right: (value) => dispatch(moveRight(value)),
  finallyLeft: () => dispatch(moveLeftToEnd()),
  finallyRight: (value) => dispatch(moveRightToEnd(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PaginationPanel);
