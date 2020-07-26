import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider } from 'material-ui-pickers';
import { DatePicker as UIDatePicker } from 'material-ui-pickers';
import moment from 'moment';
import './DatePicker.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';

class DatePicker extends Component {
  state = {
    selectedDate: this.props.value || this.props.valueDefault,
    muiTheme: createMuiTheme({
      ...this.props.theme,
      typography: {
        useNextVariants: true
      }
    })
  };

  componentDidUpdate(prevProps, prevState) {
    const { getValue, value, theme } = this.props;
    const { selectedDate } = this.state;

    if (getValue && prevState.selectedDate !== selectedDate) {
      getValue(selectedDate);
    }

    if (value !== prevProps.value) {
      this.setState({ selectedDate: value });
    }

    if (prevProps.theme !== theme) {
      this.setState({ muiTheme: createMuiTheme(theme) });
    }
  }

  handleDateChange = date => {
    const { value } = this.props;

    this.setState({ selectedDate: date ? date._d : value });
  };

  render() {
    const {
      adornmentPosition,
      allowKeyboardControl,
      animateYearScrolling,
      autoOk,
      cancelLabel,
      className,
      clearable,
      clearLabel,
      disableFuture,
      disableOpenOnEnter,
      disablePast,
      emptyLabel,
      format,
      getValue,
      initialFocusedDate,
      InputAdornmentProps,
      invalidDateMessage,
      invalidLabel,
      keyboard,
      keyboardIcon,
      leftArrowIcon,
      locale,
      mask,
      maxDate,
      maxDateMessage,
      minDate,
      minDateMessage,
      okLabel,
      onInputChange,
      openToYearSelection,
      rightArrowIcon,
      showTodayButton,
      TextFieldComponent,
      theme,
      todayLabel,
      value,
      valueDefault,
      tag: Tag,
      ...attributes
    } = this.props;

    const { muiTheme, selectedDate } = this.state;

    const classes = classNames('md-form', className);

    return (
      <Tag data-test='date-picker' className={classes}>
        <MuiThemeProvider theme={muiTheme}>
          <MuiPickersUtilsProvider
            locale={locale}
            moment={moment}
            utils={MomentUtils}
          >
            <UIDatePicker
              {...attributes}
              adornmentPosition={adornmentPosition}
              allowKeyboardControl={allowKeyboardControl}
              animateYearScrolling={animateYearScrolling}
              autoOk={autoOk}
              cancelLabel={cancelLabel}
              clearable={clearable}
              clearLabel={clearLabel}
              disableFuture={disableFuture}
              disableOpenOnEnter={disableOpenOnEnter}
              disablePast={disablePast}
              emptyLabel={emptyLabel}
              initialFocusedDate={initialFocusedDate}
              InputAdornmentProps={InputAdornmentProps}
              invalidDateMessage={invalidDateMessage}
              invalidLabel={invalidLabel}
              keyboard={keyboard}
              keyboardIcon={keyboardIcon}
              leftArrowIcon={leftArrowIcon}
              mask={mask}
              maxDate={maxDate}
              maxDateMessage={maxDateMessage}
              minDate={minDate}
              minDateMessage={minDateMessage}
              okLabel={okLabel}
              onInputChange={onInputChange}
              openToYearSelection={openToYearSelection}
              rightArrowIcon={rightArrowIcon}
              showTodayButton={showTodayButton}
              TextFieldComponent={TextFieldComponent}
              todayLabel={todayLabel}
              format={format || 'DD MMMM, YYYY'}
              value={selectedDate}
              onChange={this.handleDateChange}
            />
          </MuiPickersUtilsProvider>
        </MuiThemeProvider>
      </Tag>
    );
  }
}

DatePicker.propTypes = {
  adornmentPosition: PropTypes.string,
  allowKeyboardControl: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.object,
  disableOpenOnEnter: PropTypes.bool,
  disablePast: PropTypes.bool,
  emptyLabel: PropTypes.string,
  format: PropTypes.string,
  getValue: PropTypes.func,
  initialFocusedDate: PropTypes.string,
  InputAdornmentProps: PropTypes.object,
  invalidDateMessage: PropTypes.node,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  keyboardIcon: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  locale: PropTypes.string,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  onInputChange: PropTypes.func,
  openToYearSelection: PropTypes.bool,
  rightArrowIcon: PropTypes.node,
  showTodayButton: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  TextFieldComponent: PropTypes.string,
  theme: PropTypes.object,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  valueDefault: PropTypes.instanceOf(Date)
};

DatePicker.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: () => {}
};

export default DatePicker;
export { DatePicker as MDBDatePicker };
