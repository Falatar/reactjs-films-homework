import React from 'react';
import renderer from 'react-test-renderer';
import FilmBlockBackSide from '../FilmBlockBackSide';

jest.mock('../../FilmDescription', () => 'FilmDescription');

describe('FilmBlockBackSide', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <FilmBlockBackSide
          poster=""
          name="nemo"
          tagList="empty"
          rating={0.0}
          overview="some text"
          callModal={() => {}}
          switchMode={() => {}}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('default functions works correctly', () => {
    const component = renderer.create(
      <FilmBlockBackSide />,
    );
    const result1 = component.root.props.callModal();
    const result2 = component.root.props.switchMode();
    expect(result1).toEqual('can\'t find callModal function');
    expect(result2).toEqual('can\'t find switchMode function');
  });
});
