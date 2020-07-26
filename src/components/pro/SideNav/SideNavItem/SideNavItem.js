import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../../../Waves';

const SideNavItem = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    const { disabled, onClick } = props;
    if (!disabled) {
      // Waves - Get Cursor Position
      const cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(cursorPos);
      // do the passed in callback:
      if (onClick) {
        onClick(e);
      }
      e.stopPropagation();
    }
  };

  const {
    children,
    className,
    href,
    innerRef,
    tag: Tag,
    ...attributes
  } = props;

  const classes = classNames('Ripple-parent', className);

  return (
    <Tag
      className={classes}
      ref={innerRef}
      onClick={handleClick}
      {...attributes}
    >
      <a className={classes} href={href}>
        {children}
        <Waves cursorPos={cursorPos} />
      </a>
    </Tag>
  );
};

SideNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.string
};

SideNavItem.defaultProps = {
  tag: 'li'
};

export default SideNavItem;
export { SideNavItem as MDBSideNavItem };
