import { mount, shallow } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import { checkCallBack, checkClass, checkProps, findByTestAttr } from '../../../tests/utils';
import InputSwitch from './InputSwitch';

const setup = (props = {}) => shallow(<InputSwitch {...props} />);
const mounted = (props = {}) => mount(<InputSwitch {...props} />);

describe('<InputSwitch />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'input-switch');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputSwitch />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'test',
      disabled: true,
      checked: true,
      labelLeft: 'test',
      labelRight: 'test',

      getValue: () => {},
      onChange: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('Invoke properties', () => {

    test('Invoke "disable" property for "input"', () => {
        wrapper = setup({disabled: true}).find('input');
        expect(wrapper.prop('disabled')).toBe(true)
    });

    test('Invoke "checked" property for "input"', () => {
        wrapper = setup({checked: true}).find('input');
        expect(wrapper.prop('checked')).toBe(true)
    });

    test('Invoke "labelLeft" property', () => {
        wrapper = setup({labelLeft: 'test'});
        expect(wrapper.find('label').children().first().text()).toEqual('test')
    });

    test('Invoke "labelRight" property', () => {
        wrapper = setup({labelRight: 'test'});
        expect(wrapper.find('label').children().last().text()).toEqual('test')
    });

    test('Invoke "getValue" callback function', () => {
        wrapper = mounted();
        checkCallBack(wrapper, 'getValue', 'change', 'input');
      });
  
      test('Invoke "onChange" callback function', () => {
        wrapper = mounted();
        checkCallBack(wrapper, 'onChange', 'change', 'input');
      });
  
  });

  describe('sets classes', () => {
    test('sets switch by default for wrapper', () => {
      checkClass(wrapper, 'switch');
    });

    test('sets custom classes for wrapper', () => {
      wrapper = setup({ className: 'test-class' });
      checkClass(wrapper, 'test-class', 1);
    });
  });
});
