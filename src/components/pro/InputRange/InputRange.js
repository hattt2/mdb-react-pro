import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './InputRange.css';

class InputRange extends React.Component {
  state = {
    value: false,
    leftPosition: false,
    thumbActive: false,
    thumbTransform: 0,
    thumbTop: '0px',
    input: 'input',
    oneStep: '',
    windowX: '',
    windowY: ''
  };
  inputRef = React.createRef();

  updateDimensions() {
    let input = this.inputRef.current;
    let inputWidth = input.offsetWidth - 15.5;
    const { max, min } = this.props;
    const { value, windowX, windowY } = this.state;
    const oneStep = inputWidth / (max - min);
    if (windowX !== window.innerWidth || windowY !== window.innerHeight) {
      this.setState({
        windowX: window.innerWidth,
        windowY: window.innerHeight,
        leftPosition: oneStep * value - oneStep * min + 1,
        oneStep
      });
    }
  }

  componentDidMount = () => {
    const value = this.props.value;
    this.setState({ value }, () => this.updateDimensions());

    window.addEventListener('resize', this.updateDimensions.bind(this));
  };

  componentDidUpdate = prevProps => {
    const { getValue, min, value } = this.props;
    const { oneStep } = this.state;

    if (prevProps.value !== value) {
      this.setState({
        value,
        leftPosition: oneStep * value - oneStep * min + 1
      });
      getValue && getValue(value);
    }
  };

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateDimensions.bind(this));
  }

  rangeChange = e => {
    const value = parseInt(e.target.value);
    const { getValue, min } = this.props;
    const { oneStep } = this.state;

    this.setState({
      value,
      leftPosition: oneStep * value - oneStep * min + 1
    });

    getValue && getValue(value);
  };

  rangeFocus = () => {
    this.setState({
      thumbActive: true,
      thumbTop: '-27px',
      thumbTransform: 1
    });
  };

  rangeMouseLeave = () => {
    const input = this.inputRef.current;
    input.blur();
    this.setState({
      thumbActive: false,

      thumbTop: '7px',
      thumbTransform: 0
    });
  };

  render() {
    const {
      thumbActive,
      value,
      leftPosition,
      thumbHeight,
      thumbWidth,
      thumbTop,
      thumbTransform
    } = this.state;
    const { className, formClassName, min, max, step, tag: Tag } = this.props;
    const inputClass = classNames(className);
    const formClass = classNames('range-field', formClassName);
    const thumbClass = classNames('thumb', thumbActive ? 'active' : false);

    return (
      <Tag className={formClass} data-test='input-range'>
        <input
          ref={this.inputRef}
          className={inputClass}
          min={min}
          max={max}
          step={step}
          value={value}
          type='range'
          onChange={this.rangeChange}
          onFocus={this.rangeFocus}
          onMouseUp={this.rangeMouseLeave}
        />
        <span
          className={thumbClass}
          style={{
            left: leftPosition,
            height: thumbHeight,
            width: thumbWidth,
            top: thumbTop,
            transform: `rotate(-45deg) scale(${thumbTransform})`
          }}
        >
          <span className='value'>{value}</span>
        </span>
      </Tag>
    );
  }
}

InputRange.propTypes = {
  className: PropTypes.string,
  formClassName: PropTypes.string,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  value: PropTypes.number
};

InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false,
  tag: 'div'
};

export default InputRange;
export { InputRange as MDBRangeInput };
