import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import setFilmAction, { loadGenres } from './actions';
import MoviewList, { MoviewListVoid } from './MoviewList';


class MoviewListContainer extends Component {
  constructor(props) {
    super(props);
    const { setFilm, loadList } = this.props;
    loadList();
    setFilm();
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
    const { base, genList } = this.props;
    if (base.results !== undefined && genList.genres !== undefined) {
      return MoviewList(base, genList, this.genGenreString);
    }
    return MoviewListVoid();
  }
}

MoviewListContainer.defaultProps = {
  base: {},
  genList: {},
  loadList: () => {},
  setFilm: () => {},
};

MoviewListContainer.propTypes = {
  base: PropTypes.objectOf(PropTypes.any),
  genList: PropTypes.objectOf(PropTypes.any),
  loadList: PropTypes.func,
  setFilm: PropTypes.func,
};

const mapStateToProps = (store) => ({
  base: store.moviewReducer.base,
  genList: store.moviewReducer.genList,
});

const mapDispatchToProps = (dispatch) => ({
  setFilm: () => dispatch(setFilmAction()),
  loadList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewListContainer);
