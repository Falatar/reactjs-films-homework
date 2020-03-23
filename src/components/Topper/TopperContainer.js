import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import getFilm, { loadGenres } from './actions';
import Topper, { TopperVoid } from './Topper';

class TopperContainer extends Component {
  constructor(props) {
    super(props);
    const { loadLatest, loadList } = this.props;
    loadList();
    loadLatest();
  }

  genGenreString = (genres, filmGenres) => {
    let result = '';
    filmGenres.forEach((elem) => {
      const genre = genres.find((type) => {
        if (type.id === elem) return true;
        return false;
      });
      result = result.concat(genre.name, ' ');
    });
    return result.slice(0, -1);
  }

  render() {
    const { latestFilm, genList } = this.props;
    if (latestFilm.results !== undefined && genList.genres !== undefined) {
      return Topper(latestFilm, genList, this.genGenreString);
    }
    return TopperVoid();
  }
}

TopperContainer.defaultProps = {
  loadLatest: () => {},
  loadList: () => {},
  latestFilm: {},
  genList: {},
};

TopperContainer.propTypes = {
  loadLatest: PropTypes.func,
  loadList: PropTypes.func,
  latestFilm: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
};

const mapStateToProps = (store) => ({
  latestFilm: store.topperReducer.latestFilm,
  genList: store.topperReducer.genList,
});

const mapDispatchToProps = (dispatch) => ({
  loadLatest: () => dispatch(getFilm()),
  loadList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopperContainer);
