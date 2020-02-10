/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './MoviewList.scss';
import FilmData from '../FilmData';
import setFilmAction from './actions';


class MoviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { setFilm } = this.props;
    setFilm();
  }

  render() {
    return (
      <div className={style.List}>
        <FilmData />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  base: store.base,
});

const mapDispatchToProps = (dispatch) => ({
  setFilm: () => dispatch(setFilmAction()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewList);
