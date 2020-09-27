import React from 'react';
import renderer from 'react-test-renderer';
import FilmList from '../FilmList';

jest.mock('../../FilmDescription', () => 'FilmDescription');

describe('FilmList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilmList
          id={0}
          name="name"
          imgURL="url"
          rating={0}
          tagList="tagList"
          overview="overview"
          callTrailer={() => { }}
          setTrailer={() => { }}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default functions works correctly', () => {
    const component = renderer.create(
      <FilmList />,
    );
    const result1 = component.root.props.callTrailer();
    const result2 = component.root.props.setTrailer();
    expect(result1).toEqual('can\'t find callTrailer function');
    expect(result2).toEqual('can\'t find setTrailer function');
  });
});
