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

  it('hide works correctly', () => {
    const endModalSession = jest.fn();
    const component = renderer.create(
      <ModalWindow status root={root} endModalSession={endModalSession} />,
    );
    component.getInstance().hide();
    expect(endModalSession).toHaveBeenCalled();
  });

  it('default function works correctly', () => {
    const component = renderer.create(<ModalWindow endModalSession={undefined} />);
    const result = component.getInstance().props.endModalSession();
    expect(result).toEqual('can\'t find endModalSession function');
  });
});
