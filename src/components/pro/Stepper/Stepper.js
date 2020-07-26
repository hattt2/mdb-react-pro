import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './Stepper.css';

const Stepper = props => {
  const { vertical, form, icon } = props;

  const stepperClass = classNames(
    form
      ? 'steps-form'
      : icon && vertical
      ? 'steps-form-3'
      : icon && !vertical
      ? 'steps-form-2'
      : 'stepper',
    vertical && !icon
      ? 'stepper-vertical'
      : form || icon
      ? null
      : 'stepper-horizontal',
    props.className
  );

  const wrapperFix = classNames(
    form
      ? 'steps-row'
      : icon && vertical
      ? 'steps-row-3 d-flex justify-content-between'
      : icon && !vertical
      ? 'steps-row-2 d-flex justify-content-between'
      : null
  );

  // wrapper shim in case props.form
  let stepper;
  if (form || icon) {
    stepper = (
      <div className={stepperClass}>
        <div className={wrapperFix}>{props.children}</div>
      </div>
    );
  } else {
    stepper = <ul className={stepperClass}>{props.children}</ul>;
  }

  return stepper;
};

Stepper.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  form: PropTypes.bool,
  icon: PropTypes.bool,
  vertical: PropTypes.bool
};

Stepper.defaultProps = {
  form: false
};

export default Stepper;
export { Stepper as MDBStepper };
