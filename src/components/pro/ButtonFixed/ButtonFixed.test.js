import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass,
  checkCallBack
} from '../../../tests/utils';
import ButtonFixed from './ButtonFixed';

const setup = (props = {}) => shallow(<ButtonFixed {...props} />);
const mounted = (props = {}) => mount(<ButtonFixed {...props} />);

describe('<ButtonFixed />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'button-fixed');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ButtonFixed />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      active: true,
      block: true,
      color: 'string',
      gradient: 'string',
      role: 'string',
      type: 'string',
      disabled: true,
      outline: true,
      rounded: true,
      floating: true,
      flat: true,
      icon: 'string',
      iconBrand: true,
      iconClass: 'string',
      iconLight: true,
      iconRegular: true,
      iconSize: 'string',
      innerRef: 'string',
      size: 'string',
      children: <span />,
      className: 'string',
      topSection: 'string',
      onClick: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('correctly render href attribute for `a` tag', () => {
    expect(wrapper.find('a[href="#!"]').length).toBe(1);
    wrapper = setup({ topSection: 'test' });
    expect(wrapper.find('a[href="#!"]').length).toBe(0);
    expect(wrapper.find('a[href="test"]').length).toBe(1);
  });

  test('invokes onClick callback', () => {
    checkCallBack(mounted(), 'onClick', 'click', {}, 'a');
  });

  describe('sets classes', () => {
    test('adds fixed-action-btn class by default', () => {
      checkClass(wrapper, 'fixed-action-btn');
    });

    test('adds fixed-action-btn active class when mousover', () => {
      wrapper.simulate('mouseover');
      checkClass(wrapper, 'fixed-action-btn.active');
    });

    test('adds fixed-action-btn class when mouseleave', () => {
      wrapper.simulate('mouseleave');
      checkClass(wrapper, 'fixed-action-btn');
    });

    test('adds cutom iconClass class if iconClass property === `custom`', () => {
      wrapper = setup({ icon: 'test', iconClass: 'custom' });
      checkClass(wrapper.find('Fa'), 'custom');
    });

    test("adds Ripple-parent class by default for 'a'", () => {
      checkClass(wrapper.find('a'), 'Ripple-parent');
    });

    test("adds custom classes by property for 'a'", () => {
      wrapper = setup({ className: 'custom' });
      checkClass(wrapper.find('a'), 'custom');
    });

    test("adds disabled property class for 'a'", () => {
      wrapper = setup({ disabled: true });
      checkClass(wrapper.find('a'), 'disabled');
    });

    test("adds floating property class for 'a'", () => {
      checkClass(wrapper.find('a'), 'btn');
      wrapper = setup({ floating: true });
      checkClass(wrapper.find('a'), 'btn-floating');
    });

    test("adds color property class for 'a'", () => {
      wrapper = setup({ color: 'red' });
      checkClass(wrapper.find('a'), 'red');
    });

    test("adds gradient property class for 'a'", () => {
      wrapper = setup({ color: 'red' });
      checkClass(wrapper.find('a'), 'red');

      wrapper = setup({ color: 'red', gradient: 'aqua' });
      checkClass(wrapper.find('a'), 'aqua-gradient');
    });

    test("adds gradient property class for 'a'", () => {
      wrapper = setup({ color: 'red' });
      checkClass(wrapper.find('a'), 'red');

      wrapper = setup({ color: 'red', gradient: 'aqua' });
      checkClass(wrapper.find('a'), 'aqua-gradient');

      wrapper = setup({ color: 'red', gradient: 'aqua', flat: true });
      checkClass(wrapper.find('a'), 'btn-flat');
    });

    test("adds size property class for 'a'", () => {
      wrapper = setup({ size: 'lg' });
      checkClass(wrapper.find('a'), 'btn-lg');
    });

    test("adds rounded property class for 'a'", () => {
      wrapper = setup({ rounded: true });
      checkClass(wrapper.find('a'), 'btn-rounded');
    });

    test("adds block property class for 'a'", () => {
      wrapper = setup({ block: true });
      checkClass(wrapper.find('a'), 'btn-block');
    });

    test("adds list-unstyled class for 'ul' by default", () => {
      wrapper = setup({ children: '<a></a>' });
      checkClass(wrapper.find('ul'), 'list-unstyled');
    });

    test("adds disabled class for 'ul' by default", () => {
      wrapper = setup({ children: '<a></a>' });
      checkClass(wrapper.find('ul'), 'list-unstyled.disabled');
    });

    test("remove disabled class for 'ul' when mouseover", () => {
      wrapper = setup({ children: '<a></a>' });
      wrapper.simulate('mouseover');
      checkClass(wrapper.find('ul'), 'list-unstyled');
    });

    test("adds disabled class for 'ul' when mouseleave", () => {
      wrapper = setup({ children: '<a></a>' });
      wrapper.simulate('mouseleave');
      checkClass(wrapper.find('ul'), 'list-unstyled.disabled');
    });
  });
});
