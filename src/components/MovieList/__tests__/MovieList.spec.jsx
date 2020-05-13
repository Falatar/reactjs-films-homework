import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Adapter from 'enzyme-adapter-react-16';
import { mount, configure } from 'enzyme';
import MovieListContainer from '../MovieListContainer';
import MovieList from '../MovieList';

jest.mock('../MovieList');
configure({ adapter: new Adapter() });

const storeModel = (state) => ({
  default: jest.fn(),
  subscribe: jest.fn(),
  dispatch: jest.fn(),
  getState: () => state,
});

describe('MovieList', () => {
  jest.resetAllMocks();

  const store = storeModel({});

  const wrapper = mount(
    <Provider store={store}>
      <MovieListContainer />
    </Provider>,
  );

  const container = wrapper.find(MovieListContainer);
  const component = container.find(MovieList);

  it('should render both the container and the component ', () => {
    expect(container.length).toBeTruthy();
    expect(component.length).toBeTruthy();
  });

  it('should map dispatch to props', () => {
    const expectedPropKeys = ['getFilmList', 'loadGenreList'];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  it('should map state to props', () => {
    const expectedPropKeys = [
      'filmList',
    ];

    expect(Object.keys(component.props())).toEqual(expect.arrayContaining(expectedPropKeys));
  });

  const testInput = {
    item: {
      id: 0,
      title: 'test',
      backdrop_path: '',
      vote_average: 0,
      genre_str: '',
      overview: '',
    },
  };

  it('renders correctly', () => {
    const tree = renderer
      .create(<MovieList filmList={testInput} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
