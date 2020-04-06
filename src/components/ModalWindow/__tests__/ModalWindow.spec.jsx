import React from 'react';
import renderer from 'react-test-renderer';
import ModalWindow from '../ModalWindowContainer';

describe('ModalWindow', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<ModalWindow />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
