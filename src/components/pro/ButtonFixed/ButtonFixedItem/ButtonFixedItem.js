import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../../../Fa';
import Waves from '../../../Waves';

class ButtonFixed extends React.Component {
  state = {
    cursorPos: {},
    buttonStyle: {
      transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)',
      opacity: '0'
    }
  };

  handleClick(e) {
    // Get Cursor Position
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos });
  }

  onClick = e => {
    const { disabled, onClick } = this.props;
    if (disabled) {
      e.preventDefault();
      return;
    }

    onClick && onClick();
  };

  render() {
    const {
      active,
      block,
      buttonStyle,
      className,
      color,
      disabled,
      flat,
      floating,
      gradient,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      innerRef,
      outline,
      role,
      rounded,
      size,
      type,
      ...attributes
    } = this.props;

    const classes = classNames(
      size && `btn-${size}`,
      'btn-floating',
      flat ? 'btn-flat' : gradient ? `${gradient}-gradient` : `${color}`,
      'Ripple-parent',
      className
    );
    const { cursorPos } = this.state;

    return (
      <li data-test='button-fixed-item'>
        <a
          {...attributes}
          style={buttonStyle}
          onClick={this.onClick}
          onMouseDown={this.handleClick.bind(this)}
          onTouchStart={this.handleClick.bind(this)}
          className={classes}
        >
          {icon && (
            <Fa
              icon={icon}
              size={iconSize}
              brand={iconBrand}
              light={iconLight}
              regular={iconRegular}
              className={iconClass}
            />
          )}
          {disabled ? (
            false
          ) : (
            <Waves cursorPos={cursorPos} outline={outline} flat={flat} />
          )}
        </a>
      </li>
    );
  }
}

ButtonFixed.defaultProps = {
  color: 'default'
};

ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  buttonStyle: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  role: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  type: PropTypes.string
};

export default ButtonFixed;
export { ButtonFixed as MDBBtnFixedItem };
