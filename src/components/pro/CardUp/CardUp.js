import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const CardUp = props => {
  const { className, tag: Tag, color, gradient, ...attributes } = props;

  const classes = classNames(
    'card-up',
    color && `${color}-color`,
    gradient && `${gradient}-gradient`,
    className
  );

  return <Tag data-test='card-up' {...attributes} className={classes} />;
};

CardUp.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

CardUp.defaultProps = {
  tag: 'div'
};

export default CardUp;
export { CardUp as MDBCardUp };
