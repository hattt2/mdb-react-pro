import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-scroll';
import Waves from '../../Waves';

const SmoothScroll = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    if (!props.disabled) {
      e.stopPropagation();
      // Waves - Get Cursor Position
      const cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
    }
  };

  const {
    children,
    className,
    disabled,
    active,
    to,
    spy,
    smooth,
    offset,
    duration,
    block,
    color,
    outline,
    size,
    rounded,
    gradient,
    floating,
    flat,
    social,
    btn,
    fixed,
    bottom,
    right,
    top,
    left,
    ...attributes
  } = props;

  const classes = classNames(
    'nav-link',
    disabled ? 'disabled' : 'Ripple-parent',
    active && 'active',
    (btn || floating) && 'btn',
    floating && 'btn-floating',
    flat
      ? 'btn-flat'
      : gradient
      ? `${gradient}-gradient`
      : `btn${outline ? '-outline' : ''}-${color}`,
    size ? `btn-${size}` : false,
    rounded ? 'btn-rounded' : false,
    block ? 'btn-block' : false,
    social ? `btn-${social}` : false,
    'Ripple-parent',
    className
  );

  const fixedStyles = {
    position: 'fixed',
    top: top ? `${top}px` : null,
    bottom: bottom ? `${bottom}px` : !top ? '45px' : null,
    left: left ? `${left}px` : null,
    right: right ? `${right}px` : !left ? '24px' : null
  };

  return (
    <Link
      className={classes}
      onMouseUp={handleClick}
      onTouchStart={handleClick}
      to={to}
      spy={spy}
      smooth={smooth}
      offset={offset}
      duration={duration}
      style={fixed ? fixedStyles : null}
      {...attributes}
    >
      {children}
      {disabled ? false : <Waves cursorPos={cursorPos} />}
    </Link>
  );
};

SmoothScroll.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  bottom: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  fixed: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  left: PropTypes.string,
  offset: PropTypes.number,
  outline: PropTypes.bool,
  right: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  smooth: PropTypes.bool,
  social: PropTypes.string,
  spy: PropTypes.bool,
  top: PropTypes.string
};

SmoothScroll.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  duration: 500,
  offset: -70,
  smooth: true,
  spy: true
};

export default SmoothScroll;
export { SmoothScroll as MDBSmoothScroll };
