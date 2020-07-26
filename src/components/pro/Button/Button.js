import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import ButtonFree from '../../Button';

const Button = ({
  children,
  className,
  color,
  flat,
  floating,
  gradient,
  outline,
  rounded,
  ...attributes
}) => {
  const classes = classNames(
    flat
      ? 'btn-flat'
      : gradient
      ? `${gradient}-gradient`
      : `btn${outline ? '-outline' : ''}-${color}`,
    {
      'btn-floating': floating,
      'btn-rounded': rounded
    },
    className
  );

  return (
    <ButtonFree
      {...attributes}
      className={classes}
      color=''
      flat={flat}
      rounded={rounded}
    >
      {children}
    </ButtonFree>
  );
};

Button.propTypes = {
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool
};

Button.defaultProps = {
  color: 'default'
};

export default Button;
export { Button as MDBBtn };
