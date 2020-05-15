import React from 'react';
import renderer from 'react-test-renderer';
import PaginationPanel from '../PaginationPanel';

describe('PaginationPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaginationPanel totalFilms={1} actualPage={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
