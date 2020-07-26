import React, { Component } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import TimpiePickerClockHand from '../TimePickerClockHand';

const propTypes = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
  startFromInner: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  color: PropTypes.string,
  double: PropTypes.bool,
  handleModeChange: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.number
};

const defaultProps = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  double: false,
  handleModeChange: () => {},
  size: 270,
  value: 0
};

class TimePickerClock extends Component {
  state = {
    clockRadius: 135,
    degrees: 30,
    digitsInRound: 12,
    degreesPerUnit: 30,
    handAngle: 0,
    handScale: 1,
    isDragging: false,
    innerRadius: 120,
    outerRadius: 266,
    initialValue: 0
  };

  clockRef = React.createRef();

  componentDidMount() {
    this.buildComponentState();
  }

  componentDidUpdate(prevProps, prevState) {
    const { max, min, value } = this.props;
    const { initialValue } = this.state;
    if (
      prevProps.max !== max ||
      prevProps.min !== min ||
      initialValue !== value
    ) {
      this.buildComponentState();
    }
  }

  buildComponentState = () => {
    const { size, max, min, double, rotate, value } = this.props;
    const clockRadius = size / 2;
    const digitsAmount = max - min + 1;
    const digitsInRound = double ? digitsAmount / 2 : digitsAmount;
    const degreesPerUnit = 360 / digitsInRound;
    const outerRadius = clockRadius - 4;
    const innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40
    const degrees = (degreesPerUnit * Math.PI) / 180;
    const handAngle = rotate + degreesPerUnit * (value - min);

    this.setState(
      {
        clockRadius,
        degrees,
        degreesPerUnit,
        digitsInRound,
        handAngle,
        innerRadius,
        outerRadius,
        initialValue: value
      },
      () => this.setState({ handScale: this.getScale(value) })
    );
  };

  getScale = value => {
    const { double, startFromInner, min } = this.props;
    const { outerRadius, clockRadius, innerRadius, digitsInRound } = this.state;
    if (startFromInner && double) {
      return value - min >= digitsInRound
        ? outerRadius / clockRadius
        : innerRadius / clockRadius;
    }

    return value - min >= digitsInRound
      ? innerRadius / clockRadius
      : outerRadius / clockRadius;
  };

  getAngle = (center, p1) => {
    const value =
      2 *
      Math.atan2(p1.y - center.y - this.euclidean(center, p1), p1.x - center.x);
    return Math.abs((value * 180) / Math.PI);
  };

  getCoords = e => {
    const { width, top, left } = this.clockRef.current.getBoundingClientRect();
    const { clientX, clientY } = 'touches' in e ? e.touches[0] : e;
    const center = { x: width / 2, y: -width / 2 };
    const coords = { x: clientX - left, y: top - clientY };

    return { center, coords };
  };

  setPosition = value => {
    const { clockRadius, degrees } = this.state;
    const { rotate, min } = this.props;
    const radius = (clockRadius - 24) * this.getScale(value);
    const rotateRadians = (rotate * Math.PI) / 180;
    return {
      x: Math.round(Math.sin((value - min) * degrees + rotateRadians) * radius),
      y: Math.round(-Math.cos((value - min) * degrees + rotateRadians) * radius)
    };
  };

  isValueAllowed = value => {
    const { allowedValues, min, max } = this.props;

    return allowedValues.length
      ? allowedValues.find(item => item === value)
      : value >= min && value <= max;
  };

  isOnInner = (center, coords) => {
    const { double, startFromInner } = this.props;
    const centerDistance = this.euclidean(center, coords);
    const betweenRadiusDistance =
      (this.state.outerRadius + this.state.innerRadius) / 2 - 16;

    if (double) {
      return startFromInner
        ? centerDistance > betweenRadiusDistance
        : centerDistance < betweenRadiusDistance;
    }

    return false;
  };

  computeTimeNumber = number =>
    number < 10 ? `0${number.toString()}` : `${number.toString()}`;

  computeHandAngle = exactAngle => {
    const { max } = this.props;
    if (360 % max !== 0) {
      return exactAngle >= 360 - this.state.degreesPerUnit / 2 ? 0 : exactAngle;
    }

    return exactAngle <= this.state.degreesPerUnit / 2 ? 360 : exactAngle;
  };

  euclidean = (p0, p1) => {
    const dx = p1.x - p0.x;
    const dy = p1.y - p0.y;

    return Math.sqrt(dx * dx + dy * dy);
  };

  transformPosition = value => {
    const { x, y } = this.setPosition(value);
    return { transform: `translate(${x}px, ${y}px)` };
  };

  genClockDigits = () => {
    const children = [];
    const { max, min, step, double, startFromInner } = this.props;
    const { initialValue } = this.state;

    for (let value = min; value <= max; value += step) {
      const classes = classNames(
        'clockpicker-tick',
        value === initialValue && 'active',
        !this.isValueAllowed(value) && 'disabled'
      );

      children.push(
        <span
          className={classes}
          style={Object.assign(this.transformPosition(value), {
            fontSize: !double
              ? '140%'
              : startFromInner
              ? value <= 12
                ? '120%'
                : '100%'
              : value > 12
              ? '120%'
              : '100%'
          })}
          key={value}
          onMouseDown={e => this.onMouseDown(e, value)}
          onTouchStart={e => this.onMouseDown(e, value)}
        >
          {max > 24
            ? this.computeTimeNumber(value)
            : value === 24
            ? '00'
            : value}
        </span>
      );
    }

    return children;
  };

  onMouseDown = (e, value) => {
    e.preventDefault();
    this.setState({ isDragging: true });
    const { rotate, min } = this.props;
    const { degreesPerUnit, initialValue } = this.state;

    const handAngle = rotate + degreesPerUnit * (value - min);
    const handScale = this.getScale(value);

    if (initialValue !== value && this.isValueAllowed(value)) {
      this.updateValue(value, handAngle, handScale);
    }
  };

  onMouseUp = e => {
    e.preventDefault();
    const { isDragging } = this.state;
    const { autoSwitch, handleModeChange } = this.props;

    if (isDragging) {
      this.setState({ isDragging: false });

      if (autoSwitch) {
        return handleModeChange('m');
      }
    }
  };

  onMouseLeave = e => {
    e.preventDefault();
    const { isDragging } = this.state;
    if (isDragging) {
      this.setState({ isDragging: false });
    }
  };

  onDragMove = e => {
    e.preventDefault();
    const {
      isDragging,
      initialValue,
      degreesPerUnit,
      digitsInRound
    } = this.state;
    const { rotate, min } = this.props;
    if (!isDragging && e.type !== 'click') {return;}
    const { center, coords } = this.getCoords(e);
    const isOnInner = this.isOnInner(center, coords);
    const exactHandAngle = this.getAngle(center, coords);
    const computedHandAngle = this.computeHandAngle(exactHandAngle);

    const value =
      Math.round((computedHandAngle - rotate) / degreesPerUnit) +
      min +
      (isOnInner ? digitsInRound : 0);
    const handAngle = rotate + degreesPerUnit * (value - min);
    const handScale = this.getScale(value);

    if (initialValue !== value && this.isValueAllowed(value)) {
      this.updateValue(value, handAngle, handScale);
    }
  };

  updateValue = (value, handAngle, handScale) => {
    const { handleChange } = this.props;
    handleChange(value);
    this.setState({ value, handAngle, handScale });
  };

  render() {
    const { className, color, size, step } = this.props;
    const { handAngle, handScale, initialValue } = this.state;

    const classes = classNames(
      'time-picker-clock',
      'clockpicker-dial',
      className,
      initialValue === null && 'time-picker-clock--indeterminate'
    );

    return (
      <div
        className={classes}
        style={{
          height: `${size}px`,
          width: `${size}px`,
          visibility: 'visible'
        }}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseLeave={this.onMouseLeave}
        onTouchStart={this.onMouseDown}
        onTouchEnd={this.onMouseUp}
        onMouseMove={this.onDragMove}
        onTouchMove={this.onDragMove}
        ref={this.clockRef}
      >
        <TimpiePickerClockHand
          between={initialValue % step !== 0}
          color={color}
          angle={handAngle}
          scale={handScale}
        />
        {this.genClockDigits()}
      </div>
    );
  }
}

TimePickerClock.propTypes = propTypes;
TimePickerClock.defaultProps = defaultProps;

export default TimePickerClock;
