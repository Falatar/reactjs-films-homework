import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlock from '../FilmBlock';

jest.mock('../../FilmBlockFrontSide', () => 'FilmBlockFrontSide');
jest.mock('../../FilmBlockBackSide', () => 'FilmBlockBackSide');

describe('FilmBlock', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly in details mode', () => {
    const component = renderer.create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />);
    component.getInstance().switchMode();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('switchMode works correctly', () => {
    const component = renderer.create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />);
    component.getInstance().switchMode();
    expect(component.getInstance().state.detailsMode).toEqual(true);
  });

  it('callModal works correctly', () => {
    const callTrailer = jest.fn();
    const setTrailer = jest.fn();
    const component = renderer.create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" callTrailer={callTrailer} setTrailer={setTrailer} />);
    component.getInstance().callModal();
    expect(callTrailer).toHaveBeenCalled();
    expect(setTrailer).toHaveBeenCalled();
  });

  it('setImg works correctly', () => {
    const component = renderer.create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />);
    component.getInstance().setImg('/12345');
    expect(component.getInstance().state.poster).toEqual(
      'https://image.tmdb.org/t/p/w500/12345',
    );
  });

  it('setDefaultImg  works correctly', () => {
    const component = renderer.create(<FilmBlock imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />);
    component.getInstance().setDefaultImg();
    expect(component.getInstance().state.poster).toEqual(
      'https://cdn.pixabay.com/photo/2016/11/30/12/16/question-mark-1872665_1280.jpg',
    );
  });

  it('default functions works correctly', () => {
    const component = renderer.create(<FilmBlock callTrailer={undefined} setTrailer={undefined} />);
    const result1 = component.getInstance().props.callTrailer();
    const result2 = component.getInstance().props.setTrailer();
    expect(result1).toEqual('can\'t find callTrailer function');
    expect(result2).toEqual('can\'t find setTrailer function');
  });
});
