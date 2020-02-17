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
    this.state = {
      output: [],
    };
  }

  render() {
    const { base, genList } = this.props;
    const { output } = this.state;
    console.log(base);
    console.log(genList);
    if (base !== {} && base !== undefined) {
      for (let i = 0; i < (base.total_results < 8 ? base.total_results : 8); i += 1) {
        output.push(<FilmData
          name={base.results[i].title}
          imgURL={base.results[i].poster_path}
          rating={base.results[i].vote_average / 2}
          tagList={base.results[i].poster_path}
        />);
      }
    }
    return (
      <div className={style.List}>
        <FilmData />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  base: store.base,
  genList: store.genList,
});

const mapDispatchToProps = (dispatch) => ({
  setFilm: () => dispatch(setFilmAction()),
  loadList: () => dispatch(loadGenres()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewList);
