import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import InputFree from '../../Input';

class Input extends React.Component {
  state = {
    character: 0,
    characterActive: false,
    characterMax: this.props.counter
  };

  handleChange = e => {
    const { length } = e.target.value;
    const { onChange, getCounter } = this.props;
    onChange && onChange(e);
    getCounter && getCounter(length);
    this.setState({ character: length });
  };

  handleBlur = e => {
    const { onBlur } = this.props;
    onBlur && onBlur(e);
    this.setState({ characterActive: false });
  };

  handleFocus = e => {
    const { onFocus } = this.props;

    onFocus && onFocus(e);
    this.setState({
      character: e.target.value.length,
      characterActive: true
    });
  };

  render() {
    const {
      children,
      className,
      counter,
      getCounter,
      onChange,
      ...attributes
    } = this.props;
    const { character, characterActive, characterMax } = this.state;
    const typeCounter = typeof characterMax === 'number';
    const classes = classNames(
      className,
      typeCounter && character >= characterMax && 'invalid'
    );
    const styles = { float: 'right', fontSize: '12px', height: '1px' };

    return (
      <InputFree
        {...attributes}
        onChange={this.handleChange}
        onBlur={this.handleBlur}
        onFocus={this.handleFocus}
        className={classes}
      >
        {counter && characterActive && (
          <span className='character-counter' style={styles}>
            {character}
            {typeCounter && `/${characterMax}`}
          </span>
        )}
        {children}
      </InputFree>
    );
  }
}

Input.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  getCounter: PropTypes.func
};

Input.defaultProps = {
  counter: false,
  getCounter: () => {}
};

export default Input;
export { Input as MDBInput };
