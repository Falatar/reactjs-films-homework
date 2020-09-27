import { connect } from 'react-redux';
import { saveSearchStr } from '../../modules/filmListModule/filmListModuleActions';
import {
  getActualMode, getActualGenre, getCurrentPage, getActiveView, getSearchStr,
} from '../../modules/filmListModule/filmListModuleSelector';
import Search from './Search';

export const mapStateToProps = (store) => ({
  activeMode: getActualMode(store),
  activeGenre: getActualGenre(store),
  actualPage: getCurrentPage(store),
  activeView: getActiveView(store),
  searchStr: getSearchStr(store),
});

export const mapDispatchToProps = (dispatch) => ({
  saveSearchStr: (searchString) => dispatch(saveSearchStr(searchString)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Search);
