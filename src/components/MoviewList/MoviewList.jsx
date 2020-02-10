import React, { Component } from 'react';
import { connect } from 'react-redux';
import style from './MoviewList.scss';
import FilmData from '../FilmData/FilmData';
import setFilm from './actions';


class MoviewList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
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
  setFilm: dispatch(setFilm()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MoviewList);
