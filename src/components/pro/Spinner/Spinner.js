import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Spinner = props => {
  const theChosenColorSpinner = spinnerClasses => {
    if (props.multicolor) {
      const theSpinnerItself = (
        <div>
          <div className='spinner-layer spinner-blue'>
            <div className='circle-clipper left'>
              <div className='circle' />
            </div>
            <div className='gap-patch'>
              <div className='circle' />
            </div>
            <div className='circle-clipper right'>
              <div className='circle' />
            </div>
          </div>

          <div className='spinner-layer spinner-red'>
            <div className='circle-clipper left'>
              <div className='circle' />
            </div>
            <div className='gap-patch'>
              <div className='circle' />
            </div>
            <div className='circle-clipper right'>
              <div className='circle' />
            </div>
          </div>

          <div className='spinner-layer spinner-yellow'>
            <div className='circle-clipper left'>
              <div className='circle' />
            </div>
            <div className='gap-patch'>
              <div className='circle' />
            </div>
            <div className='circle-clipper right'>
              <div className='circle' />
            </div>
          </div>

          <div className='spinner-layer spinner-green'>
            <div className='circle-clipper left'>
              <div className='circle' />
            </div>
            <div className='gap-patch'>
              <div className='circle' />
            </div>
            <div className='circle-clipper right'>
              <div className='circle' />
            </div>
          </div>
        </div>
      );
      return theSpinnerItself;
    }
    const theSpinnerItself = (
      <div className={spinnerClasses}>
        <div className='circle-clipper left'>
          <div className='circle' />
        </div>
        <div className='gap-patch'>
          <div className='circle' />
        </div>
        <div className='circle-clipper right'>
          <div className='circle' />
        </div>
      </div>
    );
    return theSpinnerItself;
  };

  const { className, big, small, red, green, yellow, crazy } = props;

  const wrapperClasses = classNames(
    'preloader-wrapper',
    'active',
    big ? 'big' : false,
    small ? 'small' : false,
    className
  );

  const spinnerClasses = classNames(
    'spinner-layer',
    red ? 'spinner-red-only' : false,
    green ? 'spinner-green-only' : false,
    yellow ? 'spinner-yellow-only' : 'spinner-blue-only',
    className
  );

  if (crazy) {
    return (
      <div className={wrapperClasses}>
        <div className={wrapperClasses}>
          <div className={wrapperClasses}>
            <div className={wrapperClasses}>
              {theChosenColorSpinner(spinnerClasses)}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className={wrapperClasses}>
      {theChosenColorSpinner(spinnerClasses)}
    </div>
  );
};

Spinner.propTypes = {
  big: PropTypes.bool,
  className: PropTypes.string,
  crazy: PropTypes.bool,
  green: PropTypes.bool,
  multicolor: PropTypes.bool,
  red: PropTypes.bool,
  small: PropTypes.bool,
  yellow: PropTypes.bool
};

Spinner.defaultProps = {
  tag: 'div'
};

export default Spinner;
export { Spinner as MDBSpinner };
