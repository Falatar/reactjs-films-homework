import React from 'react';
import renderer from 'react-test-renderer';
import ModalWindowContainer from '../ModalWindowContainer';

it('renders correctly', () => {
  const tree = renderer
    .create(<ModalWindowContainer />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
