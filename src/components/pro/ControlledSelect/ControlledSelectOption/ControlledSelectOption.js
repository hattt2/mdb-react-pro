import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ControlledSelectOption = ({
  checked,
  disabled,
  icon,
  multiple,
  selectOption,
  text,
  value,
  separator,
  isFocused,
  focusShadow,
  focusBackgroundColor,
  selectAllClassName
}) => {
  const classes = classNames(
    (disabled || separator) && 'disabled',
    separator && 'optgroup',
    checked && 'active'
  );
  const spanClasses = classNames(
    'filtrable',
    selectAllClassName && selectAllClassName
  );
  const focusedStyles = {
    backgroundColor: isFocused ? focusBackgroundColor : null,
    boxShadow: isFocused ? focusShadow : null
  };

  return (
    <li
      data-test='controlled-select-option'
      data-multiple={multiple}
      className={classes}
      onClick={() => selectOption(value)}
      style={focusedStyles}
    >
      {icon && <img src={icon} alt='' className='rounded-circle' />}
      <span data-multiple={multiple} className={spanClasses}>
        {multiple && (
          <>
            <input
              type='checkbox'
              value={value}
              className='form-check-input'
              checked={checked}
              disabled={disabled}
              onChange={() => {}}
            />
            {!separator && (
              <label style={{ height: '10px' }} data-multiple={multiple} />
            )}
          </>
        )}
        {text || value}
      </span>
    </li>
  );
};

ControlledSelectOption.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  focusBackgroundColor: PropTypes.string,
  focusShadow: PropTypes.string,
  icon: PropTypes.string,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
  selectAllClassName: PropTypes.string,
  selectOption: PropTypes.func,
  separator: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.string
};

ControlledSelectOption.defaultProps = {
  checked: false,
  disabled: false,
  focusShadow: 'inset 0px -17px 15px -16px rgba(0, 0, 0, 0.35)',
  focusBackgroundColor: '#eee',
  icon: '',
  isFocused: false,
  multiple: false,
  separator: false
};

export default ControlledSelectOption;
