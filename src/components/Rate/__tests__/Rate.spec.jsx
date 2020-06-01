import React from 'react';
import renderer from 'react-test-renderer';
import Rate from '../Rate';

describe('Rate', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Rate rating="3.5" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
