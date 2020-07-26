import { shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  checkClass,
  checkProps,
  findByTestAttr,
  checkCallBack
} from '../../../../tests/utils';
import ControlledSelectOption from './ControlledSelectOption';

const setup = (props = {}) => shallow(<ControlledSelectOption {...props} />);

describe('<ControlledSelectOption />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'controlled-select-option');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledSelectOption />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      checked: true,
      disabled: true,
      focusShadow: 'string',
      focusBackgroundColor: 'string',
      icon: 'string',
      isFocused: true,
      multiple: true,
      selectAllClassName: 'string',
      separator: true,
      text: 'string',
      value: 'string',
      selectOption: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('invoke selectOption(value) onClick', () => {
    checkCallBack(wrapper, 'selectOption')
  });

  test('sets checked property', () => {
    wrapper = setup({ multiple: true, checked: false });
    expect(wrapper.find('input[checked=false]').length).toBe(1);

    wrapper = setup({ multiple: true, checked: true });
    expect(wrapper.find('input[checked=true]').length).toBe(1);
  });

  test('sets disabled property', () => {
    wrapper = setup({ multiple: true, disabled: false });
    expect(wrapper.find('input[disabled=false]').length).toBe(1);

    wrapper = setup({ multiple: true, disabled: true });
    expect(wrapper.find('input[disabled=true]').length).toBe(1);
  });

  describe('renders children', () => {
    test('render img if icon==="src"', () => {
      wrapper = setup({ icon: 'src' });
      expect(wrapper.find('img').length).toBe(1);
    });

    test('render input if multiple === true', () => {
      wrapper = setup({ multiple: true });
      expect(wrapper.find('input').length).toBe(1);
    });

    test('render value if value === `MyCustomText` && multiple === true', () => {
      wrapper = setup({ value: 'MyCustomText', multiple: true });

      const input = wrapper.find('input');

      expect(input.props().value).toEqual('MyCustomText');
      expect(wrapper.find('span').text()).toEqual('MyCustomText');
    });

    test('render value if text === `MyCustomText`', () => {
      wrapper = setup({ text: 'MyCustomText', value: 'notRender' });
      expect(wrapper.find('span').text()).toEqual('MyCustomText');
    });
  });

  describe('sets classes', () => {
    test('adds disabled class if disabled || separator === true', () => {
      expect(wrapper.find('.disabled').length).toBe(0);

      wrapper = setup({ disabled: true });
      checkClass(wrapper, 'disabled');

      wrapper = setup({ separator: true });
      checkClass(wrapper, 'disabled');
    });

    test('sets optgroup class if separator === true', () => {
      wrapper = setup({ separator: true });
      checkClass(wrapper, 'optgroup');
    });

    test('sets active class if checked === true', () => {
      wrapper = setup({ checked: true });
      checkClass(wrapper, 'active');
    });

    test('sets rounded-circle class by default if icon === `src`', () => {
      wrapper = setup({ icon: 'src' });
      checkClass(wrapper.find('img'), 'rounded-circle');
    });

    test('sets filtrable class for span by default ', () => {
      checkClass(wrapper.find('span'), 'filtrable');
    });

    test('sets custom class for span if selectAllClassName === `custom`', () => {
      wrapper = setup({selectAllClassName: 'custom'})
      checkClass(wrapper.find('span'), 'custom');
    });

    test('sets form-check-input class by default for input if mutliple === true', () => {
      wrapper = setup({ multiple: true });
      checkClass(wrapper.find('input'), 'form-check-input');
    });
  });
});
