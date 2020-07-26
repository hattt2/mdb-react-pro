import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import {
  findByTestAttr,
  checkProps,
  checkClass
} from '../../../../tests/utils';
import ControlledSelectInput from './ControlledSelectInput';

const setup = (props = {}) => shallow(<ControlledSelectInput {...props} />);

describe('<ControlledSelectInput />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'controlled-select-input');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ControlledSelectInput />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      required: true,
      value: 'string'
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  test('sets required property', () => {
    expect(wrapper.find('input[required=false]').length).toBe(1);
    wrapper = setup({ required: true });
    expect(wrapper.find('input[required=true]').length).toBe(1);
  });

  describe('sets classes', () => {
    test('adds select-dropdown class by default', () => {
      checkClass(wrapper, 'select-dropdown');
    });
  });
});
