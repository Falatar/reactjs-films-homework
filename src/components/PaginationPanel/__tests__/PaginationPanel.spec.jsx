import React from 'react';
import renderer from 'react-test-renderer';
import PaginationPanel from '../PaginationPanel';

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

describe('PaginationPanel', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(<PaginationPanel totalFilms={1} actualPage={1} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('button 2 works correctly', () => {
    const left = jest.fn();
    const component = renderer.create(
      <PaginationPanel totalFilms={1} actualPage={1} left={left} />,
    );
    const buttons = component.root.findAllByType('button');
    expect(buttons.length).toBe(4);
    buttons[1].props.onClick();
    expect(left).toHaveBeenCalled();
  });

  it('button 3 works correctly', () => {
    const right = jest.fn();
    const component = renderer.create(
      <PaginationPanel totalFilms={1} actualPage={1} right={right} />,
    );
    const buttons = component.root.findAllByType('button');
    expect(buttons.length).toBe(4);
    buttons[2].props.onClick();
    expect(right).toHaveBeenCalled();
  });

  it('button 4 works correctly', () => {
    const finallyRight = jest.fn();
    const component = renderer.create(
      <PaginationPanel totalFilms={1} actualPage={1} finallyRight={finallyRight} />,
    );
    const buttons = component.root.findAllByType('button');
    expect(buttons.length).toBe(4);
    buttons[3].props.onClick();
    expect(finallyRight).toHaveBeenCalled();
  });

  it('default functions works correctly', () => {
    const component = renderer.create(
      <PaginationPanel
        totalFilms={1}
        actualPage={1}
        left={undefined}
        right={undefined}
        finallyLeft={undefined}
        finallyRight={undefined}
      />,
    );
    const result1 = component.root.props.left();
    const result2 = component.root.props.right();
    const result3 = component.root.props.finallyLeft();
    const result4 = component.root.props.finallyRight();
    expect(result1).toEqual('can\'t find left function');
    expect(result2).toEqual('can\'t find right function');
    expect(result3).toEqual('can\'t find finallyLeft function');
    expect(result4).toEqual('can\'t find finallyRight function');
  });
});
