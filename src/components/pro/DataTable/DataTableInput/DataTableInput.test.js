import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import {
  findByTestAttr,
  checkClass,
  checkProps,
  checkCallBack
} from '../../../../tests/utils';
import DataTableInput from './DataTableInput';

const setup = (props = {}) => shallow(<DataTableInput {...props} />);

describe('<DataTableInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'datatable-input').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DataTableInput />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      label: 'string',
      value: 'string',
      onChange: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('invokes onChange callback', () => {
    checkCallBack(wrapper, 'onChange', 'change', 'input');
  });

  describe('sets label', () => {
    test('sets correct input\'s placeholder', () => {
      wrapper = setup({ label: 'test' });
      let input = wrapper.find('input').prop('placeholder');
      expect(input).toEqual('test');

      wrapper = setup();
      input = wrapper.find('input').prop('placeholder');
      expect(input).toEqual('Search');
    });
  });

  describe('input properties', () => {
    test('adds form-control form-control-sm class by default', () => {
      const input = wrapper.find('input');
      checkClass(input, 'form-control.form-control-sm');
    });

    test('sets input type', () => {
      const input = wrapper.find('input').prop('type');
      expect(input).toEqual('search');
    });
  });

  describe('sets classes', () => {
    test('adds dataTables_filter class by default', () => {
      checkClass(wrapper, 'dataTables_filter');
    });

    test('adds text-left class if barReverse === true', () => {
      wrapper = setup({ barReverse: true });
      checkClass(wrapper, 'text-left');
    });
  });
});
