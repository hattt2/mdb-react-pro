import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ScrollBox = props => {
  const { className, children, ...attributes } = props;

  const classes = classNames('scroll-box', className);

  return (
    <div {...attributes} className={classes}>
      {children}
    </div>
  );
};

ScrollBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

export default ScrollBox;
export { ScrollBox as MDBScrollspyBox };
