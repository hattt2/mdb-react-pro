import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Collapse from '../../../Collapse';
import Waves from '../../../Waves';
import Fa from '../../../Fa';
import SideNavContext from '../SideNavContext';

class SideNavCat extends React.Component {
  state = {
    cursorPos: {},
    isOpenIDState: ''
  };

  static displayName = 'SideNavCat';

  componentDidUpdate(prevProps) {
    const { isOpen, id } = this.props;
    if (prevProps.isOpen !== isOpen) {
      this.setState({
        isOpenIDState: isOpen ? id : ''
      });
    }
  }

  handleClick = (e, id) => {
    const { disabled, onClick } = this.props;
    if (!disabled) {
      // Waves - Get Cursor Position
      const cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({ cursorPos });
      // do the passed in callback:
      if (onClick) {
        this.props.onClick(id);
      }
      e.stopPropagation();
    }
  };

  render() {
    const {
      tag: Tag,
      children,
      className,
      name,
      icon,
      iconBrand,
      iconLight,
      iconRegular,
      iconSize,
      onClick,
      disabled,
      isOpen,
      isOpenID,
      id,
      ...attributes
    } = this.props;

    const { cursorPos, isOpenIDState } = this.state;

    const classes = classNames(
      'collapsible-header',
      'Ripple-parent',
      'arrow-r',
      isOpen && 'active',
      disabled && 'disabled',
      className
    );

    return (
      <SideNavContext.Consumer>
        {({ slim }) => {
          const iconClass = ['mr-2'];
          slim && iconClass.push('v-slim-icon');

          return (
            <Tag>
              <a
                className={classes}
                onClick={e => this.handleClick(e, id)}
                {...attributes}
              >
                {icon && (
                  <Fa
                    icon={icon}
                    brand={iconBrand}
                    light={iconLight}
                    regular={iconRegular}
                    size={iconSize}
                    className={iconClass.join(' ')}
                  />
                )}
                {name}
                <Fa icon='angle-down' className='rotate-icon' />
                <Waves cursorPos={cursorPos} />
              </a>
              <Collapse id={id} isOpen={isOpenIDState}>
                <div className='collapsible-body' style={{ display: 'block' }}>
                  <ul>{children}</ul>
                </div>
              </Collapse>
            </Tag>
          );
        }}
      </SideNavContext.Consumer>
    );
  }
}

SideNavCat.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  isOpen: PropTypes.bool,
  isOpenID: PropTypes.string,
  name: PropTypes.string,
  onClick: PropTypes.func,
  tag: PropTypes.string
};

SideNavCat.defaultProps = {
  className: '',
  disabled: false,
  icon: '',
  iconBrand: false,
  iconLight: false,
  iconRegular: false,
  iconSize: '',
  id: '',
  isOpen: false,
  isOpenID: '',
  name: '',
  onClick: () => {},
  tag: 'li'
};

export default SideNavCat;
export { SideNavCat as MDBSideNavCat };
