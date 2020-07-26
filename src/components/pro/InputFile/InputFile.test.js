import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps, checkClass } from '../../../tests/utils';
import InputFile from './InputFile';

const setup = (props = {}) => shallow(<InputFile {...props} />);

describe('<InputFile />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    const renders = findByTestAttr(wrapper, 'input-file');
    expect(renders.length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<InputFile />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      className: 'string',
      btnTitle: 'string',
      btnColor: 'string',
      textFieldTitle: 'string',
      multiple: true,
      reset: true,
      resetClassName: 'string',
      resetAriaLabel: 'string',
      reverse: true
    };

    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper, {});
  });

  describe('should renders', () => {
    test('close icon if reset === true', () => {
      expect(wrapper.find('MDBCloseIcon').length).toBe(0);
      wrapper = setup({ reset: true });
      expect(wrapper.find('MDBCloseIcon').length).toBe(1);
    });
  });

  describe('sets classes', () => {
    test('sets file-field md-form class by default', () => {
      checkClass(wrapper, 'file-field.md-form');
    });

    test('adds file-field-right when reverse===true', () => {
      wrapper = setup({ reverse: true });
      checkClass(wrapper, 'file-field.md-form');
    });

    test('sets btn btn-primary btn-sm float-left classes by default for btnClass', () => {
      checkClass(
        wrapper.children().first(),
        'btn.btn-primary.btn-sm.float-left'
      );
    });

    test('adds float-right for btnClass when reverse===true', () => {
      wrapper = setup({ reverse: true });
      checkClass(wrapper.children().first(), 'float-right');
    });

    test('sets file-path validate classes by default for inputFieldClass', () => {
      checkClass(wrapper.find('input'), 'file-path.validate');
    });
  });
});
