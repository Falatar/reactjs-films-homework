import React from 'react';
import renderer from 'react-test-renderer';
import Topper from '../Topper';

describe('Topper', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Topper />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
