import { connect } from 'react-redux';
import {
  getGenres, getActualMode, getActualGenre, getCurrentPage, getActiveView, getSearchStr,
} from '../../modules/filmListModule/filmListModuleSelector';
import {
  setActualGenre, updateActualView,
} from '../../modules/filmListModule/filmListModuleActions';
import TabPanel from './TabPanel';


export const mapStateToProps = (store) => ({
  genres: getGenres(store),
  activeMode: getActualMode(store),
  activeGenre: getActualGenre(store),
  actualPage: getCurrentPage(store),
  activeView: getActiveView(store),
  searchStr: getSearchStr(store),
});

export const mapDispatchToProps = (dispatch) => ({
  switchGenre: (value) => dispatch(setActualGenre(value)),
  updateActualView: (value) => dispatch(updateActualView(value)),
});

export default connect(
  mapStateToProps,
  null,
)(TabPanel);
