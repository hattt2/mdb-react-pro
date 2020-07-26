import React from 'react';
import classNames from 'classnames';
import Tooltip from '../../Popper';
import Button from '../../Button';

const Step = props => {
  const {
    brand,
    duotone,
    fab,
    fad,
    fal,
    far,
    form,
    icon,
    light,
    regular,
    stepName,
    tag: Tag,
    vertical
  } = props;

  const iconPrefix =
    regular || far
      ? 'far'
      : light || fal
      ? 'fal'
      : duotone || fad
      ? 'fad'
      : brand || fab
      ? 'fab'
      : 'fa';

  const iconClass = classNames(`${iconPrefix  } fa-${  icon}`, 'Ripple-parent');

  const stepClass = classNames(
    form
      ? 'steps-step'
      : icon && vertical
      ? 'steps-step-3'
      : icon && !vertical
      ? 'steps-step-2'
      : null,
    props.className
  );

  let step;
  if (form) {
    step = <Tag className={stepClass}>{props.children}</Tag>;
  } else if (icon && !vertical) {
    step = (
      <Tag className={stepClass} onClick={props.onClick}>
        <Tooltip placement='top'>
          <Button className='btn-circle-2 btn-blue-grey'>
            <i className={iconClass} />
          </Button>
          <div>{stepName}</div>
        </Tooltip>
      </Tag>
    );
  } else if (icon && vertical) {
    step = (
      <Tag className={stepClass} onClick={props.onClick}>
        <Tooltip placement='top'>
          <Button className='btn-circle-3 btn-blue-grey'>
            <i className={iconClass} />
          </Button>
          <div>{stepName}</div>
        </Tooltip>
      </Tag>
    );
  } else {
    step = <li className={stepClass}>{props.children}</li>;
  }

  return step;
};

Step.defaultProps = {
  form: false,
  iconPrefix: 'fas',
  tag: 'div',
  vertical: false
};

export default Step;
export { Step as MDBStep };
