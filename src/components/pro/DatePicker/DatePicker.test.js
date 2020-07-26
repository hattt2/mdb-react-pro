import React from 'react';
import { shallow } from 'enzyme';
import ReactDOM from 'react-dom';
import { findByTestAttr, checkProps, checkTag } from '../../../tests/utils';
import DatePicker from './DatePicker';

const setup = (props = {}) => shallow(<DatePicker {...props} />);

describe('<DatePicker />', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = setup();
  });

  test('renders', () => {
    expect(findByTestAttr(wrapper, 'date-picker').length).toBe(1);
  });

  test('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<DatePicker />, div);
  });

  test('does not throw warnings with expected props', () => {
    const expectedProps = {
      theme: {},
      adornmentPosition: 'string',
      allowKeyboardControl: true,
      animateYearScrolling: true,
      autoOk: true,
      cancelLabel: <test />,
      clearable: true,
      clearLabel: <test />,
      disableFuture: {},
      disableOpenOnEnter: true,
      disablePast: true,
      emptyLabel: 'string',
      initialFocusedDate: 'string',
      InputAdornmentProps: {},
      invalidDateMessage: <test />,
      invalidLabel: 'string',
      keyboard: true,
      keyboardIcon: <test />,
      leftArrowIcon: <test />,
      mask: '',
      maxDate: 'string',
      maxDateMessage: <test />,
      minDate: 'string',
      minDateMessage: <test />,
      okLabel: <test />,
      openToYearSelection: true,
      rightArrowIcon: <test />,
      showTodayButton: true,
      TextFieldComponent: 'string',
      todayLabel: 'string',
      locale: 'string',
      format: 'string',
      tag: 'string',
      className: 'string',
      value: new Date(),
      valueDefault: new Date(),
      getValue: () => {},
      onInputChange: () => {}
    };
    wrapper = setup(expectedProps);
    checkProps(wrapper, expectedProps);
  });

  test('does not throw warnings without props', () => {
    checkProps(wrapper);
  });

  test('should set `string` tag', () => {
    wrapper = setup({ tag: 'string' });
    checkTag(wrapper, 'string');
  });
});
