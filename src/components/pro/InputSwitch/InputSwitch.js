import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

class InputSwitch extends React.Component {
  state = {
    value: false
  };
  handleChange = this.handleChange.bind(this);

  componentDidMount() {
    const { checked } = this.props;
    this.setState({ value: checked });
  }

  componentDidUpdate(prevProps, prevState) {
    const { checked } = this.props;
    const { value } = this.state;

    if (checked !== value) {
      this.setState({ value: checked });
    }
  }

  handleChange(event) {
    const { getValue, onChange } = this.props;
    const { value } = this.state;

    this.setState({ value: !value });
    getValue && getValue(event.target.checked);
    onChange && onChange(event);
  }

  render() {
    const {
      checked,
      className,
      disabled,
      getValue,
      labelLeft,
      labelRight,
      onChange,
      ...attributes
    } = this.props;
    const { value } = this.state;

    const classes = classNames('switch', className);
    return (
      <div {...attributes} className={classes} data-test='input-switch'>
        <label>
          {labelLeft}
          <input
            disabled={disabled}
            value={value}
            checked={value}
            onChange={this.handleChange}
            type='checkbox'
          />
          <span className='lever' />
          {labelRight}
        </label>
      </div>
    );
  }
}

InputSwitch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  labelLeft: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  labelRight: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]),
  onChange: PropTypes.func
};

InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: 'Off',
  labelRight: 'On'
};

export default InputSwitch;
export { InputSwitch as MDBSwitch };
