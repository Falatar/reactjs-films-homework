import React from 'react';
import TestRenderer from 'react-test-renderer';
import Signature from '../components/Signature';
import TestComponent from '../components/TestComponent';

const signature = TestRenderer.create(<Signature name="Igor" />);


describe('test Signature', () => {
  test('is input correct', () => {
    const testName = signature.root.findByType('h3');
    expect(testName.children).toStrictEqual(['Igor']);
  });

  test('is class correct', () => {
    const testName = signature.root.findByType('div');
    expect(testName.props.className).toBe('userName');
  });
});

const calc = TestRenderer.create(<TestComponent x={574} y={314} z={6} />);


describe('test TestComponent', () => {
  test('is calculation correct', () => {
    const testName = calc.root.findByType('h3');
    expect(testName.children).toStrictEqual(['(X + Y) / Z =', ' ', '148']);
  });
});
