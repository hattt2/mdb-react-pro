import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Waves from '../../Waves';
import './Chip.css';
import Fa from '../../Fa';

const Chip = props => {
  const [cursorPos, setCursorPos] = useState({});

  const handleClick = e => {
    // Get Cursor Position
    e.stopPropagation();
    const cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  const handleCloseClick = e => {
    if (props.handleClose) {
      props.handleClose(e);
    }
  };

  const {
    alt,
    bgColor,
    children,
    className,
    close,
    gradient,
    handleClose,
    size,
    src,
    tag: Tag,
    text,
    waves,
    ...attributes
  } = props;

  const classes = classNames(
    'chip',
    size && `chip-${size}`,
    bgColor && bgColor,
    text && `${text}-text`,
    gradient && `${gradient}-gradient`,
    waves && 'Ripple-parent',
    className
  );

  return (
    <Tag
      data-test='chip'
      {...attributes}
      className={classes}
      onMouseDown={handleClick}
      onTouchStart={handleClick}
    >
      {src && <img src={src} alt={alt} />}
      {children}
      {waves && <Waves cursorPos={cursorPos} />}
      {close && (
        <Fa icon='times' className='close' onClick={handleCloseClick} />
      )}
    </Tag>
  );
};

Chip.propTypes = {
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  close: PropTypes.bool,
  gradient: PropTypes.string,
  handleClose: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string
};

Chip.defaultProps = {
  tag: 'div'
};

export default Chip;
export { Chip as MDBChip };
