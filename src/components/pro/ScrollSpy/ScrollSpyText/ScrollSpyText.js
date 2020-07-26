import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ScrollSpyText = props => {
  const { className, children, scrollSpyRef, ...attributes } = props;

  const classes = classNames('scrollspy-example z-depth-1', className);

  return (
    <div {...attributes} ref={scrollSpyRef} className={classes}>
      {children}
    </div>
  );
};

ScrollSpyText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  scrollSpyRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

export default ScrollSpyText;
export { ScrollSpyText as MDBScrollspyText };
