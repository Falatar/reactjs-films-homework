import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import FilmData from '../FilmData';
import FilmDataContainer from '../FilmDataContainer';

jest.mock('../FilmData');
configure({ adapter: new Adapter() });

const storeModel = (state) => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('FilmData', () => {
  jest.resetAllMocks();

  const store = storeModel({});

  const wrapper = mount(
    <Provider store={store}>
      <FilmDataContainer />
    </Provider>,
  );

  const container = wrapper.find(FilmDataContainer);
  const component = container.find(FilmData);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['callTrailer', 'setTrailer'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('renders correctly', () => {
    const tree = renderer
      .create(<FilmData imgURL="" id={1} name="nemo" tagList="empty" rating={0.0} overview="some text" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
