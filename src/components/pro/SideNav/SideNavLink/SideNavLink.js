import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { NavLink as Link } from 'react-router-dom';
import Waves from '../../../Waves';
import SideNavContext from '../SideNavContext';

class SideNavLink extends React.Component {
  state = {
    cursorPos: {}
  };

  handleClick = e => {
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
        onClick(e);
      }
      e.stopPropagation();
    }
  };

  render() {
    const {
      children,
      className,
      innerRef,
      shortcut,
      tag: Tag,
      to,
      topLevel,
      ...attributes
    } = this.props;
    const { cursorPos } = this.state;
    const classes = classNames(
      'Ripple-parent',
      topLevel && 'collapsible-header',
      className
    );

    const sideNavLink = (
      <SideNavContext.Consumer>
        {({ slim }) => {
          let shortcutVar;
          const { shortcut } = this.props;

          function calculateShortcut() {
            if (typeof children === 'string') {
              const wordsArray = children.toString().split(' ');

              if (wordsArray.length === 1) {
                return wordsArray[0].substr(0, 2).toUpperCase();
              }

              if (wordsArray.length >= 2) {
                const firstLetter = wordsArray[0].substr(0, 1);
                const secondLetter = wordsArray[1].substr(0, 1);
                return firstLetter.concat(secondLetter).toUpperCase();
              }
            }
            return children;
          }

          if (slim) {
            shortcutVar = shortcut || calculateShortcut();
          }

          return (
            <Link
              className={classes}
              ref={innerRef}
              onClick={this.handleClick}
              to={to}
              {...attributes}
            >
              {slim ? (
                <>
                  <span className='sv-slim'>{shortcutVar}</span>
                  <span className='sv-normal'>{children}</span>
                </>
              ) : (
                  <span className='sv-normal'>{children}</span>
                )}
              <Waves cursorPos={cursorPos} />
            </Link>
          );
        }}
      </SideNavContext.Consumer>
    );

    return topLevel ? <li> {sideNavLink}</li> : sideNavLink;
  }
}

SideNavLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  shortcut: PropTypes.string,
  tag: PropTypes.string,
  topLevel: PropTypes.bool
};

SideNavLink.defaultProps = {
  to: '#',
  topLevel: false
};

export default SideNavLink;
export { SideNavLink as MDBSideNavLink };
