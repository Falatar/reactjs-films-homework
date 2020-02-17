/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './MoviewList.scss';
import FilmData from '../FilmData';
import setFilmAction, { loadGenres } from './actions';


class MoviewList extends Component {
  constructor(props) {
    super(props);
    const { setFilm, loadList } = this.props;
    loadList();
    setFilm();
  }

  render() {
    const { base, genList } = this.props;
    console.log(base);
    console.log(genList);
    if (base.results !== undefined) {
      return (
        <div className={style.List}>
          {base.results.slice(0, 8).map((item) => (
            <FilmData
              name={item.title}
              imgURL={item.poster_path}
              rating={item.vote_average / 2}
              tagList={item.poster_path}
            />
          ))}
        </div>
      );
    }
    return (
      <div className={style.List}>
        <FilmData />
      </div>
    );
  }
}

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
)(MoviewList);
