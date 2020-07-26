import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { CSSTransition } from 'react-transition-group';
import '../../Transitions.css';
import Waves from '../../Waves';
import ScrollBar from '../PerfectScrollbar';
import SideNavContext from './SideNavContext';

class SideNav extends React.Component {
  isOpen = () => {
    const { fixed, breakWidth, responsive, triggerOpening } = this.props;
    if (fixed) {
      if (window.innerWidth <= breakWidth) {
        return !responsive;
      }
      return true;
    }
    if (triggerOpening) {
      if (window.innerWidth > breakWidth) {
        return true;
      }
      return false;
    }
    return false;
  };

  state = {
    initiallyFixed: this.props.fixed,
    isFixed: !this.isOpen() ? false : this.props.fixed,
    isOpen: this.isOpen(),
    cursorPos: {},
    slimStart: this.props.slim,
    slimInitial: this.props.slim
  };

  sideNavRef = React.createRef();
  initialX = null;
  initialY = null;

  componentDidMount() {
    const { triggerOpening, responsive } = this.props;
    if (triggerOpening && !responsive) {
      throw new Error(
        'Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true'
      );
    }

    this.sideNavRef.current.addEventListener('touchstart', this.startTouch);
    this.sideNavRef.current.addEventListener('touchmove', this.moveTouch);
    window.addEventListener('resize', this.updatePredicate);
  }

  startTouch = e => {
    this.initialX = e.touches[0].clientX;
    this.initialY = e.touches[0].clientY;
  };

  moveTouch = e => {
    const { right } = this.props;
    if (this.initialX === null) {
      return;
    }

    if (this.initialY === null) {
      return;
    }

    const currentX = e.touches[0].clientX;
    const currentY = e.touches[0].clientY;

    const diffX = this.initialX - currentX;
    const diffY = this.initialY - currentY;

    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (diffX > 0) {
        !right && this.handleOverlayClick();
      } else {
        right && this.handleOverlayClick();
      }
    }

    this.initialX = null;
    this.initialY = null;

    e.preventDefault();
  };

  componentDidUpdate(prevProps) {
    const { triggerOpening } = this.props;
    const { isOpen } = this.state;

    if (prevProps.triggerOpening !== triggerOpening) {
      this.setState({
        isOpen: !isOpen
      });
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updatePredicate);
    this.sideNavRef.current.removeEventListener('touchstart', this.startTouch);
    this.sideNavRef.current.removeEventListener('touchmove', this.moveTouch);
  }

  updatePredicate = () => {
    const { hidden, responsive, breakWidth } = this.props;
    const { initiallyFixed } = this.state;
    if (!hidden && responsive) {
      this.setState({ isOpen: window.innerWidth > breakWidth });

      if (window.innerWidth > breakWidth) {
        this.setState({ isOpen: true, isFixed: initiallyFixed });
      } else {
        this.setState({
          isOpen: false,
          isFixed: false
        });
      }
    }
  };

  toggleSlim = () => () => {
    const { slimStart } = this.state;
    this.setState({ slimStart: !slimStart });

    const sidenav = ReactDOM.findDOMNode(this.sideNavRef.current);
    sidenav.classList.toggle('slim');
  };

  handleOverlayClick = () => {
    const { isFixed } = this.state;
    const { onOverlayClick } = this.props;

    if (isFixed) {return;}
    this.setState({
      isOpen: false
    });
    if (onOverlayClick) {
      onOverlayClick();
    }
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
    }
    e.stopPropagation();
  };

  render() {
    const {
      bg,
      breakWidth,
      children,
      className,
      hidden,
      href,
      logo,
      mask,
      onOverlayClick,
      right,
      triggerOpening,
      showOverlay,
      fixed,
      responsive,
      slim,
      tag: Tag,
      ...attributes
    } = this.props;

    const { isOpen, isFixed, slimInitial, cursorPos, slimStart } = this.state;

    const classes = classNames(
      'side-nav',
      'wide',
      right && 'right-aligned',
      slimInitial && 'slim',
      className
    );

    const overlay = (
      <div id='sidenav-overlay' onClick={this.handleOverlayClick} />
    );

    const sidenav = (
      <Tag
        {...attributes}
        ref={this.sideNavRef}
        className={classes}
        data-animate={isFixed ? false : undefined}
        style={bg ? { backgroundImage: `url(${bg}` } : undefined}
      >
        <ScrollBar option={{ suppressScrollX: true }}>
          <ul className='list-unstyled'>
            {logo && (
              <li>
                <div className='logo-wrapper'>
                  <a
                    href={href}
                    className='Ripple-parent'
                    onClick={this.handleClick}
                  >
                    <img
                      src={logo}
                      alt=''
                      className='img-fluid flex-center d-block'
                    />
                    <Waves cursorPos={cursorPos} />
                  </a>
                </div>
              </li>
            )}
            {children}
          </ul>
        </ScrollBar>
        {mask && <div className={`sidenav-bg ${mask}`} />}
      </Tag>
    );

    return (
      <SideNavContext.Provider
        value={{
          slimInitial,
          slim: slimStart,
          toggleSlim: this.toggleSlim,
          right
        }}
      >
        {isFixed ? (
          sidenav
        ) : (
          <CSSTransition
            appear={!isFixed}
            timeout={{ enter: 300, exit: 300 }}
            classNames={right ? 'right-side-slide' : 'side-slide'}
            in={isOpen}
          >
            {sidenav}
          </CSSTransition>
        )}
        {isFixed ? false : showOverlay && isOpen && overlay}
      </SideNavContext.Provider>
    );
  }
}

SideNav.propTypes = {
  bg: PropTypes.string,
  breakWidth: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  fixed: PropTypes.bool,
  hidden: PropTypes.bool,
  href: PropTypes.string,
  logo: PropTypes.string,
  mask: PropTypes.string,
  onOverlayClick: PropTypes.func,
  responsive: PropTypes.bool,
  right: PropTypes.bool,
  showOverlay: PropTypes.bool,
  slim: PropTypes.bool,
  tag: PropTypes.string,
  triggerOpening: PropTypes.bool
};

SideNav.defaultProps = {
  bg: '',
  breakWidth: 1400,
  className: '',
  fixed: false,
  hidden: false,
  href: '#',
  logo: '',
  mask: '',
  onOverlayClick: () => {},
  responsive: true,
  right: false,
  showOverlay: true,
  slim: false,
  tag: 'div',
  triggerOpening: false
};

export default SideNav;
export { SideNav as MDBSideNav };
