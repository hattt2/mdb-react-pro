import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../../Fa';

const MDBStreak = ({
  children,
  by,
  byClass,
  wrapperClass,
  size,
  quoteClass,
  photo,
  overlayClass
}) => {
  const byClasses = classNames('text-center', 'font-italic', 'mb-0', byClass);

  const wrapperClasses = classNames(
    'streak',
    photo && 'streak-photo',
    size && `streak-${size}`,
    wrapperClass
  );

  const quoteClasses = classNames('h2-responsive', quoteClass);

  const overlayClasses = classNames('flex-center', overlayClass);

  return (
    <div
      className={wrapperClasses}
      style={{
        backgroundImage: `url("${photo}")`,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className={overlayClasses}>
        <ul className='mb-0 list-unstyled'>
          <li>
            <h2 className={quoteClasses}>
              <Fa icon='quote-left' /> {children} <Fa icon='quote-right' />
            </h2>
          </li>
          <li className='mb-0'>
            <h5 className={byClasses}>~ {by}</h5>
          </li>
        </ul>
      </div>
    </div>
  );
};

MDBStreak.propTypes = {
  by: PropTypes.string,
  byClass: PropTypes.string,
  overlayClass: PropTypes.string,
  photo: PropTypes.string,
  quoteClass: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'md']),
  wrapperClass: PropTypes.string
};

MDBStreak.defaultProps = {
  wrapperClass: 'grey lighten-3'
};

export default MDBStreak;
