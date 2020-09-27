import React from 'react';
import renderer from 'react-test-renderer';
import Search from '../Search';

jest.mock('react-router-dom', () => {
  const originalModule = jest.requireActual('react-router-dom');

  return {
    __esModule: true,
    ...originalModule,
    Link: 'Link',
    useParams: jest.fn(),
    useHistory: jest.fn(),
  };
});

describe('Search', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<Search />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('updateInputValue works correctly', () => {
    const component = renderer.create(<Search />);
    const testEvent = {
      target: {
        value: 29052020,
      },
    };
    component.getInstance().updateInputValue(testEvent);
    expect(component.getInstance().state.value).toEqual(29052020);
  });

  it('enableScan works correctly', () => {
    const search = jest.fn();
    const component = renderer.create(<Search search={search} />);
    component.getInstance().state.value = 'test';
    component.getInstance().enableScan();
    expect(search).toHaveBeenCalled();
  });

  it('enableScan works correctly with default state', () => {
    const search = jest.fn();
    const component = renderer.create(<Search search={search} />);
    component.getInstance().state.value = '';
    component.getInstance().enableScan();
    expect(search).not.toHaveBeenCalled();
  });

  it('input change works correctly', () => {
    const upd = jest.fn();
    const component = renderer.create(
      <Search />,
    );
    component.getInstance().updateInputValue = upd;
    const input = component.root.findByType('input');
    input.props.onChange();
    expect(upd).toHaveBeenCalled();
  });

  it('default function works correctly', () => {
    const component = renderer.create(<Search search={undefined} />);
    const result = component.getInstance().props.search();
    expect(result).toEqual('can\'t find search function');
  });
});
