import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Fa from '../../Fa';
import './Breadcrumb.css';

const BreadcrumbItem = props => {
  const {
    active,
    appendIcon,
    children,
    className,
    bold,
    icon,
    iconBrand,
    iconClassName,
    iconLight,
    iconRegular,
    iconSize,
    ...attributes
  } = props;

  const classes = classNames(
    active ? 'active' : false,
    icon && 'bc-icons',
    'breadcrumb-item',
    className
  );

  const iconClasses = classNames(appendIcon ? 'mx-2' : 'mr-2', iconClassName);

  const WithBold = ({ children }) =>
    bold ? <strong>{children}</strong> : children;

  const WithIcon = () => {
    if (icon) {
      return (
        <>
          {appendIcon && children}
          <Fa
            brand={iconBrand}
            className={iconClasses}
            icon={icon}
            light={iconLight}
            regular={iconRegular}
            size={iconSize}
          />
          {!appendIcon && children}
        </>
      );
    }
    return children;
  };

  return (
    <li data-test='breadcrumb-item' {...attributes} className={classes}>
      <WithBold>
        <WithIcon />
      </WithBold>
    </li>
  );
};

BreadcrumbItem.propTypes = {
  active: PropTypes.bool,
  appendIcon: PropTypes.bool,
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string
};

BreadcrumbItem.defaultProps = {
  active: false,
  appendIcon: false,
  className: '',
  bold: false,
  icon: '',
  iconBrand: false,
  iconClassName: '',
  iconLight: false,
  iconRegular: false,
  iconSize: ''
};

export default BreadcrumbItem;
export { BreadcrumbItem as MDBBreadcrumbItem };
