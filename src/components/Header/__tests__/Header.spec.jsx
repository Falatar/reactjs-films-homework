import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import HeaderContainer from '../HeaderContainer';
import Header from '../Header';

jest.mock('../Header');
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
      <HeaderContainer />
    </Provider>,
  );

  const container = wrapper.find(HeaderContainer);
  const component = container.find(Header);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['LoadMostPopularFilm', 'LoadGenreList'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'mostPopularFilm',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  const testInput = {
    backdrop_path: '',
    title: 'test',
    genre_str: '',
    vote_average: 0,
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<Header mostPopularFilm={testInput} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
