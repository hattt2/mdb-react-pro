import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import Autocomplete from './Autocomplete';

const setup = (props = {}) => shallow(<Autocomplete {...props} />);

describe('<Autocomplete />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const autocomplete = findByTestAttr(wrapper, 'auto-complete');
    expect(autocomplete.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Autocomplete />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      clear: true,
      clearColor: '#ffffff',
      clearSize: '50',
      data: ['aa', 'bb'],
      disabled: false,
      id: 'string',
      label: 'string',
      labelClass: 'string',
      icon: 'string',
      iconBrand: true,
      iconLight: true,
      iconRegular: true,
      iconSize: '',
      iconClassName: 'text-weight-bold',
      placeholder: 'string',
      valueDefault: 'string',
      getValue: () => {}
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('invokes getValue callback', () => {
    const cb = jest.fn();
    wrapper = setup({ getValue: cb });

    const input = wrapper.find('Input');
    input.simulate('change', {
      target: {
        value: '0'
      }
    });

    expect(cb).toBeCalled();
  });

  describe('sets classes', () => {
    test('adds mdb-Autocomplete class by default for ul if exists value & !choosed', () => {
      wrapper.setState({ value: 'value', choosed: false });

      const ul = wrapper.find('ul');

      checkClass(ul, 'mdb-autocomplete-wrap');
    });

    test('adds list-item class by default for li if exists value & !choosed && filteredSuggestions>0', () => {
      wrapper.setState({
        value: 'value',
        choosed: false,
        filteredSuggestions: ['', '']
      });

      const ul = wrapper.find('ul li');
      ul.map(li => checkClass(li, 'list-item'));
    });
  });
});
