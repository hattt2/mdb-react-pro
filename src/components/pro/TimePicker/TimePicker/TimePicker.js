import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../clock.css';
import TimePickerDisplay from '../TimePickerDisplay';
import TimePickerClock from '../TimePickerClock';
import TimePickerAmPmBlock from '../TimePickerAmPmBlock';
import TimePickerFooter from '../TimePickerFooter';

const propTypes = {
  id: PropTypes.string.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  cancelable: PropTypes.bool,
  cancelText: PropTypes.string,
  clearable: PropTypes.bool,
  clearText: PropTypes.string,
  closeOnCancel: PropTypes.bool,
  color: PropTypes.string,
  dayTime: PropTypes.string,
  doneText: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  minutes: PropTypes.number,
  placeholder: PropTypes.string,
  startFromInner: PropTypes.bool
};

const defaultProps = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  dayTime: 'am',
  doneText: 'Done',
  getValue: () => {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};

class TimePicker extends Component {
  state = {
    allowedValues: [],
    computedHours: '',
    computedMinutes: '',
    initialDayTime: this.props.dayTime,
    initialHours: this.props.hours,
    initialMinutes: this.props.minutes,
    pickerDialogOpen: false,
    unitsMode: 'h',
    value: ''
  };

  componentDidMount() {
    const { initialHours, initialMinutes } = this.state;
    this.setState(
      {
        computedHours: this.computeTimeNumber(initialHours),
        computedMinutes: this.computeTimeNumber(initialMinutes)
      },
      () => this.setInputText()
    );
  }

  componentDidUpdate(prevProps, prevState) {
    const { initialHours, initialMinutes, value } = this.state;
    const { hours, minutes, getValue, dayTime } = this.props;

    if (prevState.initialMinutes !== initialMinutes) {
      this.setState({
        computedMinutes: this.computeTimeNumber(initialMinutes)
      });
    }

    if (prevState.initialHours !== initialHours) {
      this.setState({
        computedHours: this.computeTimeNumber(initialHours)
      });
    }

    if (prevState.value !== value) {
      getValue(value);
    }

    if (prevProps.hours !== hours) {
      this.setState(
        {
          computedHours: this.computeTimeNumber(hours),
          initialHours: hours
        },
        () => {
          this.setInputText();
        }
      );
    }

    if (prevProps.minutes !== minutes) {
      this.setState(
        {
          computedMinutes: this.computeTimeNumber(minutes),
          initialMinutes: minutes
        },
        () => {
          this.setInputText();
        }
      );
    }

    if (prevProps.dayTime !== dayTime) {
      this.setState(
        {
          initialDayTime: dayTime
        },
        () => {
          this.setInputText();
        }
      );
    }
  }

  setInputText = () => {
    let value = '';

    const {
      initialHours,
      initialMinutes,
      initialDayTime,
      computedHours,
      computedMinutes
    } = this.state;

    const { hoursFormat } = this.props;
    if (
      initialHours !== null &&
      initialMinutes !== null &&
      initialHours < 25 &&
      initialHours >= 0 &&
      initialMinutes < 60 &&
      initialMinutes >= 0
    ) {
      if (hoursFormat === 12) {
        if (initialHours > 12 && initialHours < 24) {
          value = `${computedHours - 12}:${computedMinutes}PM`;
        } else if (initialHours === 24 || initialHours === 0) {
          value = `${parseInt(computedHours) + 12}:${computedMinutes}AM`;
        } else {
          value = `${computedHours}:${computedMinutes}${initialDayTime.toUpperCase()}`;
        }
      } else {
        value = `${computedHours}:${computedMinutes}`;
      }
    }

    this.setState({
      value,
      unitsMode: 'h'
    });
  };

  computeTimeNumber = number => {
    const { unitsMode } = this.state;
    if (number !== null) {
      number = unitsMode === 'h' && number === 24 ? 0 : number;
      return number < 10 ? `0${number.toString()}` : `${number.toString()}`;
    }

    return '';
  };

  handlePickerDialogOpen = () => {
    const { pickerDialogOpen } = this.state;
    return this.setState({ pickerDialogOpen: !pickerDialogOpen });
  };

  handleModeChange = unitsMode => this.setState({ unitsMode });

  handleDayTimeChange = initialDayTime => this.setState({ initialDayTime });

  handleMinutesChange = initialMinutes => this.setState({ initialMinutes });

  handleHoursChange = initialHours => this.setState({ initialHours });

  handleBackdropClick = e => {
    if (e.target.classList.value === 'picker__holder') {
      this.handlePickerDialogOpen();
    }
  };

  handleDoneClick = () => {
    this.setInputText();
    this.handlePickerDialogOpen();
  };

  handleClearClick = () => {
    this.handleHoursChange(null);
    this.handleMinutesChange(null);
    this.handleModeChange('h');
    this.handleDayTimeChange('am');
  };

  handleCancelClick = () => {
    const { hours, minutes, closeOnCancel } = this.props;
    this.handleHoursChange(hours);
    this.handleMinutesChange(minutes);
    this.handleModeChange('h');
    this.handleDayTimeChange('am');

    if (closeOnCancel) {
      this.handlePickerDialogOpen();
    }
  };

  render() {
    const {
      computedHours,
      computedMinutes,
      initialDayTime,
      initialHours,
      initialMinutes,
      pickerDialogOpen,
      unitsMode,
      value
    } = this.state;

    const {
      allowedValues,
      autoSwitch,
      cancelable,
      cancelText,
      clearable,
      clearText,
      color,
      doneText,
      hoursFormat,
      id,
      label,
      placeholder,
      startFromInner
    } = this.props;

    const inputClasses = classNames(
      'form-control',
      'timepicker',
      pickerDialogOpen && 'picker__input picker__input--active'
    );

    const clockClasses = classNames(
      'clockpicker',
      'picker',
      pickerDialogOpen && 'picker--opened'
    );

    const hoursClasses = classNames(
      'clockpicker-hours',
      unitsMode !== 'h' && 'clockpicker-dial-out'
    );

    const minutesClasses = classNames(
      'clockpicker-minutes',
      unitsMode !== 'm' && 'clockpicker-dial-out'
    );

    return (
      <div className='md-form'>
        <input
          type='text'
          placeholder={placeholder}
          id={id}
          className={inputClasses}
          value={value}
          onClick={this.handlePickerDialogOpen}
          readOnly
        />
        <label htmlFor={id} className='active'>
          {label}
        </label>

        {pickerDialogOpen && (
          <div className={clockClasses}>
            <div className='picker__holder' onClick={this.handleBackdropClick}>
              <div className='picker__frame'>
                <div className='picker__wrap'>
                  <div className='picker__box'>
                    <TimePickerDisplay
                      color={color}
                      hours={computedHours}
                      minutes={computedMinutes}
                      dayTime={initialDayTime}
                      unitsMode={unitsMode}
                      handleModeChange={this.handleModeChange}
                      hoursFormat={hoursFormat}
                    />
                    <div className='picker__calendar-container'>
                      <div className='clockpicker-plate'>
                        {unitsMode === 'h' ? (
                          <TimePickerClock
                            allowedValues={allowedValues}
                            autoSwitch={autoSwitch}
                            className={hoursClasses}
                            color={color}
                            double={hoursFormat === 24}
                            handleChange={this.handleHoursChange}
                            handleModeChange={this.handleModeChange}
                            min={1}
                            max={hoursFormat}
                            step={1}
                            rotate={30}
                            startFromInner={startFromInner}
                            value={initialHours}
                          />
                        ) : (
                          <TimePickerClock
                            className={minutesClasses}
                            color={color}
                            handleChange={this.handleMinutesChange}
                            min={0}
                            max={59}
                            step={5}
                            rotate={0}
                            startFromInner={startFromInner}
                            value={initialMinutes}
                          />
                        )}
                      </div>
                      {hoursFormat === 12 && (
                        <TimePickerAmPmBlock
                          color={color}
                          dayTime={initialDayTime}
                          handleDayTimeChange={this.handleDayTimeChange}
                        />
                      )}
                    </div>
                    <TimePickerFooter
                      cancelText={cancelText}
                      clearText={clearText}
                      doneText={doneText}
                      cancelable={cancelable}
                      clearable={clearable}
                      handleCancelClick={this.handleCancelClick}
                      handleClearClick={this.handleClearClick}
                      handleDoneClick={this.handleDoneClick}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}

TimePicker.propTypes = propTypes;
TimePicker.defaultProps = defaultProps;

export default TimePicker;
export { TimePicker as MDBTimePicker };
