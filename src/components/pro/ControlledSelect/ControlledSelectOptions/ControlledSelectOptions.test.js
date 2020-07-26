import { shallow, mount } from 'enzyme';
import React from 'react';
import ReactDOM from 'react-dom';
import {
  checkClass,
  checkProps,
  findByTestAttr,
  checkCallBack
} from '../../../../tests/utils';
import ControlledSelectOptions from './ControlledSelectOptions';

const expectedProps = {
  inputRef: {
    current: document.createElement('input')
  },
  selected: 'string',
  selectOption: () => {}
};

const setup = (props = {}) =>
  shallow(<ControlledSelectOptions {...expectedProps} {...props} />);
const mounted = (props = {}) =>
  mount(<ControlledSelectOptions {...expectedProps} {...props} />);

describe('<ControlledSelectOptions />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'controlled-select-options');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledSelectOptions {...expectedProps} />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      allChecked: true,
      focused: 2,
      focusShadow: 'string',
      focusBackgroundColor: 'string',
      multiple: true,
      options: [],
      search: true,
      searchLabel: 'string',
      searchId: 'string',
      selectAllClassName: 'string',
      selectAllLabel: 'string',
      selectAllValue: 'string',
      changeFocus: () => {},
      setFilteredOptions: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('invoke changeFocus(value) onKeyDown for input', () => {
    checkCallBack(
      mounted({ search: true }),
      'changeFocus',
      'keydown',
      'input',
      { keyCode: 27 }
    );
  });

  test('invoke setFilteredOptions(value) onKeyDown for input', () => {
    checkCallBack(
      mounted({ search: true, changeFocus: () => {} }),
      'setFilteredOptions',
      'change',
      'input',
      { keyCode: 27 }
    );
  });

  describe('should renders', () => {
    test('render input if search:prop === true', () => {
      wrapper = setup({ search: true });
      expect(wrapper.find('Input').length).toBe(1);
    });

    test('render ControlledSelectOption by default', () => {
      expect(wrapper.find('ControlledSelectOption').length).toBe(1);
    });

    test('render ControlledSelectOption if selectAll && multiple && state.filteredOptions.length > 1', () => {
      wrapper = setup({ selectAll: true, multiple: true, options: [{}, {}] });
      expect(wrapper.find('ControlledSelectOption').length).toBe(4);
    });

    test('render ControlledSelectOption if state.filteredOptions.length > 0', () => {
      wrapper = setup({ selectAll: true, multiple: true, options: [{}, {}] });
      expect(wrapper.find('ControlledSelectOption').length).toBe(4);
    });
  });

    describe('sets classes', () => {
      test('sets dropdown-content, select-dropdown, fadeElement classes by default', () => {
        checkClass(wrapper, 'dropdown-content.select-dropdown.fadeElement');
      });
    });
});
