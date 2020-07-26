import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass
} from '../../../../tests/utils';
import ButtonFixedItem from './ButtonFixedItem';

const setup = (props = {}) => shallow(<ButtonFixedItem {...props} />);

describe('<ButtonFixedItem />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'button-fixed-item');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonFixedItem />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: true,
      block: true,
      color: 'red',
      gradient: '',
      role: 'test',
      type: 'test',
      disabled: false,
      outline: true,
      rounded: true,
      floating: true,
      flat: true,
      innerRef: 'test',
      size: 'lg',
      children: <span />,
      className: 'test',
      icon: 'test',
      iconBrand: true,
      iconClass: 'test',
      iconLight: true,
      iconRegular: true,
      iconSize: 'string',
      buttonStyle: {},
      onClick: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('invokes onClick callback', () => {
    const cb = jest.fn();
    wrapper = setup({ onClick: cb });

    const a = wrapper.find('a');
    a.simulate('click');

    expect(cb).toBeCalled();
  });

  describe('sets classes', () => {
    test('adds btn-floating Ripple-parent class by default for a', () => {
      const a = wrapper.find('a');

      checkClass(a, 'btn-floating.Ripple-parent');
    });

    test('adds btn-lg class by default size === `lg` ', () => {
      wrapper = setup({ size: 'lg' });

      const a = wrapper.find('a');
      checkClass(a, 'btn-lg');
    });

    test('adds red class by default color === `red` ', () => {
      wrapper = setup({ color: 'red' });

      const a = wrapper.find('a');
      checkClass(a, 'red');
    });

    test('adds custom class', () => {
      wrapper = setup({ className: 'custom' });

      const a = wrapper.find('a');
      checkClass(a, 'custom');
    });
  });
});
