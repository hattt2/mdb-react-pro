import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function RotatingCard({
  children,
  className,
  flipped,
  innerTag: InnerTag,
  tag: Tag,
  ...attributes
}) {
  const classes = classNames(
    'card-rotating effect__click',
    flipped && 'flipped',
    className
  );

  return (
    <Tag data-test='flipping-card' {...attributes} className='card-wrapper'>
      <InnerTag className={classes}>{children}</InnerTag>
    </Tag>
  );
}

RotatingCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flipped: PropTypes.bool,
  innerTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};

RotatingCard.defaultProps = {
  tag: 'div',
  innerTag: 'div',
  flipped: false
};

export default RotatingCard;
export { RotatingCard as MDBRotatingCard };
