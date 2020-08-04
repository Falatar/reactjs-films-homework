import { connect } from 'react-redux';
import { setNewMode, setActualGenre, switchView } from '../../modules/filmListModule/filmListModuleActions';
import { getGenres } from '../../modules/filmListModule/filmListModuleSelector';
import TabPanel from './TabPanel';


export const mapStateToProps = (store) => ({
  genres: getGenres(store),
});

export const mapDispatchToProps = (dispatch) => ({
  switchMode: (value) => dispatch(setNewMode(value)),
  switchGenre: (value) => dispatch(setActualGenre(value)),
  switchView: (value) => dispatch(switchView(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TabPanel);
