import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import ModalWindowContainer from '../ModalWindowContainer';
import ModalWindow from '../ModalWindow';

jest.mock('../ModalWindow');
configure({ adapter: new Adapter() });

const storeModel = (state) => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('Header', () => {
  jest.resetAllMocks();

  const store = storeModel({});

  const wrapper = mount(
    <Provider store={store}>
      <ModalWindowContainer />
    </Provider>,
  );

  const container = wrapper.find(ModalWindowContainer);
  const component = container.find(ModalWindow);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['endModalSession'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'status',
      'root',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<ModalWindow status root="" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
