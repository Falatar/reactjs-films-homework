import React from 'react';
import renderer from 'react-test-renderer';
import ModalWindow from '../ModalWindow';

describe('ModalWindow', () => {
  const root = {
    results: [
      {
        key: 'number',
      },
    ],
  };

  it('renders correctly in active mode', () => {
    const tree = renderer
      .create(<ModalWindow status root={root} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly in passive mode', () => {
    const tree = renderer
      .create(<ModalWindow status={false} root={root} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly in active mode without input', () => {
    const tree = renderer
      .create(<ModalWindow status root={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly in passive mode without input', () => {
    const tree = renderer
      .create(<ModalWindow status={false} root={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
