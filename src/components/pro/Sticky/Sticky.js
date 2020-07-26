import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Sticky extends Component {
  static propTypes = {
    children: PropTypes.func.isRequired,
    bottomOffset: PropTypes.number,
    relative: PropTypes.bool,
    topOffset: PropTypes.number
  };

  static defaultProps = {
    relative: false,
    topOffset: 0,
    bottomOffset: 0,
    disableCompensation: false,
    disableHardwareAcceleration: false
  };

  static contextTypes = {
    subscribe: PropTypes.func,
    unsubscribe: PropTypes.func,
    getParent: PropTypes.func
  };

  state = {
    isSticky: false,
    wasSticky: false,
    style: {}
  };

  componentDidMount() {
    const { subscribe } = this.context;
    if (!subscribe)
      {throw new TypeError(
        'Expected Sticky to be mounted within StickyContainer'
      );}

    subscribe(this.handleContainerEvent);
  }

  componentWillUnmount() {
    const { unsubscribe } = this.context;

    unsubscribe(this.handleContainerEvent);
  }

  componentDidUpdate() {
    const { disableCompensation } = this.props;
    const { isSticky, calculatedHeight } = this.state;

    this.placeholder.style.paddingBottom = disableCompensation
      ? 0
      : `${isSticky ? calculatedHeight : 0}px`;
  }

  handleContainerEvent = ({
    distanceFromTop,
    distanceFromBottom,
    eventSource
  }) => {
    const parent = this.context.getParent();

    let preventingStickyStateChanges = false;
    if (this.props.relative) {
      preventingStickyStateChanges = eventSource !== parent;
      distanceFromTop =
        -(eventSource.scrollTop + eventSource.offsetTop) +
        this.placeholder.offsetTop;
    }

    const placeholderClientRect = this.placeholder.getBoundingClientRect();
    const contentClientRect = this.content.getBoundingClientRect();
    const calculatedHeight = contentClientRect.height;

    const bottomDifference =
      distanceFromBottom - this.props.bottomOffset - calculatedHeight;

    const wasSticky = !!this.state.isSticky;
    const isSticky = preventingStickyStateChanges
      ? wasSticky
      : distanceFromTop <= -this.props.topOffset &&
        distanceFromBottom > -this.props.bottomOffset;

    distanceFromBottom =
      (this.props.relative
        ? parent.scrollHeight - parent.scrollTop
        : distanceFromBottom) - calculatedHeight;

    const style = !isSticky
      ? {}
      : {
          position: 'fixed',
          top:
            bottomDifference > 0
              ? this.props.relative
                ? parent.offsetTop - parent.offsetParent.scrollTop
                : 0
              : bottomDifference,
          left: placeholderClientRect.left,
          width: placeholderClientRect.width
        };

    if (!this.props.disableHardwareAcceleration) {
      style.transform = 'translateZ(0)';
    }

    this.setState({
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight,
      style
    });
  };

  render() {
    const {
      isSticky,
      wasSticky,
      distanceFromTop,
      distanceFromBottom,
      calculatedHeight,
      style
    } = this.state;
    const { children } = this.props;

    const element = React.cloneElement(
      children({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      }),
      {
        ref: content => {
          this.content = ReactDOM.findDOMNode(content);
        }
      }
    );

    return (
      <div>
        <div ref={placeholder => (this.placeholder = placeholder)} />
        {element}
      </div>
    );
  }
}

export default Sticky;
export { Sticky as MDBSticky };
