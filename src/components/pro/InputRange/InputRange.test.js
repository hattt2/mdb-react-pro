import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import InputRange from './InputRange';

const mounted = (props = {}) => mount(<InputRange {...props} />);

describe('<InputRange />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mounted();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'input-range');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputRange />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      min: 0,
      max: 1,
      value: 0,
      step: 0.5,
      tag: 'section',
      getValue: () => {}
    };

    wrapper = mounted(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('sets classes', () => {
    test('sets custom class name for input', () => {
      wrapper = mounted({ className: 'test-class' });
      checkClass(wrapper, 'test-class', 2);
    });

    test('adds range-field by default for wrapper', () => {
      checkClass(wrapper.childAt(0), 'range-field');
    });

    test('sets custom classes for wrapper', () => {
      wrapper = mounted({ formClassName: 'test-class' });
      checkClass(wrapper.childAt(0), 'test-class', 1);
    });

    test('adds "thumb" class by default for popup', () => {
      checkClass(wrapper.childAt(0).childAt(1), 'thumb');
    });
    test('no active class for popup if !click', () => {
      checkClass(wrapper.childAt(0).childAt(1), 'active', 0);
    });
  });
});
