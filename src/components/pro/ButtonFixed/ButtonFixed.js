import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../../Fa';
import Waves from '../../Waves';

class ButtonFixed extends React.Component {
  state = {
    cursorPos: {},
    ulDisplay: false
  };
  onClick = this.onClick;

  handleClick = e => {
    e.preventDefault();
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    this.setState({ cursorPos });
  };

  onClick = e => {
    const { disabled } = this.props;
    if (disabled) {
      e.preventDefault();
    }
  };

  toggleUl = isDisplay => {
    return this.setState({ ulDisplay: isDisplay });
  };

  render() {
    const {
      active,
      block,
      className,
      children,
      color,
      disabled,
      outline,
      size,
      rounded,
      gradient,
      floating,
      flat,
      role,
      type,
      icon,
      iconBrand,
      iconClass,
      iconLight,
      iconRegular,
      iconSize,
      innerRef,
      topSection,
      ...attributes
    } = this.props;

    const { ulDisplay, cursorPos } = this.state;

    const buttonFixedClasses = classNames(
      'fixed-action-btn',
      !!ulDisplay && 'active'
    );

    const classes = classNames(
      floating ? 'btn-floating' : 'btn',
      flat ? 'btn-flat' : gradient ? `${gradient}-gradient` : `${color}`,
      size ? `btn-${size}` : false,
      rounded ? 'btn-rounded' : false,
      block ? 'btn-block' : false,
      'Ripple-parent',
      className,
      { active, disabled }
    );

    return (
      <div
        {...attributes}
        className={buttonFixedClasses}
        data-test='button-fixed'
        onBlur={() => this.toggleUl(true)}
        onFocus={() => this.toggleUl(false)}
        onMouseOut={() => this.toggleUl(false)}
        onMouseOver={() => this.toggleUl(true)}
        ref={innerRef}
        style={{ bottom: '45px', right: '24px' }}
      >
        <a
          href={topSection ? topSection : '#!'}
          className={classes}
          onClick={this.onClick}
          onMouseDown={this.handleClick}
          onTouchStart={this.handleClick}
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
        {children && (
          <ul
            className={`list-unstyled ${classNames(!ulDisplay && 'disabled')}`}
          >
            {children}
          </ul>
        )}
      </div>
    );
  }
}

ButtonFixed.defaultProps = {
  color: 'default'
};

ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
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
  size: PropTypes.string,
  topSection: PropTypes.string,
  type: PropTypes.string
};

export default ButtonFixed;
export { ButtonFixed as MDBBtnFixed };
