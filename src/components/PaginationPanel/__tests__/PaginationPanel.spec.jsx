import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import PaginationPanelContainer from '../PaginationPanelContainer';
import PaginationPanel from '../PaginationPanel';

jest.mock('../PaginationPanel');
configure({ adapter: new Adapter() });

const storeModel = (state) => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('PaginationPanel', () => {
  jest.resetAllMocks();

  const store = storeModel({});

  const wrapper = mount(
    <Provider store={store}>
      <PaginationPanelContainer />
    </Provider>,
  );

  const container = wrapper.find(PaginationPanelContainer);
  const component = container.find(PaginationPanel);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = [
      'left',
      'right',
      'finallyLeft',
      'finallyRight',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'totalFilms',
      'actualPage',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<PaginationPanel totalFilms={1} actualPage={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
