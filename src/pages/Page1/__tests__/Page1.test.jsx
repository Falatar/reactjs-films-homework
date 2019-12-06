import React from 'react';
import TestRenderer from 'react-test-renderer';
import Signature from '../../../components/Signature';

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