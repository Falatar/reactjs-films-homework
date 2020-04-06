import React from 'react';
import renderer from 'react-test-renderer';
import MoviewList from '../MoviewListContainer';

describe('MoviewList', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<MoviewList />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
