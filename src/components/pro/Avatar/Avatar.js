import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Avatar = props => {
  const { className, tag: Tag, round, circle, ...attributes } = props;

  const classes = classNames(
    'avatar',
    round && 'rounded',
    circle && 'rounded-circle',
    className
  );

  return <Tag data-test='avatar' {...attributes} className={classes} />;
};

Avatar.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
  round: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

Avatar.defaultProps = {
  tag: 'div',
  round: false,
  circle: false
};

export default Avatar;
export { Avatar as MDBAvatar };
