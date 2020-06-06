import React from 'react';
import renderer from 'react-test-renderer';
import Info from '../Info';

describe('Info', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Info />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('switchMode works correctly', () => {
    const component = renderer.create(<Info />);
    component.getInstance().switchMode();
    expect(component.getInstance().state.textVisible).toEqual(true);
  });

  it('callModal works correctly', () => {
    const callTrailer = jest.fn();
    const setTrailer = jest.fn();
    const component = renderer.create(<Info callTrailer={callTrailer} setTrailer={setTrailer} />);
    component.getInstance().callModal();
    expect(callTrailer).toHaveBeenCalled();
    expect(setTrailer).toHaveBeenCalled();
  });

  it('default functions works correctly', () => {
    const component = renderer.create(<Info callTrailer={undefined} setTrailer={undefined} />);
    const result1 = component.getInstance().props.callTrailer();
    const result2 = component.getInstance().props.setTrailer();
    expect(result1).toEqual('can\'t find callTrailer function');
    expect(result2).toEqual('can\'t find setTrailer function');
  });
});
