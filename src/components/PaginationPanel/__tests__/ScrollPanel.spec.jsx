import React from 'react';
import renderer from 'react-test-renderer';
import PaginationPanel from '../PaginationPanelContainer';

describe('PaginationPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaginationPanel />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
