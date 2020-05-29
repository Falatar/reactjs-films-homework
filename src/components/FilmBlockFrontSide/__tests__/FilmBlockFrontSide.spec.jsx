import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlockFrontSide from '../FilmBlockFrontSide';

jest.mock('../../FilmDescription', () => 'FilmDescription');

describe('FilmBlockFrontSide', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilmBlockFrontSide
          poster=""
          id={1}
          name="nemo"
          tagList="empty"
          rating={0.0}
          callModal={() => {}}
          switchMode={() => {}}
          checkImgSizes={() => {}}
          setDefaultImg={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default functions works correctly', () => {
    const component = renderer.create(
      <FilmBlockFrontSide />,
    );
    const result1 = component.root.props.callModal();
    const result2 = component.root.props.switchMode();
    const result3 = component.root.props.checkImgSizes();
    const result4 = component.root.props.setDefaultImg();
    expect(result1).toEqual('can\'t find callModal function');
    expect(result2).toEqual('can\'t find switchMode function');
    expect(result3).toEqual('can\'t find checkImgSizes function');
    expect(result4).toEqual('can\'t find setDefaultImg function');
  });
});
