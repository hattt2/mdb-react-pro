import React, { useState, Component, useRef, useEffect, useContext, PureComponent } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { Transition, CSSTransition } from 'react-transition-group';
import ReactDOM from 'react-dom';
import { MDBIframe, MDBSelect, MDBBox, MDBPopoverHeader, MDBPopoverBody, MDBBtn, MDBTooltip, Fa as Fa$1 } from 'mdbreact';
import { Manager, Popper, Reference } from 'react-popper';
import NumericInput from 'react-numeric-input';
import { Link as Link$1, NavLink as NavLink$1 } from 'react-router-dom';
import FocusTrap from 'focus-trap-react';
import Popper$1 from 'popper.js';
import MomentUtils from '@date-io/moment';
import { MuiPickersUtilsProvider, DatePicker as DatePicker$1 } from 'material-ui-pickers';
import moment from 'moment';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import PerfectScrollbar from 'perfect-scrollbar';
import { Link as Link$2 } from 'react-scroll';
import raf from 'raf';
export { toast as MDBToast, ToastContainer as MDBToastContainer, cssTransition as MDBcssTransition, ToastContainer, cssTransition, toast } from 'react-toastify';

function _typeof(obj) {
  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(Object(source), true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(Object(source)).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

var Alert = function Alert(props) {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      isOpen = _useState2[0],
      setIsOpen = _useState2[1];

  var closeAlert = function closeAlert() {
    setIsOpen(false);
  };

  var handleOnExit = function handleOnExit(node) {
    node.classList.add('fade');
    return props.onClose && props.onClose();
  };

  var handleOnExited = function handleOnExited() {
    return props.onClosed && props.onClosed();
  };

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      children = props.children,
      dismiss = props.dismiss;
  var alertClasses = classNames('alert', color && "alert-".concat(color), className);
  var alertComponent;

  if (dismiss) {
    alertComponent = React.createElement(Transition, {
      "in": isOpen,
      timeout: 150,
      unmountOnExit: true,
      onExit: function onExit(node) {
        return handleOnExit(node);
      },
      onExited: function onExited(node) {
        return handleOnExited();
      }
    }, React.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children, React.createElement("button", {
      onClick: closeAlert,
      type: "button",
      className: "close",
      "data-dismiss": "alert",
      "aria-label": "Close"
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, "\xD7"))));
  } else {
    alertComponent = React.createElement(Tag, {
      "data-test": "alert",
      className: alertClasses,
      role: "alert"
    }, children);
  }

  return alertComponent;
};

Alert.defaultProps = {
  color: 'primary',
  tag: 'div'
};
Alert.propTypes = {
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  onClose: PropTypes.func,
  onClosed: PropTypes.func,
  tag: PropTypes.string
};

var Animation =
/*#__PURE__*/
function (_Component) {
  _inherits(Animation, _Component);

  function Animation() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Animation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Animation)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isVisible: false,
      revealed: false,
      countIterations: 0
    });

    _defineProperty(_assertThisInitialized(_this), "elemRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var windowHeight = window.innerHeight;
      var scroll = window.scrollY;
      var docHeight = document.documentElement.offsetHeight;
      var revealed = _this.state.revealed;
      var currentRef = _this.elemRef.current;

      if (windowHeight + scroll - 100 > _this.getOffset(currentRef) && scroll < _this.getOffset(currentRef) || windowHeight + scroll - 100 > _this.getOffset(currentRef) + currentRef.clientHeight && scroll < _this.getOffset(currentRef) + currentRef.clientHeight || windowHeight + scroll === docHeight && _this.getOffset(currentRef) + 100 > docHeight) {
        _this.setState({
          isVisible: true,
          revealed: true
        });
      } else if (!revealed) {
        _this.setState({
          isVisible: false,
          revealed: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleStart", function () {
      var onAnimationStart = _this.props.onAnimationStart;
      var countIterations = _this.state.countIterations;

      _this.setState({
        countIterations: countIterations + 1
      });

      if (onAnimationStart) {
        onAnimationStart();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleIteration", function () {
      var onAnimationIteration = _this.props.onAnimationIteration;
      var countIterations = _this.state.countIterations;

      if (onAnimationIteration) {
        _this.setState({
          countIterations: countIterations + 1
        });

        onAnimationIteration();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnd", function () {
      var _this$props = _this.props,
          onAnimationEnd = _this$props.onAnimationEnd,
          count = _this$props.count;
      var countIterations = _this.state.countIterations;

      _this.setState({
        countIterations: countIterations + 1
      });

      if (onAnimationEnd && count === countIterations) {
        onAnimationEnd();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getOffset", function (elem) {
      var box = elem.getBoundingClientRect();
      var _document = document,
          body = _document.body;
      var docEl = document.documentElement;
      var scrollTop = window.pageYOffset || docEl.scrollTop || body.scrollTop;
      var clientTop = docEl.clientTop || body.clientTop || 0;
      var top = box.top + scrollTop - clientTop;
      return Math.round(top);
    });

    return _this;
  }

  _createClass(Animation, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var reveal = this.props.reveal;
      this.setState({
        isVisible: !reveal,
        revealed: !reveal
      });

      if (reveal) {
        window.addEventListener('scroll', this.updatePredicate);
        this.updatePredicate();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var reveal = this.props.reveal;

      if (reveal) {
        window.removeEventListener('scroll', this.updatePredicate);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          count = _this$props2.count,
          delay = _this$props2.delay,
          duration = _this$props2.duration,
          infinite = _this$props2.infinite,
          reveal = _this$props2.reveal,
          style = _this$props2.style,
          Tag = _this$props2.tag,
          type = _this$props2.type,
          attributes = _objectWithoutProperties(_this$props2, ["children", "className", "count", "delay", "duration", "infinite", "reveal", "style", "tag", "type"]);

      var _this$state = this.state,
          isVisible = _this$state.isVisible,
          revealed = _this$state.revealed;
      var styleObject = {
        animationDuration: duration,
        animationDelay: delay,
        animationIterationCount: infinite ? false : count,
        visibility: isVisible ? 'visible' : 'hidden',
        animationName: type
      };
      var hiddenStyles = {
        animationName: 'none',
        visibility: 'hidden'
      };
      var getAllStyles = Object.assign(styleObject, style);
      var classes = classNames(isVisible && 'animated', type && type, infinite && 'infinite', className);
      return React.createElement(Tag, _extends({
        "data-test": "animation",
        className: classes,
        onAnimationEnd: this.handleEnd,
        onAnimationIteration: this.handleIteration,
        onAnimationStart: this.handleStart,
        ref: this.elemRef,
        style: isVisible && revealed ? getAllStyles : hiddenStyles // eslint-disable-next-line react/jsx-props-no-spreading

      }, attributes), children);
    }
  }]);

  return Animation;
}(Component);

Animation.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
  className: PropTypes.string,
  count: PropTypes.number,
  delay: PropTypes.string,
  duration: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  infinite: PropTypes.bool,
  onAnimationEnd: PropTypes.func,
  onAnimationIteration: PropTypes.func,
  onAnimationStart: PropTypes.func,
  reveal: PropTypes.bool,
  style: PropTypes.node,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};
Animation.defaultProps = {
  tag: 'div',
  reveal: false,
  duration: 1,
  count: 1
};

var Badge = function Badge(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      color = props.color,
      pill = props.pill,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "color", "pill"]);

  var classes = classNames('badge', color, "badge-".concat(color), pill ? 'badge-pill' : false, className);
  return (// eslint-disable-next-line react/jsx-props-no-spreading
    React.createElement(Tag, _extends({
      "data-test": "badge"
    }, attributes, {
      className: classes
    }), children)
  );
};

Badge.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  pill: PropTypes.bool,
  tag: PropTypes.string
};
Badge.defaultProps = {
  tag: 'span',
  color: 'default',
  pill: false
};

var Box = function Box(props) {
  var Tag = props.tag,
      className = props.className,
      children = props.children,
      display = props.display,
      justifyContent = props.justifyContent,
      flex = props.flex,
      alignItems = props.alignItems,
      alignContent = props.alignContent,
      alignSelf = props.alignSelf,
      color = props.color,
      bgColor = props.bgColor,
      m = props.m,
      mt = props.mt,
      mr = props.mr,
      mb = props.mb,
      ml = props.ml,
      mx = props.mx,
      my = props.my,
      p = props.p,
      pt = props.pt,
      pr = props.pr,
      pb = props.pb,
      pl = props.pl,
      px = props.px,
      py = props.py,
      attributes = _objectWithoutProperties(props, ["tag", "className", "children", "display", "justifyContent", "flex", "alignItems", "alignContent", "alignSelf", "color", "bgColor", "m", "mt", "mr", "mb", "ml", "mx", "my", "p", "pt", "pr", "pb", "pl", "px", "py"]);

  var marginOrPadding = function marginOrPadding(props, suffix) {
    if (props !== undefined) {
      return "".concat(suffix, "-").concat(props);
    }
  };

  var classes = classNames(display && "d-".concat(display), justifyContent && "justify-content-".concat(justifyContent), flex && "flex-".concat(flex), alignItems && "align-items-".concat(alignItems), alignContent && "align-content-".concat(alignContent), alignSelf && "align-self-".concat(alignSelf), color && "".concat(color, "-text"), bgColor && "bg-".concat(bgColor), marginOrPadding(m, 'm'), marginOrPadding(mt, 'mt'), marginOrPadding(mr, 'mr'), marginOrPadding(mb, 'mb'), marginOrPadding(ml, 'ml'), marginOrPadding(mx, 'mx'), marginOrPadding(my, 'my'), marginOrPadding(p, 'p'), marginOrPadding(pt, 'pt'), marginOrPadding(pr, 'pr'), marginOrPadding(pb, 'pb'), marginOrPadding(pl, 'pl'), marginOrPadding(px, 'px'), marginOrPadding(py, 'py'), className);
  var isEmptyClass = classes !== '' ? classes : null;
  return React.createElement(Tag, _extends({}, attributes, {
    className: isEmptyClass
  }), children);
};

Box.propTypes = {
  alignContent: PropTypes.string,
  alignItems: PropTypes.string,
  alignSelf: PropTypes.string,
  bgColor: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  display: PropTypes.string,
  flex: PropTypes.string,
  justifyContent: PropTypes.string,
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ml: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  mx: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  my: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  p: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pb: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pr: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  pt: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  px: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  py: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  tag: PropTypes.string
};
Box.defaultProps = {
  tag: 'div'
};

function omit(obj, omitKeys) {
  var result = {};
  Object.keys(obj).forEach(function (key) {
    if (omitKeys.indexOf(key) === -1) {
      result[key] = obj[key];
    }
  });
  return result;
}
var keyCodes = {
  esc: 27,
  space: 32,
  tab: 9,
  up: 38,
  down: 40
};
var returnAttributes = function returnAttributes(attributes) {
  var newAttributesObject = Object.keys(attributes).reduce(function (previousValue, currentElement) {
    if (attributes[currentElement]) {
      previousValue[currentElement] = attributes[currentElement];
    }

    return previousValue;
  }, {});
  return newAttributesObject;
};
var getColorClass = function getColorClass(color) {
  var colorArray = color.split(' ');
  var specialColors = ['danger', 'warning', 'success', 'info', 'default', 'primary', 'secondary', 'elegant', 'stylish', 'unique', 'special'];
  var colorClasses = '';
  colorArray.forEach(function (color) {
    if (specialColors.includes(color)) {
      if (color.includes('dark')) {
        color.replace('-', '-color-');
        colorClasses += "".concat(color, " ");
      } else {
        colorClasses += "".concat(color, "-color");
      }
    } else {
      colorClasses += "".concat(color, " ");
    }
  });
  return colorClasses;
};
function debounce(fn) {
  var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 166;
  var timeout;

  function debounced() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var that = this;

    var later = function later() {
      fn.apply(that, args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, time);
  }

  debounced.clear = function () {
    clearTimeout(timeout);
  };

  return debounced;
}

var Breadcrumb = function Breadcrumb(props) {
  var className = props.className,
      color = props.color,
      light = props.light,
      uppercase = props.uppercase,
      bold = props.bold,
      attributes = _objectWithoutProperties(props, ["className", "color", "light", "uppercase", "bold"]);

  var classes = classNames('breadcrumb', uppercase && 'text-uppercase', bold && 'font-up-bold', light && 'white-text', color && getColorClass(color), className);
  var children;

  if (bold) {
    children = React.Children.map(props.children, function (child) {
      return React.cloneElement(child, {
        bold: true
      });
    });
  } else {
    children = props.children;
  }

  return React.createElement("nav", {
    "data-test": "breadcrumb"
  }, React.createElement("ol", _extends({}, attributes, {
    className: classes
  }), children));
};

Breadcrumb.propTypes = {
  bold: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  light: PropTypes.bool,
  uppercase: PropTypes.bool
};

var Fa = function Fa(props) {
  var border = props.border,
      brand = props.brand,
      className = props.className,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      fixed = props.fixed,
      flip = props.flip,
      icon = props.icon,
      inverse = props.inverse,
      light = props.light,
      list = props.list,
      pull = props.pull,
      pulse = props.pulse,
      regular = props.regular,
      rotate = props.rotate,
      size = props.size,
      spin = props.spin,
      stack = props.stack,
      attributes = _objectWithoutProperties(props, ["border", "brand", "className", "fab", "fal", "far", "fixed", "flip", "icon", "inverse", "light", "list", "pull", "pulse", "regular", "rotate", "size", "spin", "stack"]);

  var iconPrefix = brand || fab ? 'fab' : light || fal ? 'fal' : regular || far ? 'far' : 'fa';
  var classes = classNames(iconPrefix, list ? 'fa-li' : false, icon ? "fa-".concat(icon) : false, size ? "fa-".concat(size) : false, fixed ? 'fa-fw' : false, pull ? "fa-pull-".concat(pull) : false, border ? 'fa-border' : false, spin ? 'fa-spin' : false, pulse ? 'fa-pulse' : false, rotate ? "fa-rotate-".concat(rotate) : false, flip ? "fa-flip-".concat(flip) : false, inverse ? 'fa-inverse' : false, stack ? "fa-".concat(stack) : false, className);
  return React.createElement("i", _extends({
    "data-test": "fa"
  }, attributes, {
    className: classes
  }));
};

Fa.propTypes = {
  icon: PropTypes.string.isRequired,
  border: PropTypes.bool,
  brand: PropTypes.bool,
  className: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  fixed: PropTypes.bool,
  flip: PropTypes.string,
  inverse: PropTypes.bool,
  light: PropTypes.bool,
  list: PropTypes.bool,
  pull: PropTypes.string,
  pulse: PropTypes.bool,
  regular: PropTypes.bool,
  rotate: PropTypes.string,
  size: PropTypes.string,
  spin: PropTypes.bool,
  stack: PropTypes.string
};
Fa.defaultProps = {
  border: false,
  brand: false,
  className: '',
  fab: false,
  fal: false,
  far: false,
  fixed: false,
  flip: '',
  inverse: false,
  light: false,
  list: false,
  pull: '',
  pulse: false,
  regular: false,
  rotate: '',
  size: '',
  spin: false,
  stack: ''
};

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css = ".bc-icons.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item::after {\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::before,\r\n.bc-icons.breadcrumb-item + .active.breadcrumb-item::after{\r\n  content: none;\r\n}\r\n\r\n.bc-icons.breadcrumb-item.active {\r\n  color: #eeeeee;\r\n}\r\n";
styleInject(css);

var BreadcrumbItem = function BreadcrumbItem(props) {
  var active = props.active,
      appendIcon = props.appendIcon,
      children = props.children,
      className = props.className,
      bold = props.bold,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClassName = props.iconClassName,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      attributes = _objectWithoutProperties(props, ["active", "appendIcon", "children", "className", "bold", "icon", "iconBrand", "iconClassName", "iconLight", "iconRegular", "iconSize"]);

  var classes = classNames(active ? 'active' : false, icon && 'bc-icons', 'breadcrumb-item', className);
  var iconClasses = classNames(appendIcon ? 'mx-2' : 'mr-2', iconClassName);

  var WithBold = function WithBold(_ref) {
    var children = _ref.children;
    return bold ? React.createElement("strong", null, children) : children;
  };

  var WithIcon = function WithIcon() {
    if (icon) {
      return React.createElement(React.Fragment, null, appendIcon && children, React.createElement(Fa, {
        brand: iconBrand,
        className: iconClasses,
        icon: icon,
        light: iconLight,
        regular: iconRegular,
        size: iconSize
      }), !appendIcon && children);
    }

    return children;
  };

  return React.createElement("li", _extends({
    "data-test": "breadcrumb-item"
  }, attributes, {
    className: classes
  }), React.createElement(WithBold, null, React.createElement(WithIcon, null)));
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

var css$1 = ".btn-group-vertical>.btn,\r\n.btn-group-vertical>.btn+.btn-group,\r\n.btn-group-vertical>.btn-group+.btn,\r\n.btn-group-vertical>.btn-group+.btn-group {\r\n  margin-left: 0px;\r\n}\r\n\r\n.btn-group-lg>.btn {\r\n  font-size: 0.9rem;\r\n  padding: 1rem 2.4rem;\r\n}\r\n\r\n.btn-group-sm>.btn {\r\n  font-size: 0.6rem;\r\n  padding: 0.5rem 1.6rem;\r\n}\r\n\r\n.btn-floating.btn.btn-sm,\r\n.btn-floating.btn.btn-lg {\r\n  padding: 0;\r\n}\r\n";
styleInject(css$1);

var ButtonGroup = function ButtonGroup(_ref) {
  var className = _ref.className,
      size = _ref.size,
      vertical = _ref.vertical,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ["className", "size", "vertical", "children"]);

  var classes = classNames(className, size ? "btn-group-".concat(size) : false, vertical ? 'btn-group-vertical' : 'btn-group');
  return React.createElement("div", _extends({
    "data-test": "button-group"
  }, attributes, {
    className: classes
  }), children);
};

ButtonGroup.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string,
  size: PropTypes.string,
  vertical: PropTypes.bool
};
ButtonGroup.defaultProps = {
  role: 'group'
};

var ButtonToolbar = function ButtonToolbar(_ref) {
  var className = _ref.className,
      children = _ref.children,
      attributes = _objectWithoutProperties(_ref, ["className", "children"]);

  var classes = classNames(className, 'btn-toolbar');
  return React.createElement("div", _extends({
    "data-test": "button-toolbar"
  }, attributes, {
    className: classes
  }), children);
};

ButtonToolbar.propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  role: PropTypes.string
};
ButtonToolbar.defaultProps = {
  role: 'toolbar'
};

var Card = function Card(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      wide = props.wide,
      narrow = props.narrow,
      reverse = props.reverse,
      testimonial = props.testimonial,
      ecommerce = props.ecommerce,
      collection = props.collection,
      pricing = props.pricing,
      personal = props.personal,
      news = props.news,
      color = props.color,
      text = props.text,
      border = props.border,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade", "wide", "narrow", "reverse", "testimonial", "ecommerce", "collection", "pricing", "personal", "news", "color", "text", "border"]);

  var classes = classNames((_classNames = {
    'card-cascade': cascade,
    'card-cascade wider': wide,
    'card-cascade narrower': narrow,
    'card-cascade wider reverse': reverse,
    'testimonial-card': testimonial,
    'card-ecommerce': ecommerce,
    'collection-card': collection,
    'pricing-card': pricing,
    'card-personal': personal,
    'news-card': news
  }, _defineProperty(_classNames, "".concat(text, "-text"), text), _defineProperty(_classNames, "border-".concat(border), border), _classNames), 'card', color, className);
  return React.createElement(Tag, _extends({
    "data-test": "card"
  }, attributes, {
    className: classes
  }));
};

Card.propTypes = {
  border: PropTypes.string,
  cascade: PropTypes.bool,
  className: PropTypes.string,
  collection: PropTypes.bool,
  color: PropTypes.string,
  ecommerce: PropTypes.bool,
  narrow: PropTypes.bool,
  news: PropTypes.bool,
  personal: PropTypes.bool,
  pricing: PropTypes.bool,
  reverse: PropTypes.bool,
  tag: PropTypes.string,
  testimonial: PropTypes.bool,
  text: PropTypes.string,
  wide: PropTypes.bool
};
Card.defaultProps = {
  tag: 'div'
};

var CardBody = function CardBody(props) {
  var className = props.className,
      Tag = props.tag,
      cascade = props.cascade,
      attributes = _objectWithoutProperties(props, ["className", "tag", "cascade"]);

  var classes = classNames('card-body', cascade && 'card-body-cascade', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-body"
  }, attributes, {
    className: classes
  }));
};

CardBody.propTypes = {
  cascade: PropTypes.bool,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardBody.defaultProps = {
  tag: 'div'
};

var CardFooter = function CardFooter(props) {
  var _classNames;

  var className = props.className,
      Tag = props.tag,
      color = props.color,
      children = props.children,
      text = props.text,
      border = props.border,
      transparent = props.transparent,
      small = props.small,
      muted = props.muted,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "children", "text", "border", "transparent", "small", "muted"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, 'text-muted', muted), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-footer', color, className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }), small ? React.createElement("small", null, " ", children, " ") : children);
};

CardFooter.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};
CardFooter.defaultProps = {
  tag: 'div'
};

var CardGroup = function CardGroup(props) {
  var className = props.className,
      Tag = props.tag,
      deck = props.deck,
      column = props.column,
      attributes = _objectWithoutProperties(props, ["className", "tag", "deck", "column"]);

  var classes = classNames(deck ? 'card-deck' : column ? 'card-columns' : 'card-group', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-group"
  }, attributes, {
    className: classes
  }));
};

CardGroup.propTypes = {
  className: PropTypes.string,
  column: PropTypes.bool,
  deck: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardGroup.defaultProps = {
  tag: 'div'
};

var CardHeader = function CardHeader(props) {
  var _classNames;

  var border = props.border,
      className = props.className,
      color = props.color,
      Tag = props.tag,
      text = props.text,
      transparent = props.transparent,
      attributes = _objectWithoutProperties(props, ["border", "className", "color", "tag", "text", "transparent"]);

  var classes = classNames((_classNames = {
    'white-text': color && !text
  }, _defineProperty(_classNames, "border-".concat(border), border), _defineProperty(_classNames, 'bg-transparent', transparent), _defineProperty(_classNames, "".concat(text, "-text"), text), _classNames), 'card-header', className, color);
  return React.createElement(Tag, _extends({
    "data-test": "card-header"
  }, attributes, {
    className: classes
  }));
};

CardHeader.propTypes = {
  border: PropTypes.string,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  transparent: PropTypes.bool
};
CardHeader.defaultProps = {
  tag: 'div'
};

var css$2 = ".Ripple {\r\n  position: absolute;\r\n  background: rgba(255, 255, 255, 0.3);\r\n  border-radius: 50%;\r\n  opacity: 1;\r\n  transform: scale(0);\r\n}\r\n\r\n.Ripple-outline {\r\n  background: rgba(0, 0, 0, 0.2);\r\n}\r\n\r\n.Ripple.is-reppling {\r\n  animation: ripple 0.5s linear;\r\n}\r\n\r\n.Ripple-parent {\r\n  position: relative;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n}\r\n\r\n@keyframes ripple {\r\n  100% {\r\n    opacity: 0;\r\n    transform: scale(3);\r\n  }\r\n}\r\n";
styleInject(css$2);

var Waves =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Waves, _React$Component);

  function Waves() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Waves);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Waves)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      animate: false,
      width: 0,
      height: 0,
      top: 0,
      left: 0,
      cursorPos: _this.props.cursorPos
    });

    return _this;
  }

  _createClass(Waves, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this2 = this;

      var cursorPos = this.props.cursorPos;

      if (prevState.cursorPos.time !== cursorPos.time) {
        if (prevState.animate) {
          this.setState({
            animate: false,
            cursorPos: cursorPos
          }, function () {
            _this2.replying();
          });
        } else {
          this.replying();
        }
      }
    }
  }, {
    key: "replying",
    value: function replying() {
      var $ripple = ReactDOM.findDOMNode(this);
      var $button = $ripple.parentNode;
      var buttonPos = $button.getBoundingClientRect();
      var buttonWidth = $button.offsetWidth;
      var buttonHeight = $button.offsetHeight;
      var rippleWidthShouldBe = Math.max(buttonHeight, buttonWidth);
      var centralized = rippleWidthShouldBe / 2;
      var cursorPos = this.state.cursorPos;
      this.setState({
        animate: true,
        width: rippleWidthShouldBe,
        height: rippleWidthShouldBe,
        top: cursorPos.top - buttonPos.top - centralized,
        left: cursorPos.left - buttonPos.left - centralized
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          outline = _this$props.outline,
          flat = _this$props.flat,
          dark = _this$props.dark;
      var _this$state = this.state,
          animate = _this$state.animate,
          top = _this$state.top,
          left = _this$state.left,
          width = _this$state.width,
          height = _this$state.height;
      return React.createElement("div", {
        "data-test": "waves",
        className: "Ripple ".concat(outline || flat || dark ? 'Ripple-outline ' : '').concat(animate ? 'is-reppling' : ''),
        style: {
          top: "".concat(top, "px"),
          left: "".concat(left, "px"),
          width: "".concat(width, "px"),
          height: "".concat(height, "px")
        }
      });
    }
  }]);

  return Waves;
}(React.Component);

Waves.propTypes = {
  animate: PropTypes.bool,
  children: PropTypes.node,
  cursorPos: PropTypes.object,
  flat: PropTypes.bool,
  outline: PropTypes.bool
};

var Mask = function Mask(props) {
  var children = props.children,
      className = props.className,
      overlay = props.overlay,
      pattern = props.pattern,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "overlay", "pattern", "tag"]);

  var classes = classNames('mask', pattern && "pattern-".concat(pattern), overlay && "rgba-".concat(overlay), className);
  return React.createElement(Tag, _extends({
    "data-test": "mask"
  }, attributes, {
    className: classes
  }), children);
};

Mask.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  overlay: PropTypes.string,
  pattern: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  tag: PropTypes.string
};
Mask.defaultProps = {
  className: '',
  overlay: '',
  pattern: '',
  tag: 'div'
};

var View = function View(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var cascade = props.cascade,
      children = props.children,
      className = props.className,
      fixed = props.fixed,
      hover = props.hover,
      rounded = props.rounded,
      src = props.src,
      Tag = props.tag,
      waves = props.waves,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["cascade", "children", "className", "fixed", "hover", "rounded", "src", "tag", "waves", "zoom"]);

  var classes = classNames('view', cascade && 'view-cascade', className, hover && 'overlay', rounded && 'rounded', waves ? 'Ripple-parent' : false, zoom && 'zoom');
  var viewStyle = src ? {
    backgroundAttachment: fixed ? 'fixed' : null,
    backgroundImage: "url(\"".concat(src, "\")"),
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    height: '100vh'
  } : {};
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes,
    "data-test": "view",
    onMouseDown: handleClick,
    onTouchStart: handleClick,
    style: viewStyle
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

View.defaultProps = {
  cascade: false,
  className: '',
  hover: false,
  rounded: false,
  src: '',
  tag: 'div',
  waves: false,
  zoom: false
};
View.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  rounded: PropTypes.bool,
  src: PropTypes.string,
  tag: PropTypes.string,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};

var CardImage = function CardImage(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var cascade = props.cascade,
      className = props.className,
      hover = props.hover,
      overlay = props.overlay,
      src = props.src,
      tag = props.tag,
      top = props.top,
      waves = props.waves,
      zoom = props.zoom,
      attributes = _objectWithoutProperties(props, ["cascade", "className", "hover", "overlay", "src", "tag", "top", "waves", "zoom"]);

  var classes = classNames(top && 'card-img-top', className);
  var Tag = tag;
  var innerContent = React.createElement(Tag, _extends({
    "data-test": "card-image",
    src: src
  }, attributes, {
    className: classes
  }));

  if (src) {
    return React.createElement(View, {
      zoom: zoom,
      hover: hover,
      cascade: cascade
    }, React.createElement("div", {
      className: "Ripple-parent",
      onMouseDown: handleClick,
      style: {
        touchAction: 'unset'
      }
    }, innerContent, React.createElement(Mask, {
      overlay: overlay
    }), waves && React.createElement(Waves, {
      cursorPos: cursorPos
    })));
  }

  return React.createElement("div", null, innerContent);
};

CardImage.propTypes = {
  cascade: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  hover: PropTypes.bool,
  overlay: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  waves: PropTypes.bool,
  zoom: PropTypes.bool
};
CardImage.defaultProps = {
  tag: 'img',
  overlay: 'white-slight',
  waves: true,
  hover: false,
  cascade: false,
  zoom: false
};

var CardText = function CardText(props) {
  var textNode = props.children,
      className = props.className,
      muted = props.muted,
      small = props.small,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "muted", "small", "tag"]);

  var classes = classNames('card-text', muted && 'text-muted', className);
  var children = small ? React.createElement("small", null, textNode) : textNode;
  return React.createElement(Tag, _extends({
    "data-test": "card-text"
  }, attributes, {
    className: classes
  }), children);
};

CardText.propTypes = {
  className: PropTypes.string,
  muted: PropTypes.bool,
  small: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardText.defaultProps = {
  tag: 'p'
};

var CardTitle = function CardTitle(props) {
  var className = props.className,
      sub = props.sub,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "sub", "tag"]);

  var classes = classNames(sub ? 'card-subtitle' : 'card-title', className);
  return React.createElement(Tag, _extends({
    "data-test": "card-title"
  }, attributes, {
    className: classes
  }));
};

CardTitle.propTypes = {
  className: PropTypes.string,
  sub: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardTitle.defaultProps = {
  tag: 'h4',
  sub: false
};

var CardVideo = function CardVideo(props) {
  var children = props.children,
      className = props.className,
      src = props.src,
      attributes = _objectWithoutProperties(props, ["children", "className", "src"]);

  var classes = classNames(className);
  return React.createElement(MDBIframe, _extends({
    "data-test": "card-video"
  }, attributes, {
    src: src,
    className: classes
  }), children);
};

CardVideo.propTypes = {
  src: PropTypes.string.isRequired,
  children: PropTypes.node,
  className: PropTypes.string
};

var Control = function Control(props) {
  var className = props.className,
      direction = props.direction,
      iconLeft = props.iconLeft,
      iconRight = props.iconRight,
      multiItem = props.multiItem,
      onClick = props.onClick,
      Tag = props.tag,
      testimonial = props.testimonial;
  var text;

  if (direction === 'prev') {
    text = 'Previous';
  } else if (direction === 'next') {
    text = 'Next';
  }

  var classes = classNames("carousel-control-".concat(direction), className);
  var caretClasses = classNames("carousel-control-".concat(direction, "-icon"));

  if (testimonial) {
    var arrow = direction === 'prev' ? 'left' : 'right';
    classes = classNames("carousel-control-".concat(direction), arrow, 'carousel-control', className);
    caretClasses = classNames("icon-".concat(direction));
  }

  if (multiItem) {
    classes = classNames('btn-floating');
  }

  return React.createElement(Tag, {
    "data-test": "carousel-control",
    className: classes,
    "data-slide": direction,
    onClick: onClick
  }, iconLeft ? React.createElement(Fa, {
    icon: "chevron-left"
  }) : iconRight ? React.createElement(Fa, {
    icon: "chevron-right"
  }) : React.createElement("div", null, React.createElement("span", {
    className: caretClasses,
    "aria-hidden": "true"
  }), React.createElement("span", {
    className: "sr-only"
  }, text)));
};

Control.propTypes = {
  className: PropTypes.string,
  direction: PropTypes.string,
  iconLeft: PropTypes.bool,
  iconRight: PropTypes.bool,
  multiItem: PropTypes.bool,
  onClick: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool
};
Control.defaultProps = {
  tag: 'a'
};

var CarouselIndicator = function CarouselIndicator(props) {
  var active = props.active,
      alt = props.alt,
      children = props.children,
      className = props.className,
      img = props.img,
      attributes = _objectWithoutProperties(props, ["active", "alt", "children", "className", "img"]);

  var classes = classNames(active && 'active', className);
  return React.createElement("li", _extends({
    "data-test": "carousel-indicator"
  }, attributes, {
    className: classes
  }), img && React.createElement("img", {
    src: img,
    alt: alt,
    className: "img-fluid"
  }), children);
};

CarouselIndicator.propTypes = {
  active: PropTypes.bool.isRequired,
  alt: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  img: PropTypes.string
};
CarouselIndicator.defaultProps = {
  alt: 'Carousel thumbnail',
  className: '',
  img: ''
};

var CarouselIndicators = function CarouselIndicators(props) {
  var children = props.children,
      className = props.className,
      attributes = _objectWithoutProperties(props, ["children", "className"]);

  var classes = classNames('carousel-indicators', className);
  return React.createElement("ol", _extends({
    "data-test": "carousel-indicators"
  }, attributes, {
    className: classes
  }), children);
};

CarouselIndicators.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
CarouselIndicators.defaultProps = {
  className: ''
};

var css$3 = ".carousel-inner {\r\n  position: relative;\r\n  overflow: hidden;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.carousel-fade .carousel-item {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  display: block !important;\r\n  opacity: 0;\r\n  z-index: 0;\r\n  transition: transform 0ms ease-in-out, opacity 0.8s ease-out;\r\n}\r\n\r\n.carousel-fade .carousel-item.active {\r\n  position: relative;\r\n  z-index: 1;\r\n  opacity: 1;\r\n}\r\n\r\n.carousel-multi-item .carousel-item {\r\n  display: inline-block !important;\r\n}\r\n\r\n.carousel .carousel-slide-item {\r\n  transition: left 0.5s;\r\n}\r\n\r\n.carousel-control-prev, .carousel-control-next, .carousel-item-prev, .carousel-item-next {\r\n  z-index: 2;\r\n}\r\n";
styleInject(css$3);

var Carousel =
/*#__PURE__*/
function (_Component) {
  _inherits(Carousel, _Component);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItem: _this.props.activeItem,
      initialLength: _this.props.length,
      srcArray: [],
      swipeAvailable: true,
      initialX: null,
      initialY: null
    });

    _defineProperty(_assertThisInitialized(_this), "carouselRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "clearCycleIntervalHandler", function () {
      return clearInterval(_this.cycleInterval);
    });

    _defineProperty(_assertThisInitialized(_this), "swipeAvailableHandler", function () {
      return _this.setState({
        swipeAvailable: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "restartInterval", function () {
      var interval = _this.props.interval;

      if (interval !== false) {
        _this.clearCycleIntervalHandler();

        _this.cycleInterval = setInterval(_this.next, interval);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "next", function () {
      var _this$state = _this.state,
          activeItem = _this$state.activeItem,
          initialLength = _this$state.initialLength;
      var nextIndex = activeItem + 1;
      var nextItem = nextIndex > initialLength ? 1 : nextIndex;

      _this.goToIndex(nextItem);
    });

    _defineProperty(_assertThisInitialized(_this), "prev", function () {
      var _this$state2 = _this.state,
          activeItem = _this$state2.activeItem,
          initialLength = _this$state2.initialLength;
      var prevIndex = activeItem - 1;
      var prevItem = prevIndex < 1 ? initialLength : prevIndex;

      _this.goToIndex(prevItem);
    });

    _defineProperty(_assertThisInitialized(_this), "goToIndex", function (item) {
      _this.setState(_objectSpread2({}, _this.state, {
        activeItem: item
      }));

      _this.restartInterval();
    });

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      var mobileGesture = _this.props.mobileGesture;

      if (mobileGesture !== false) {
        _this.setState({
          initialX: e.touches[0].clientX,
          initialY: e.touches[0].clientY
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      _this.setState({
        swipeAvailable: false
      });

      var _this$state3 = _this.state,
          initialX = _this$state3.initialX,
          initialY = _this$state3.initialY;

      if (initialX === null || initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = initialX - currentX;
      var diffY = initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        // sliding horizontally
        if (diffX > 0) {
          _this.next();
        } else {
          _this.prev();
        }
      }

      _this.setState({
        initialX: null,
        initialY: null
      });
    });

    return _this;
  }

  _createClass(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          interval = _this$props.interval,
          thumbnails = _this$props.thumbnails;

      if (interval === false) {
        return;
      }

      this.cycleInterval = setInterval(this.next, interval); // get images src atr

      if (thumbnails) {
        var CarouselItemsArray = this.carouselRef.current.querySelectorAll('.carousel-item img');
        var srcArray = Array.prototype.map.call(CarouselItemsArray, function (item) {
          return item.src;
        });
        this.setState(_objectSpread2({}, this.state, {
          srcArray: srcArray
        }));
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var length = this.props.length;
      var InitialLength = this.state.InitialLength;

      if (InitialLength !== length) {
        this.setState({
          InitialLength: length
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var interval = this.props.interval;

      if (interval === false) {
        return;
      }

      this.clearCycleIntervalHandler();
    }
  }, {
    key: "getChildContext",
    value: function getChildContext() {
      var _this$state4 = this.state,
          activeItem = _this$state4.activeItem,
          initialLength = _this$state4.initialLength;
      var slide = this.props.slide;
      return {
        activeItem: activeItem,
        length: initialLength,
        slide: slide
      };
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          activeItem = _this$props2.activeItem,
          children = _this$props2.children,
          className = _this$props2.className,
          interval = _this$props2.interval,
          mobileGesture = _this$props2.mobileGesture,
          multiItem = _this$props2.multiItem,
          onHoverStop = _this$props2.onHoverStop,
          showControls = _this$props2.showControls,
          showIndicators = _this$props2.showIndicators,
          slide = _this$props2.slide,
          Tag = _this$props2.tag,
          testimonial = _this$props2.testimonial,
          thumbnails = _this$props2.thumbnails,
          attributes = _objectWithoutProperties(_this$props2, ["activeItem", "children", "className", "interval", "mobileGesture", "multiItem", "onHoverStop", "showControls", "showIndicators", "slide", "tag", "testimonial", "thumbnails"]);

      var _this$state5 = this.state,
          initialLength = _this$state5.initialLength,
          srcArray = _this$state5.srcArray,
          swipeAvailable = _this$state5.swipeAvailable;
      var ariaLabel = 'carousel';
      var classes = classNames('carousel', multiItem ? 'carousel-multi-item' : 'carousel-fade', thumbnails ? 'carousel-thumbnails' : '', testimonial ? 'testimonial-carousel' : '', className);
      var CarouselIndicatorsArray = [];

      var _loop = function _loop(i) {
        var activeItem = _this2.state.activeItem;
        CarouselIndicatorsArray.push(React.createElement(CarouselIndicator, {
          img: thumbnails ? srcArray[i - 1] : null,
          key: i,
          active: activeItem === i,
          onClick: function onClick() {
            return _this2.goToIndex(i);
          }
        }));
      };

      for (var i = 1; i <= initialLength; i++) {
        _loop(i);
      }

      var isMultiItem = !!multiItem;
      var isTestimonial = !!testimonial;
      return React.createElement(Tag, _extends({
        "data-test": "carousel",
        ref: this.carouselRef
      }, attributes, {
        className: classes,
        "aria-label": ariaLabel,
        onTouchStart: this.startTouch,
        onTouchMove: swipeAvailable ? this.moveTouch : null,
        onTouchEnd: this.swipeAvailableHandler,
        onMouseEnter: onHoverStop ? this.clearCycleIntervalHandler : null,
        onMouseLeave: onHoverStop ? this.restartInterval : null
      }), showControls && multiItem && React.createElement("div", {
        className: "controls-top"
      }, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconLeft: true,
        className: "btn-floating",
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        iconRight: true,
        className: "btn-floating",
        direction: "next",
        role: "button",
        onClick: this.next
      })), children, showControls && !multiItem && React.createElement(React.Fragment, null, React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "prev",
        role: "button",
        onClick: this.prev
      }), React.createElement(Control, {
        testimonial: isTestimonial,
        multiItem: isMultiItem,
        direction: "next",
        role: "button",
        onClick: this.next
      })), showIndicators && React.createElement(CarouselIndicators, null, CarouselIndicatorsArray));
    }
  }]);

  return Carousel;
}(Component);

Carousel.propTypes = {
  activeItem: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  interval: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  length: PropTypes.number,
  mobileGesture: PropTypes.bool,
  multiItem: PropTypes.bool,
  onHoverStop: PropTypes.bool,
  showControls: PropTypes.bool,
  showIndicators: PropTypes.bool,
  slide: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  testimonial: PropTypes.bool,
  thumbnails: PropTypes.bool
};
Carousel.defaultProps = {
  interval: 6000,
  mobileGesture: true,
  onHoverStop: true,
  showControls: true,
  showIndicators: true,
  tag: 'div'
};
Carousel.childContextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var CarouselCaption = function CarouselCaption(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('carousel-caption', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-caption"
  }, attributes, {
    className: classes
  }), children);
};

CarouselCaption.propTypes = {
  active: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselCaption.defaultProps = {
  tag: 'div'
};

var CarouselInner = function CarouselInner(props) {
  var active = props.active,
      children = props.children,
      childrenCount = props.childrenCount,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "childrenCount", "className", "tag"]);

  var classes = classNames('carousel-inner', active ? 'active' : '', className);
  return React.createElement(Tag, _extends({
    "data-test": "carousel-inner"
  }, attributes, {
    className: classes
  }), children);
};

CarouselInner.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselInner.defaultProps = {
  tag: 'div'
};

var CarouselItem =
/*#__PURE__*/
function (_Component) {
  _inherits(CarouselItem, _Component);

  function CarouselItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CarouselItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CarouselItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "moveForward", function () {
      _this.style = {
        position: 'absolute',
        left: '100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "moveBackwards", function () {
      _this.style = {
        position: 'absolute',
        left: '-100%'
      };
    });

    _defineProperty(_assertThisInitialized(_this), "makeVisible", function () {
      _this.style = {
        left: '0'
      };
    });

    return _this;
  }

  _createClass(CarouselItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          active = _this$props.active,
          children = _this$props.children,
          className = _this$props.className,
          itemId = _this$props.itemId,
          Tag = _this$props.tag,
          attributes = _objectWithoutProperties(_this$props, ["active", "children", "className", "itemId", "tag"]);

      var _this$context = this.context,
          slide = _this$context.slide,
          activeItem = _this$context.activeItem;
      itemId = parseInt(itemId, 10);
      var classes = classNames('carousel-item', {
        'active carousel-slide-item': slide,
        active: !slide && itemId === activeItem
      }, className);
      var slideIndex = activeItem - itemId;

      if (slide) {
        if (slideIndex < 0) {
          this.moveForward();
        } else if (slideIndex > 0) {
          this.moveBackwards();
        } else {
          this.makeVisible();
        }
      } else {
        this.makeVisible();
      }

      return React.createElement(Tag, _extends({
        "data-test": "carousel-item"
      }, attributes, {
        className: classes,
        style: this.style
      }), children);
    }
  }]);

  return CarouselItem;
}(Component);

CarouselItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  itemId: PropTypes.any,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CarouselItem.defaultProps = {
  tag: 'div'
};
CarouselItem.contextTypes = {
  activeItem: PropTypes.any,
  length: PropTypes.any,
  slide: PropTypes.any
};

var MDBCloseIcon = function MDBCloseIcon(_ref) {
  var onClick = _ref.onClick,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel,
      props = _objectWithoutProperties(_ref, ["onClick", "className", "ariaLabel"]);

  var onClickHandler = function onClickHandler(e) {
    onClick && onClick(e);
  };

  var btnClasses = className ? ['close'].concat(_toConsumableArray(className.split(' '))) : ['close'];
  return React.createElement("button", _extends({
    "data-test": "close-button",
    type: "button"
  }, props, {
    className: btnClasses.join(' '),
    onClick: onClickHandler,
    "aria-label": ariaLabel
  }), React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"));
};
MDBCloseIcon.defaultProps = {
  ariaLabel: 'Close'
};
MDBCloseIcon.propTypes = {
  ariaLabel: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
};

var Col = function Col(props) {
  var xs = props.xs,
      sm = props.sm,
      md = props.md,
      lg = props.lg,
      xl = props.xl,
      top = props.top,
      bottom = props.bottom,
      middle = props.middle,
      size = props.size,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["xs", "sm", "md", "lg", "xl", "top", "bottom", "middle", "size", "className", "tag"]);

  var classes = classNames(size && "col-".concat(size), xs && "col-xs-".concat(xs), sm && "col-sm-".concat(sm), md && "col-md-".concat(md), lg && "col-lg-".concat(lg), xl && "col-xl-".concat(xl), !size && !xs && !sm && !md && !lg && !xl ? 'col' : '', top && 'align-self-start', middle && 'align-self-center', bottom && 'align-self-end', className);
  return React.createElement(Tag, _extends({
    "data-test": "col"
  }, attributes, {
    className: classes
  }));
};

Col.propTypes = {
  bottom: PropTypes.bool,
  className: PropTypes.string,
  lg: PropTypes.string,
  md: PropTypes.string,
  middle: PropTypes.bool,
  size: PropTypes.string,
  sm: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool,
  xl: PropTypes.string,
  xs: PropTypes.string
};
Col.defaultProps = {
  tag: 'div',
  xs: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var SHOW = 'SHOW';
var SHOWN = 'SHOWN';
var HIDE = 'HIDE';
var HIDDEN = 'HIDDEN';
var DEFAULT_DELAYS = {
  show: 350,
  hide: 350
};

var Collapse =
/*#__PURE__*/
function (_Component) {
  _inherits(Collapse, _Component);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      id: _this.props.id,
      collapse: HIDDEN,
      height: null
    });

    _defineProperty(_assertThisInitialized(_this), "element", null);

    _defineProperty(_assertThisInitialized(_this), "setTransitionTag", function (collapse, callback, delayType) {
      _this.transitionTag = setTimeout(function () {
        _this.setState({
          collapse: collapse,
          height: null
        }, callback());
      }, _this.getDelay(delayType));
    });

    _defineProperty(_assertThisInitialized(_this), "openCollapse", function () {
      var onOpened = _this.props.onOpened;

      _this.setState({
        collapse: SHOW
      }, function () {
        _this.setState({
          height: _this.getHeight()
        });

        _this.setTransitionTag(SHOWN, onOpened, 'show');
      });
    });

    _defineProperty(_assertThisInitialized(_this), "closeCollapse", function () {
      var onClosed = _this.props.onClosed;

      _this.setState({
        height: _this.getHeight()
      }, function () {
        _this.setState({
          collapse: HIDE,
          height: _this.getHeight()
        }, function () {
          _this.setState({
            height: 0
          });
        });
      });

      _this.setTransitionTag(HIDDEN, onClosed, 'hide');
    });

    return _this;
  }

  _createClass(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var isOpen = this.props.isOpen;
      var _this$state = this.state,
          collapse = _this$state.collapse,
          id = _this$state.id;

      if ((isOpen === id || isOpen === true) && collapse === HIDDEN) {
        this.openCollapse();
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var isOpen = this.props.isOpen;
      var collapse = this.state.collapse;
      var willOpen = typeof isOpen !== 'boolean' ? isOpen === prevState.id : isOpen;

      if (willOpen && collapse === HIDDEN) {
        this.openCollapse();
      } else if (!willOpen && prevState.collapse === SHOWN) {
        this.closeCollapse();
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      clearTimeout(this.transitionTag);
    }
  }, {
    key: "getDelay",
    value: function getDelay(key) {
      var delay = this.props.delay;

      if (_typeof(delay) === 'object') {
        return isNaN(delay[key]) ? DEFAULT_DELAYS[key] : delay[key];
      }

      return delay;
    }
  }, {
    key: "getHeight",
    value: function getHeight() {
      return this.element.scrollHeight;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          navbar = _this$props.navbar,
          children = _this$props.children,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          delay = _this$props.delay,
          onOpened = _this$props.onOpened,
          onClosed = _this$props.onClosed,
          attributes = _objectWithoutProperties(_this$props, ["navbar", "children", "className", "isOpen", "delay", "onOpened", "onClosed"]);

      var _this$state2 = this.state,
          collapse = _this$state2.collapse,
          height = _this$state2.height;
      var collapseClass;

      switch (collapse) {
        case SHOW:
          collapseClass = 'collapsing';
          break;

        case SHOWN:
          collapseClass = 'collapse show';
          break;

        case HIDE:
          collapseClass = 'collapsing';
          break;

        case HIDDEN:
          collapseClass = 'collapse';
          break;

        default:
          // HIDDEN
          collapseClass = 'collapse';
      }

      var classes = classNames(collapseClass, navbar ? 'navbar-collapse' : false, className);
      var style = height === null ? null : {
        height: height
      };
      return React.createElement("div", _extends({
        "data-test": "collapse"
      }, attributes, {
        style: _objectSpread2({}, attributes.style, {}, style),
        className: classes,
        ref: function ref(c) {
          _this2.element = c;
        }
      }), children);
    }
  }]);

  return Collapse;
}(Component);

Collapse.propTypes = {
  children: PropTypes.node,
  className: PropTypes.node,
  delay: PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
    hide: PropTypes.number,
    show: PropTypes.number
  })]),
  id: PropTypes.string,
  isOpen: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  navbar: PropTypes.bool,
  onClosed: PropTypes.func,
  onOpened: PropTypes.func
};
Collapse.defaultProps = {
  isOpen: '',
  delay: DEFAULT_DELAYS,
  onOpened: function onOpened() {},
  onClosed: function onClosed() {}
};

var Container = function Container(props) {
  var className = props.className,
      fluid = props.fluid,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "fluid", "tag"]);

  var classes = classNames(fluid ? 'container-fluid' : 'container', className);
  return React.createElement(Tag, _extends({
    "data-test": "container"
  }, attributes, {
    className: classes
  }));
};

Container.propTypes = {
  className: PropTypes.string,
  fluid: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Container.defaultProps = {
  tag: 'div',
  fluid: false
};

var DataTableHead = function DataTableHead(props) {
  var color = props.color,
      columns = props.columns,
      handleSort = props.handleSort,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      sortable = props.sortable,
      sorted = props.sorted,
      textWhite = props.textWhite;
  var theadClasses = classNames(color && (color !== 'dark' && color !== 'light' ? color : "thead-".concat(color)), textWhite && 'text-white');
  return React.createElement(React.Fragment, null, (scrollY || scrollX) && React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || 'auto',
        minWidth: "".concat(col.width, "px") || 'auto'
      }
    });
  })), React.createElement("thead", {
    "data-test": "datatable-head",
    className: theadClasses || undefined
  }, React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", _extends({
      onClick: function onClick() {
        return sortable && handleSort(col.field, col.sort);
      },
      key: col.field,
      className: classNames(col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : null, sortable && col.sort !== 'disabled' && (sorted && col.sort ? "sorting_".concat(col.sort === 'asc' ? 'desc' : 'asc') : 'sorting'))
    }, col.attributes), col.label);
  }))));
};

DataTableHead.propTypes = {
  sorted: PropTypes.bool.isRequired,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  sortable: PropTypes.bool,
  textWhite: PropTypes.bool
};
DataTableHead.defaultProps = {
  scrollX: false,
  scrollY: false,
  sortable: true,
  textWhite: false
};

var css$4 = ".table-wrapper-scroll-y {\r\n  display: block;\r\n  max-height: 200px;\r\n  overflow-y: auto;\r\n  -ms-overflow-style: -ms-autohiding-scrollbar;\r\n}\r\n";
styleInject(css$4);

var Table = function Table(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      className = props.className,
      dark = props.dark,
      fixed = props.fixed,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
      responsiveXl = props.responsiveXl,
      scrollY = props.scrollY,
      small = props.small,
      striped = props.striped,
      theadColor = props.theadColor,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "className", "dark", "fixed", "hover", "maxHeight", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "scrollY", "small", "striped", "theadColor"]);

  var tableClasses = classNames('table', {
    'w-auto': autoWidth,
    'table-bordered': bordered,
    'table-borderless': borderless,
    'btn-table': btn,
    'table-fixed': fixed,
    'table-hover': hover,
    'table-sm': small,
    'table-striped': striped
  }, className);
  var wrapperClasses = classNames({
    'table-dark': dark,
    'table-responsive': responsive,
    'table-responsive-sm': responsiveSm,
    'table-responsive-md': responsiveMd,
    'table-responsive-lg': responsiveLg,
    'table-responsive-xl': responsiveXl,
    'table-wrapper-scroll-y': scrollY
  });
  var wrapperStyles = {
    maxHeight: maxHeight ? "".concat(maxHeight) : null
  };
  return React.createElement("div", {
    "data-test": "table",
    className: wrapperClasses,
    style: wrapperStyles
  }, React.createElement("table", _extends({}, attributes, {
    className: tableClasses
  }), children));
};

Table.propTypes = {
  autoWidth: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  maxHeight: PropTypes.string,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollY: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool,
  theadColor: PropTypes.string
};

var TableBody = function TableBody(props) {
  var children = props.children,
      color = props.color,
      columns = props.columns,
      rows = props.rows,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "rows", "textWhite"]);

  var classes = classNames(color, {
    'text-white': textWhite
  });

  var renderTD = function renderTD(field, key, array, row) {
    if (field === 'clickEvent') {
      return null;
    }

    if (field !== 'colspan') {
      if (row.message) {
        return key === 0 && React.createElement("td", {
          key: key,
          colSpan: row.colspan
        }, row.message);
      } else {
        return array[key + 1] !== 'colspan' && row[field] !== null && React.createElement("td", {
          key: key
        }, row[field]) || React.createElement("td", {
          key: key
        });
      }
    }

    return React.createElement("td", {
      key: key,
      colSpan: row.colspan
    }, row[array[key - 1]]);
  };

  return React.createElement("tbody", _extends({
    "data-test": "table-body"
  }, attributes, {
    className: classes || undefined
  }), rows && rows.map(function (row, index) {
    return React.createElement("tr", {
      onClick: row.hasOwnProperty('clickEvent') ? row.clickEvent : undefined,
      key: index
    }, columns ? columns.map(function (_ref, key, array) {
      var field = _ref.field;
      return renderTD(field, key, array, row);
    }) : Object.keys(row).map(function (field, key, array) {
      return renderTD(field, key, array, row);
    }));
  }), children);
};

TableBody.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableBody.defaultProps = {
  textWhite: false
};

var TableFoot = function TableFoot(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React.createElement("thead", _extends({
    "data-test": "table-foot"
  }, attributes, {
    className: classes || undefined
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : undefined
    }, col.label);
  })), children);
};

TableFoot.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableFoot.defaultProps = {
  textWhite: false
};

var DataTableTable = function DataTableTable(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      handleSort = props.handleSort,
      hover = props.hover,
      noBottomColumns = props.noBottomColumns,
      noRecordsFoundLabel = props.noRecordsFoundLabel,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "handleSort", "hover", "noBottomColumns", "noRecordsFoundLabel", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "rows", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

  return React.createElement("div", {
    "data-test": "datatable-table",
    className: "col-sm-12"
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    sortable: sortable,
    sorted: sorted
  }), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows,
    columns: columns
  }), !noBottomColumns && React.createElement(TableFoot, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns
  }), children));
};

DataTableTable.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  sorted: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  noBottomColumns: PropTypes.bool,
  rows: PropTypes.arrayOf(PropTypes.object)
};

var DataTableTableScroll = function DataTableTableScroll(props) {
  var autoWidth = props.autoWidth,
      bordered = props.bordered,
      borderless = props.borderless,
      btn = props.btn,
      children = props.children,
      columns = props.columns,
      dark = props.dark,
      fixed = props.fixed,
      handleSort = props.handleSort,
      handleTableBodyScroll = props.handleTableBodyScroll,
      hover = props.hover,
      maxHeight = props.maxHeight,
      responsive = props.responsive,
      responsiveLg = props.responsiveLg,
      responsiveMd = props.responsiveMd,
      responsiveSm = props.responsiveSm,
      responsiveXl = props.responsiveXl,
      rows = props.rows,
      scrollX = props.scrollX,
      scrollY = props.scrollY,
      small = props.small,
      sortable = props.sortable,
      sorted = props.sorted,
      striped = props.striped,
      tbodyColor = props.tbodyColor,
      tbodyTextWhite = props.tbodyTextWhite,
      theadColor = props.theadColor,
      theadTextWhite = props.theadTextWhite,
      translateScrollHead = props.translateScrollHead,
      attributes = _objectWithoutProperties(props, ["autoWidth", "bordered", "borderless", "btn", "children", "columns", "dark", "fixed", "handleSort", "handleTableBodyScroll", "hover", "maxHeight", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "rows", "scrollX", "scrollY", "small", "sortable", "sorted", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite", "translateScrollHead"]);

  var minWidth = scrollX ? "".concat(columns.map(function (col) {
    return col.width;
  }).reduce(function (prev, curr) {
    return prev + curr;
  }, 0), "px") : 'auto';
  return React.createElement("div", {
    "data-test": "datatable-table-scroll",
    className: "col-sm-12"
  }, React.createElement("div", {
    className: "dataTables_scroll"
  }, React.createElement("div", {
    className: "dataTables_scrollHead",
    style: {
      overflow: 'hidden'
    }
  }, React.createElement("div", {
    className: "dataTables_scrollHeadInner",
    style: {
      position: 'relative',
      transform: "translateX(-".concat(translateScrollHead, "px)"),
      boxSizing: 'content-box',
      paddingRight: scrollY ? '15px' : null,
      minWidth: minWidth
    }
  }, React.createElement(Table, _extends({
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement(DataTableHead, {
    color: theadColor,
    textWhite: theadTextWhite,
    columns: columns,
    handleSort: handleSort,
    scrollX: scrollX,
    scrollY: scrollY,
    sortable: sortable,
    sorted: sorted
  })))), React.createElement("div", {
    className: "dataTable_scrollBody",
    style: {
      overflow: 'auto'
    },
    onScroll: handleTableBodyScroll
  }, React.createElement(Table, _extends({
    style: {
      minWidth: minWidth
    },
    autoWidth: autoWidth,
    bordered: bordered,
    borderless: borderless,
    btn: btn,
    dark: dark,
    fixed: fixed,
    hover: hover,
    maxHeight: maxHeight,
    responsive: responsive,
    responsiveSm: responsiveSm,
    responsiveMd: responsiveMd,
    responsiveLg: responsiveLg,
    responsiveXl: responsiveXl,
    scrollY: scrollY,
    small: small,
    striped: striped,
    className: "dataTable"
  }, attributes), React.createElement("colgroup", null, columns.map(function (col) {
    return React.createElement("col", {
      key: col.field,
      style: {
        width: "".concat(col.width, "px") || 'auto',
        minWidth: "".concat(col.width, "px") || 'auto'
      }
    });
  })), React.createElement(TableBody, {
    color: tbodyColor,
    textWhite: tbodyTextWhite,
    rows: rows,
    columns: columns
  }), children))));
};

DataTableTableScroll.propTypes = {
  autoWidth: PropTypes.bool.isRequired,
  bordered: PropTypes.bool.isRequired,
  borderless: PropTypes.bool.isRequired,
  btn: PropTypes.bool.isRequired,
  dark: PropTypes.bool.isRequired,
  fixed: PropTypes.bool.isRequired,
  handleSort: PropTypes.func.isRequired,
  handleTableBodyScroll: PropTypes.func.isRequired,
  hover: PropTypes.bool.isRequired,
  responsive: PropTypes.bool.isRequired,
  responsiveLg: PropTypes.bool.isRequired,
  responsiveMd: PropTypes.bool.isRequired,
  responsiveSm: PropTypes.bool.isRequired,
  responsiveXl: PropTypes.bool.isRequired,
  small: PropTypes.bool.isRequired,
  sortable: PropTypes.bool.isRequired,
  sorted: PropTypes.bool.isRequired,
  striped: PropTypes.bool.isRequired,
  tbodyColor: PropTypes.string.isRequired,
  tbodyTextWhite: PropTypes.bool.isRequired,
  theadColor: PropTypes.string.isRequired,
  theadTextWhite: PropTypes.bool.isRequired,
  translateScrollHead: PropTypes.number.isRequired,
  children: PropTypes.node,
  columns: PropTypes.arrayOf(PropTypes.object),
  maxHeight: PropTypes.string,
  rows: PropTypes.arrayOf(PropTypes.object),
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool
};

var ControlledSelectInput = React.forwardRef(function (_ref, inputRef) {
  var value = _ref.value,
      required = _ref.required;
  return React.createElement("input", {
    "data-test": "controlled-select-input",
    type: "text",
    ref: inputRef,
    required: required,
    value: value,
    onChange: function onChange() {},
    onTouchStart: function onTouchStart(e) {
      e.stopPropagation();
      e.target.setAttribute('readonly', 'true');
    },
    className: "select-dropdown",
    onFocus: function onFocus(e) {
      e.target.style.caretColor = 'transparent';
    }
  });
});
ControlledSelectInput.propTypes = {
  required: PropTypes.bool,
  value: PropTypes.string
};
ControlledSelectInput.defaultProps = {
  required: false
};

var Input =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input, _React$Component);

  function Input() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      innerValue: _this.props.value || _this.props.valueDefault,
      isFocused: false,
      isPristine: true
    });

    _defineProperty(_assertThisInitialized(_this), "inputElementRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onBlur", function (event) {
      event.stopPropagation();
      var onBlur = _this.props.onBlur;

      _this.setState({
        isFocused: false
      });

      onBlur && onBlur(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onFocus", function (event) {
      event.stopPropagation();
      var onFocus = _this.props.onFocus;

      _this.setState({
        isFocused: true
      });

      onFocus && onFocus(event);
    });

    _defineProperty(_assertThisInitialized(_this), "onChange", function (event) {
      event.stopPropagation();
      var _this$props = _this.props,
          type = _this$props.type,
          onChange = _this$props.onChange,
          getValue = _this$props.getValue;

      if (type !== 'checkbox' && type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      onChange && onChange(event);
      getValue && getValue(event.target.value);
    });

    _defineProperty(_assertThisInitialized(_this), "onInput", function (event) {
      event.stopPropagation();
      var _this$props2 = _this.props,
          type = _this$props2.type,
          onInput = _this$props2.onInput;

      if (type !== 'checkbox' && type !== 'radio') {
        _this.setState({
          innerValue: event.target.value,
          isPristine: false
        });
      }

      onInput && onInput(event);
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function () {
      _this.inputElementRef.current.focus();
    });

    return _this;
  }

  _createClass(Input, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      // User wants to access the input ref, but we have to use it intenrally to.
      // Return Ref instance to share ref with parent
      // then user sets ref as a callback -> inputRef={ref => this.myInputRef = ref}
      var inputRef = this.props.inputRef;
      inputRef && inputRef(this.inputElementRef.current);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          background = _this$props3.background,
          children = _this$props3.children,
          className = _this$props3.className,
          containerClass = _this$props3.containerClass,
          disabled = _this$props3.disabled,
          error = _this$props3.error,
          filled = _this$props3.filled,
          gap = _this$props3.gap,
          getValue = _this$props3.getValue,
          group = _this$props3.group,
          hint = _this$props3.hint,
          icon = _this$props3.icon,
          iconBrand = _this$props3.iconBrand,
          iconClass = _this$props3.iconClass,
          iconLight = _this$props3.iconLight,
          onIconClick = _this$props3.onIconClick,
          onIconMouseEnter = _this$props3.onIconMouseEnter,
          onIconMouseLeave = _this$props3.onIconMouseLeave,
          iconRegular = _this$props3.iconRegular,
          iconSize = _this$props3.iconSize,
          id = _this$props3.id,
          inputRef = _this$props3.inputRef,
          noTag = _this$props3.noTag,
          outline = _this$props3.outline,
          label = _this$props3.label,
          labelClass = _this$props3.labelClass,
          labelId = _this$props3.labelId,
          size = _this$props3.size,
          success = _this$props3.success,
          Tag = _this$props3.tag,
          type = _this$props3.type,
          validate = _this$props3.validate,
          value = _this$props3.value,
          valueDefault = _this$props3.valueDefault,
          attributes = _objectWithoutProperties(_this$props3, ["background", "children", "className", "containerClass", "disabled", "error", "filled", "gap", "getValue", "group", "hint", "icon", "iconBrand", "iconClass", "iconLight", "onIconClick", "onIconMouseEnter", "onIconMouseLeave", "iconRegular", "iconSize", "id", "inputRef", "noTag", "outline", "label", "labelClass", "labelId", "size", "success", "tag", "type", "validate", "value", "valueDefault"]);

      var _this$state = this.state,
          innerValue = _this$state.innerValue,
          isFocused = _this$state.isFocused;
      var isNotEmpty = (!!innerValue || !!hint || isFocused || innerValue === 0) && type !== 'checkbox' && type !== 'radio';
      var TagInput = '';
      var formControlClass = '';

      if (type === 'textarea') {
        formControlClass = outline ? 'form-control' : 'md-textarea form-control';
        TagInput = 'textarea';
      } else {
        formControlClass = 'form-control';
        TagInput = 'input';
        attributes.type = type;
      }

      attributes.disabled = disabled;
      var classes = classNames(formControlClass, size ? "form-control-".concat(size) : false, validate ? 'validate' : false, filled ? 'filled-in' : false, gap ? 'with-gap' : false, type === 'checkbox' ? gap ? false : 'form-check-input' : false, type === 'radio' ? 'form-check-input' : false, className);
      var containerClassFix = classNames(type === 'checkbox' || type === 'radio' ? typeof label === 'boolean' && label ? 'd-flex' : 'form-check' : 'md-form', group ? 'form-group' : false, size ? "form-".concat(size) : false, outline && 'md-outline', background && 'md-bg', containerClass);
      var iconClassFix = classNames(isNotEmpty && isFocused ? 'active' : false, iconClass, 'prefix');
      var labelClassFix = classNames(isNotEmpty ? 'active' : false, disabled ? 'disabled' : false, type === 'checkbox' ? 'form-check-label' : false, type === 'radio' ? 'form-check-label' : false, labelClass);

      var renderFunction = function renderFunction() {
        return React.createElement(React.Fragment, null, icon && React.createElement(Fa, {
          icon: icon,
          size: iconSize,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          className: iconClassFix,
          onClick: onIconClick || _this2.setFocus,
          onMouseEnter: onIconMouseEnter,
          onMouseLeave: onIconMouseLeave
        }), React.createElement(TagInput, _extends({
          "data-test": "input"
        }, attributes, {
          className: classes,
          id: id,
          placeholder: hint,
          ref: _this2.inputElementRef,
          value: innerValue,
          onBlur: _this2.onBlur,
          onChange: _this2.onChange,
          onInput: _this2.onInput,
          onFocus: _this2.onFocus
        })), label && React.createElement("label", {
          className: labelClassFix,
          htmlFor: id,
          "data-error": error,
          "data-success": success,
          id: labelId,
          onClick: _this2.setFocus
        }, label), children);
      };

      return noTag ? renderFunction() : React.createElement(Tag, {
        className: containerClassFix
      }, renderFunction());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      if (nextProps.value !== prevState.value) {
        return {
          innerValue: nextProps.value
        };
      }

      return null;
    }
  }]);

  return Input;
}(React.Component);

Input.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  containerClass: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  filled: PropTypes.bool,
  gap: PropTypes.bool,
  getValue: PropTypes.func,
  group: PropTypes.bool,
  hint: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  inputRef: PropTypes.oneOfType([PropTypes.object, PropTypes.func]),
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object, PropTypes.bool]),
  labelClass: PropTypes.string,
  labelId: PropTypes.string,
  noTag: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onIconClick: PropTypes.func,
  onIconMouseEnter: PropTypes.func,
  onIconMouseLeave: PropTypes.func,
  onInput: PropTypes.func,
  outline: PropTypes.bool,
  size: PropTypes.string,
  success: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string,
  validate: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  valueDefault: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};
Input.defaultProps = {
  className: '',
  containerClass: '',
  disabled: false,
  error: '',
  filled: false,
  gap: false,
  group: false,
  hint: undefined,
  icon: '',
  iconBrand: false,
  iconClass: '',
  iconLight: false,
  onIconMouseEnter: function onIconMouseEnter() {},
  onIconMouseLeave: function onIconMouseLeave() {},
  iconRegular: false,
  iconSize: undefined,
  id: undefined,
  noTag: false,
  outline: false,
  label: '',
  labelClass: '',
  labelId: '',
  size: '',
  success: '',
  tag: 'div',
  type: 'text',
  validate: false,
  valueDefault: ''
};

var ControlledSelectOption = function ControlledSelectOption(_ref) {
  var checked = _ref.checked,
      disabled = _ref.disabled,
      icon = _ref.icon,
      multiple = _ref.multiple,
      selectOption = _ref.selectOption,
      text = _ref.text,
      value = _ref.value,
      separator = _ref.separator,
      isFocused = _ref.isFocused,
      focusShadow = _ref.focusShadow,
      focusBackgroundColor = _ref.focusBackgroundColor,
      selectAllClassName = _ref.selectAllClassName;
  var classes = classNames((disabled || separator) && 'disabled', separator && 'optgroup', checked && 'active');
  var spanClasses = classNames('filtrable', selectAllClassName && selectAllClassName);
  var focusedStyles = {
    backgroundColor: isFocused ? focusBackgroundColor : null,
    boxShadow: isFocused ? focusShadow : null
  };
  return React.createElement("li", {
    "data-test": "controlled-select-option",
    "data-multiple": multiple,
    className: classes,
    onClick: function onClick() {
      return selectOption(value);
    },
    style: focusedStyles
  }, icon && React.createElement("img", {
    src: icon,
    alt: "",
    className: "rounded-circle"
  }), React.createElement("span", {
    "data-multiple": multiple,
    className: spanClasses
  }, multiple && React.createElement(React.Fragment, null, React.createElement("input", {
    type: "checkbox",
    value: value,
    className: "form-check-input",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  }), !separator && React.createElement("label", {
    style: {
      height: '10px'
    },
    "data-multiple": multiple
  })), text || value));
};

ControlledSelectOption.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  focusBackgroundColor: PropTypes.string,
  focusShadow: PropTypes.string,
  icon: PropTypes.string,
  isFocused: PropTypes.bool,
  multiple: PropTypes.bool,
  selectAllClassName: PropTypes.string,
  selectOption: PropTypes.func,
  separator: PropTypes.bool,
  text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  value: PropTypes.string
};
ControlledSelectOption.defaultProps = {
  checked: false,
  disabled: false,
  focusShadow: 'inset 0px -17px 15px -16px rgba(0, 0, 0, 0.35)',
  focusBackgroundColor: '#eee',
  icon: '',
  isFocused: false,
  multiple: false,
  separator: false
};

var ControlledSelectOptions =
/*#__PURE__*/
function (_Component) {
  _inherits(ControlledSelectOptions, _Component);

  function ControlledSelectOptions() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ControlledSelectOptions);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ControlledSelectOptions)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      filteredOptions: _this.props.options || [],
      options: _this.props.options || [],
      searchValue: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", null);

    _defineProperty(_assertThisInitialized(_this), "search", function (value) {
      var _this$props = _this.props,
          changeFocus = _this$props.changeFocus,
          setFilteredOptions = _this$props.setFilteredOptions;
      var options = _this.state.options;
      var filteredOptions = options.filter(function (option) {
        if (option.text) {
          return option.text.toLowerCase().match(value.toLowerCase().trim());
        }

        return option.value.toLowerCase().match(value.toLowerCase().trim());
      });
      changeFocus(null);

      _this.setState({
        filteredOptions: filteredOptions
      }, function () {
        return setFilteredOptions(filteredOptions);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      var _this$props2 = _this.props,
          changeFocus = _this$props2.changeFocus,
          focused = _this$props2.focused,
          selectAll = _this$props2.selectAll,
          selectAllValue = _this$props2.selectAllValue,
          selectOption = _this$props2.selectOption;
      var filteredOptions = _this.state.filteredOptions;
      var ENTER = e.keyCode === 13;
      var ESC = e.keyCode === 27;
      var UP = e.keyCode === 38;
      var DOWN = e.keyCode === 40;
      (DOWN || UP || ENTER) && e.preventDefault();

      if (ENTER && focused !== null) {
        focused === -1 ? selectOption(selectAllValue) : selectOption(filteredOptions[focused].value);
      }

      ESC && changeFocus(null);

      if (DOWN) {
        if (focused === null) {
          selectAll && filteredOptions.length !== 1 ? changeFocus(-1) : changeFocus(0);
        } else {
          focused < filteredOptions.length - 1 && changeFocus(1);
        }
      }

      if (UP) {
        focused >= (selectAll ? 0 : 1) && filteredOptions.length > 1 && changeFocus(-1);
      }
    });

    return _this;
  }

  _createClass(ControlledSelectOptions, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var inputRef = this.props.inputRef;

      if (inputRef.current) {
        this.inputRef = inputRef.current;
      }

      this.inputRef.addEventListener('keydown', this.handleFocus);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.inputRef.removeEventListener('keydown', this.handleFocus);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var options = this.props.options;

      if (prevState.options !== options) {
        this.setState({
          filteredOptions: options,
          options: options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          allChecked = _this$props3.allChecked,
          focused = _this$props3.focused,
          focusShadow = _this$props3.focusShadow,
          focusBackgroundColor = _this$props3.focusBackgroundColor,
          multiple = _this$props3.multiple,
          search = _this$props3.search,
          searchLabel = _this$props3.searchLabel,
          searchId = _this$props3.searchId,
          selected = _this$props3.selected,
          selectOption = _this$props3.selectOption,
          selectAll = _this$props3.selectAll,
          selectAllLabel = _this$props3.selectAllLabel,
          selectAllValue = _this$props3.selectAllValue,
          selectAllClassName = _this$props3.selectAllClassName;
      var filteredOptions = this.state.filteredOptions;
      var classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement');
      return React.createElement("ul", {
        "data-test": "controlled-select-options",
        className: classes
      }, search && React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true",
        onKeyDown: this.handleFocus
      }), React.createElement(ControlledSelectOption, {
        checked: false,
        disabled: true,
        icon: null,
        value: selected
      }), selectAll && multiple && filteredOptions.length > 1 && React.createElement(ControlledSelectOption, {
        text: selectAllLabel,
        value: selectAllValue,
        selectAllClassName: selectAllClassName,
        checked: allChecked,
        multiple: true,
        selectOption: selectOption,
        isFocused: focused === -1,
        focusShadow: focusShadow,
        focusBackgroundColor: focusBackgroundColor
      }), filteredOptions.map(function (option, index) {
        return React.createElement(ControlledSelectOption, {
          key: "".concat(option.value, "-").concat(index),
          checked: option.checked,
          disabled: option.disabled,
          multiple: multiple,
          icon: option.icon,
          text: option.text,
          value: option.value,
          separator: option.separator,
          selectOption: selectOption,
          isFocused: index === focused,
          focusShadow: focusShadow,
          focusBackgroundColor: focusBackgroundColor
        });
      }));
    }
  }]);

  return ControlledSelectOptions;
}(Component);

ControlledSelectOptions.propTypes = {
  selected: PropTypes.string.isRequired,
  selectOption: PropTypes.func.isRequired,
  allChecked: PropTypes.bool,
  changeFocus: PropTypes.func,
  focusBackgroundColor: PropTypes.string,
  focused: PropTypes.number,
  focusShadow: PropTypes.string,
  inputRef: PropTypes.shape({
    current: PropTypes.instanceOf(typeof Element === 'undefined' ? function () {} : Element)
  }),
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    image: PropTypes.string,
    separator: PropTypes.bool,
    text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    value: PropTypes.string
  })),
  search: PropTypes.bool,
  searchId: PropTypes.string,
  searchLabel: PropTypes.string,
  selectAllClassName: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string,
  setFilteredOptions: PropTypes.func
};
ControlledSelectOptions.defaultProps = {
  focused: null,
  multiple: false,
  options: [],
  search: false,
  searchId: 'selectSearchInput',
  searchLabel: 'Search',
  selectAllLabel: 'Select All'
};

var SelectContext = React.createContext();

var Select =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Select, _React$Component);

  function Select(props) {
    var _this;

    _classCallCheck(this, Select);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Select).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "onInputClick", function (_ref) {
      var input = _ref.target;
      var dropdown = input.nextElementSibling;
      dropdown.classList.add('fadeIn');
      !_this.props.outline && (dropdown.style.top = '.6rem');

      _this.setState({
        dropdown: dropdown,
        input: input
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onDocumentClick", function (_ref2) {
      var target = _ref2.target;
      var _this$state = _this.state,
          dropdown = _this$state.dropdown,
          input = _this$state.input;

      if (dropdown) {
        var isMultiple = target.dataset.multiple === 'true';
        var isSearchLabel = target.id === 'selectSearchInput';

        if (target === input || isMultiple || isSearchLabel) ; else {
          dropdown.classList.remove('fadeIn');

          _this.changeFocus(null);

          _this.setState({
            dropdown: null
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "computeValuesAndText", function (options) {
      var checkedOptions = options.filter(function (option) {
        return option.checked;
      });
      var checkedValues = checkedOptions.map(function (opt) {
        return opt.value;
      });
      var checkedTexts = checkedOptions.map(function (opt) {
        return opt.text ? opt.text : opt.value;
      });
      var selectTextContent = checkedTexts.length ? checkedTexts.join(', ') : _this.props.selected;
      var allChecked = checkedOptions.length === options.filter(function (option) {
        return !option.disabled;
      }).length;
      return {
        isControlledEmpty: !checkedOptions.length,
        selectValue: checkedValues,
        selectTextContent: selectTextContent,
        allChecked: allChecked
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setFilteredOptions", function (filteredOptions) {
      _this.setState({
        filteredOptions: filteredOptions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setOptionStatus", function (option, status) {
      if (!option.disabled) {
        option.checked = status;
      }

      return option;
    });

    _defineProperty(_assertThisInitialized(_this), "applyFilteredOptionsChanges", function (options, filteredOptions) {
      filteredOptions.forEach(function (filteredOption) {
        var index = options.findIndex(function (option) {
          return option.value === filteredOption.value;
        });
        filteredOption.checked !== options[index].checked && _this.setOptionStatus(options[index], filteredOption.checked);
      });
      return options;
    });

    _defineProperty(_assertThisInitialized(_this), "changeFocus", function (value) {
      switch (value) {
        case null:
          _this.setState(function (prevState) {
            return prevState.focused !== value ? {
              focused: null
            } : null;
          });

          break;

        case 0:
          _this.setState({
            focused: 0
          });

          break;

        default:
          _this.setState(function (prevState) {
            return {
              focused: prevState.focused + value
            };
          });

          break;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "selectOneOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options.forEach(function (option, index) {
          return index !== optionIndex ? _this.setOptionStatus(option, false) : _this.setOptionStatus(option, !option.checked);
        });
        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectMultipleOption", function (value) {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var optionIndex = options.findIndex(function (option) {
          return option.value === value;
        });
        options[optionIndex].checked = !options[optionIndex].checked;
        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectAllOptions", function () {
      _this.setState(function (prevState) {
        var options = _toConsumableArray(prevState.options);

        var filteredOptions = _toConsumableArray(prevState.filteredOptions).filter(function (option) {
          return !option.disabled;
        });

        var areSomeUnchecked = filteredOptions.some(function (option) {
          return !option.checked;
        });
        areSomeUnchecked ? filteredOptions.map(function (option) {
          return !option.checked && _this.setOptionStatus(option, true);
        }) : filteredOptions.map(function (option) {
          return _this.setOptionStatus(option, false);
        });

        if (filteredOptions.length !== options.length) {
          options = _this.applyFilteredOptionsChanges(options, filteredOptions);
        }

        return _this.computeValuesAndText(options);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "selectOption", function (value) {
      if (_this.props.multiple) {
        value === _this.props.selectAllValue ? _this.selectAllOptions() : _this.selectMultipleOption(value);
      } else {
        _this.selectOneOption(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "triggerOptionChange", function () {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var text = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.state.selectedValue;
      Array.isArray(text) && (text = text.join(', '));

      _this.setState({
        selectValue: value,
        selectTextContent: text,
        isEmpty: !value.length
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setSelected", function (selectedValue) {
      return _this.setState({
        selectedValue: selectedValue
      });
    });

    _defineProperty(_assertThisInitialized(_this), "returnComponentContent", function () {
      var _this$props = _this.props,
          className = _this$props.className,
          color = _this$props.color,
          children = _this$props.children,
          getTextContent = _this$props.getTextContent,
          getValue = _this$props.getValue,
          label = _this$props.label,
          labelClass = _this$props.labelClass,
          multiple = _this$props.multiple,
          outline = _this$props.outline,
          required = _this$props.required,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          selected = _this$props.selected,
          selectAll = _this$props.selectAll,
          selectAllClassName = _this$props.selectAllClassName,
          selectAllLabel = _this$props.selectAllLabel,
          selectAllValue = _this$props.selectAllValue,
          focusShadow = _this$props.focusShadow,
          focusBackgroundColor = _this$props.focusBackgroundColor,
          attributes = _objectWithoutProperties(_this$props, ["className", "color", "children", "getTextContent", "getValue", "label", "labelClass", "multiple", "outline", "required", "search", "searchLabel", "searchId", "selected", "selectAll", "selectAllClassName", "selectAllLabel", "selectAllValue", "focusShadow", "focusBackgroundColor"]);

      var _this$state2 = _this.state,
          isEmpty = _this$state2.isEmpty,
          isControlledEmpty = _this$state2.isControlledEmpty,
          isOpened = _this$state2.dropdown,
          selectTextContent = _this$state2.selectTextContent;
      var classes = classNames('select-wrapper mdb-select md-form', color ? 'colorful-select dropdown-' + color : '', outline ? 'md-outline' : '', className);
      var labelClasses = classNames(!outline && 'mdb-main-label', labelClass, children ? (!isEmpty || isOpened) && 'active text-primary' : (!isControlledEmpty || isOpened) && 'active text-primary');
      var needToMoveOutline = outline && isEmpty && !isOpened;
      var uncontrolledLabelStyles = {
        transform: needToMoveOutline && 'translateY(7px)',
        fontSize: needToMoveOutline && '1rem',
        fontWeight: needToMoveOutline && '300',
        zIndex: isEmpty && !isOpened ? 1 : 2
      };
      var controlledLabelStyles = {
        zIndex: outline && (!isControlledEmpty || isOpened) && 4,
        transform: isControlledEmpty && !isOpened && 'translateY(7px)'
      };

      if (!children) {
        var controlledValue = isControlledEmpty ? selected && !label ? selected : '' : selectTextContent;
        return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, attributes, {
          "data-color": color,
          "data-multiple": multiple,
          className: classes
        }), React.createElement("span", {
          className: "caret"
        }, "\u25BC"), React.createElement(ControlledSelectInput, {
          value: controlledValue,
          ref: _this.inputRef,
          required: required
        }), React.createElement(ControlledSelectOptions, {
          multiple: multiple,
          options: _this.state.options,
          search: search,
          searchLabel: searchLabel,
          selected: selected,
          selectOption: _this.selectOption,
          selectAll: selectAll,
          selectAllClassName: selectAllClassName,
          selectAllLabel: selectAllLabel,
          selectAllValue: selectAllValue,
          allChecked: _this.state.allChecked,
          inputRef: _this.inputRef,
          setFilteredOptions: _this.setFilteredOptions,
          focused: _this.state.focused,
          changeFocus: _this.changeFocus,
          focusShadow: focusShadow,
          focusBackgroundColor: focusBackgroundColor
        }), label && React.createElement("label", {
          className: labelClasses,
          style: controlledLabelStyles
        }, label)));
      }

      return React.createElement(SelectContext.Provider, {
        value: {
          state: _this.state,
          multiple: multiple,
          triggerOptionChange: _this.triggerOptionChange,
          label: label,
          setSelected: _this.setSelected,
          onInputClick: _this.onInputClick
        }
      }, React.createElement("div", _extends({}, attributes, {
        "data-color": color,
        "data-multiple": multiple,
        className: classes
      }), React.createElement("span", {
        className: "caret"
      }, "\u25BC"), children, label && React.createElement("label", {
        className: labelClasses,
        style: uncontrolledLabelStyles
      }, label)));
    });

    _this.state = {
      selectedValue: '',
      isEmpty: true,
      isControlledEmpty: true,
      selectValue: [],
      selectTextContent: '',
      options: _this.props.options || [],
      allChecked: false,
      focused: null,
      filteredOptions: _this.props.options || [],
      input: null,
      dropdown: null
    };
    _this.inputRef = React.createRef();

    if (_this.props.options && _this.props.options.length) {
      Object.assign(_this.state, _this.computeValuesAndText(_this.props.options));
    }

    return _this;
  }

  _createClass(Select, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('click', this.onDocumentClick);

      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.addEventListener('click', this.onInputClick);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.selectValue !== this.state.selectValue) {
        if (typeof this.props.getValue === 'function') {
          this.props.getValue(this.state.selectValue);
        }

        if (typeof this.props.getTextContent === 'function') {
          this.props.getTextContent(this.state.selectTextContent);
        }

        if (!this.props.children) {
          this.setState({
            isControlledEmpty: !this.state.options.some(function (option) {
              return option.checked;
            })
          });
        }
      }

      if (this.props.options !== prevProps.options) {
        var _this$computeValuesAn = this.computeValuesAndText(this.props.options),
            selectValue = _this$computeValuesAn.selectValue,
            selectTextContent = _this$computeValuesAn.selectTextContent,
            allChecked = _this$computeValuesAn.allChecked;

        this.setState({
          options: this.props.options,
          filteredOptions: this.props.options,
          selectValue: selectValue,
          selectTextContent: selectTextContent,
          allChecked: allChecked
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('click', this.onDocumentClick);

      if (this.inputRef && this.inputRef.current) {
        this.inputRef.current.removeEventListener('click', this.onInputClick);
      }
    } // open nieghbour ul of clicked input

  }, {
    key: "render",
    value: function render() {
      return this.returnComponentContent();
    }
  }]);

  return Select;
}(React.Component);

Select.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  focusBackgroundColor: PropTypes.string,
  focusShadow: PropTypes.string,
  getTextContent: PropTypes.func,
  getValue: PropTypes.func,
  label: PropTypes.string,
  labelClass: PropTypes.string,
  multiple: PropTypes.bool,
  options: PropTypes.arrayOf(PropTypes.shape({
    checked: PropTypes.bool,
    disabled: PropTypes.bool,
    icon: PropTypes.string,
    text: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    value: PropTypes.string
  })),
  outline: PropTypes.bool,
  required: PropTypes.bool,
  search: PropTypes.bool,
  searchId: PropTypes.string,
  searchLabel: PropTypes.string,
  selectAllClassName: PropTypes.string,
  selectAllLabel: PropTypes.string,
  selectAllValue: PropTypes.string,
  selected: PropTypes.string
};
Select.defaultProps = {
  label: '',
  labelClass: '',
  outline: false,
  required: false,
  selected: '',
  selectAllValue: '0'
};

var selectContextHOC = function selectContextHOC(Component) {
  return (
    /*#__PURE__*/
    function (_React$Component) {
      _inherits(HOC, _React$Component);

      function HOC() {
        _classCallCheck(this, HOC);

        return _possibleConstructorReturn(this, _getPrototypeOf(HOC).apply(this, arguments));
      }

      _createClass(HOC, [{
        key: "render",
        value: function render() {
          var _this = this;

          return React.createElement(SelectContext.Consumer, null, function (context) {
            return React.createElement(Component, _extends({}, _this.props, {
              context: context
            }));
          });
        }
      }]);

      return HOC;
    }(React.Component)
  );
};

var SelectInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SelectInput, _React$Component);

  function SelectInput() {
    _classCallCheck(this, SelectInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(SelectInput).apply(this, arguments));
  }

  _createClass(SelectInput, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.selected && this.props.context.setSelected(this.props.selected);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevProps.context.state.isEmpty !== this.props.context.state.isEmpty) {
        this.props.selected && this.props.context.setSelected(this.props.selected);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var classes = classNames('select-dropdown', this.props.className);
      var _this$props = this.props,
          attributes = _this$props.attributes,
          context = _this$props.context;
      var value = context.state.isEmpty ? this.props.selected && !context.label ? this.props.selected : '' : context.state.selectTextContent;
      return React.createElement("input", _extends({
        type: "text",
        readOnly: true,
        onClick: function onClick(e) {
          return context.onInputClick(e);
        },
        value: value
      }, attributes, {
        className: classes
      }));
    }
  }]);

  return SelectInput;
}(React.Component);

SelectInput.propTypes = {
  context: PropTypes.object.isRequired,
  className: PropTypes.string,
  selected: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};
SelectInput.defaultProps = {
  className: ''
};
var SelectInput$1 = SelectInput = selectContextHOC(SelectInput);

var css$5 = ".fadeElement {\r\n  -webkit-transition: 0.5s;\r\n  -moz-transition: 0.5s;\r\n  -o-transition: 0.5s;\r\n  transition: 0.5s;\r\n  display: block;\r\n  width: 100%;\r\n  top: 0;\r\n  opacity: 0;\r\n  transform-origin:top;\r\n  transform:scaleY(0.7);\r\n  visibility: hidden;\r\n  pointer-events: none;\r\n}\r\n.fadeElement.fadeIn {\r\n  transform:scaleY(1);\r\n  opacity: 1;\r\n  visibility: visible;\r\n  pointer-events: auto;\r\n}\r\n";
styleInject(css$5);

var Options =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Options, _React$Component);

  function Options(props) {
    var _this;

    _classCallCheck(this, Options);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Options).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "search", function (value) {
      _this.state.options.forEach(function (option) {
        if (!option.children[0].innerText.toLowerCase().includes(value.toLowerCase())) {
          option.style.display = 'none';
        } else {
          option.style.display = 'flex';
        }
      });
    });

    _this.state = {
      options: [],
      searchValue: ''
    };
    _this.optionsRef = React.createRef();
    return _this;
  }

  _createClass(Options, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this.props.search) {
        var options = Array.from(this.optionsRef.current.children).filter(function (child) {
          return child.tagName === 'LI';
        });
        this.setState({
          options: options
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          search = _this$props.search,
          searchLabel = _this$props.searchLabel,
          searchId = _this$props.searchId,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "search", "searchLabel", "searchId"]);

      var classes = classNames('dropdown-content', 'select-dropdown', 'fadeElement', className);
      return React.createElement("ul", _extends({}, attributes, {
        className: classes,
        ref: this.optionsRef
      }), search && React.createElement("div", {
        className: "mx-2"
      }, React.createElement(Input, {
        label: searchLabel,
        id: searchId,
        getValue: this.search,
        "data-search": "true"
      })), children);
    }
  }]);

  return Options;
}(React.Component);

Options.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  search: PropTypes.bool,
  searchId: PropTypes.string,
  searchLabel: PropTypes.string
};
Options.defaultProps = {
  className: '',
  search: false,
  searchLabel: 'Search',
  searchId: 'selectSearchInput'
};

var Option =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Option, _React$Component);

  function Option(props) {
    var _this;

    _classCallCheck(this, Option);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Option).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "selectOption", function () {
      if (!_this.props.disabled) {
        var selectedOption = _this.optionRef.current;
        var value = [];
        var text;
        var options = selectedOption.parentNode.children;

        if (_this.state.multiple) {
          text = [];

          if (selectedOption.classList.contains('active')) {
            selectedOption.classList.remove('active');

            _this.setState({
              checked: false
            });
          } else {
            selectedOption.classList.add('active');

            _this.setState({
              checked: true
            });
          } // iterate throught child nodes options and add checked to arr


          Array.from(options).forEach(function (option) {
            if (option.classList.contains('active')) {
              text.push(option.textContent);
              option.getElementsByTagName('input')[0].value ? value.push(option.getElementsByTagName('input')[0].value) : value.push(option.textContent);
            }
          });
        } else {
          Array.from(selectedOption.children).forEach(function (child) {
            if (child.nodeName === 'SPAN') {
              text = child.textContent;
              _this.props.value ? value.push(_this.props.value) : value.push(text);
            }
          });
          Array.from(options).forEach(function (option) {
            return option.classList.remove('active');
          });
          selectedOption.classList.add('active');
        }

        value.length ? _this.props.context.triggerOptionChange(value, text) : _this.props.context.triggerOptionChange();
      }
    });

    _this.state = {
      multiple: _this.props.context.multiple || false,
      checked: _this.props.checked || _this.props.selected || false
    };
    _this.optionRef = React.createRef();
    return _this;
  }

  _createClass(Option, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (!this.state.multiple) {
        this.state.checked && this.optionRef.current.click();
      } else if (!this.props.disabled) {
        !this.state.checked && this.optionRef.current.classList.add('active');
        this.selectOption();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          children = _this$props.children,
          disabled = _this$props.disabled,
          separator = _this$props.separator,
          icon = _this$props.icon,
          triggerOptionClick = _this$props.triggerOptionClick,
          value = _this$props.value,
          attributes = _objectWithoutProperties(_this$props, ["className", "children", "disabled", "separator", "icon", "triggerOptionClick", "value"]);

      var classes = classNames(disabled || separator ? 'disabled' : '', separator ? 'optgroup' : '', className, 'justify-content-between align-items-center');
      var input = null;
      var label = null;

      if (this.state.multiple) {
        if (!disabled) {
          input = React.createElement("input", {
            type: "checkbox",
            value: value,
            onChange: function onChange() {
              return false;
            },
            className: "form-check-input",
            checked: this.state.checked
          });
          label = React.createElement("label", {
            style: {
              height: '10px'
            },
            "data-multiple": this.state.multiple
          });
        } else {
          input = React.createElement("input", {
            type: "checkbox",
            className: "form-check-input",
            disabled: true
          });
          label = React.createElement("label", {
            style: {
              height: '10px'
            },
            "data-multiple": this.state.multiple
          });
        }
      }

      return React.createElement("li", _extends({
        ref: this.optionRef
      }, attributes, {
        "data-multiple": this.state.multiple,
        className: classes,
        onClick: this.selectOption,
        style: {
          display: 'flex'
        }
      }), React.createElement("span", {
        "data-multiple": this.state.multiple,
        className: "filtrable",
        style: {
          flex: '1'
        }
      }, !separator ? input : null, label, children), icon && React.createElement("img", {
        src: this.props.icon,
        alt: "icon",
        className: "rounded-circle"
      }));
    }
  }]);

  return Option;
}(React.Component);

Option.propTypes = {
  checked: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  separator: PropTypes.bool,
  triggerOptionClick: PropTypes.func,
  value: PropTypes.any
};
Option.defaultProps = {
  children: 'span',
  checked: false,
  className: '',
  disabled: false,
  separator: false,
  icon: '',
  triggerOptionClick: function triggerOptionClick() {},
  value: ''
};
var SelectOption = Option = selectContextHOC(Option);

var DataTableSelect = function DataTableSelect(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      entries = _ref.entries,
      label = _ref.label,
      barReverse = _ref.barReverse;
  return React.createElement("div", {
    "data-test": "datatable-select",
    className: classNames('dataTables_length', 'd-flex', 'flex-row', barReverse && 'justify-content-end')
  }, React.createElement("label", {
    className: "mt-4"
  }, label), React.createElement(Select, {
    getValue: onChange,
    className: "my-0"
  }, React.createElement(SelectInput$1, {
    selected: value
  }), React.createElement(Options, null, entries.map(function (entry, index) {
    return React.createElement(SelectOption, {
      checked: index === 0,
      key: entry,
      value: entry
    }, entry);
  }))));
};

DataTableSelect.propTypes = {
  entries: PropTypes.arrayOf(PropTypes.number).isRequired,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.number.isRequired,
  barReverse: PropTypes.bool
};

/*
// PRO-END
import DataTableSelect from '../DataTableSelect';
// PRO-START
*/
// FREE-END
// PRO-END

var DataTableEntries = function DataTableEntries(props) {
  var handleEntriesChange = props.handleEntriesChange,
      displayEntries = props.displayEntries,
      entries = props.entries,
      entriesArr = props.entriesArr,
      paging = props.paging,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    "data-test": "datatable-entries",
    className: "col-sm-12 col-md-6"
  }, paging && displayEntries && React.createElement(DataTableSelect, {
    value: entries,
    onChange: handleEntriesChange,
    entries: entriesArr,
    label: label,
    barReverse: barReverse
  }));
};

DataTableEntries.propTypes = {
  displayEntries: PropTypes.bool.isRequired,
  entries: PropTypes.number.isRequired,
  entriesArr: PropTypes.arrayOf(PropTypes.number).isRequired,
  handleEntriesChange: PropTypes.func.isRequired,
  label: PropTypes.oneOfType([PropTypes.number, PropTypes.object, PropTypes.string]).isRequired,
  paging: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool
};

var DataTableInput = function DataTableInput(_ref) {
  var value = _ref.value,
      onChange = _ref.onChange,
      label = _ref.label,
      barReverse = _ref.barReverse;
  return React.createElement("div", {
    "data-test": "datatable-input",
    className: classNames('dataTables_filter', 'md-form', 'flex-row', barReverse && 'text-left')
  }, React.createElement("input", {
    value: value,
    onChange: onChange,
    type: "search",
    className: "form-control form-control-sm",
    placeholder: label || 'Search'
  }));
};

DataTableInput.propTypes = {
  barReverse: PropTypes.bool,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
};

/*
// PRO-END
import DataTableInput from '../DataTableInput';
// PRO-START
*/
// FREE-END
// PRO-END

var DataTableSearch = function DataTableSearch(props) {
  var handleSearchChange = props.handleSearchChange,
      search = props.search,
      searching = props.searching,
      label = props.label,
      barReverse = props.barReverse;
  return React.createElement("div", {
    "data-test": "datatable-search",
    className: "col-sm-12 col-md-6"
  }, searching && React.createElement(DataTableInput, {
    value: search,
    onChange: handleSearchChange,
    label: label,
    barReverse: barReverse
  }));
};

DataTableSearch.propTypes = {
  handleSearchChange: PropTypes.func.isRequired,
  search: PropTypes.string.isRequired,
  searching: PropTypes.bool.isRequired,
  barReverse: PropTypes.bool,
  label: PropTypes.string
};

var DataTableInfo = function DataTableInfo(props) {
  var activePage = props.activePage,
      entries = props.entries,
      filteredRows = props.filteredRows,
      info = props.info,
      label = props.label,
      noRecordsFoundLabel = props.noRecordsFoundLabel,
      pages = props.pages;
  var SHOWING_LABEL = label[0];
  var TO_LABEL = label[1];
  var OF_LABEL = label[2];
  var ENTRIES_LABEL = label[3];
  var NO_RECORDS = filteredRows.length > 0 && filteredRows[0].message === noRecordsFoundLabel;
  var RECORDS = activePage > 0 ? activePage * entries + 1 : activePage + 1;
  var RECORDS_ON_PAGE = pages.length - 1 > activePage ? pages[activePage].length * (activePage + 1) : filteredRows.length;
  var ENTRIES = filteredRows.length;
  return React.createElement("div", {
    "data-test": "datatable-info",
    className: "col-sm-12 col-md-5"
  }, info && React.createElement("div", {
    className: "dataTables_info",
    role: "status",
    "aria-live": "polite"
  }, !NO_RECORDS ? "".concat(SHOWING_LABEL, " ").concat(RECORDS, " ").concat(TO_LABEL, " ").concat(RECORDS_ON_PAGE, " ").concat(OF_LABEL, " ").concat(ENTRIES, " ").concat(ENTRIES_LABEL) : "".concat(SHOWING_LABEL, " 0 ").concat(ENTRIES_LABEL)));
};

DataTableInfo.propTypes = {
  activePage: PropTypes.number.isRequired,
  entries: PropTypes.number.isRequired,
  filteredRows: PropTypes.array.isRequired,
  info: PropTypes.bool.isRequired,
  noRecordsFoundLabel: PropTypes.string.isRequired,
  pages: PropTypes.array.isRequired,
  label: PropTypes.arrayOf(PropTypes.string)
};
DataTableInfo.defaultProps = {
  label: ['Showing', 'to', 'of', 'entries']
};

var Pagination = function Pagination(props) {
  var _classNames;

  var children = props.children,
      circle = props.circle,
      className = props.className,
      color = props.color,
      Tag = props.tag,
      size = props.size,
      attributes = _objectWithoutProperties(props, ["children", "circle", "className", "color", "tag", "size"]);

  var classes = classNames((_classNames = {
    'pagination-circle': circle
  }, _defineProperty(_classNames, "pg-".concat(color), color), _defineProperty(_classNames, "pagination-".concat(size), size), _classNames), 'pagination', className);
  return React.createElement(Tag, _extends({
    "data-test": "pagination"
  }, attributes, {
    className: classes
  }), children);
};

Pagination.propTypes = {
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOf(['lg', 'sm']),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Pagination.defaultProps = {
  circle: false,
  className: '',
  color: '',
  tag: 'ul'
};

var PageItem = function PageItem(props) {
  var active = props.active,
      className = props.className,
      children = props.children,
      disabled = props.disabled,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "className", "children", "disabled", "tag"]);

  var classes = classNames({
    disabled: disabled,
    active: active
  }, 'page-item', className);
  return React.createElement(Tag, _extends({
    "data-test": "page-item"
  }, attributes, {
    className: classes
  }), children);
};

PageItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageItem.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  tag: 'li'
};

var PageLink = function PageLink(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('page-link', className);
  return React.createElement(Tag, _extends({
    "data-test": "page-link"
  }, attributes, {
    className: classes
  }), children);
};

PageLink.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PageLink.defaultProps = {
  tag: 'a'
};

var DataTablePagination =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTablePagination, _Component);

  function DataTablePagination() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTablePagination);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTablePagination)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      pages: _this.props.pages,
      pGroups: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      var pages = _this.props.pages;

      if (prevProps.pages !== pages) {
        _this.setState({
          pages: pages
        }, function () {
          return _this.groupPages();
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "pagesIndexify", function () {
      var pages = _this.state.pages;

      var mutablePages = _toConsumableArray(pages);

      mutablePages.forEach(function (page, index) {
        return page.index = index;
      });
      return mutablePages;
    });

    _defineProperty(_assertThisInitialized(_this), "groupPages", function () {
      var pGroups = [];

      var pages = _this.pagesIndexify();

      var pagesAmount = _this.props.pagesAmount;

      while (pages.length > 0) {
        pGroups.push(pages.splice(0, pagesAmount));
      }

      _this.setState({
        pGroups: pGroups
      });
    });

    _defineProperty(_assertThisInitialized(_this), "choosePagesGroup", function () {
      var _this$props = _this.props,
          activePage = _this$props.activePage,
          pagesAmount = _this$props.pagesAmount;
      var pGroups = _this.state.pGroups;
      var pGroupNumber = Math.floor(activePage / pagesAmount);
      return pGroups.length ? pGroups[pGroupNumber] : [];
    });

    return _this;
  }

  _createClass(DataTablePagination, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.groupPages();
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          activePage = _this$props2.activePage,
          changeActivePage = _this$props2.changeActivePage,
          pages = _this$props2.pages,
          label = _this$props2.label;
      return React.createElement("div", {
        "data-test": "datatable-pagination",
        className: "col-sm-12 col-md-7"
      }, React.createElement("div", {
        className: "dataTables_paginate"
      }, React.createElement(Pagination, null, React.createElement(PageItem, {
        disabled: activePage <= 0
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[0],
        onClick: function onClick() {
          return changeActivePage(activePage - 1);
        }
      }, React.createElement("span", null, label[0]))), this.choosePagesGroup().map(function (page) {
        return React.createElement(PageItem, {
          key: Object.keys(page[0])[0] + page.index,
          active: page.index === activePage
        }, React.createElement(PageLink, {
          className: "page-link",
          onClick: function onClick() {
            return changeActivePage(page.index);
          }
        }, page.index + 1, page.index === activePage && React.createElement("span", {
          className: "sr-only"
        }, "(current)")));
      }), React.createElement(PageItem, {
        disabled: !pages.length || activePage === pages.length - 1
      }, React.createElement(PageLink, {
        className: "page-link",
        "aria-label": label[1],
        onClick: function onClick() {
          return changeActivePage(activePage + 1);
        }
      }, React.createElement("span", null, label[1]))))));
    }
  }]);

  return DataTablePagination;
}(Component);

DataTablePagination.propTypes = {
  activePage: PropTypes.number.isRequired,
  changeActivePage: PropTypes.func.isRequired,
  label: PropTypes.arrayOf(PropTypes.string).isRequired,
  pages: PropTypes.array.isRequired,
  pagesAmount: PropTypes.number.isRequired
};

var Button = function Button(props) {
  var _classNames;

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    e.stopPropagation(); // Waves - Get Cursor Position

    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var action = props.action,
      active = props.active,
      block = props.block,
      children = props.children,
      circle = props.circle,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      download = props.download,
      flat = props.flat,
      gradient = props.gradient,
      innerRef = props.innerRef,
      outline = props.outline,
      role = props.role,
      rounded = props.rounded,
      size = props.size,
      social = props.social,
      Tag = props.tag,
      target = props.target,
      type = props.type,
      attributes = _objectWithoutProperties(props, ["action", "active", "block", "children", "circle", "className", "color", "disabled", "download", "flat", "gradient", "innerRef", "outline", "role", "rounded", "size", "social", "tag", "target", "type"]);

  var classes = classNames(color !== '' && "btn-".concat(color), color && outline && "btn-outline-".concat(color), 'btn', 'Ripple-parent', gradient && "".concat(gradient, "-gradient"), (_classNames = {
    active: active,
    'btn-circle': circle,
    'btn-block': block,
    'btn-action': action
  }, _defineProperty(_classNames, "btn-".concat(social), social), _defineProperty(_classNames, "btn-".concat(size), size), _defineProperty(_classNames, "disabled", disabled), _classNames), className);

  if (attributes.href && Tag === 'button') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "button",
    type: Tag === 'button' && !type ? 'button' : type,
    target: target,
    role: Tag === 'a' && !role ? 'button' : role,
    className: classes,
    ref: innerRef,
    onMouseUp: handleClick,
    onTouchStart: handleClick
  }, attributes, {
    download: download,
    disabled: disabled
  }), children, !disabled && React.createElement(Waves, {
    cursorPos: cursorPos,
    outline: outline,
    flat: flat || rounded
  }));
};

Button.defaultProps = {
  color: 'default',
  tag: 'button'
};
Button.propTypes = {
  action: PropTypes.bool,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  download: PropTypes.string,
  flat: PropTypes.bool,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  role: PropTypes.string,
  size: PropTypes.string,
  social: PropTypes.string,
  tag: PropTypes.string,
  target: PropTypes.string,
  type: PropTypes.string
};

var ExportToCSV =
/*#__PURE__*/
function (_Component) {
  _inherits(ExportToCSV, _Component);

  function ExportToCSV() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ExportToCSV);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ExportToCSV)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      columns: _this.props.columns,
      data: _this.props.data,
      href: ''
    });

    _defineProperty(_assertThisInitialized(_this), "computeDataToLink", function () {
      _this.setState(function (prevState) {
        return {
          href: encodeURI("data:text/csv;charset=utf-8,".concat([prevState.columns.map(function (col) {
            return col.field;
          }).join(','), [].concat.apply([], prevState.data).map(function (row) {
            return Object.values(row).join(',');
          }).join('\n')].join('\n')))
        };
      });
    });

    return _this;
  }

  _createClass(ExportToCSV, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.computeDataToLink();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          data = _this$props.data,
          columns = _this$props.columns;

      if (prevState.data !== data || prevState.columns !== columns) {
        this.setState({
          columns: columns,
          data: data
        }, this.computeDataToLink());
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          block = _this$props2.block,
          circle = _this$props2.circle,
          className = _this$props2.className,
          color = _this$props2.color,
          children = _this$props2.children,
          outline = _this$props2.outline,
          size = _this$props2.size,
          rounded = _this$props2.rounded,
          gradient = _this$props2.gradient,
          floating = _this$props2.floating,
          flat = _this$props2.flat,
          attributes = _objectWithoutProperties(_this$props2, ["active", "block", "circle", "className", "color", "children", "outline", "size", "rounded", "gradient", "floating", "flat"]);

      var href = this.state.href;
      return React.createElement(Button, _extends({
        active: active,
        block: block,
        circle: circle,
        className: className,
        color: color,
        outline: outline,
        size: size,
        rounded: rounded,
        gradient: gradient,
        floating: floating,
        flat: flat,
        role: "button",
        type: "link"
      }, attributes, {
        href: href,
        download: "export.csv",
        "data-test": "export-to-csv"
      }), children);
    }
  }]);

  return ExportToCSV;
}(Component);

ExportToCSV.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  data: PropTypes.array.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  circle: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool,
  size: PropTypes.string
};

var DataTable =
/*#__PURE__*/
function (_Component) {
  _inherits(DataTable, _Component);

  function DataTable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DataTable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DataTable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activePage: 0,
      columns: _this.props.data.columns || [],
      entries: _this.props.entries,
      filteredRows: _this.props.data.rows || [],
      filterOptions: [],
      order: _this.props.order || [],
      pages: [],
      rows: _this.props.data.rows || [],
      search: '',
      searchSelect: '',
      sorted: false,
      translateScrollHead: 0,
      unsearchable: []
    });

    _defineProperty(_assertThisInitialized(_this), "setData", function () {
      var rows = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var columns = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var callback = arguments.length > 2 ? arguments[2] : undefined;

      _this.setState(function () {
        return {
          columns: columns,
          rows: rows,
          filteredRows: _this.props.disableRetreatAfterSorting ? _this.filterRows() : rows
        };
      }, callback && typeof callback === 'function' && function () {
        return callback();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setUnsearchable", function (columns) {
      var unsearchable = [];
      columns.forEach(function (column) {
        if (column.searchable !== undefined && column.searchable === false) {
          unsearchable.push(column.field);
        }
      });

      _this.setState({
        unsearchable: unsearchable
      });
    });

    _defineProperty(_assertThisInitialized(_this), "fetchData", function (link, isPaginateRows) {
      fetch(link).then(function (res) {
        return res.json();
      }).then(function (json) {
        return _this.setData(json.rows, json.columns, isPaginateRows ? _this.paginateRows : null);
      })["catch"](function (err) {
        return console.log(err);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "pagesAmount", function () {
      return Math.ceil(_this.state.filteredRows.length / _this.state.entries);
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRowsInitialy", function () {
      var _this$state = _this.state,
          rows = _this$state.rows,
          entries = _this$state.entries,
          pages = _this$state.pages;

      var pagesAmount = _this.pagesAmount();

      for (var i = 1; i <= pagesAmount; i++) {
        var pageEndIndex = i * entries;
        pages.push(rows.slice(pageEndIndex - entries, pageEndIndex));
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEntriesChange", function (value) {
      _this.setState({
        entries: Array.isArray(value) ? value[0] : value
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSearchChange", function (e) {
      _this.setState({
        search: e.target.value
      }, function () {
        return _this.filterRows();
      }, _this.props.onSearch && typeof _this.props.onSearch === 'function' && _this.props.onSearch(e.target.value));
    });

    _defineProperty(_assertThisInitialized(_this), "checkFieldValue", function (array, field) {
      return array[field] && typeof array[field] !== 'string' ? array[field].props.searchvalue : array[field];
    });

    _defineProperty(_assertThisInitialized(_this), "checkField", function (field, a, b, direction) {
      var _ref = [_this.checkFieldValue(a, field), _this.checkFieldValue(b, field)],
          aField = _ref[0],
          bField = _ref[1];
      var comp = aField > bField ? -1 : 1;

      if (direction === 'asc') {
        comp *= -1;
      }

      return comp;
    });

    _defineProperty(_assertThisInitialized(_this), "sort", function (rows, sortRows, field, direction) {
      rows.sort(function (a, b) {
        if (sortRows && sortRows.includes(field)) {
          return _this.checkField(field, a, b, direction);
        }

        return direction === 'asc' ? a[field] < b[field] ? -1 : 1 : a[field] > b[field] ? -1 : 1;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSort", function (field, sort) {
      var onSort = _this.props.onSort;

      if (sort === 'disabled') {
        return;
      }

      _this.setState(function (prevState) {
        var sortRows = _this.props.sortRows;
        var rows = prevState.rows,
            columns = prevState.columns;
        var direction = sort === 'desc' ? 'desc' : 'asc';

        _this.sort(rows, sortRows, field, direction);

        columns.forEach(function (col) {
          if (col.sort === 'disabled') {
            return;
          }

          col.sort = col.field === field ? col.sort === 'desc' ? 'asc' : 'desc' : '';
        });
        return {
          rows: rows,
          columns: columns,
          sorted: true
        };
      }, function () {
        return _this.filterRows();
      });

      onSort && typeof onSort === 'function' && onSort({
        column: field,
        direction: sort === 'desc' ? 'desc' : 'asc'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterRows", function () {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _this.state.search;
      var unsearchable = _this.state.unsearchable;
      var _this$props = _this.props,
          sortRows = _this$props.sortRows,
          noRecordsFoundLabel = _this$props.noRecordsFoundLabel;

      _this.setState(function (prevState) {
        var filteredRows = prevState.rows.filter(function (row) {
          for (var key in row) {
            if ((!unsearchable.length || !unsearchable.includes(key)) && typeof row[key] !== 'function') {
              var stringValue = '';

              if (sortRows && typeof row[key] !== 'string') {
                (function () {
                  var content = [];

                  var getContent = function getContent(element) {
                    return _typeof(element) === 'object' ? element.props.children && Array.from(element.props.children).map(function (el) {
                      return getContent(el);
                    }) : content.push(element);
                  };

                  getContent(row[key]);
                  stringValue = content.join('');
                })();
              } else if (row[key]) {
                stringValue = row[key].toString();
              }

              if (stringValue.toLowerCase().includes(search.toLowerCase())) {
                return true;
              }
            }
          }

          return false;
        });

        if (filteredRows.length === 0) {
          filteredRows.push({
            message: noRecordsFoundLabel,
            colspan: prevState.columns.length
          });
        }

        var test = {};

        if (_this.props.disableRetreatAfterSorting) {
          test = {
            filteredRows: filteredRows,
            activePage: prevState.activePage = prevState.activePage < prevState.pages.length || prevState.activePage === 0 ? prevState.activePage : prevState.pages.length - 1
          };
        } else if (!_this.props.disableRetreatAfterSorting) {
          test = {
            filteredRows: filteredRows,
            activePage: 0
          };
        }

        return test;
      }, function () {
        return _this.paginateRows();
      });
    });

    _defineProperty(_assertThisInitialized(_this), "paginateRows", function () {
      var pagesAmount = _this.pagesAmount();

      _this.setState(function (prevState) {
        var pages = prevState.pages,
            entries = prevState.entries,
            filteredRows = prevState.filteredRows,
            activePage = prevState.activePage;
        var _this$props2 = _this.props,
            paging = _this$props2.paging,
            disableRetreatAfterSorting = _this$props2.disableRetreatAfterSorting;
        pages = [];

        if (paging) {
          for (var i = 1; i <= pagesAmount; i++) {
            var pageEndIndex = i * entries;
            pages.push(filteredRows.slice(pageEndIndex - entries, pageEndIndex));
          }

          if (!disableRetreatAfterSorting) {
            activePage = activePage < pages.length || activePage === 0 ? activePage : pages.length - 1;
          }
        } else {
          pages.push(filteredRows);
          activePage = 0;
        }

        return {
          pages: pages,
          filteredRows: filteredRows,
          activePage: activePage
        };
      });
    });

    _defineProperty(_assertThisInitialized(_this), "changeActivePage", function (page) {
      var onPageChange = _this.props.onPageChange;

      _this.setState({
        activePage: page
      });

      onPageChange && typeof onPageChange === 'function' && onPageChange({
        activePage: page + 1,
        pagesAmount: _this.pagesAmount()
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleTableBodyScroll", function (e) {
      _this.setState({
        translateScrollHead: e.target.scrollLeft
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getLabelForFilter", function (field) {
      if (_this.props.filter) {
        var arr = _this.props.data.columns;
        return arr.filter(function (el) {
          return el.field === field;
        })[0].label || null;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "filterOptions", function () {
      if (_this.props.filter) {
        var filter = _this.props.filter;
        var arr = [];

        _this.props.data.rows.map(function (el) {
          return arr.push(el[filter]);
        });

        arr = _toConsumableArray(new Set(arr)).sort(function (a, b) {
          return a.localeCompare(b);
        });
        arr = arr.map(function (text, value) {
          return {
            text: text,
            value: "".concat(value)
          };
        });

        _this.setState({
          filterOptions: arr
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "useFilterSelect", function (content) {
      var filter = _this.props.filter;

      if (filter) {
        if (content !== '') {
          var filteredRows = _this.props.data.rows.filter(function (el) {
            return el[filter] === content;
          });

          _this.setState({
            searchSelect: content,
            rows: filteredRows
          }, function () {
            _this.filterRows(_this.state.searchSelect);

            _this.filterRows();
          });
        } else {
          _this.setState({
            searchSelect: content,
            rows: _this.props.data.rows
          }, function () {
            _this.filterRows(_this.state.searchSelect);

            _this.filterRows();
          });
        }
      }
    });

    return _this;
  }

  _createClass(DataTable, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props3 = this.props,
          data = _this$props3.data,
          paging = _this$props3.paging;
      var _this$state2 = this.state,
          order = _this$state2.order,
          columns = _this$state2.columns,
          pages = _this$state2.pages,
          rows = _this$state2.rows;

      if (typeof data === 'string') {
        this.fetchData(data, this.paginateRows);
      } // PRO-START


      this.filterOptions(); // PRO-END

      if (order.length > 0) {
        this.handleSort(order[0], order[1]);
      } else {
        this.handleSort();
      }

      this.setUnsearchable(columns);

      if (paging) {
        this.paginateRowsInitialy();
      } else {
        pages.push(rows);
      }
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var columns = this.state.columns;
      var data = this.props.data;

      if (prevProps.data !== data) {
        typeof data === 'string' ? this.fetchData(data) : this.setData(data.rows, data.columns, this.paginateRows);
        this.setUnsearchable(columns);
        this.filterRows();
      }
    }
  }, {
    key: "render",
    // PRO-END
    value: function render() {
      var _this$props4 = this.props,
          autoWidth = _this$props4.autoWidth,
          barReverse = _this$props4.barReverse,
          bordered = _this$props4.bordered,
          borderless = _this$props4.borderless,
          btn = _this$props4.btn,
          children = _this$props4.children,
          className = _this$props4.className,
          dark = _this$props4.dark,
          data = _this$props4.data,
          disableRetreatAfterSorting = _this$props4.disableRetreatAfterSorting,
          displayEntries = _this$props4.displayEntries,
          entriesLabel = _this$props4.entriesLabel,
          entriesOptions = _this$props4.entriesOptions,
          exportToCSV = _this$props4.exportToCSV,
          filter = _this$props4.filter,
          fixed = _this$props4.fixed,
          hover = _this$props4.hover,
          info = _this$props4.info,
          infoLabel = _this$props4.infoLabel,
          maxHeight = _this$props4.maxHeight,
          noBottomColumns = _this$props4.noBottomColumns,
          noRecordsFoundLabel = _this$props4.noRecordsFoundLabel,
          onPageChange = _this$props4.onPageChange,
          onSearch = _this$props4.onSearch,
          onSort = _this$props4.onSort,
          order = _this$props4.order,
          pagesAmount = _this$props4.pagesAmount,
          paginationLabel = _this$props4.paginationLabel,
          paging = _this$props4.paging,
          responsive = _this$props4.responsive,
          responsiveLg = _this$props4.responsiveLg,
          responsiveMd = _this$props4.responsiveMd,
          responsiveSm = _this$props4.responsiveSm,
          responsiveXl = _this$props4.responsiveXl,
          scrollX = _this$props4.scrollX,
          scrollY = _this$props4.scrollY,
          searching = _this$props4.searching,
          searchLabel = _this$props4.searchLabel,
          small = _this$props4.small,
          sortable = _this$props4.sortable,
          sortRows = _this$props4.sortRows,
          striped = _this$props4.striped,
          tbodyColor = _this$props4.tbodyColor,
          tbodyTextWhite = _this$props4.tbodyTextWhite,
          theadColor = _this$props4.theadColor,
          theadTextWhite = _this$props4.theadTextWhite,
          attributes = _objectWithoutProperties(_this$props4, ["autoWidth", "barReverse", "bordered", "borderless", "btn", "children", "className", "dark", "data", "disableRetreatAfterSorting", "displayEntries", "entriesLabel", "entriesOptions", "exportToCSV", "filter", "fixed", "hover", "info", "infoLabel", "maxHeight", "noBottomColumns", "noRecordsFoundLabel", "onPageChange", "onSearch", "onSort", "order", "pagesAmount", "paginationLabel", "paging", "responsive", "responsiveLg", "responsiveMd", "responsiveSm", "responsiveXl", "scrollX", "scrollY", "searching", "searchLabel", "small", "sortable", "sortRows", "striped", "tbodyColor", "tbodyTextWhite", "theadColor", "theadTextWhite"]);

      var _this$state3 = this.state,
          columns = _this$state3.columns,
          entries = _this$state3.entries,
          filteredRows = _this$state3.filteredRows,
          filterOptions = _this$state3.filterOptions,
          pages = _this$state3.pages,
          activePage = _this$state3.activePage,
          search = _this$state3.search,
          sorted = _this$state3.sorted,
          translateScrollHead = _this$state3.translateScrollHead;
      var tableClasses = classNames('dataTables_wrapper dt-bootstrap4', className);
      return React.createElement("div", {
        "data-test": "datatable",
        className: tableClasses
      }, React.createElement("div", {
        className: "row".concat(barReverse ? ' flex-row-reverse' : '')
      }, React.createElement(DataTableEntries, {
        paging: paging,
        displayEntries: displayEntries,
        entries: entries,
        handleEntriesChange: this.handleEntriesChange,
        entriesArr: entriesOptions,
        label: entriesLabel,
        barReverse: barReverse
      }), React.createElement(DataTableSearch, {
        handleSearchChange: this.handleSearchChange,
        search: search,
        searching: searching,
        label: searchLabel,
        barReverse: barReverse
      })), !scrollY && !scrollX && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTable, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        hover: hover,
        noBottomColumns: noBottomColumns,
        noRecordsFoundLabel: noRecordsFoundLabel,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        sorted: sorted
      }, attributes))), (scrollY || scrollX) && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableTableScroll, _extends({
        autoWidth: autoWidth,
        bordered: bordered,
        borderless: borderless,
        btn: btn,
        dark: dark,
        fixed: fixed,
        handleTableBodyScroll: this.handleTableBodyScroll,
        hover: hover,
        maxHeight: maxHeight,
        responsive: responsive,
        responsiveSm: responsiveSm,
        responsiveMd: responsiveMd,
        responsiveLg: responsiveLg,
        responsiveXl: responsiveXl,
        scrollX: scrollX,
        scrollY: scrollY,
        small: small,
        striped: striped,
        theadColor: theadColor,
        theadTextWhite: theadTextWhite,
        columns: columns,
        handleSort: this.handleSort,
        sortable: sortable,
        sorted: sorted,
        tbodyColor: tbodyColor,
        tbodyTextWhite: tbodyTextWhite,
        rows: pages[activePage],
        translateScrollHead: translateScrollHead
      }, attributes))), paging && React.createElement("div", {
        className: "row"
      }, React.createElement(DataTableInfo, {
        activePage: activePage,
        entries: entries,
        filteredRows: filteredRows,
        info: info,
        pages: pages,
        label: infoLabel,
        noRecordsFoundLabel: noRecordsFoundLabel
      }), React.createElement(DataTablePagination, {
        activePage: activePage,
        changeActivePage: this.changeActivePage,
        pages: pages,
        pagesAmount: pagesAmount,
        label: paginationLabel
      })), (filter || exportToCSV) && React.createElement("div", {
        className: "row justify-content-between"
      }, React.createElement("div", {
        className: "pl-3"
      }, filter && React.createElement(MDBSelect, {
        options: filterOptions,
        label: "Filter ".concat(this.getLabelForFilter(filter)),
        getTextContent: this.useFilterSelect,
        className: "m-0 pt-2"
      })), React.createElement("div", {
        className: "mr-2"
      }, exportToCSV && React.createElement(ExportToCSV, {
        columns: columns,
        data: pages,
        color: "primary"
      }, "Download CSV"))));
    }
  }]);

  return DataTable;
}(Component);

DataTable.propTypes = {
  autoWidth: PropTypes.bool,
  barReverse: PropTypes.bool,
  bordered: PropTypes.bool,
  borderless: PropTypes.bool,
  btn: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  dark: PropTypes.bool,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  disableRetreatAfterSorting: PropTypes.bool,
  displayEntries: PropTypes.bool,
  entries: PropTypes.number,
  entriesLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  entriesOptions: PropTypes.arrayOf(PropTypes.number),
  exportToCSV: PropTypes.bool,
  filter: PropTypes.string,
  fixed: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  infoLabel: PropTypes.oneOfType([PropTypes.array, PropTypes.object, PropTypes.string]),
  maxHeight: PropTypes.string,
  noBottomColumns: PropTypes.bool,
  noRecordsFoundLabel: PropTypes.string,
  onPageChange: PropTypes.func,
  onSearch: PropTypes.func,
  onSort: PropTypes.func,
  order: PropTypes.arrayOf(PropTypes.string),
  pagesAmount: PropTypes.number,
  paginationLabel: PropTypes.arrayOf(PropTypes.string),
  paging: PropTypes.bool,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  scrollX: PropTypes.bool,
  scrollY: PropTypes.bool,
  searching: PropTypes.bool,
  searchLabel: PropTypes.string,
  small: PropTypes.bool,
  sortable: PropTypes.bool,
  sortRows: PropTypes.arrayOf(PropTypes.string),
  striped: PropTypes.bool,
  tbodyColor: PropTypes.string,
  tbodyTextWhite: PropTypes.bool,
  theadColor: PropTypes.string,
  theadTextWhite: PropTypes.bool
};
DataTable.defaultProps = {
  autoWidth: false,
  barReverse: false,
  bordered: false,
  borderless: false,
  btn: false,
  dark: false,
  data: {
    columns: [],
    rows: []
  },
  disableRetreatAfterSorting: false,
  displayEntries: true,
  entries: 10,
  entriesLabel: 'Show entries',
  entriesOptions: [10, 20, 50, 100],
  exportToCSV: false,
  fixed: false,
  hover: false,
  info: true,
  infoLabel: ['Showing', 'to', 'of', 'entries'],
  noRecordsFoundLabel: 'No matching records found',
  noBottomColumns: false,
  order: [],
  pagesAmount: 8,
  paging: true,
  paginationLabel: ['Previous', 'Next'],
  responsive: false,
  responsiveSm: false,
  responsiveMd: false,
  responsiveLg: false,
  responsiveXl: false,
  searching: true,
  searchLabel: 'Search',
  scrollX: false,
  scrollY: false,
  sortable: true,
  small: false,
  striped: false,
  theadColor: '',
  theadTextWhite: false,
  tbodyColor: '',
  tbodyTextWhite: false
};

var Dropdown =
/*#__PURE__*/
function (_Component) {
  _inherits(Dropdown, _Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: false
    });

    _defineProperty(_assertThisInitialized(_this), "getContainer", function () {
      return ReactDOM.findDOMNode(_assertThisInitialized(_this));
    });

    _defineProperty(_assertThisInitialized(_this), "addEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.addEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "removeEvents", function () {
      ['click', 'touchstart', 'keyup'].forEach(function (event) {
        return document.removeEventListener(event, _this.handleDocumentClick, true);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDocumentClick", function (e) {
      var keyCode = e.which,
          type = e.type,
          target = e.target;
      var tab = keyCodes.tab;
      var MOUSE_RIGHT_CLICK = keyCode === 3;
      var TAB = keyCode === tab;
      var KEYUP = type === 'keyup';

      if (MOUSE_RIGHT_CLICK || KEYUP && !TAB) {
        return;
      }

      var container = _this.getContainer();

      if (container.contains(target) && container !== target && (!KEYUP || TAB)) {
        return;
      }

      _this.toggle();
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e, items) {
      var up = keyCodes.up,
          down = keyCodes.down;
      var keyCode = e.which,
          target = e.target;
      var UP = keyCode === up;
      var DOWN = keyCode === down;

      var index = _toConsumableArray(items).findIndex(function (item) {
        return item === target;
      });

      if (UP && index > 0) {
        index -= 1;
      }

      if (DOWN && index < items.length - 1) {
        index += 1;
      }

      if (index < 0) {
        index = 0;
      }

      items[index].focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleKeyDown", function (e) {
      var isOpen = _this.state.isOpen;
      var disabled = _this.props.disabled;
      var keyCode = e.which,
          target = e.target;
      var esc = keyCodes.esc,
          up = keyCodes.up,
          down = keyCodes.down,
          space = keyCodes.space;
      var SPACE = keyCode === space;
      var ESC = keyCode === esc;

      if (![esc, up, down, space].includes(keyCode) || /button/i.test(target.tagName) && SPACE || /input|textarea/i.test(target.tagName)) {
        return;
      }

      e.preventDefault();

      if (disabled) {
        return;
      }

      var container = _this.getContainer();

      if (SPACE && isOpen && container !== target) {
        target.click();
      }

      if (ESC || !isOpen) {
        _this.toggle();

        var btn = container.children[0];
        btn.focus();
        return;
      }

      var items = container.querySelectorAll('.dropdown-menu .dropdown-item:not(.disabled)');
      items.length && _this.handleFocus(e, items);
    });

    _defineProperty(_assertThisInitialized(_this), "toggle", function () {
      var isOpen = _this.state.isOpen;

      _this.setState({
        isOpen: !isOpen
      });
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "getChildContext",
    value: function getChildContext() {
      var isOpen = this.state.isOpen;
      var _this$props = this.props,
          dropup = _this$props.dropup,
          dropright = _this$props.dropright,
          dropleft = _this$props.dropleft;
      return {
        isOpen: isOpen,
        dropup: dropup,
        dropright: dropright,
        dropleft: dropleft,
        toggle: this.toggle
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this.handleEventsBinding();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.removeEvents();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.handleEventsBinding();
    }
  }, {
    key: "handleEventsBinding",
    value: function handleEventsBinding() {
      var isOpen = this.state.isOpen;
      isOpen ? this.addEvents() : this.removeEvents();
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _omit = omit(this.props, ['toggle', 'disabled']),
          className = _omit.className,
          children = _omit.children,
          dropup = _omit.dropup,
          group = _omit.group,
          size = _omit.size,
          dropright = _omit.dropright,
          dropleft = _omit.dropleft;

      var isOpen = this.state.isOpen;
      var classes = classNames((_classNames = {
        'btn-group': group
      }, _defineProperty(_classNames, "btn-group-".concat(size), !!size), _defineProperty(_classNames, "dropdown", !group), _defineProperty(_classNames, "show", isOpen), _defineProperty(_classNames, "dropup", dropup), _defineProperty(_classNames, "dropright", dropright), _defineProperty(_classNames, "dropleft", dropleft), _classNames), className);
      return React.createElement(Manager, null, React.createElement("div", {
        "data-test": "dropdown",
        className: classes,
        onKeyDown: this.handleKeyDown
      }, children));
    }
  }]);

  return Dropdown;
}(Component);

Dropdown.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  dropleft: PropTypes.bool,
  dropright: PropTypes.bool,
  dropup: PropTypes.bool,
  group: PropTypes.bool,
  size: PropTypes.string,
  tag: PropTypes.string,
  toggle: PropTypes.func
};
Dropdown.defaultProps = {
  dropleft: false,
  dropright: false,
  dropup: false,
  tag: 'div'
};
Dropdown.childContextTypes = {
  dropleft: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var DropdownItem =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownItem, _Component);

  function DropdownItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          header = _this$props.header,
          divider = _this$props.divider,
          onClick = _this$props.onClick,
          toggle = _this$props.toggle;

      if (disabled || header || divider) {
        e.preventDefault();
        return;
      }

      if (onClick) {
        onClick(e);
      }

      if (toggle) {
        _this.context.toggle(e);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getTabIndex", function () {
      var _this$props2 = _this.props,
          disabled = _this$props2.disabled,
          header = _this$props2.header,
          divider = _this$props2.divider;

      if (disabled || header || divider) {
        return '-1';
      }

      return '0';
    });

    return _this;
  }

  _createClass(DropdownItem, [{
    key: "render",
    value: function render() {
      var tabIndex = this.getTabIndex();

      var _omit = omit(this.props, ['toggle']),
          className = _omit.className,
          divider = _omit.divider,
          Tag = _omit.tag,
          header = _omit.header,
          href = _omit.href,
          active = _omit.active,
          disabled = _omit.disabled,
          props = _objectWithoutProperties(_omit, ["className", "divider", "tag", "header", "href", "active", "disabled"]);

      var toggle = this.props.toggle;
      var classes = classNames({
        active: active,
        disabled: disabled,
        'dropdown-item': !divider && !header,
        'dropdown-header': header,
        'dropdown-divider': divider
      }, className);

      if (Tag === 'button') {
        if (header) {
          Tag = 'h6';
        } else if (divider) {
          Tag = 'div';
        } else if (href) {
          Tag = 'a';
        }
      }

      var type = Tag === 'button' && (props.onClick || toggle) ? 'button' : undefined;
      return React.createElement(Tag, _extends({
        "data-test": "dropdown-item",
        type: type
      }, props, {
        tabIndex: tabIndex,
        className: classes,
        onClick: this.onClick,
        href: href
      }));
    }
  }]);

  return DropdownItem;
}(Component);

DropdownItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  divider: PropTypes.bool,
  header: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.bool
};
DropdownItem.defaultProps = {
  tag: 'button',
  toggle: true
};
DropdownItem.contextTypes = {
  toggle: PropTypes.func
};

var css$6 = ".dropup .dropdown-menu {\r\n  top: auto !important;\r\n  bottom: 100% !important;\r\n  transform: translate3d(5px, 5px, 0px) !important;\r\n}\r\n\r\n.dropdown-menu-right {\r\n  left: 0 !important;\r\n  right: auto !important;\r\n}\r\n";
styleInject(css$6);

var DropdownMenuProComponent = function DropdownMenuProComponent(_ref) {
  var isOpen = _ref.isOpen,
      Tag = _ref.tag,
      tabIndex = _ref.tabIndex,
      role = _ref.role,
      attributes = _ref.attributes,
      aria = _ref.aria,
      d_key = _ref.d_key,
      children = _ref.children;
  return React.createElement(CSSTransition, {
    "in": isOpen,
    appear: isOpen,
    classNames: "popover",
    unmountOnExit: true,
    timeout: {
      enter: 300,
      exit: 300
    }
  }, React.createElement(Tag, _extends({
    tabIndex: tabIndex,
    role: role
  }, attributes, {
    "aria-hidden": aria,
    key: d_key
  }), children));
};

DropdownMenuProComponent.propTypes = {
  aria: PropTypes.bool.isRequired,
  attributes: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  d_key: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  role: PropTypes.string.isRequired,
  tabIndex: PropTypes.string.isRequired,
  tag: PropTypes.any.isRequired
};

/*
// PRO-END
import DropdownMenuComponent from './DropdownMenuComponent';
// PRO-START
*/
// FREE-END
// PRO-END

var DropdownMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(DropdownMenu, _Component);

  function DropdownMenu() {
    _classCallCheck(this, DropdownMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(DropdownMenu).apply(this, arguments));
  }

  _createClass(DropdownMenu, [{
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props = this.props,
          basic = _this$props.basic,
          children = _this$props.children,
          className = _this$props.className,
          color = _this$props.color,
          flip = _this$props.flip,
          modifiers = _this$props.modifiers,
          right = _this$props.right,
          tag = _this$props.tag,
          attrs = _objectWithoutProperties(_this$props, ["basic", "children", "className", "color", "flip", "modifiers", "right", "tag"]);

      var _this$context = this.context,
          isOpen = _this$context.isOpen,
          dropup = _this$context.dropup,
          dropright = _this$context.dropright,
          dropleft = _this$context.dropleft;
      var classes = classNames((_classNames = {
        'dropdown-menu-right': right
      }, _defineProperty(_classNames, "dropdown-".concat(color), color), _defineProperty(_classNames, "show", isOpen), _defineProperty(_classNames, "basic", basic), _classNames), 'dropdown-menu', className);
      var Tag = tag;

      if (isOpen) {
        var position1 = dropup ? 'top' : dropright ? 'right' : dropleft ? 'left' : 'bottom';
        var position2 = right ? 'end' : 'start';
        attrs.placement = "".concat(position1, "-").concat(position2);
        attrs.component = tag;
      }

      return React.createElement(Popper, {
        modifiers: modifiers || !flip && {
          flip: {
            enabled: false
          }
        },
        eventsEnabled: true,
        positionFixed: false,
        placement: attrs.placement,
        "data-test": "dropdown-menu"
      }, function (_ref) {
        var placement = _ref.placement,
            ref = _ref.ref,
            style = _ref.style;
        return React.createElement(Tag, {
          ref: ref,
          style: style,
          "data-placement": placement,
          className: classes
        }, React.createElement(DropdownMenuProComponent, {
          isOpen: isOpen,
          tag: Tag,
          tabIndex: "-1",
          role: "menu",
          attributes: attrs,
          aria: !isOpen,
          d_key: "dropDownMenu",
          color: color
        }, children));
      });
    }
  }]);

  return DropdownMenu;
}(Component);

DropdownMenu.propTypes = {
  children: PropTypes.node.isRequired,
  basic: PropTypes.bool,
  className: PropTypes.string,
  flip: PropTypes.bool,
  modifiers: PropTypes.object,
  right: PropTypes.bool,
  tag: PropTypes.string
};
DropdownMenu.defaultProps = {
  basic: false,
  className: '',
  flip: true,
  right: false,
  tag: 'div',
  color: false
};
DropdownMenu.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  dropup: PropTypes.bool.isRequired,
  dropright: PropTypes.bool.isRequired,
  dropleft: PropTypes.bool.isRequired,
  color: PropTypes.oneOfType([PropTypes.oneOf(['primary', 'default', 'secondary', 'success', 'dark', 'danger', 'info', 'warning', 'ins']), PropTypes.bool])
};

var DropdownToggle =
/*#__PURE__*/
function (_React$Component) {
  _inherits(DropdownToggle, _React$Component);

  function DropdownToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DropdownToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DropdownToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          nav = _this$props.nav,
          tag = _this$props.tag,
          onClick = _this$props.onClick;
      var toggle = _this.context.toggle;

      if (disabled) {
        e.preventDefault();
        return;
      }

      if (nav && !tag) {
        e.preventDefault();
      }

      if (onClick) {
        onClick(e);
      }

      toggle(e);
    });

    return _this;
  }

  _createClass(DropdownToggle, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          color = _this$props2.color,
          caret = _this$props2.caret,
          nav = _this$props2.nav,
          tag = _this$props2.tag,
          props = _objectWithoutProperties(_this$props2, ["className", "color", "caret", "nav", "tag"]);

      var isOpen = this.context.isOpen;
      var ariaLabel = props['aria-label'] || 'Toggle Dropdown';
      var classes = classNames({
        'dropdown-toggle': caret,
        'nav-link': nav
      }, className);
      var children = props.children || React.createElement("span", {
        className: "sr-only"
      }, ariaLabel);
      var Tag = tag;

      if (nav && !tag) {
        Tag = 'a';
        props.href = '#';
      } else if (!tag) {
        Tag = Button;
        props.color = color;
      }

      return React.createElement(Reference, {
        "data-test": "dropdown-toggle"
      }, function (_ref) {
        var ref = _ref.ref;
        return tag || nav ? React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": isOpen,
          ref: ref
        }), children) : React.createElement(Tag, _extends({}, props, {
          className: classes,
          onClick: _this2.onClick,
          "aria-expanded": isOpen,
          innerRef: ref
        }), children);
      });
    }
  }]);

  return DropdownToggle;
}(React.Component);

DropdownToggle.propTypes = {
  'aria-haspopup': PropTypes.bool,
  caret: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  nav: PropTypes.bool,
  onClick: PropTypes.func,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
DropdownToggle.defaultProps = {
  'aria-haspopup': true,
  color: 'secondary'
};
DropdownToggle.contextTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired
};

var EdgeHeader = function EdgeHeader(props) {
  var color = props.color,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "className", "tag"]);

  var classes = classNames('edge-header', color, className);
  return React.createElement(Tag, _extends({
    "data-test": "edgeHeader"
  }, attributes, {
    className: classes
  }));
};

EdgeHeader.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
EdgeHeader.defaultProps = {
  color: 'deep-purple',
  tag: 'div'
};

var Footer = function Footer(props) {
  var color = props.color,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["color", "children", "className", "tag"]);

  var classes = classNames('page-footer', color && color, className);
  return React.createElement(Tag, _extends({
    "data-test": "footer"
  }, attributes, {
    className: classes
  }), children);
};

Footer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Footer.defaultProps = {
  tag: 'footer'
};

var FormInline = function FormInline(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var className = props.className,
      waves = props.waves,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "waves", "children"]);

  var classes = classNames('form-inline', waves && 'Ripple-parent', className);
  return React.createElement("form", _extends({
    "data-test": "form-inline"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

FormInline.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  waves: PropTypes.bool
};

var FreeBird = function FreeBird(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames('container free-bird', className);
  return React.createElement(Tag, _extends({
    "data-test": "freebird"
  }, attributes, {
    className: classes
  }));
};

FreeBird.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
FreeBird.defaultProps = {
  tag: 'div'
};

var css$7 = ".mdb-gallery {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  overflow-y: auto;\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n";
styleInject(css$7);

var Gallery = React.forwardRef(function Gallery(props, ref) {
  var _props$cellHeight = props.cellHeight,
      cellHeight = _props$cellHeight === void 0 ? 180 : _props$cellHeight,
      children = props.children,
      className = props.className,
      _props$cols = props.cols,
      cols = _props$cols === void 0 ? 2 : _props$cols,
      tag = props.tag,
      _props$spacing = props.spacing,
      spacing = _props$spacing === void 0 ? 4 : _props$spacing,
      style = props.style,
      attributes = _objectWithoutProperties(props, ["cellHeight", "children", "className", "cols", "tag", "spacing", "style"]);

  var classes = classNames('mdb-gallery', className);
  return React.createElement(MDBBox, _extends({
    tag: tag
  }, attributes, {
    style: _objectSpread2({
      margin: -spacing / 2
    }, style),
    className: classes,
    ref: ref
  }), React.Children.map(children, function (child) {
    if (!React.isValidElement(child)) {
      return null;
    }

    var childCols = child.props.cols || 1;
    var childRows = child.props.rows || 1;
    return React.cloneElement(child, {
      style: _objectSpread2({
        width: "".concat(100 / cols * childCols, "%"),
        height: cellHeight === 'auto' ? 'auto' : cellHeight * childRows + spacing,
        padding: spacing / 2
      }, child.props.style)
    });
  }));
});
Gallery.propTypes = {
  cellHeight: PropTypes.number,
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  spacing: PropTypes.number,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Gallery.defaultProps = {
  tag: 'ul'
};

var css$8 = ".mdb-gallery-element {\r\n  box-sizing: border-box;\r\n  flex-shrink: 0;\r\n}\r\n\r\n.mdb-gallery-title {\r\n  height: 100%;\r\n  display: block;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.img-full-height {\r\n  height: 100%;\r\n  transform: translateX(-50%);\r\n  position: relative;\r\n  left: 50%;\r\n}\r\n\r\n.img-full-width {\r\n  width: 100%;\r\n  transform: translateY(-50%);\r\n  position: relative;\r\n  top: 50%;\r\n}\r\n";
styleInject(css$8);

var imgClass = function imgClass(img) {
  if (!img || !img.complete) {
    return;
  }

  if (img.width / img.height > img.parentElement.offsetWidth / img.parentElement.offsetHeight) {
    img.classList.remove('img-full-width');
    img.classList.add('img-full-height');
  } else {
    img.classList.remove('img-full-height');
    img.classList.add('img-full-width');
  }
};

function ensureImageCover(img) {
  if (!img) {
    return;
  }

  if (img.complete) {
    imgClass(img);
  } else {
    img.addEventListener('load', function () {
      imgClass(img);
    });
  }
}

var GalleryList = React.forwardRef(function GalleryList(props, ref) {
  var children = props.children,
      className = props.className,
      cols = props.cols,
      tag = props.tag,
      rows = props.rows,
      titleClasses = props.titleClasses,
      elementClasses = props.elementClasses,
      styles = props.styles,
      attributes = _objectWithoutProperties(props, ["children", "className", "cols", "tag", "rows", "titleClasses", "elementClasses", "styles"]);

  var imgRef = useRef(null);
  var ec = classNames('mdb-gallery-element', elementClasses);
  var tc = classNames('mdb-gallery-title', titleClasses);
  useEffect(function () {
    ensureImageCover(imgRef.current);
  });
  useEffect(function () {
    var handleResize = debounce(function () {
      imgClass(imgRef.current);
    });
    window.addEventListener('resize', handleResize);
    return function () {
      handleResize.clear();
      window.removeEventListener('resive', handleResize);
    };
  }, []);
  return React.createElement(MDBBox, _extends({
    tag: tag,
    ref: ref
  }, attributes, {
    className: ec
  }), React.createElement(MDBBox, {
    style: _objectSpread2({}, styles),
    className: tc
  }, React.Children.map(children, function (child) {
    if (!React.isValidElement) {
      return null;
    }

    if (child.type === 'img') {
      return React.cloneElement(child, {
        ref: imgRef
      });
    }

    return child;
  })));
});
GalleryList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  cols: PropTypes.number,
  elementClasses: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  titleClasses: PropTypes.string
};
GalleryList.defaultProps = {
  tag: 'li'
};

var css$9 = ".hamburger-button__checkbox {\r\n  display: none;\r\n}\r\n\r\n.hamburger-button__button {\r\n  background-color: transparent;\r\n  height: 100%;\r\n  width: 100%;\r\n  text-align: center;\r\n  cursor: pointer;\r\n  top: -5px;\r\n}\r\n\r\nlabel.hamburger-button__button {\r\n  margin-bottom: 0;\r\n}\r\n\r\n#nav-icon1 {\r\n  width: 1.5em;\r\n  height: 1.5em;\r\n  position: relative;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .5s ease-in-out;\r\n  -moz-transition: .5s ease-in-out;\r\n  -o-transition: .5s ease-in-out;\r\n  transition: .5s ease-in-out;\r\n  cursor: pointer;\r\n}\r\n\r\n#nav-icon1 span {\r\n  display: block;\r\n  position: absolute;\r\n  height: 3px;\r\n  width: 100%;\r\n  border-radius: 1px;\r\n  background-color: #fff;\r\n  opacity: 1;\r\n  left: 0;\r\n  -webkit-transform: rotate(0deg);\r\n  -moz-transform: rotate(0deg);\r\n  -o-transform: rotate(0deg);\r\n  transform: rotate(0deg);\r\n  -webkit-transition: .25s ease-in-out;\r\n  -moz-transition: .25s ease-in-out;\r\n  -o-transition: .25s ease-in-out;\r\n  transition: .25s ease-in-out;\r\n}\r\n\r\n#nav-icon1 span:nth-child(1) {\r\n  top: 5px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(2) {\r\n  top: 16px;\r\n}\r\n\r\n#nav-icon1 span:nth-child(3) {\r\n  top: 27px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(1) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(135deg);\r\n  -moz-transform: rotate(135deg);\r\n  -o-transform: rotate(135deg);\r\n  transform: rotate(135deg);\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(2) {\r\n  opacity: 0;\r\n  left: -60px;\r\n}\r\n\r\n.hamburger-button__checkbox:checked+#nav-icon1 span:nth-child(3) {\r\n  top: 16px;\r\n  -webkit-transform: rotate(-135deg);\r\n  -moz-transform: rotate(-135deg);\r\n  -o-transform: rotate(-135deg);\r\n  transform: rotate(-135deg);\r\n}\r\n";
styleInject(css$9);

var HamburgerToggler = function HamburgerToggler(props) {
  var id = props.id,
      color = props.color,
      className = props.className,
      isOpen = props.isOpen,
      onClick = props.onClick;
  var classes = classNames('hamburger-button__button', className);
  return React.createElement(React.Fragment, null, React.createElement("input", {
    "data-test": "hamburger-toggler",
    type: "checkbox",
    defaultChecked: isOpen || false,
    onChange: onClick,
    className: "hamburger-button__checkbox",
    id: id
  }), React.createElement("label", {
    id: "nav-icon1",
    className: classes,
    htmlFor: id
  }, React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  }), React.createElement("span", {
    style: {
      background: color
    }
  })));
};

HamburgerToggler.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  id: PropTypes.string
};

var Iframe =
/*#__PURE__*/
function (_Component) {
  _inherits(Iframe, _Component);

  function Iframe() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Iframe);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Iframe)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      stateWidth: '',
      stateHeight: '',
      ratio: ''
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var ratio = _this.props.ratio;
      var _this$props = _this.props,
          width = _this$props.width,
          height = _this$props.height;
      var ratioNumber = 9 / 16;

      if (ratio) {
        var newRatio = ratio.split('by')[0] / ratio.split('by')[1];

        if (typeof ratioNumber === 'number') {
          ratioNumber = newRatio;
        }
      }

      if (width && height) {
        return;
      }

      if (width) {
        height = width * ratioNumber;
      } else if (height) {
        width = height * (1 / ratioNumber);
      }

      _this.setState(_objectSpread2({}, _this.state, {
        width: width,
        height: height,
        ratio: ratio
      }));
    });

    return _this;
  }

  _createClass(Iframe, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          allowFullScreen = _this$props2.allowFullScreen,
          className = _this$props2.className,
          id = _this$props2.id,
          name = _this$props2.name,
          onMouseOver = _this$props2.onMouseOver,
          onMouseOut = _this$props2.onMouseOut,
          onLoad = _this$props2.onLoad,
          sandbox = _this$props2.sandbox,
          src = _this$props2.src,
          style = _this$props2.style,
          _this$props2$title = _this$props2.title,
          title = _this$props2$title === void 0 ? '' : _this$props2$title,
          ratio = _this$props2.ratio,
          height = _this$props2.height,
          width = _this$props2.width;
      var _this$state = this.state,
          stateWidth = _this$state.stateWidth,
          stateHeight = _this$state.stateHeight;
      var classes = classNames('embed-responsive-item', className);
      var wrapperClasses = classNames(!(height || width) && 'embed-responsive', ratio ? "embed-responsive-".concat(ratio) : 'embed-responsive-16by9');
      var iframeAttributes = {
        src: src,
        id: id || false,
        frameBorder: '0',
        target: '_parent',
        allowFullScreen: allowFullScreen || true,
        height: stateHeight || '100%',
        name: name || undefined,
        width: stateWidth || '100%',
        onLoad: onLoad || undefined,
        onMouseOver: onMouseOver || undefined,
        onMouseOut: onMouseOut || undefined,
        sandbox: sandbox || undefined,
        style: style || undefined
      };
      iframeAttributes = returnAttributes(iframeAttributes);
      return React.createElement("div", {
        "data-test": "iframe",
        className: wrapperClasses
      }, React.createElement("iframe", _extends({
        title: title,
        className: classes
      }, iframeAttributes)));
    }
  }]);

  return Iframe;
}(Component);

Iframe.propTypes = {
  src: PropTypes.string.isRequired,
  allowFullScreen: PropTypes.bool,
  className: PropTypes.string,
  height: PropTypes.number,
  id: PropTypes.string,
  name: PropTypes.string,
  onLoad: PropTypes.func,
  onMouseOut: PropTypes.func,
  onMouseOver: PropTypes.func,
  ratio: PropTypes.string,
  sandbox: PropTypes.string,
  styles: PropTypes.object,
  title: PropTypes.string,
  width: PropTypes.number
};

var InputGroup = function InputGroup(_ref) {
  var append = _ref.append,
      appendClassName = _ref.appendClassName,
      ariaLabel = _ref.ariaLabel,
      children = _ref.children,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      containerId = _ref.containerId,
      hint = _ref.hint,
      id = _ref.id,
      inputs = _ref.inputs,
      inputTag = _ref.inputTag,
      label = _ref.label,
      labelClassName = _ref.labelClassName,
      material = _ref.material,
      prepend = _ref.prepend,
      prependClassName = _ref.prependClassName,
      size = _ref.size,
      Tag = _ref.tag,
      textClassName = _ref.textClassName,
      type = _ref.type,
      value = _ref.value,
      valueDefault = _ref.valueDefault,
      getValue = _ref.getValue,
      onChange = _ref.onChange,
      attributes = _objectWithoutProperties(_ref, ["append", "appendClassName", "ariaLabel", "children", "className", "containerClassName", "containerId", "hint", "id", "inputs", "inputTag", "label", "labelClassName", "material", "prepend", "prependClassName", "size", "tag", "textClassName", "type", "value", "valueDefault", "getValue", "onChange"]);

  var containerClassNames = classNames('input-group', material && 'md-form', size && "input-group-".concat(size), containerClassName);
  var inputClassNames = classNames(className);
  var prependClassNames = classNames('input-group-prepend', prependClassName);
  var appendClassNames = classNames('input-group-append', appendClassName);
  var textClassNames = classNames('input-group-text', material && 'md-addon', textClassName);

  var handleChange = function handleChange(event) {
    event.persist();
    onChange && onChange(event);
    getValue && getValue(event.target.value);
  };

  return React.createElement(React.Fragment, null, label && React.createElement("label", {
    htmlFor: id,
    className: labelClassName
  }, label), React.createElement(Tag, _extends({
    "data-test": "input-group"
  }, attributes, {
    className: containerClassNames,
    id: containerId
  }), prepend && React.createElement("div", {
    className: prependClassNames
  }, typeof prepend === 'string' ? React.createElement("span", {
    className: textClassNames
  }, prepend) : prepend), inputs || React.createElement(Input, {
    noTag: true,
    type: type,
    className: inputClassNames,
    id: id,
    value: value,
    valueDefault: valueDefault,
    hint: hint,
    "aria-label": ariaLabel,
    onChange: handleChange
  }), append && React.createElement("div", {
    className: appendClassNames
  }, typeof append === 'string' ? React.createElement("span", {
    className: textClassNames
  }, append) : append), children));
};

InputGroup.propTypes = {
  append: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  appendClassNames: PropTypes.string,
  ariaLabel: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  containerClassName: PropTypes.string,
  containerId: PropTypes.string,
  getValue: PropTypes.func,
  hint: PropTypes.string,
  id: PropTypes.string,
  inputs: PropTypes.node,
  label: PropTypes.string,
  labelClassName: PropTypes.string,
  material: PropTypes.bool,
  onChange: PropTypes.func,
  prepend: PropTypes.any,
  prependClassName: PropTypes.string,
  size: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  textClassName: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string,
  valueDefault: PropTypes.string
};
InputGroup.defaultProps = {
  tag: 'div',
  type: 'text'
};

var InputNumeric = function InputNumeric(props) {
  var onChangeHandler = function onChangeHandler(value) {
    props.getValue && props.getValue(value);
  };

  var className = props.className,
      getValue = props.getValue,
      attributes = _objectWithoutProperties(props, ["className", "getValue"]);

  var classes = classNames('form-control', className);
  return React.createElement(NumericInput, _extends({
    "data-test": "input-numeric"
  }, attributes, {
    onChange: onChangeHandler,
    className: classes
  }));
};

InputNumeric.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func
};

var Jumbotron = function Jumbotron(props) {
  var className = props.className,
      children = props.children,
      fluid = props.fluid,
      attributes = _objectWithoutProperties(props, ["className", "children", "fluid"]);

  var classes = classNames('jumbotron', fluid ? 'jumbotron-fluid' : false, className);
  return React.createElement("div", _extends({
    "data-test": "jumbotron"
  }, attributes, {
    className: classes
  }), children);
};

Jumbotron.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fluid: PropTypes.bool
};

var Link = function Link(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var active = props.active,
      children = props.children,
      className = props.className,
      disabled = props.disabled,
      link = props.link,
      to = props.to,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "disabled", "link", "to"]);

  var classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  var handleClick = function handleClick(e) {
    if (!disabled) {
      e.stopPropagation();
      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  return React.createElement(Link$1, _extends({
    "data-test": "link-router",
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

Link.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  to: PropTypes.string
};
Link.defaultProps = {
  active: false,
  className: '',
  disabled: false
};

var ListGroup = function ListGroup(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag"]);

  var classes = classNames('list-group', className);
  return React.createElement(Tag, _extends({
    "data-test": "list-group"
  }, attributes, {
    className: classes
  }), children);
};

ListGroup.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
ListGroup.defaultProps = {
  tag: 'ul'
};

var ListGroupItem = function ListGroupItem(props) {
  var _classNames;

  var active = props.active,
      children = props.children,
      className = props.className,
      color = props.color,
      disabled = props.disabled,
      hover = props.hover,
      success = props.success,
      info = props.info,
      warning = props.warning,
      danger = props.danger,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["active", "children", "className", "color", "disabled", "hover", "success", "info", "warning", "danger", "tag"]);

  var classes = classNames('list-group-item', className, (_classNames = {
    active: active,
    disabled: disabled
  }, _defineProperty(_classNames, "list-group-item-".concat(color), ' color'), _defineProperty(_classNames, 'list-group-item-action', hover), _classNames));

  if (attributes.href && Tag === 'li') {
    Tag = 'a';
  }

  return React.createElement(Tag, _extends({
    "data-test": "list-group-item"
  }, attributes, {
    className: classes
  }), children);
};

ListGroupItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.oneOf(['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark']),
  danger: PropTypes.bool,
  disabled: PropTypes.bool,
  hover: PropTypes.bool,
  info: PropTypes.bool,
  success: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  warning: PropTypes.bool
};
ListGroupItem.defaultProps = {
  tag: 'li'
};

var Media = function Media(props) {
  var body = props.body,
      bottom = props.bottom,
      className = props.className,
      heading = props.heading,
      left = props.left,
      list = props.list,
      middle = props.middle,
      object = props.object,
      right = props.right,
      round = props.round,
      thumbnail = props.thumbnail,
      figure = props.figure,
      figImg = props.figImg,
      figCap = props.figCap,
      figCapRight = props.figCapRight,
      figCapLeft = props.figCapLeft,
      tag = props.tag,
      top = props.top,
      attributes = _objectWithoutProperties(props, ["body", "bottom", "className", "heading", "left", "list", "middle", "object", "right", "round", "thumbnail", "figure", "figImg", "figCap", "figCapRight", "figCapLeft", "tag", "top"]);

  var defaultTag;

  if (heading) {
    defaultTag = 'h4';
  } else if (left || right) {
    defaultTag = 'a';
  } else if (object || figImg) {
    defaultTag = 'img';
  } else if (list) {
    defaultTag = 'ul';
  } else if (figure) {
    defaultTag = 'figure';
  } else if (figCap || figCapRight || figCapLeft) {
    defaultTag = 'figcaption';
  } else {
    defaultTag = 'div';
  }

  var Tag = tag || defaultTag;
  var classes = classNames({
    'media-body': body,
    'mt-0': heading,
    'media-left': left,
    'media-right': right,
    'align-self-start': top,
    'align-self-center': middle,
    'align-self-end': bottom,
    'media-object': object,
    'img-thumbnail': thumbnail,
    'media-list': list,
    figure: figure,
    'figure-img': figImg,
    'figure-caption text-center': figCap,
    'figure-caption text-right': figCapRight,
    'figure-caption text-left': figCapLeft,
    'rounded-circle z-depth-1-half': round
  }, !body && !heading && !left && !right && !top && !bottom && !middle && !object && !list && !figCap && !figCapRight && !figCapRight && !figImg && !figure ? 'media' : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "media"
  }, attributes, {
    className: classes
  }));
};

Media.propTypes = {
  body: PropTypes.bool,
  bottom: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  figCap: PropTypes.bool,
  figCapLeft: PropTypes.bool,
  figCapRight: PropTypes.bool,
  figImg: PropTypes.bool,
  figure: PropTypes.bool,
  heading: PropTypes.bool,
  left: PropTypes.bool,
  list: PropTypes.bool,
  middle: PropTypes.bool,
  object: PropTypes.bool,
  right: PropTypes.bool,
  round: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  thumbnail: PropTypes.bool,
  top: PropTypes.bool
};

var css$a = ".overflow-y-scroll {\r\n  overflow-y: scroll !important;\r\n}\r\n";
styleInject(css$a);

var Modal =
/*#__PURE__*/
function (_Component) {
  _inherits(Modal, _Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isOpen: _this.props.isOpen || false
    });

    _defineProperty(_assertThisInitialized(_this), "modalContent", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      document.body.classList.add('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      document.body.classList.remove('modal-open');
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps, prevState) {
      var _this$props = _this.props,
          isOpen = _this$props.isOpen,
          overflowScroll = _this$props.overflowScroll;
      var overflowStatement = overflowScroll ? 'overflow-y-scroll' : 'overflow-hidden';

      if (prevState.isOpen !== isOpen) {
        _this.setState({
          isOpen: isOpen
        }, function () {
          if (isOpen) {
            document.body.classList.add(overflowStatement);
          } else {
            document.body.classList.remove(overflowStatement);
          }
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnEntered", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.add('show');
      _this.props.autoFocus && node.focus();

      if (type === 'modal') {
        _this.props.showModal && _this.props.showModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExit", function (type, node) {
      if (type === 'backdrop' && _this.props.fade === false) {
        return;
      }

      node.classList.remove('show');

      if (type === 'modal') {
        _this.props.hideModal && _this.props.hideModal();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleOnExited", function () {
      _this.props.hiddenModal && _this.props.hiddenModal();
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (!_this.props.backdrop || e.target.closest('[role="dialog"]') && !e.target.classList.contains('modal')) {
        return;
      }

      if (!(e.clientX > e.target.clientWidth || e.clientY > e.target.clientHeight)) {
        if (!_this.modalContent.contains(e.target)) {
          if (!_this.props.disableBackdrop) {
            _this.props.toggle();
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleEscape", function (e) {
      if (_this.props.keyboard && e.keyCode === 27) {
        e.preventDefault();

        _this.props.toggle();
      }
    });

    return _this;
  }

  _createClass(Modal, [{
    key: "render",
    value: function render() {
      var _classNames,
          _this2 = this;

      var _this$props2 = this.props,
          animation = _this$props2.animation,
          backdrop = _this$props2.backdrop,
          backdropClassName = _this$props2.backdropClassName,
          cascading = _this$props2.cascading,
          centered = _this$props2.centered,
          children = _this$props2.children,
          className = _this$props2.className,
          contentClassName = _this$props2.contentClassName,
          disableFocusTrap = _this$props2.disableFocusTrap,
          fade = _this$props2.fade,
          frame = _this$props2.frame,
          fullHeight = _this$props2.fullHeight,
          id = _this$props2.id,
          inline = _this$props2.inline,
          modalStyle = _this$props2.modalStyle,
          position = _this$props2.position,
          role = _this$props2.role,
          side = _this$props2.side,
          size = _this$props2.size,
          tabIndex = _this$props2.tabIndex,
          wrapClassName = _this$props2.wrapClassName;
      var isOpen = this.state.isOpen;
      var timeout = fade ? 300 : 0;
      var modalDialogClasses = classNames((_classNames = {
        'cascading-modal': cascading,
        'modal-side': side,
        'modal-full-height': fullHeight,
        'modal-frame': frame,
        'modal-dialog-centered': centered
      }, _defineProperty(_classNames, "modal-".concat(size), size), _defineProperty(_classNames, "modal-".concat(position), position), _defineProperty(_classNames, "modal-notify white-text modal-".concat(modalStyle), modalStyle), _classNames), 'modal-dialog', className);
      var positionSplited = position.split('-');
      var wrapperClasses = classNames({
        modal: !inline,
        fade: fade,
        top: fade && !animation && !position,
        animation: fade && animation
      }, fade && position && position && positionSplited.length > 1 ? positionSplited[1] : positionSplited[0], wrapClassName);
      var backdropClasses = classNames('modal-backdrop', fade ? 'fade' : 'show', backdropClassName);
      var contentClasses = classNames('modal-content', contentClassName);
      var modalAttributes = returnAttributes({
        style: {
          display: 'block'
        },
        id: id,
        tabIndex: tabIndex,
        role: role,
        'aria-hidden': 'true'
      });
      var modal = React.createElement("div", _extends({
        "data-test": "modal",
        onKeyUp: this.handleEscape,
        className: wrapperClasses
      }, modalAttributes), React.createElement("div", {
        className: modalDialogClasses,
        role: "document"
      }, React.createElement("div", {
        ref: function ref(elem) {
          return _this2.modalContent = elem;
        },
        className: contentClasses
      }, children)));
      return React.createElement(React.Fragment, null, backdrop && React.createElement(Transition, {
        timeout: timeout,
        "in": isOpen,
        appear: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('backdrop', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('backdrop', node);
        },
        onExited: this.handleOnExited
      }, React.createElement("div", {
        className: backdropClasses
      })), React.createElement(Transition, {
        timeout: timeout,
        "in": isOpen,
        appear: isOpen,
        mountOnEnter: true,
        unmountOnExit: true,
        onMouseDown: function onMouseDown(e) {
          return _this2.handleBackdropClick(e);
        },
        onEntered: function onEntered(node) {
          return _this2.handleOnEntered('modal', node);
        },
        onExit: function onExit(node) {
          return _this2.handleOnExit('modal', node);
        }
      }, !disableFocusTrap ? React.createElement(FocusTrap, null, modal) : modal));
    }
  }]);

  return Modal;
}(Component);

Modal.defaultProps = {
  autoFocus: true,
  backdrop: true,
  backdropTransitionTimeout: 150,
  disableBackdrop: false,
  disableFocusTrap: true,
  fade: true,
  isOpen: false,
  keyboard: true,
  modalTransitionTimeout: 300,
  overflowScroll: true,
  position: '',
  role: 'dialog',
  tabIndex: '-1',
  zIndex: 1050
};
Modal.propTypes = {
  animation: PropTypes.string,
  backdrop: PropTypes.bool,
  backdropClassName: PropTypes.string,
  cascading: PropTypes.bool,
  centered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  disableBackdrop: PropTypes.bool,
  disableFocusTrap: PropTypes.bool,
  fade: PropTypes.bool,
  frame: PropTypes.bool,
  fullHeight: PropTypes.bool,
  hiddenModal: PropTypes.func,
  hideModal: PropTypes.func,
  id: PropTypes.string,
  keyboard: PropTypes.bool,
  modalClassName: PropTypes.string,
  modalStyle: PropTypes.string,
  overflowScroll: PropTypes.bool,
  position: PropTypes.string,
  role: PropTypes.string,
  showModal: PropTypes.func,
  side: PropTypes.bool,
  size: PropTypes.string,
  tabIndex: PropTypes.string,
  wrapClassName: PropTypes.string
};

var ModalBody = function ModalBody(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames('modal-body', className);
  return React.createElement("div", _extends({
    "data-test": "modal-body"
  }, attributes, {
    className: classes
  }), children);
};

ModalBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var ModalFooter = function ModalFooter(props) {
  var className = props.className,
      children = props.children,
      center = props.center,
      start = props.start,
      end = props.end,
      around = props.around,
      between = props.between,
      attributes = _objectWithoutProperties(props, ["className", "children", "center", "start", "end", "around", "between"]);

  var classes = classNames('modal-footer', className, {
    'justify-content-start': start,
    'justify-content-end': end,
    'justify-content-center': center,
    'justify-content-between': between,
    'justify-content-around': around
  });
  return React.createElement("div", _extends({
    "data-test": "modal-footer"
  }, attributes, {
    className: classes
  }), children);
};

ModalFooter.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var ModalHeader = function ModalHeader(props) {
  var closeButton;

  var className = props.className,
      children = props.children,
      toggle = props.toggle,
      Tag = props.tag,
      closeAriaLabel = props.closeAriaLabel,
      titleClass = props.titleClass,
      attributes = _objectWithoutProperties(props, ["className", "children", "toggle", "tag", "closeAriaLabel", "titleClass"]);

  var classes = classNames('modal-header', className);
  var titleClasses = classNames('modal-title', titleClass);

  if (toggle) {
    closeButton = React.createElement("button", {
      type: "button",
      onClick: toggle,
      className: "close",
      "aria-label": closeAriaLabel
    }, React.createElement("span", {
      "aria-hidden": "true"
    }, String.fromCharCode(215)));
  }

  return React.createElement("div", _extends({
    "data-test": "modal-header"
  }, attributes, {
    className: classes
  }), React.createElement(Tag, {
    className: titleClasses
  }, children), closeButton);
};

ModalHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  closeAriaLabel: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  toggle: PropTypes.func
};
ModalHeader.defaultProps = {
  tag: 'h4',
  closeAriaLabel: 'Close'
};

var Nav = function Nav(props) {
  var children = props.children,
      className = props.className,
      Tag = props.tag,
      tabs = props.tabs,
      color = props.color,
      classicTabs = props.classicTabs,
      pills = props.pills,
      header = props.header,
      attributes = _objectWithoutProperties(props, ["children", "className", "tag", "tabs", "color", "classicTabs", "pills", "header"]);

  var classes = classNames('nav', tabs && 'md-tabs', pills && 'md-pills', header && 'nav-pills card-header-pills', color && !tabs && !classicTabs && !pills ? color : false, pills && color ? "pills-".concat(color) : false, (tabs || classicTabs) && color ? "tabs-".concat(color) : false, className);
  return React.createElement(Tag, _extends({
    "data-test": "nav"
  }, attributes, {
    className: classes
  }), children);
};

Nav.propTypes = {
  children: PropTypes.node,
  classicTabs: PropTypes.bool,
  className: PropTypes.string,
  color: PropTypes.string,
  header: PropTypes.bool,
  pills: PropTypes.bool,
  tabs: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Nav.defaultProps = {
  tag: 'ul',
  classicTabs: false,
  pills: false,
  tabs: false,
  header: false
};

var getExpandClass = function getExpandClass(expand) {
  if (expand === false) {
    return false;
  }

  if (expand === true || expand === 'xs') {
    return 'navbar-expand';
  }

  return "navbar-expand-".concat(expand);
};

var Navbar =
/*#__PURE__*/
function (_Component) {
  _inherits(Navbar, _Component);

  function Navbar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Navbar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Navbar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isCollapsed: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleScroll", function () {
      var scrollingNavbarOffset = _this.props.scrollingNavbarOffset || 50;

      if (window.pageYOffset > scrollingNavbarOffset) {
        _this.setState({
          isCollapsed: true
        });
      } else {
        _this.setState({
          isCollapsed: false
        });
      }
    });

    return _this;
  }

  _createClass(Navbar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props = this.props,
          scrolling = _this$props.scrolling,
          scrollingNavbarOffset = _this$props.scrollingNavbarOffset;

      if (scrolling || scrollingNavbarOffset) {
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$props2 = this.props,
          scrolling = _this$props2.scrolling,
          scrollingNavbarOffset = _this$props2.scrollingNavbarOffset;

      if (scrolling || scrollingNavbarOffset) {
        window.removeEventListener('scroll', this.handleScroll);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _classNames;

      var _this$props3 = this.props,
          expand = _this$props3.expand,
          light = _this$props3.light,
          dark = _this$props3.dark,
          sticky = _this$props3.sticky,
          fixed = _this$props3.fixed,
          scrolling = _this$props3.scrolling,
          color = _this$props3.color,
          className = _this$props3.className,
          scrollingNavbarOffset = _this$props3.scrollingNavbarOffset,
          Tag = _this$props3.tag,
          _double = _this$props3["double"],
          transparent = _this$props3.transparent,
          attributes = _objectWithoutProperties(_this$props3, ["expand", "light", "dark", "sticky", "fixed", "scrolling", "color", "className", "scrollingNavbarOffset", "tag", "double", "transparent"]);

      var isCollapsed = this.state.isCollapsed;
      var classes = classNames((_classNames = {
        'navbar-light': light,
        'navbar-dark': dark
      }, _defineProperty(_classNames, "sticky-".concat(sticky), sticky), _defineProperty(_classNames, "fixed-".concat(fixed), fixed), _defineProperty(_classNames, 'scrolling-navbar', scrolling || scrollingNavbarOffset), _defineProperty(_classNames, 'double-nav', _double), _defineProperty(_classNames, 'top-nav-collapse', isCollapsed), _defineProperty(_classNames, "".concat(color), color && transparent ? isCollapsed : color), _classNames), 'navbar', getExpandClass(expand), className);
      return React.createElement(Tag, _extends({
        "data-test": "navbar"
      }, attributes, {
        className: classes,
        role: "navigation"
      }));
    }
  }]);

  return Navbar;
}(Component);

Navbar.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  dark: PropTypes.bool,
  "double": PropTypes.bool,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  fixed: PropTypes.string,
  light: PropTypes.bool,
  scrolling: PropTypes.bool,
  scrollingNavbarOffset: PropTypes.number,
  sticky: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  transparent: PropTypes.bool
};
Navbar.defaultProps = {
  tag: 'nav',
  expand: false,
  scrolling: false
};

var NavbarBrand = function NavbarBrand(_ref) {
  var className = _ref.className,
      href = _ref.href,
      attributes = _objectWithoutProperties(_ref, ["className", "href"]);

  var classes = classNames('navbar-brand', className);

  var navbarBrand = function navbarBrand() {
    if (href) {
      return React.createElement(NavLink$1, _extends({
        "data-test": "navbar-brand",
        to: href
      }, attributes, {
        className: classes
      }));
    }

    return React.createElement("div", _extends({
      "data-test": "navbar-brand"
    }, attributes, {
      className: classes
    }));
  };

  return navbarBrand();
};

NavbarBrand.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string
};

var NavbarNav = function NavbarNav(props) {
  var children = props.children,
      className = props.className,
      right = props.right,
      left = props.left,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "right", "left", "tag"]);

  var classes = classNames('navbar-nav', right ? 'ml-auto' : left ? 'mr-auto' : 'justify-content-around w-100', className);
  return React.createElement(Tag, _extends({
    "data-test": "navbar-nav"
  }, attributes, {
    className: classes
  }), children);
};

NavbarNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
NavbarNav.defaultProps = {
  tag: 'ul'
};

var NavbarToggler = function NavbarToggler(props) {
  var right = props.right,
      left = props.left,
      children = props.children,
      className = props.className,
      Tag = props.tag,
      image = props.image,
      attributes = _objectWithoutProperties(props, ["right", "left", "children", "className", "tag", "image"]);

  var classes = classNames({
    'navbar-toggler-right': right,
    'navbar-toggler-left': left
  }, 'navbar-toggler', className);
  return React.createElement(Tag, _extends({
    "data-test": "navbar-toggler"
  }, attributes, {
    className: classes
  }), children || (image ? React.createElement("span", {
    className: "navbar-toggler-icon",
    style: {
      backgroundImage: "url(\"".concat(image, "\")")
    }
  }) : React.createElement("span", {
    className: "navbar-toggler-icon"
  })));
};

NavbarToggler.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  image: PropTypes.string,
  left: PropTypes.bool,
  right: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  type: PropTypes.string
};
NavbarToggler.defaultProps = {
  tag: 'button',
  type: 'button'
};

var NavItem = function NavItem(props) {
  var children = props.children,
      className = props.className,
      active = props.active,
      text = props.text,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "active", "text", "tag"]);

  var classes = classNames('nav-item', active && 'active', text && 'navbar-text', className);
  return React.createElement(Tag, _extends({
    "data-test": "nav-item"
  }, attributes, {
    className: classes
  }), children);
};

NavItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
NavItem.defaultProps = {
  tag: 'li'
};

var NavLink = function NavLink(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      link = props.link,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to", "link"]);

  var classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', className);

  var handleClick = function handleClick(e) {
    if (!disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var Tag = link ? Link : NavLink$1;
  return React.createElement(Tag, _extends({
    "data-test": "nav-link",
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to
  }, attributes), children, disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

NavLink.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  link: PropTypes.bool,
  to: PropTypes.string
};
NavLink.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  link: false
};

var Notification =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Notification, _React$Component);

  function Notification() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Notification);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Notification)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      componentState: _this.props.show ? 'show' : 'hide'
    });

    _defineProperty(_assertThisInitialized(_this), "hide", function () {
      var time = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;

      if (_typeof(time) === 'object') {
        time = 0;
      }

      setTimeout(function () {
        _this.setState({
          componentState: ''
        }, function () {
          setTimeout(function () {
            _this.setState({
              componentState: 'hide'
            });
          }, 150);
        });
      }, time);
    });

    return _this;
  }

  _createClass(Notification, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var autohide = this.props.autohide;

      if (autohide > 0) {
        this.hide(autohide);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Tag = _this$props.tag,
          className = _this$props.className,
          show = _this$props.show,
          fade = _this$props.fade,
          message = _this$props.message,
          bodyClassName = _this$props.bodyClassName,
          icon = _this$props.icon,
          iconClassName = _this$props.iconClassName,
          title = _this$props.title,
          titleClassName = _this$props.titleClassName,
          text = _this$props.text,
          closeClassName = _this$props.closeClassName,
          attributes = _objectWithoutProperties(_this$props, ["tag", "className", "show", "fade", "message", "bodyClassName", "icon", "iconClassName", "title", "titleClassName", "text", "closeClassName"]);

      var componentState = this.state.componentState;
      var classes = classNames('toast', fade && 'fade', componentState, className);
      var headerClasses = classNames('toast-header', titleClassName);
      var iconClassNames = classNames('mr-2', iconClassName);
      var bodyClasses = classNames('toast-body', bodyClassName);
      var closeClasses = classNames('ml-2', 'mb-1', closeClassName);
      return React.createElement(Tag, _extends({
        "data-test": "notification"
      }, attributes, {
        className: classes
      }), React.createElement("div", {
        className: headerClasses
      }, React.createElement(Fa, {
        icon: icon,
        className: iconClassNames,
        size: "lg"
      }), React.createElement("strong", {
        className: "mr-auto"
      }, title), React.createElement("small", null, text), React.createElement(MDBCloseIcon, {
        className: closeClasses,
        onClick: this.hide
      })), React.createElement("div", {
        className: bodyClasses
      }, message));
    }
  }]);

  return Notification;
}(React.Component);

Notification.propTypes = {
  autohide: PropTypes.number,
  bodyClassName: PropTypes.string,
  bodyColor: PropTypes.string,
  className: PropTypes.string,
  closeClassName: PropTypes.string,
  fade: PropTypes.bool,
  iconClassName: PropTypes.string,
  message: PropTypes.string,
  show: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string,
  title: PropTypes.string,
  titleClassName: PropTypes.string,
  titleColor: PropTypes.string
};
Notification.defaultProps = {
  icon: 'square',
  tag: 'div',
  closeClassName: 'text-dark'
};

var css$b = ".popover {\r\n  width: auto;\r\n  background-color: white;\r\n  color: #97999b;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  font-size: 0.83em;\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 10;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  background-color: #fff;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.show.popover {\r\n  z-index: 999;\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.popover-body {\r\n  color: #6c6e71;\r\n}\r\n\r\n.popover .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] {\r\n  margin-bottom: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] .popover_arrow {\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: #d6d6d6 transparent transparent transparent;\r\n  bottom: -8px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.popover[x-placement^=\"top\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 8px 8px 0 8px;\r\n  border-color: white transparent transparent transparent;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] {\r\n  margin-top: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] .popover_arrow {\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent #d6d6d6 transparent;\r\n  top: -8px;\r\n  margin-top: 0;\r\n}\r\n\r\n.popover[x-placement^=\"bottom\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -8px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 8px 8px 8px;\r\n  border-color: transparent transparent white transparent;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] {\r\n  margin-left: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] .popover_arrow {\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent #d6d6d6 transparent transparent;\r\n  left: -8px;\r\n  margin-left: 0;\r\n}\r\n\r\n.popover[x-placement^=\"right\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 8px 8px 0;\r\n  border-color: transparent white transparent transparent;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] {\r\n  margin-right: 15px;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] .popover_arrow {\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent #d6d6d6;\r\n  right: -8px;\r\n  margin-right: 0;\r\n}\r\n\r\n.popover[x-placement^=\"left\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -8px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 8px 0 8px 8px;\r\n  border-color: transparent transparent transparent white;\r\n}\r\n\r\n.tooltip {\r\n  width: auto;\r\n  background-color: black;\r\n  color: white;\r\n  text-align: center;\r\n  display: inline-block;\r\n  border-radius: 3px;\r\n  position: absolute;\r\n  /* font-size: 0.83em; */\r\n  font-weight: normal;\r\n  border: 1px rgb(0, 0, 0) solid;\r\n  /* z-index: 200000; */\r\n  z-index: 15;\r\n  /* max-width: initial; */\r\n  max-width: 274px;\r\n  text-align: start;\r\n  border: 1px solid rgba(0, 0, 0, 0.2);\r\n  border-radius: 0.3rem;\r\n  opacity: 0;\r\n  transition: opacity 0.3s, visibility 0.3s;\r\n  visibility: hidden;\r\n}\r\n\r\n.tooltip-inner {\r\n  display: block;\r\n}\r\n\r\n.show.tooltip {\r\n  z-index: 999;\r\n\r\n  opacity: 1;\r\n  visibility: visible;\r\n}\r\n\r\n.tooltip .popover_arrow {\r\n  width: 0;\r\n  height: 0;\r\n  border-style: solid;\r\n  position: absolute;\r\n  margin: 6px;\r\n  color: transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"],\r\n.show[x-placement^=\"top\"]:not(.tooltip) {\r\n  margin-bottom: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"] .popover_arrow {\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: #131313 transparent transparent transparent;\r\n  bottom: -6px;\r\n  margin-bottom: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"top\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  bottom: 1.5px;\r\n  border: solid;\r\n  border-width: 6px 6px 0 6px;\r\n  border-color: black transparent transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"],\r\n.show[x-placement^=\"bottom\"]:not(.tooltip) {\r\n  margin-top: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"] .popover_arrow {\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent #131313 transparent;\r\n  top: -6px;\r\n  margin-top: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"bottom\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  left: -6px;\r\n  top: 1.45px;\r\n  border: solid;\r\n  border-width: 0 6px 6px 6px;\r\n  border-color: transparent transparent black transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"],\r\n.show[x-placement^=\"right\"]:not(.tooltip) {\r\n  margin-left: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"] .popover_arrow {\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent #131313 transparent transparent;\r\n  left: -6px;\r\n  margin-left: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"right\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  left: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 6px 6px 0;\r\n  border-color: transparent black transparent transparent;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"],\r\n.show[x-placement^=\"left\"]:not(.tooltip) {\r\n  margin-right: 5px;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"] .popover_arrow {\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent #131313;\r\n  right: -6px;\r\n  margin-right: 0;\r\n}\r\n\r\n.tooltip[x-placement^=\"left\"] .popover_arrow::before {\r\n  content: \"\";\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: -6px;\r\n  right: 1.45px;\r\n  border: solid;\r\n  border-width: 6px 0 6px 6px;\r\n  border-color: transparent transparent transparent black;\r\n}\r\n";
styleInject(css$b);

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  function Popover() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Popover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Popover)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      popperJS: null,
      visible: _this.props.isVisible,
      showPopper: _this.props.isVisible
    });

    _defineProperty(_assertThisInitialized(_this), "popoverWrapperRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "referenceElm", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "setPopperJS", function () {
      var _this$state = _this.state,
          showPopper = _this$state.showPopper,
          popperJS = _this$state.popperJS;

      if (showPopper) {
        popperJS ? popperJS.scheduleUpdate() : _this.createPopper();
        setTimeout(function () {
          return clearInterval(_this.timer);
        }, 1000);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "createPopper", function () {
      var _this$props = _this.props,
          placement = _this$props.placement,
          modifiers = _this$props.modifiers;
      var popperJS = _this.state.popperJS;

      if (_this.referenceElm && _this.popoverWrapperRef) {
        _this.setState({
          popperJS: new Popper$1(_this.referenceElm, _this.popoverWrapperRef, _objectSpread2({
            placement: placement
          }, modifiers), function () {
            return setTimeout(function () {
              popperJS.scheduleUpdate();
            }, 10);
          })
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "doToggle", function (toggler) {
      _this.setState({
        showPopper: toggler && true
      }, function () {
        var _this$state2 = _this.state,
            showPopper = _this$state2.showPopper,
            visible = _this$state2.visible;

        if (showPopper) {
          _this.setState({
            visible: typeof toggler !== 'undefined' ? toggler : !visible
          }, function () {
            _this.createPopper();

            _this.state.popperJS.scheduleUpdate();
          });
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var target = e.target;
      var showPopper = _this.state.showPopper;

      if (_this.popoverWrapperRef && showPopper) {
        if (_this.popoverWrapperRef.contains(target) || _this.referenceElm.contains(target) || target === _this.referenceElm) {
          return;
        }

        _this.doToggle(false);
      }
    });

    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var showPopper = this.state.showPopper;
      var _this$props2 = this.props,
          isVisible = _this$props2.isVisible,
          onChange = _this$props2.onChange;
      this.setPopperJS();

      if (prevProps.isVisible !== isVisible && isVisible !== showPopper && showPopper !== prevProps.showPopper) {
        this.setState({
          showPopper: isVisible
        });
      }

      if (onChange && showPopper !== prevState.showPopper) {
        onChange(showPopper);
      }

      if (showPopper && prevState.showPopper !== showPopper) {
        this.createPopper();
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.timer = setInterval(function () {
        return _this2.setPopperJS();
      }, 3);
      document.addEventListener('click', this.handleClick);
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var _this$props3 = this.props,
          children = _this$props3.children,
          className = _this$props3.className,
          clickable = _this$props3.clickable,
          domElement = _this$props3.domElement,
          email = _this$props3.email,
          id = _this$props3.id,
          isVisible = _this$props3.isVisible,
          material = _this$props3.material,
          modifiers = _this$props3.modifiers,
          placement = _this$props3.placement,
          popover = _this$props3.popover,
          sm = _this$props3.sm,
          style = _this$props3.style,
          onChange = _this$props3.onChange,
          Tag = _this$props3.tag,
          attributes = _objectWithoutProperties(_this$props3, ["children", "className", "clickable", "domElement", "email", "id", "isVisible", "material", "modifiers", "placement", "popover", "sm", "style", "onChange", "tag"]);

      var _this$state3 = this.state,
          visible = _this$state3.visible,
          showPopper = _this$state3.showPopper;
      var Popper = children[1];
      var Wrapper = children[0];
      var classes = classNames(visible && 'show', popover ? 'popover' : !material && !email && 'tooltip px-2', className);
      var popperClasses = classNames((material || email) && 'tooltip-inner', material && (sm ? 'md-inner' : 'md-inner-main'), email && (sm ? 'md-inner' : 'md-inner-email'));
      return React.createElement(React.Fragment, null, !domElement ? React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
        onMouseEnter: function onMouseEnter() {
          return !clickable && _this3.doToggle(true);
        },
        onMouseLeave: function onMouseLeave() {
          return !clickable && !popover && setTimeout(function () {
            return _this3.doToggle(false);
          }, 0);
        },
        onTouchStart: function onTouchStart() {
          return !clickable && _this3.doToggle(true);
        },
        onTouchEnd: function onTouchEnd() {
          return !clickable && !popover && _this3.doToggle(false);
        },
        onMouseDown: function onMouseDown() {
          clickable && _this3.doToggle(!showPopper);
          setTimeout(function () {
            return _this3.setPopperJS();
          }, 100);
        },
        onMouseUp: function onMouseUp() {
          return setTimeout(function () {
            return _this3.setPopperJS();
          }, 0);
        },
        innerRef: function innerRef(ref) {
          return _this3.referenceElm = ref;
        },
        "data-popper": id
      })) : React.createElement(Wrapper.type, _extends({}, Wrapper.props, {
        onMouseEnter: function onMouseEnter() {
          return !clickable && _this3.doToggle(true);
        },
        onMouseLeave: function onMouseLeave() {
          return !clickable && !popover && setTimeout(function () {
            return _this3.doToggle(false);
          }, 0);
        },
        onTouchStart: function onTouchStart() {
          return !clickable && _this3.doToggle(true);
        },
        onTouchEnd: function onTouchEnd() {
          return !clickable && !popover && _this3.doToggle(false);
        },
        onMouseDown: function onMouseDown() {
          return clickable && _this3.doToggle(!showPopper);
        },
        onMouseUp: function onMouseUp() {
          return setTimeout(function () {
            return _this3.setPopperJS();
          }, 0);
        },
        ref: function ref(_ref) {
          return _this3.referenceElm = _ref;
        },
        "data-popper": id
      })), showPopper && React.createElement(Tag, _extends({
        ref: function ref(_ref2) {
          return _this3.popoverWrapperRef = _ref2;
        },
        className: classes,
        "data-popper": id
      }, attributes), React.createElement(Popper.type, {
        className: classNames(popperClasses, Popper.props.className)
      }, Popper.props.children), React.createElement("span", {
        "x-arrow": "",
        className: classNames('popover_arrow')
      })));
    }
  }]);

  return Popover;
}(React.Component);

Popover.propTypes = {
  children: PropTypes.node,
  clickable: PropTypes.bool,
  domElement: PropTypes.bool,
  email: PropTypes.bool,
  id: PropTypes.string,
  isVisible: PropTypes.bool,
  material: PropTypes.bool,
  modifiers: PropTypes.object,
  placement: PropTypes.string,
  popover: PropTypes.bool,
  sm: PropTypes.bool,
  style: PropTypes.objectOf(PropTypes.string),
  tag: PropTypes.string
};
Popover.defaultProps = {
  clickable: false,
  domElement: false,
  id: 'popper',
  isVisible: false,
  placement: 'top',
  popover: false,
  style: {
    display: 'inline-block'
  },
  tag: 'div'
};

var PopoverBody = function PopoverBody(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-body', className);
  return React.createElement(Tag, _extends({
    "data-test": "popover-body"
  }, attributes, {
    className: classes
  }), children);
};

PopoverBody.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PopoverBody.defaultProps = {
  tag: 'div'
};

var PopoverHeader = function PopoverHeader(_ref) {
  var attributes = _ref.attributes,
      children = _ref.children,
      className = _ref.className,
      Tag = _ref.tag;
  var classes = classNames('popover-header', className);
  return React.createElement(Tag, _extends({
    "data-test": "popover-header"
  }, attributes, {
    className: classes
  }), children);
};

PopoverHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
PopoverHeader.defaultProps = {
  className: '',
  tag: 'h3'
};

var Progress = function Progress(_ref) {
  var animated = _ref.animated,
      barClassName = _ref.barClassName,
      children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      height = _ref.height,
      material = _ref.material,
      max = _ref.max,
      min = _ref.min,
      preloader = _ref.preloader,
      striped = _ref.striped,
      value = _ref.value,
      wrapperStyle = _ref.wrapperStyle,
      attributes = _objectWithoutProperties(_ref, ["animated", "barClassName", "children", "className", "color", "height", "material", "max", "min", "preloader", "striped", "value", "wrapperStyle"]);

  var percent = (value - min) / (max - min) * 100;
  var progressClasses = classNames('progress', material && 'md-progress', preloader && "".concat(color ? "".concat(color, "-color") : 'primary-color', "-dark"), className);
  var progressBarClasses = classNames(preloader ? 'indeterminate' : 'progress-bar', barClassName || null, animated ? 'progress-bar-animated' : null, color ? "bg-".concat(color) : null, striped || animated ? 'progress-bar-striped' : null);
  var computedHeight = height || children && '1rem';

  var computedWrapperStyle = _objectSpread2({}, wrapperStyle, {
    height: computedHeight
  });

  return React.createElement("div", _extends({
    "data-test": "progress"
  }, attributes, {
    className: progressClasses,
    style: computedWrapperStyle
  }), React.createElement("div", {
    className: progressBarClasses,
    style: {
      width: "".concat(percent, "%"),
      height: computedHeight
    },
    role: "progressbar",
    "aria-valuenow": value,
    "aria-valuemin": min,
    "aria-valuemax": max
  }, children));
};

Progress.propTypes = {
  animated: PropTypes.bool,
  barClassName: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  height: PropTypes.string,
  material: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  preloader: PropTypes.bool,
  striped: PropTypes.bool,
  value: PropTypes.number,
  wrapperStyle: PropTypes.object
};
Progress.defaultProps = {
  animated: false,
  barClassName: '',
  className: '',
  color: 'indigo',
  height: '',
  material: false,
  max: 100,
  min: 0,
  preloader: false,
  striped: false,
  value: 0,
  wrapperStyle: {}
};

var Rating = function Rating(props) {
  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      hovered = _useState4[0],
      setHovered = _useState4[1];

  var _useState5 = useState({
    title: '',
    index: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      choosed = _useState6[0],
      setChoosed = _useState6[1];

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      feedbackValue = _useState8[0],
      setFeedbackValue = _useState8[1];

  var _useState9 = useState(null),
      _useState10 = _slicedToArray(_useState9, 2),
      openedForm = _useState10[0],
      setOpenedForm = _useState10[1];

  var onDocumentClick = function onDocumentClick(e) {
    if (!e.target.closest('.popover')) {
      setOpenedForm(null);
    }
  };

  useEffect(function () {
    window.addEventListener('click', onDocumentClick);
    return function () {
      return window.removeEventListener('click', onDocumentClick);
    };
  }, []);
  useEffect(function () {
    setData(props.data); // eslint-disable-next-line react/destructuring-assignment
  }, [props.data]);
  useEffect(function () {
    var choosedIndex = data.findIndex(function (item) {
      return item.choosed;
    });

    if (choosedIndex !== -1) {
      setChoosed({
        title: data[choosedIndex].tooltip,
        index: choosedIndex
      });
    }
  }, [data]);
  useEffect(function () {
    if (props.getValue) {
      var title = choosed.title,
          index = choosed.index;
      index = index !== null ? index + 1 : index;
      props.getValue({
        title: title,
        value: index
      });
    }
  }, [choosed, props]);

  var handleMouseEnter = function handleMouseEnter(_, index) {
    setHovered(index);
  };

  var handleMouseLeave = function handleMouseLeave() {
    setHovered(null);
  };

  var handleClick = function handleClick(title, index, e) {
    e.stopPropagation();

    if (title === choosed.title && index === choosed.index) {
      setChoosed({
        title: '',
        index: null
      });
      feedback && setOpenedForm(null);
    } else {
      setChoosed({
        title: title,
        index: index
      });
      feedback && setTimeout(function () {
        setOpenedForm(index);
      }, 1);
    }
  };

  var onCloseHanlder = function onCloseHanlder() {
    setFeedbackValue('');
    setOpenedForm(null);
  };

  var feedbackValueHandler = function feedbackValueHandler(e) {
    setFeedbackValue(e.target.value);
  };

  var Tag = props.tag,
      containerClassName = props.containerClassName,
      iconClassName = props.iconClassName,
      iconFaces = props.iconFaces,
      iconSize = props.iconSize,
      iconRegular = props.iconRegular,
      fillClassName = props.fillClassName,
      fillColors = props.fillColors,
      getValue = props.getValue,
      feedback = props.feedback,
      submitHandler = props.submitHandler,
      commonAttributes = _objectWithoutProperties(props, ["tag", "containerClassName", "iconClassName", "iconFaces", "iconSize", "iconRegular", "fillClassName", "fillColors", "getValue", "feedback", "submitHandler"]);

  var containerClasses = classNames('mdb-rating', 'd-flex', 'justify-content-start', 'align-items-center', containerClassName);
  var renderedIcons = [];

  if (data.length) {
    renderedIcons = data.map(function (_ref, index) {
      var _ref$icon = _ref.icon,
          icon = _ref$icon === void 0 ? 'star' : _ref$icon,
          tooltip = _ref.tooltip,
          far = _ref.far,
          size = _ref.size,
          _ = _ref.choosed,
          itemAttributes = _objectWithoutProperties(_ref, ["icon", "tooltip", "far", "size", "choosed"]);

      var isChoosed = choosed.index !== null;
      var isHovered = hovered !== null;
      var isFormOpened = openedForm !== null;
      var isFormActive = feedback && isFormOpened && openedForm === index;
      var toFill = false;

      if (isChoosed) {
        toFill = index <= choosed.index;

        if (isHovered && hovered > choosed.index) {
          toFill = index <= hovered;
        }
      } else if (isHovered) {
        toFill = index <= hovered;
      }

      var fillColor = '';

      if (fillColors) {
        var current = null;

        if (isChoosed) {
          current = choosed.index;

          if (isHovered) {
            current = hovered;
          }
        } else if (isHovered) {
          current = hovered;
        }

        var isCustom = Array.isArray(fillColors);
        var defaultFillColors = ['oneStar', 'twoStars', 'threeStars', 'fourStars', 'fiveStars'];

        if (current !== null) {
          fillColor = isCustom ? fillColors[current] : defaultFillColors[current];
        }
      }

      var iconClasses = classNames('py-2 px-1 rate-popover', toFill && (fillColors ? fillColor : fillClassName), iconClassName);
      var renderIcon = icon;

      if (iconFaces) {
        var faces = ['angry', 'frown', 'meh', 'smile', 'laugh'];
        renderIcon = 'meh-blank';

        if (isChoosed && index <= choosed.index) {
          renderIcon = faces[choosed.index];

          if (isHovered) {
            renderIcon = faces[hovered];
          }
        } else if (isHovered && index <= hovered) {
          renderIcon = faces[hovered];
        }
      }

      var tooltipContent = tooltip;

      if (isFormActive) {
        tooltipContent = React.createElement("form", {
          onSubmit: function onSubmit(e) {
            submitHandler(e, tooltip, openedForm + 1, feedbackValue);
            onCloseHanlder();
          }
        }, React.createElement(MDBPopoverHeader, null, tooltip), React.createElement(MDBPopoverBody, null, React.createElement("textarea", {
          type: "text",
          className: "md-textarea form-control py-0",
          value: feedbackValue,
          onChange: feedbackValueHandler // style={{ resize: 'none' }}

        }), React.createElement("div", {
          className: "d-flex align-items-center justify-content-around mt-2"
        }, React.createElement(MDBBtn, {
          type: "submit",
          color: "primary",
          size: "sm"
        }, "Submit!"), React.createElement("button", {
          onMouseDown: onCloseHanlder,
          style: {
            backgroundColor: '#fff',
            border: 'none',
            padding: '0.5rem 1.6rem'
          }
        }, "Close"))));
      }

      return React.createElement(MDBTooltip, {
        key: tooltip,
        domElement: true,
        placement: "top",
        tag: "span",
        popover: isFormActive,
        isVisible: isFormActive,
        clickable: isFormActive
      }, React.createElement("span", null, React.createElement(Fa$1, _extends({
        style: {
          cursor: 'pointer'
        }
      }, commonAttributes, itemAttributes, {
        icon: renderIcon,
        size: size || iconSize,
        far: far || iconRegular,
        className: iconClasses,
        "data-index": index,
        "data-original-title": tooltip,
        onMouseEnter: function onMouseEnter() {
          return handleMouseEnter(tooltip, index);
        },
        onMouseLeave: handleMouseLeave,
        onClick: function onClick(e) {
          return handleClick(tooltip, index, e);
        }
      }))), React.createElement("div", {
        style: {
          userSelect: 'none'
        }
      }, tooltipContent));
    });
  }

  return React.createElement(Tag, {
    className: containerClasses
  }, renderedIcons);
};

Rating.propTypes = {
  containerClassName: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.shape({
    choosed: PropTypes.bool,
    icon: PropTypes.string,
    tooltip: PropTypes.string
  })),
  feedback: PropTypes.bool,
  fillClassName: PropTypes.string,
  fillColors: PropTypes.oneOfType([PropTypes.bool, PropTypes.arrayOf(PropTypes.string)]),
  getValue: PropTypes.func,
  iconClassName: PropTypes.string,
  iconFaces: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  submitHandler: PropTypes.func,
  tag: PropTypes.string
};
Rating.defaultProps = {
  containerClassName: '',
  data: [{
    tooltip: 'Very Bad'
  }, {
    tooltip: 'Poor'
  }, {
    tooltip: 'Ok'
  }, {
    tooltip: 'Good'
  }, {
    tooltip: 'Excellent'
  }],
  feedback: false,
  fillClassName: 'fiveStars',
  iconClassName: '',
  iconSize: '1x',
  iconRegular: false,
  tag: 'div',
  submitHandler: function submitHandler(e) {
    return e.preventDefault();
  }
};

var Row = function Row(props) {
  var around = props.around,
      between = props.between,
      bottom = props.bottom,
      center = props.center,
      className = props.className,
      end = props.end,
      middle = props.middle,
      start = props.start,
      Tag = props.tag,
      top = props.top,
      attributes = _objectWithoutProperties(props, ["around", "between", "bottom", "center", "className", "end", "middle", "start", "tag", "top"]);

  var classes = classNames('row', end && 'justify-content-end', start && 'justify-content-start', center && 'justify-content-center', between && 'justify-content-between', around && 'justify-content-around', top && 'align-self-start', middle && 'align-self-center', bottom && 'align-self-end', className);
  return React.createElement(Tag, _extends({
    "data-test": "row"
  }, attributes, {
    className: classes
  }));
};

Row.propTypes = {
  around: PropTypes.bool,
  between: PropTypes.bool,
  bottom: PropTypes.bool,
  center: PropTypes.bool,
  className: PropTypes.string,
  end: PropTypes.bool,
  middle: PropTypes.bool,
  start: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  top: PropTypes.bool
};
Row.defaultProps = {
  tag: 'div'
};

var propTypes = {
  activeItem: PropTypes.any,
  className: PropTypes.string,
  tabId: PropTypes.any
};

var TabContent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabContent, _React$Component);

  function TabContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TabContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TabContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      activeItem: _this.props.activeItem
    });

    return _this;
  }

  _createClass(TabContent, [{
    key: "getChildContext",
    value: function getChildContext() {
      var activeItem = this.state.activeItem;
      return {
        activeItemId: activeItem
      };
    }
  }, {
    key: "render",
    value: function render() {
      var className = this.props.className;
      var attributes = omit(this.props, Object.keys(propTypes));
      var classes = classNames('tab-content', className);
      return React.createElement("div", _extends({
        "data-test": "tabContent"
      }, attributes, {
        className: classes
      }));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(nextProps, prevState) {
      return prevState.activeItem !== nextProps.activeItem ? {
        activeItem: nextProps.activeItem
      } : null;
    }
  }]);

  return TabContent;
}(React.Component);

TabContent.childContextTypes = {
  activeItemId: PropTypes.any
};
TabContent.propTypes = propTypes;

var TabPane =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TabPane, _React$Component);

  function TabPane() {
    _classCallCheck(this, TabPane);

    return _possibleConstructorReturn(this, _getPrototypeOf(TabPane).apply(this, arguments));
  }

  _createClass(TabPane, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          tabId = _this$props.tabId,
          attributes = _objectWithoutProperties(_this$props, ["className", "tabId"]);

      var activeItemId = this.context.activeItemId;
      var classes = classNames('tab-pane', {
        active: tabId === activeItemId
      }, className);
      return React.createElement("div", _extends({
        "data-test": "tab-pane"
      }, attributes, {
        className: classes,
        role: "tabpanel"
      }));
    }
  }]);

  return TabPane;
}(React.Component);

TabPane.contextTypes = {
  activeItemId: PropTypes.any
};
TabPane.propTypes = {
  className: PropTypes.string,
  tabId: PropTypes.any
};

var TableHead = function TableHead(props) {
  var _classNames;

  var children = props.children,
      color = props.color,
      columns = props.columns,
      textWhite = props.textWhite,
      attributes = _objectWithoutProperties(props, ["children", "color", "columns", "textWhite"]);

  var isTheadColor = color === 'dark' || color === 'light';
  var classes = classNames((_classNames = {
    'text-white': textWhite
  }, _defineProperty(_classNames, "thead-".concat(color), color && isTheadColor), _defineProperty(_classNames, "".concat(color), color && !isTheadColor), _classNames));
  return React.createElement("thead", _extends({
    "data-test": "table-head"
  }, attributes, {
    className: classes
  }), columns && React.createElement("tr", null, columns.map(function (col) {
    return React.createElement("th", {
      key: col.field,
      className: col.hasOwnProperty('minimal') ? "th-".concat(col.minimal) : ''
    }, col.label);
  })), children);
};

TableHead.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  columns: PropTypes.arrayOf(PropTypes.object),
  textWhite: PropTypes.bool
};
TableHead.defaultProps = {
  textWhite: false
};

var TreeviewContext = React.createContext();

var Treeview = function Treeview(props) {
  var _useState = useState(null),
      _useState2 = _slicedToArray(_useState, 2),
      active = _useState2[0],
      setActive = _useState2[1];

  useEffect(function () {
    if (props.getValue) {
      props.getValue({
        item: active ? active.closest('li') : active,
        value: active ? active.closest('li').childNodes[1].textContent : active
      });
    }
  }, [active, props]);

  var getActive = function getActive(target) {
    setActive(target);
    return target;
  };

  var theme = props.theme,
      children = props.children,
      className = props.className,
      getValue = props.getValue,
      header = props.header,
      listClassName = props.listClassName,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["theme", "children", "className", "getValue", "header", "listClassName", "tag"]);

  var classes = classNames('border', theme ? "treeview-".concat(theme) : 'treeview', className);
  var ulClasses = classNames('list-unstyled', header ? 'pb-2 mb-1' : 'py-2 my-1', theme && "treeview-".concat(theme, "-list"), theme === 'animated' || !theme && 'pl-3', listClassName);
  var head = header && React.createElement(React.Fragment, null, React.createElement("h6", {
    className: "pt-3 pl-3"
  }, header), React.createElement("hr", null));
  return React.createElement(Tag, _extends({
    "data-test": "treeview"
  }, attributes, {
    className: classes
  }), head, React.createElement("ul", {
    className: ulClasses
  }, React.createElement(TreeviewContext.Provider, {
    value: {
      active: active,
      theme: theme,
      getActive: getActive
    }
  }, children)));
};

Treeview.propTypes = {
  className: PropTypes.string,
  getValue: PropTypes.func,
  header: PropTypes.string,
  listClassName: PropTypes.string,
  tag: PropTypes.string,
  theme: PropTypes.string
};
Treeview.defaultProps = {
  tag: 'div',
  theme: '',
  getValue: function getValue() {}
};

var TreeviewItem = function TreeviewItem(props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      target = _useState2[0],
      setTarget = _useState2[1];

  var targetRef = useRef(null);

  var className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      opened = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      active = _useContext.active,
      getActive = _useContext.getActive,
      theme = _useContext.theme;

  useEffect(function () {
    if (targetRef && targetRef.current) {
      setTarget(targetRef.current);
    }
  }, []);

  var handleClick = function handleClick() {
    if (!disabled) {
      target.classList.contains('opened') ? getActive(null) : getActive(target);
    }
  };

  var classes = classNames(disabled && disabledClassName, theme && "treeview-".concat(theme, "-items treeview-").concat(theme, "-element closed mb-1"), active === target && !active.classList.contains('opened') ? 'opened' : '', className);
  return React.createElement(Tag, _extends({
    "data-test": "treeview-item"
  }, attributes, {
    className: classes,
    ref: targetRef,
    onMouseDown: handleClick,
    style: {
      transform: 'translateY(0.3em)'
    }
  }), React.createElement(Fa, {
    className: "mr-2",
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), React.createElement("span", null, title));
};

TreeviewItem.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
TreeviewItem.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};

var TreeviewList = function TreeviewList(props) {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      opened = _useState2[0],
      setOpen = _useState2[1];

  useEffect(function () {
    var opened = props.opened;
    setOpen(opened); // eslint-disable-next-line react/destructuring-assignment
  }, [props, props.opened]);

  var handleSwitch = function handleSwitch() {
    return setOpen(!opened);
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      disabledClassName = props.disabledClassName,
      fab = props.fab,
      fal = props.fal,
      far = props.far,
      icon = props.icon,
      _ = props.opened,
      Tag = props.tag,
      title = props.title,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "disabledClassName", "fab", "fal", "far", "icon", "opened", "tag", "title"]);

  var _useContext = useContext(TreeviewContext),
      theme = _useContext.theme;

  var nestedClasses = classNames('nested', opened && 'active');
  var folder = classNames(theme && "closed treeview-".concat(theme, "-element d-block"), !children && 'ml-2', opened && 'opened', disabled && disabledClassName);
  var classes = classNames(theme && "treeview-".concat(theme, "-items px-0"), className);
  var iconClasses = classNames(theme ? 'mx-2' : 'mr-2');
  var child = children && React.createElement("ul", {
    className: nestedClasses,
    style: {
      height: 'calc(100% + 0.6rem)',
      marginLeft: '2px'
    }
  }, children);
  var collapse = theme && React.createElement(Collapse, {
    isOpen: opened
  }, child);
  var iconArrow = theme !== 'colorful' ? 'angle-right' : opened ? 'minus-circle' : 'plus-circle';
  var arrow = children && React.createElement(Fa, {
    icon: iconArrow,
    rotate: theme !== 'colorful' ? opened ? '90 down' : '0' : '',
    className: "rotate"
  });
  var btn = children && React.createElement(Button, {
    flat: true,
    className: "m-0 py-0 px-1 mr-1 z-depth-0",
    onClick: handleSwitch
  }, arrow);
  return React.createElement(Tag, _extends({
    "data-test": "treeview-list"
  }, attributes, {
    className: classes
  }), React.createElement("span", {
    className: folder,
    onClick: !disabled && theme ? handleSwitch : null
  }, theme ? arrow : btn, React.createElement("span", null, React.createElement(Fa, {
    className: iconClasses,
    fab: fab,
    fal: fal,
    far: far,
    icon: icon
  }), title)), collapse || child);
};

TreeviewList.propTypes = {
  className: PropTypes.string,
  disabled: PropTypes.bool,
  disabledClassName: PropTypes.string,
  fab: PropTypes.bool,
  fal: PropTypes.bool,
  far: PropTypes.bool,
  icon: PropTypes.string,
  opened: PropTypes.bool,
  tag: PropTypes.string
};
TreeviewList.defaultProps = {
  disabled: false,
  fab: false,
  fal: false,
  far: false,
  icon: 'folder-open',
  opened: false,
  tag: 'li'
};
TreeviewList.contextTypes = {
  theme: PropTypes.string
};

var css$c = ".note-dark {\r\n  background-color: #000;\r\n  color: #fff;\r\n  border-color: #58595a;\r\n}\r\n\r\n.note-default {\r\n  background-color: rgb(164, 243, 235);\r\n  border-color: #00695c;\r\n}\r\n\r\n.note-elegant {\r\n  background-color: #2E2E2E;\r\n  border-color: #212121;\r\n  color: #fff;\r\n}\r\n\r\n.note-stylish {\r\n  background-color: #4B515D;\r\n  border-color: #3E4551;\r\n  color: #fff;\r\n}\r\n\r\n.note-unique {\r\n  background-color: #3F729B;\r\n  border-color: #1C2331;\r\n  color: #fff;\r\n}\r\n\r\n.note-special {\r\n  background-color: #37474F;\r\n  border-color: #263238;\r\n  color: #fff;\r\n}\r\n";
styleInject(css$c);

var Typography =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Typography, _React$Component);

  function Typography() {
    _classCallCheck(this, Typography);

    return _possibleConstructorReturn(this, _getPrototypeOf(Typography).apply(this, arguments));
  }

  _createClass(Typography, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          Tag = _this$props.tag,
          children = _this$props.children,
          variant = _this$props.variant,
          blockquote = _this$props.blockquote,
          bqColor = _this$props.bqColor,
          bqTitle = _this$props.bqTitle,
          bqFooter = _this$props.bqFooter,
          bqText = _this$props.bqText,
          listUnStyled = _this$props.listUnStyled,
          listInLine = _this$props.listInLine,
          colorText = _this$props.colorText,
          text = _this$props.text,
          note = _this$props.note,
          noteColor = _this$props.noteColor,
          noteTitle = _this$props.noteTitle,
          attributes = _objectWithoutProperties(_this$props, ["className", "tag", "children", "variant", "blockquote", "bqColor", "bqTitle", "bqFooter", "bqText", "listUnStyled", "listInLine", "colorText", "text", "note", "noteColor", "noteTitle"]);

      var classes = classNames(variant && variant, colorText && "".concat(colorText.toLowerCase(), "-text"), text && "text-".concat(text), className);
      var bc = classNames('blockquote', bqColor && "bq-".concat(bqColor), className);
      var notes = classNames('note', noteColor && "note-".concat(noteColor), className);
      var isEmptyClass = classes !== '' ? classes : null;

      if (blockquote) {
        return React.createElement(MDBBox, {
          tag: "blockquote",
          className: bc
        }, children);
      }

      if (listUnStyled) {
        return React.createElement(MDBBox, {
          tag: "ul",
          className: "list-unstyled"
        }, children);
      }

      if (listInLine) {
        return React.createElement(MDBBox, {
          tag: "ul",
          className: "list-inline"
        }, children);
      }

      if (note) {
        return React.createElement(MDBBox, {
          tag: "p",
          className: notes
        }, React.createElement("strong", null, noteTitle), children);
      }

      return React.createElement(Tag, _extends({}, attributes, {
        className: isEmptyClass
      }), children);
    }
  }]);

  return Typography;
}(React.Component);

Typography.propTypes = {
  blockquote: PropTypes.bool,
  bqColor: PropTypes.string,
  bqTitle: PropTypes.string,
  className: PropTypes.string,
  colorText: PropTypes.string,
  listInLine: PropTypes.bool,
  listUnStyled: PropTypes.bool,
  note: PropTypes.bool,
  noteColor: PropTypes.string,
  noteTitle: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  variant: PropTypes.string
};
Typography.defaultProps = {
  abbr: false,
  abbrLeftText: true,
  blockquote: false,
  listInLine: false,
  listUnStyled: false,
  noteColor: 'primary',
  tag: 'p'
};

var Autocomplete =
/*#__PURE__*/
function (_Component) {
  _inherits(Autocomplete, _Component);

  function Autocomplete(props) {
    var _this;

    _classCallCheck(this, Autocomplete);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Autocomplete).call(this, props));

    _defineProperty(_assertThisInitialized(_this), "outsideClickHandler", function (e) {
      _this.suggestionsList && e.target !== _this.suggestionsList && _this.setState({
        choosed: true
      });
    });

    _defineProperty(_assertThisInitialized(_this), "filterRepeated", function (data) {
      return data.filter(function (el, index) {
        return data.indexOf(el) === index;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleInput", function (e) {
      var value = e.target.value;

      _this.setState({
        value: value,
        choosed: false,
        focusedListItem: 0
      });

      if (value !== '') {
        _this.setSuggestions(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setSuggestions", function (value) {
      var filteredSuggestions = _this.state.suggestions.filter(function (suggest) {
        return suggest.toLowerCase().includes(value.toLowerCase().trim());
      });

      _this.setState({
        filteredSuggestions: filteredSuggestions
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleClear", function () {
      return _this.setState({
        value: '',
        focusedListItem: 0
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleSelect", function () {
      var value = _this.state.filteredSuggestions[_this.state.focusedListItem];

      if (value) {
        _this.setState({
          value: value,
          focusedListItem: 0,
          choosed: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "keyDownHandler", function (e) {
      var _this$state = _this.state,
          filteredSuggestions = _this$state.filteredSuggestions,
          focusedListItem = _this$state.focusedListItem;

      if (_this.suggestionsList && _this.state.filteredSuggestions) {
        var suggestionsListNodes = _this.suggestionsList.childNodes;
        suggestionsListNodes.length >= 5 && suggestionsListNodes[_this.state.focusedListItem].scrollIntoView({
          block: 'center',
          behavior: 'smooth'
        });

        if (e.keyCode === 13) {
          _this.handleSelect();

          e.target.blur();
        }

        e.keyCode === 40 && focusedListItem < filteredSuggestions.length - 1 && _this.setState({
          focusedListItem: focusedListItem + 1
        });
        e.keyCode === 38 && focusedListItem > 0 && _this.setState({
          focusedListItem: focusedListItem - 1
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateFocus", function (index) {
      return _this.setState({
        focusedListItem: index
      });
    });

    _this.state = {
      value: props.value || props.valueDefault,
      suggestions: [],
      choosed: false,
      filteredSuggestions: [],
      focusedListItem: 0
    };
    _this.suggestionsList = null;
    return _this;
  }

  _createClass(Autocomplete, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setState({
        suggestions: this.filterRepeated(this.props.data)
      });
      window.addEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      prevState.value !== this.state.value && this.props.getValue && this.props.getValue(this.state.value);
      prevProps.value !== this.props.value && this.setState({
        value: this.props.value
      });
      prevProps.data !== this.props.data && this.setState({
        suggestions: this.filterRepeated(this.props.data)
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('click', this.outsideClickHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          value = _this$state2.value,
          filteredSuggestions = _this$state2.filteredSuggestions,
          choosed = _this$state2.choosed;
      var _this$props = this.props,
          clear = _this$props.clear,
          clearColor = _this$props.clearColor,
          clearSize = _this$props.clearSize,
          clearClass = _this$props.clearClass,
          disabled = _this$props.disabled,
          id = _this$props.id,
          className = _this$props.className,
          label = _this$props.label,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          size = _this$props.size,
          labelClass = _this$props.labelClass,
          placeholder = _this$props.placeholder,
          valueDefault = _this$props.valueDefault;
      var btnStyles = classNames(clearClass, 'mdb-autocomplete-clear');
      return React.createElement("div", {
        "data-test": "auto-complete",
        style: {
          position: 'relative'
        }
      }, React.createElement(Input, {
        icon: icon,
        iconSize: iconSize,
        iconBrand: iconBrand,
        iconLight: iconLight,
        iconRegular: iconRegular,
        iconClass: iconClass,
        id: id,
        className: className,
        label: label,
        labelClass: labelClass,
        hint: placeholder,
        disabled: disabled,
        value: value,
        valueDefault: valueDefault,
        onChange: this.handleInput,
        onKeyDown: this.keyDownHandler,
        size: size
      }, clear && value && React.createElement("button", {
        onClick: this.handleClear,
        className: btnStyles,
        style: {
          visibility: 'visible'
        }
      }, React.createElement("svg", {
        fill: clearColor,
        height: clearSize,
        viewBox: "0 0 24 24",
        width: clearSize,
        xmlns: "https://www.w3.org/2000/svg"
      }, React.createElement("path", {
        d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
      }), React.createElement("path", {
        d: "M0 0h24v24H0z",
        fill: "none"
      })))), value && !choosed && React.createElement("ul", {
        ref: function ref(list) {
          return _this2.suggestionsList = list;
        },
        className: "mdb-autocomplete-wrap",
        style: {
          marginTop: '-15px'
        },
        onClick: this.handleSelect
      }, filteredSuggestions.map(function (el, index) {
        return React.createElement("li", {
          key: el + index,
          className: "list-item",
          style: {
            background: "".concat(_this2.state.focusedListItem === index ? '#eee' : '#fff')
          },
          onMouseEnter: function onMouseEnter() {
            return _this2.updateFocus(index);
          }
        }, el);
      })));
    }
  }]);

  return Autocomplete;
}(Component);

Autocomplete.propTypes = {
  clear: PropTypes.bool,
  clearColor: PropTypes.string,
  clearSize: PropTypes.string,
  data: PropTypes.arrayOf(PropTypes.string),
  disabled: PropTypes.bool,
  getValue: PropTypes.func,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClassName: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelClass: PropTypes.string,
  placeholder: PropTypes.string,
  valueDefault: PropTypes.string
};
Autocomplete.defaultProps = {
  clear: false,
  clearColor: '#a6a6a6',
  clearSize: '24',
  data: [],
  disabled: false,
  id: '',
  label: '',
  className: '',
  clearClass: '',
  labelClass: '',
  icon: '',
  iconBrand: false,
  iconSize: '',
  iconLight: false,
  iconRegular: false,
  iconClassName: '',
  placeholder: '',
  valueDefault: ''
};

var Avatar = function Avatar(props) {
  var className = props.className,
      Tag = props.tag,
      round = props.round,
      circle = props.circle,
      attributes = _objectWithoutProperties(props, ["className", "tag", "round", "circle"]);

  var classes = classNames('avatar', round && 'rounded', circle && 'rounded-circle', className);
  return React.createElement(Tag, _extends({
    "data-test": "avatar"
  }, attributes, {
    className: classes
  }));
};

Avatar.propTypes = {
  circle: PropTypes.bool,
  className: PropTypes.string,
  round: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Avatar.defaultProps = {
  tag: 'div',
  round: false,
  circle: false
};

var ButtonFixed =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ButtonFixed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ButtonFixed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cursorPos: {},
      ulDisplay: false
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", _this.onClick);

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      e.preventDefault();
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };

      _this.setState({
        cursorPos: cursorPos
      });
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var disabled = _this.props.disabled;

      if (disabled) {
        e.preventDefault();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleUl", function (isDisplay) {
      return _this.setState({
        ulDisplay: isDisplay
      });
    });

    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          active = _this$props.active,
          block = _this$props.block,
          className = _this$props.className,
          children = _this$props.children,
          color = _this$props.color,
          disabled = _this$props.disabled,
          outline = _this$props.outline,
          size = _this$props.size,
          rounded = _this$props.rounded,
          gradient = _this$props.gradient,
          floating = _this$props.floating,
          flat = _this$props.flat,
          role = _this$props.role,
          type = _this$props.type,
          icon = _this$props.icon,
          iconBrand = _this$props.iconBrand,
          iconClass = _this$props.iconClass,
          iconLight = _this$props.iconLight,
          iconRegular = _this$props.iconRegular,
          iconSize = _this$props.iconSize,
          innerRef = _this$props.innerRef,
          topSection = _this$props.topSection,
          attributes = _objectWithoutProperties(_this$props, ["active", "block", "className", "children", "color", "disabled", "outline", "size", "rounded", "gradient", "floating", "flat", "role", "type", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "topSection"]);

      var _this$state = this.state,
          ulDisplay = _this$state.ulDisplay,
          cursorPos = _this$state.cursorPos;
      var buttonFixedClasses = classNames('fixed-action-btn', !!ulDisplay && 'active');
      var classes = classNames(floating ? 'btn-floating' : 'btn', flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "".concat(color), size ? "btn-".concat(size) : false, rounded ? 'btn-rounded' : false, block ? 'btn-block' : false, 'Ripple-parent', className, {
        active: active,
        disabled: disabled
      });
      return React.createElement("div", _extends({}, attributes, {
        className: buttonFixedClasses,
        "data-test": "button-fixed",
        onBlur: function onBlur() {
          return _this2.toggleUl(true);
        },
        onFocus: function onFocus() {
          return _this2.toggleUl(false);
        },
        onMouseOut: function onMouseOut() {
          return _this2.toggleUl(false);
        },
        onMouseOver: function onMouseOver() {
          return _this2.toggleUl(true);
        },
        ref: innerRef,
        style: {
          bottom: '45px',
          right: '24px'
        }
      }), React.createElement("a", {
        href: topSection ? topSection : '#!',
        className: classes,
        onClick: this.onClick,
        onMouseDown: this.handleClick,
        onTouchStart: this.handleClick
      }, icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), disabled ? false : React.createElement(Waves, {
        cursorPos: cursorPos,
        outline: outline,
        flat: flat
      })), children && React.createElement("ul", {
        className: "list-unstyled ".concat(classNames(!ulDisplay && 'disabled'))
      }, children));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed.defaultProps = {
  color: 'default'
};
ButtonFixed.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  role: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  topSection: PropTypes.string,
  type: PropTypes.string
};

var ButtonFixed$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ButtonFixed, _React$Component);

  function ButtonFixed() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ButtonFixed);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ButtonFixed)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cursorPos: {},
      buttonStyle: {
        transform: 'scaleY(0.4) scaleX(0.4) translateY(40px) translateX(0)',
        opacity: '0'
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (disabled) {
        e.preventDefault();
        return;
      }

      onClick && onClick();
    });

    return _this;
  }

  _createClass(ButtonFixed, [{
    key: "handleClick",
    value: function handleClick(e) {
      // Get Cursor Position
      var cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      this.setState({
        cursorPos: cursorPos
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          active = _this$props2.active,
          block = _this$props2.block,
          buttonStyle = _this$props2.buttonStyle,
          className = _this$props2.className,
          color = _this$props2.color,
          disabled = _this$props2.disabled,
          flat = _this$props2.flat,
          floating = _this$props2.floating,
          gradient = _this$props2.gradient,
          icon = _this$props2.icon,
          iconBrand = _this$props2.iconBrand,
          iconClass = _this$props2.iconClass,
          iconLight = _this$props2.iconLight,
          iconRegular = _this$props2.iconRegular,
          iconSize = _this$props2.iconSize,
          innerRef = _this$props2.innerRef,
          outline = _this$props2.outline,
          role = _this$props2.role,
          rounded = _this$props2.rounded,
          size = _this$props2.size,
          type = _this$props2.type,
          attributes = _objectWithoutProperties(_this$props2, ["active", "block", "buttonStyle", "className", "color", "disabled", "flat", "floating", "gradient", "icon", "iconBrand", "iconClass", "iconLight", "iconRegular", "iconSize", "innerRef", "outline", "role", "rounded", "size", "type"]);

      var classes = classNames(size && "btn-".concat(size), 'btn-floating', flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "".concat(color), 'Ripple-parent', className);
      var cursorPos = this.state.cursorPos;
      return React.createElement("li", {
        "data-test": "button-fixed-item"
      }, React.createElement("a", _extends({}, attributes, {
        style: buttonStyle,
        onClick: this.onClick,
        onMouseDown: this.handleClick.bind(this),
        onTouchStart: this.handleClick.bind(this),
        className: classes
      }), icon && React.createElement(Fa, {
        icon: icon,
        size: iconSize,
        brand: iconBrand,
        light: iconLight,
        regular: iconRegular,
        className: iconClass
      }), disabled ? false : React.createElement(Waves, {
        cursorPos: cursorPos,
        outline: outline,
        flat: flat
      })));
    }
  }]);

  return ButtonFixed;
}(React.Component);

ButtonFixed$1.defaultProps = {
  color: 'default'
};
ButtonFixed$1.propTypes = {
  active: PropTypes.bool,
  block: PropTypes.bool,
  buttonStyle: PropTypes.object,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  onClick: PropTypes.func,
  outline: PropTypes.bool,
  role: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.oneOf(['lg', 'sm']),
  type: PropTypes.string
};

var CardUp = function CardUp(props) {
  var className = props.className,
      Tag = props.tag,
      color = props.color,
      gradient = props.gradient,
      attributes = _objectWithoutProperties(props, ["className", "tag", "color", "gradient"]);

  var classes = classNames('card-up', color && "".concat(color, "-color"), gradient && "".concat(gradient, "-gradient"), className);
  return React.createElement(Tag, _extends({
    "data-test": "card-up"
  }, attributes, {
    className: classes
  }));
};

CardUp.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
CardUp.defaultProps = {
  tag: 'div'
};

var css$d = ".chip.chip-md {\r\n  height: 42px;\r\n  line-height: 42px;\r\n  border-radius: 21px;\r\n}\r\n.chip.chip-md img {\r\n  height: 42px;\r\n  width: 42px;\r\n}\r\n.chip.chip-md .close {\r\n  height: 42px;\r\n  line-height: 42px;\r\n  border-radius: 21px;\r\n}\r\n.chip.chip-lg {\r\n  height: 52px;\r\n  line-height: 52px;\r\n  border-radius: 26px;\r\n}\r\n.chip.chip-lg img {\r\n  height: 52px;\r\n  width: 52px;\r\n}\r\n.chip.chip-lg .close {\r\n  height: 52px;\r\n  line-height: 52px;\r\n  border-radius: 26px;\r\n}\r\n";
styleInject(css$d);

var Chip = function Chip(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    // Get Cursor Position
    e.stopPropagation();
    var cursorPos = {
      top: e.clientY,
      left: e.clientX,
      time: Date.now()
    };
    setCursorPos(cursorPos);
  };

  var handleCloseClick = function handleCloseClick(e) {
    if (props.handleClose) {
      props.handleClose(e);
    }
  };

  var alt = props.alt,
      bgColor = props.bgColor,
      children = props.children,
      className = props.className,
      close = props.close,
      gradient = props.gradient,
      handleClose = props.handleClose,
      size = props.size,
      src = props.src,
      Tag = props.tag,
      text = props.text,
      waves = props.waves,
      attributes = _objectWithoutProperties(props, ["alt", "bgColor", "children", "className", "close", "gradient", "handleClose", "size", "src", "tag", "text", "waves"]);

  var classes = classNames('chip', size && "chip-".concat(size), bgColor && bgColor, text && "".concat(text, "-text"), gradient && "".concat(gradient, "-gradient"), waves && 'Ripple-parent', className);
  return React.createElement(Tag, _extends({
    "data-test": "chip"
  }, attributes, {
    className: classes,
    onMouseDown: handleClick,
    onTouchStart: handleClick
  }), src && React.createElement("img", {
    src: src,
    alt: alt
  }), children, waves && React.createElement(Waves, {
    cursorPos: cursorPos
  }), close && React.createElement(Fa, {
    icon: "times",
    className: "close",
    onClick: handleCloseClick
  }));
};

Chip.propTypes = {
  alt: PropTypes.string,
  bgColor: PropTypes.string,
  className: PropTypes.string,
  close: PropTypes.bool,
  gradient: PropTypes.string,
  handleClose: PropTypes.func,
  size: PropTypes.string,
  src: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  text: PropTypes.string
};
Chip.defaultProps = {
  tag: 'div'
};

var ChipsInput =
/*#__PURE__*/
function (_Component) {
  _inherits(ChipsInput, _Component);

  function ChipsInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ChipsInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ChipsInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      chipsList: _this.props.chips,
      inputValue: '',
      isTouched: false,
      isReadyToDelete: false
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "handleClick", function () {
      _this.setState({
        isTouched: true
      });

      _this.inputRef.current.focus();
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      _this.setState({
        inputValue: e.target.value,
        isReadyToDelete: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleProps", function (id, value, target, array) {
      var _this$props = _this.props,
          handleRemove = _this$props.handleRemove,
          handleAdd = _this$props.handleAdd,
          getValue = _this$props.getValue;

      if (!target) {
        handleRemove && handleRemove({
          id: id,
          value: value
        });
      } else {
        handleAdd && handleAdd({
          id: id,
          value: value,
          target: target
        });
      }

      getValue && getValue(array);
    });

    _defineProperty(_assertThisInitialized(_this), "handleEnter", function (e) {
      var chipsList = _this.state.chipsList;
      var newChipString = _this.inputRef.current.value;
      var chipsListUpdate = [].concat(_toConsumableArray(chipsList), [newChipString]);
      var target = e.target;

      if (e.which === 13) {
        if (/^ *$/.test(newChipString)) {
          return;
        }

        if (chipsList.includes(newChipString)) {
          _this.setState({
            inputValue: ''
          });

          return;
        }

        _this.setState({
          inputValue: '',
          chipsList: chipsListUpdate
        }, function () {
          _this.handleProps(chipsList.length, newChipString, target.previousElementSibling, chipsListUpdate);
        });
      }

      if (_this.state.inputValue === '') {
        _this.setState({
          isReadyToDelete: true
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackspace", function (e) {
      if (_this.state.isReadyToDelete && e.which === 8) {
        var chipsList = _this.state.chipsList;
        var itemToDelete = chipsList.pop();

        _this.setState({
          chipsList: chipsList
        }, function () {
          _this.handleProps(chipsList.length, itemToDelete, false, chipsList);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClose", function (param) {
      var chipsList = _this.state.chipsList;
      var handleClose = _this.props.handleClose;
      var index = chipsList.indexOf(param);
      var itemToDelete = chipsList[index];
      chipsList.splice(index, 1);

      _this.setState({
        chipsList: chipsList
      }, function () {
        handleClose && handleClose(itemToDelete);

        _this.handleProps(index, itemToDelete, false, chipsList);
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleOutsideClick", function () {
      _this.setState({
        isTouched: false
      });
    });

    return _this;
  }

  _createClass(ChipsInput, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          Tag = _this$props2.tag,
          handleClose = _this$props2.handleClose,
          handleAdd = _this$props2.handleAdd,
          handleRemove = _this$props2.handleRemove,
          placeholder = _this$props2.placeholder,
          secondaryPlaceholder = _this$props2.secondaryPlaceholder,
          chipSize = _this$props2.chipSize,
          chipColor = _this$props2.chipColor,
          chipText = _this$props2.chipText,
          chipGradient = _this$props2.chipGradient,
          chipWaves = _this$props2.chipWaves,
          getValue = _this$props2.getValue,
          attributes = _objectWithoutProperties(_this$props2, ["className", "tag", "handleClose", "handleAdd", "handleRemove", "placeholder", "secondaryPlaceholder", "chipSize", "chipColor", "chipText", "chipGradient", "chipWaves", "getValue"]);

      var _this$state = this.state,
          chipsList = _this$state.chipsList,
          inputValue = _this$state.inputValue,
          isTouched = _this$state.isTouched;
      var renderedChips = chipsList.map(function (chip) {
        return React.createElement(Chip, {
          close: true,
          handleClose: function handleClose(e) {
            return _this2.handleClose(chip, e);
          },
          key: chip.toString(),
          size: chipSize,
          bgColor: chipColor,
          text: chipText,
          gradient: chipGradient,
          waves: chipWaves
        }, chip);
      });
      var calculatePlaceholder;

      if (chipsList.length < 1) {
        calculatePlaceholder = placeholder;
      } else {
        calculatePlaceholder = secondaryPlaceholder;
      }

      var classes = classNames('chips', isTouched && 'focus', className);
      return React.createElement(Tag, _extends({
        "data-test": "chips-input"
      }, attributes, {
        className: classes,
        onClick: this.handleClick,
        onKeyUp: this.handleBackspace
      }), renderedChips, React.createElement("input", {
        className: "input",
        type: "text",
        placeholder: calculatePlaceholder,
        ref: this.inputRef,
        onKeyUp: this.handleEnter,
        value: inputValue,
        onChange: this.handleChange,
        onBlur: this.handleOutsideClick
      }));
    }
  }]);

  return ChipsInput;
}(Component);

ChipsInput.propTypes = {
  chipColor: PropTypes.string,
  chipGradient: PropTypes.string,
  chipSize: PropTypes.string,
  chipText: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  secondaryPlaceholder: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
ChipsInput.defaultProps = {
  tag: 'div',
  chips: []
};

var CollapseHeader = function CollapseHeader(props) {
  var className = props.className,
      tagClassName = props.tagClassName,
      children = props.children,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tagClassName", "children", "tag"]);

  var classes = classNames('card-header', className);
  var tagClasses = classNames('mb-0', tagClassName);
  return React.createElement("div", _extends({
    "data-test": "collapse-header"
  }, attributes, {
    className: classes,
    style: {
      cursor: 'pointer'
    }
  }), React.createElement(Tag, {
    className: tagClasses
  }, children));
};

CollapseHeader.defaultProps = {
  tag: 'h5'
};
CollapseHeader.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  tagClassName: PropTypes.string
};

var css$e = "/* fallback */\r\n@font-face {\r\n  font-family: 'Material Icons';\r\n  font-style: normal;\r\n  font-weight: 400;\r\n  src: url(https://fonts.gstatic.com/s/materialicons/v41/flUhRq6tzZclQEJ-Vdg-IuiaDsNc.woff2) format('woff2');\r\n}\r\n\r\n.material-icons {\r\n  font-family: 'Material Icons';\r\n  font-weight: normal;\r\n  font-style: normal;\r\n  font-size: 24px;\r\n  line-height: 1;\r\n  letter-spacing: normal;\r\n  text-transform: none;\r\n  display: inline-block;\r\n  white-space: nowrap;\r\n  word-wrap: normal;\r\n  direction: ltr;\r\n  -webkit-font-feature-settings: 'liga';\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n";
styleInject(css$e);

var DatePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(DatePicker, _Component);

  function DatePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, DatePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(DatePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      selectedDate: _this.props.value || _this.props.valueDefault,
      muiTheme: createMuiTheme(_objectSpread2({}, _this.props.theme, {
        typography: {
          useNextVariants: true
        }
      }))
    });

    _defineProperty(_assertThisInitialized(_this), "handleDateChange", function (date) {
      var value = _this.props.value;

      _this.setState({
        selectedDate: date ? date._d : value
      });
    });

    return _this;
  }

  _createClass(DatePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          getValue = _this$props.getValue,
          value = _this$props.value,
          theme = _this$props.theme;
      var selectedDate = this.state.selectedDate;

      if (getValue && prevState.selectedDate !== selectedDate) {
        getValue(selectedDate);
      }

      if (value !== prevProps.value) {
        this.setState({
          selectedDate: value
        });
      }

      if (prevProps.theme !== theme) {
        this.setState({
          muiTheme: createMuiTheme(theme)
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          adornmentPosition = _this$props2.adornmentPosition,
          allowKeyboardControl = _this$props2.allowKeyboardControl,
          animateYearScrolling = _this$props2.animateYearScrolling,
          autoOk = _this$props2.autoOk,
          cancelLabel = _this$props2.cancelLabel,
          className = _this$props2.className,
          clearable = _this$props2.clearable,
          clearLabel = _this$props2.clearLabel,
          disableFuture = _this$props2.disableFuture,
          disableOpenOnEnter = _this$props2.disableOpenOnEnter,
          disablePast = _this$props2.disablePast,
          emptyLabel = _this$props2.emptyLabel,
          format = _this$props2.format,
          getValue = _this$props2.getValue,
          initialFocusedDate = _this$props2.initialFocusedDate,
          InputAdornmentProps = _this$props2.InputAdornmentProps,
          invalidDateMessage = _this$props2.invalidDateMessage,
          invalidLabel = _this$props2.invalidLabel,
          keyboard = _this$props2.keyboard,
          keyboardIcon = _this$props2.keyboardIcon,
          leftArrowIcon = _this$props2.leftArrowIcon,
          locale = _this$props2.locale,
          mask = _this$props2.mask,
          maxDate = _this$props2.maxDate,
          maxDateMessage = _this$props2.maxDateMessage,
          minDate = _this$props2.minDate,
          minDateMessage = _this$props2.minDateMessage,
          okLabel = _this$props2.okLabel,
          onInputChange = _this$props2.onInputChange,
          openToYearSelection = _this$props2.openToYearSelection,
          rightArrowIcon = _this$props2.rightArrowIcon,
          showTodayButton = _this$props2.showTodayButton,
          TextFieldComponent = _this$props2.TextFieldComponent,
          theme = _this$props2.theme,
          todayLabel = _this$props2.todayLabel,
          value = _this$props2.value,
          valueDefault = _this$props2.valueDefault,
          Tag = _this$props2.tag,
          attributes = _objectWithoutProperties(_this$props2, ["adornmentPosition", "allowKeyboardControl", "animateYearScrolling", "autoOk", "cancelLabel", "className", "clearable", "clearLabel", "disableFuture", "disableOpenOnEnter", "disablePast", "emptyLabel", "format", "getValue", "initialFocusedDate", "InputAdornmentProps", "invalidDateMessage", "invalidLabel", "keyboard", "keyboardIcon", "leftArrowIcon", "locale", "mask", "maxDate", "maxDateMessage", "minDate", "minDateMessage", "okLabel", "onInputChange", "openToYearSelection", "rightArrowIcon", "showTodayButton", "TextFieldComponent", "theme", "todayLabel", "value", "valueDefault", "tag"]);

      var _this$state = this.state,
          muiTheme = _this$state.muiTheme,
          selectedDate = _this$state.selectedDate;
      var classes = classNames('md-form', className);
      return React.createElement(Tag, {
        "data-test": "date-picker",
        className: classes
      }, React.createElement(MuiThemeProvider, {
        theme: muiTheme
      }, React.createElement(MuiPickersUtilsProvider, {
        locale: locale,
        moment: moment,
        utils: MomentUtils
      }, React.createElement(DatePicker$1, _extends({}, attributes, {
        adornmentPosition: adornmentPosition,
        allowKeyboardControl: allowKeyboardControl,
        animateYearScrolling: animateYearScrolling,
        autoOk: autoOk,
        cancelLabel: cancelLabel,
        clearable: clearable,
        clearLabel: clearLabel,
        disableFuture: disableFuture,
        disableOpenOnEnter: disableOpenOnEnter,
        disablePast: disablePast,
        emptyLabel: emptyLabel,
        initialFocusedDate: initialFocusedDate,
        InputAdornmentProps: InputAdornmentProps,
        invalidDateMessage: invalidDateMessage,
        invalidLabel: invalidLabel,
        keyboard: keyboard,
        keyboardIcon: keyboardIcon,
        leftArrowIcon: leftArrowIcon,
        mask: mask,
        maxDate: maxDate,
        maxDateMessage: maxDateMessage,
        minDate: minDate,
        minDateMessage: minDateMessage,
        okLabel: okLabel,
        onInputChange: onInputChange,
        openToYearSelection: openToYearSelection,
        rightArrowIcon: rightArrowIcon,
        showTodayButton: showTodayButton,
        TextFieldComponent: TextFieldComponent,
        todayLabel: todayLabel,
        format: format || 'DD MMMM, YYYY',
        value: selectedDate,
        onChange: this.handleDateChange
      })))));
    }
  }]);

  return DatePicker;
}(Component);

DatePicker.propTypes = {
  adornmentPosition: PropTypes.string,
  allowKeyboardControl: PropTypes.bool,
  animateYearScrolling: PropTypes.bool,
  autoOk: PropTypes.bool,
  cancelLabel: PropTypes.node,
  className: PropTypes.string,
  clearable: PropTypes.bool,
  clearLabel: PropTypes.node,
  disableFuture: PropTypes.object,
  disableOpenOnEnter: PropTypes.bool,
  disablePast: PropTypes.bool,
  emptyLabel: PropTypes.string,
  format: PropTypes.string,
  getValue: PropTypes.func,
  initialFocusedDate: PropTypes.string,
  InputAdornmentProps: PropTypes.object,
  invalidDateMessage: PropTypes.node,
  invalidLabel: PropTypes.string,
  keyboard: PropTypes.bool,
  keyboardIcon: PropTypes.node,
  leftArrowIcon: PropTypes.node,
  locale: PropTypes.string,
  mask: PropTypes.any,
  maxDate: PropTypes.string,
  maxDateMessage: PropTypes.node,
  minDate: PropTypes.string,
  minDateMessage: PropTypes.node,
  okLabel: PropTypes.node,
  onInputChange: PropTypes.func,
  openToYearSelection: PropTypes.bool,
  rightArrowIcon: PropTypes.node,
  showTodayButton: PropTypes.bool,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  TextFieldComponent: PropTypes.string,
  theme: PropTypes.object,
  todayLabel: PropTypes.string,
  value: PropTypes.instanceOf(Date),
  valueDefault: PropTypes.instanceOf(Date)
};
DatePicker.defaultProps = {
  theme: {},
  tag: 'div',
  value: null,
  valueDefault: new Date(),
  getValue: function getValue() {}
};

function RotatingCard(_ref) {
  var children = _ref.children,
      className = _ref.className,
      flipped = _ref.flipped,
      InnerTag = _ref.innerTag,
      Tag = _ref.tag,
      attributes = _objectWithoutProperties(_ref, ["children", "className", "flipped", "innerTag", "tag"]);

  var classes = classNames('card-rotating effect__click', flipped && 'flipped', className);
  return React.createElement(Tag, _extends({
    "data-test": "flipping-card"
  }, attributes, {
    className: "card-wrapper"
  }), React.createElement(InnerTag, {
    className: classes
  }, children));
}

RotatingCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  flipped: PropTypes.bool,
  innerTag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
RotatingCard.defaultProps = {
  tag: 'div',
  innerTag: 'div',
  flipped: false
};

var css$f = ".file-field .file-field-right .file-path-wrapper {\r\n  padding-left: 0;\r\n  padding-right: 10px;\r\n}\r\n";
styleInject(css$f);

var InputFile = function InputFile(_ref) {
  var btnColor = _ref.btnColor,
      getValue = _ref.getValue,
      btnTitle = _ref.btnTitle,
      reverse = _ref.reverse,
      className = _ref.className,
      multiple = _ref.multiple,
      reset = _ref.reset,
      resetClassName = _ref.resetClassName,
      textFieldTitle = _ref.textFieldTitle,
      resetAriaLabel = _ref.resetAriaLabel;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      files = _useState2[0],
      setFiles = _useState2[1];

  var fileChange = function fileChange(files) {
    if (files.length > 0) {
      if (files.length > 1) {
        var filesNames = [];

        for (var i = 0; i < files.length; i++) {
          filesNames.push(files[i].name);
        }

        setFiles(filesNames);
      } else {
        setFiles(files[0].name);
      }
    } else {
      setFiles(false);
    }
  };

  var onChangeHandler = function onChangeHandler(e) {
    fileChange(e.target.files);
    getValue && getValue(e.target.files);
  };

  var resetFiles = function resetFiles() {
    files && setFiles(false);
  };

  var btnClass = classNames('btn', "btn-".concat(btnColor), 'btn-sm', reverse ? 'float-right' : 'float-left');
  var inputFieldClass = classNames('file-path', 'validate', files ? 'valid' : false, className);
  var wrapperClass = classNames('file-field', 'md-form', reverse && 'file-field-right');
  return React.createElement("div", {
    "data-test": "input-file",
    className: wrapperClass
  }, React.createElement("div", {
    className: btnClass
  }, React.createElement("span", null, btnTitle), React.createElement("input", {
    multiple: multiple,
    onChange: onChangeHandler,
    type: "file"
  })), React.createElement("div", {
    className: "file-path-wrapper"
  }, React.createElement("input", {
    className: inputFieldClass,
    type: "text",
    placeholder: files || textFieldTitle,
    style: {
      position: reset ? 'relative' : null
    }
  })), reset && React.createElement(MDBCloseIcon, {
    onClick: resetFiles,
    className: resetClassName,
    ariaLabel: resetAriaLabel || null,
    style: {
      position: 'absolute',
      top: '50%',
      right: '0',
      transform: 'translateY(-50%)'
    }
  }));
};

InputFile.propTypes = {
  btnColor: PropTypes.string,
  btnTitle: PropTypes.string,
  className: PropTypes.string,
  multiple: PropTypes.bool,
  reset: PropTypes.bool,
  resetAriaLabel: PropTypes.string,
  resetClassName: PropTypes.string,
  reverse: PropTypes.bool,
  textFieldTitle: PropTypes.string
};
InputFile.defaultProps = {
  btnTitle: 'Choose file',
  textFieldTitle: 'Upload your file',
  btnColor: 'primary',
  reset: false,
  reverse: false
};

var css$g = ".thumb {\r\n  transition: top .2s, transform .2s, border-radius .2s;\r\n}\r\n\r\ndiv .range-field input[type=\"range\"]+.thumb,\r\ndiv .range-field input[type=\"range\"]+.thumb.active {\r\n  margin-left: -8px;\r\n  height: 30px;\r\n  width: 30px;\r\n  overflow: 'hidden';\r\n}\r\n\r\ndiv .range-field input[type=\"range\"]+.thumb .value,\r\ndiv .range-field input[type=\"range\"]+.thumb.active .value {\r\n  transform: rotate(45deg) translateY(25%);\r\n  color: #fff;\r\n  margin-top: 0;\r\n  margin-left: 0;\r\n  height: 30px;\r\n  font-size: 10px;\r\n}\r\n\r\ninput[type=\"range\"] {\r\n  -webkit-appearance: none;\r\n}\r\n\r\n/* thumb */\r\n\r\ninput[type=range]::-webkit-slider-thumb {\r\n  -webkit-appearance: none;\r\n  border: none;\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background-color: #4285f4;\r\n  transform-origin: 50% 50%;\r\n  margin: -5px 0 0 0;\r\n  transition: 0.3s;\r\n}\r\n\r\ninput[type=range]:focus::-webkit-slider-runnable-track {\r\n  background: #ccc;\r\n}\r\n\r\ninput[type=range]::-moz-range-track {\r\n  /*required for proper track sizing in FF*/\r\n  height: 3px;\r\n  background: #c2c0c2;\r\n  border: none;\r\n}\r\n\r\ninput[type=range]::-moz-range-thumb {\r\n  border: none;\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background: #4285f4;\r\n  margin-top: -5px;\r\n}\r\n\r\ninput[type=range]:-moz-focusrin g {\r\n  /*hide the outline behind the border*/\r\n  outline: 1px solid #ffffff;\r\n  outline-offset: -1px;\r\n}\r\n\r\ninput[type=range]:focus::-moz-range-track {\r\n  background: #c2c0c2;\r\n}\r\n\r\ninput[type=range]::-ms-track {\r\n  height: 3px;\r\n  background: transparent;\r\n  /*remove bg colour from the track, we'll use ms-fill-lower and ms-fill-upper instead */\r\n  border-color: transparent;\r\n  /*leave room for the larger thumb to overflow with a transparent border */\r\n  border-width: 6px 0;\r\n  color: transparent;\r\n  /*remove default tick marks*/\r\n}\r\n\r\ninput[type=range]::-ms-fill-lower {\r\n  background: #c2c0c2;\r\n}\r\n\r\ninput[type=range]::-ms-fill-upper {\r\n  background: #c2c0c2;\r\n}\r\n\r\ninput[type=range]::-ms-thumb {\r\n  border: none;\r\n  height: 14px;\r\n  width: 14px;\r\n  border-radius: 50%;\r\n  background: #4285f4;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-lower {\r\n  background: #c2c0c2;\r\n}\r\n\r\ninput[type=range]:focus::-ms-fill-upper {\r\n  background: #c2c0c2;\r\n}\r\n";
styleInject(css$g);

var InputRange =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputRange, _React$Component);

  function InputRange() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputRange);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputRange)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: false,
      leftPosition: false,
      thumbActive: false,
      thumbTransform: 0,
      thumbTop: '0px',
      input: 'input',
      oneStep: '',
      windowX: '',
      windowY: ''
    });

    _defineProperty(_assertThisInitialized(_this), "inputRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var value = _this.props.value;

      _this.setState({
        value: value
      }, function () {
        return _this.updateDimensions();
      });

      window.addEventListener('resize', _this.updateDimensions.bind(_assertThisInitialized(_this)));
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidUpdate", function (prevProps) {
      var _this$props = _this.props,
          getValue = _this$props.getValue,
          min = _this$props.min,
          value = _this$props.value;
      var oneStep = _this.state.oneStep;

      if (prevProps.value !== value) {
        _this.setState({
          value: value,
          leftPosition: oneStep * value - oneStep * min + 1
        });

        getValue && getValue(value);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "rangeChange", function (e) {
      var value = parseInt(e.target.value);
      var _this$props2 = _this.props,
          getValue = _this$props2.getValue,
          min = _this$props2.min;
      var oneStep = _this.state.oneStep;

      _this.setState({
        value: value,
        leftPosition: oneStep * value - oneStep * min + 1
      });

      getValue && getValue(value);
    });

    _defineProperty(_assertThisInitialized(_this), "rangeFocus", function () {
      _this.setState({
        thumbActive: true,
        thumbTop: '-27px',
        thumbTransform: 1
      });
    });

    _defineProperty(_assertThisInitialized(_this), "rangeMouseLeave", function () {
      var input = _this.inputRef.current;
      input.blur();

      _this.setState({
        thumbActive: false,
        thumbTop: '7px',
        thumbTransform: 0
      });
    });

    return _this;
  }

  _createClass(InputRange, [{
    key: "updateDimensions",
    value: function updateDimensions() {
      var input = this.inputRef.current;
      var inputWidth = input.offsetWidth - 15.5;
      var _this$props3 = this.props,
          max = _this$props3.max,
          min = _this$props3.min;
      var _this$state = this.state,
          value = _this$state.value,
          windowX = _this$state.windowX,
          windowY = _this$state.windowY;
      var oneStep = inputWidth / (max - min);

      if (windowX !== window.innerWidth || windowY !== window.innerHeight) {
        this.setState({
          windowX: window.innerWidth,
          windowY: window.innerHeight,
          leftPosition: oneStep * value - oneStep * min + 1,
          oneStep: oneStep
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updateDimensions.bind(this));
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state2 = this.state,
          thumbActive = _this$state2.thumbActive,
          value = _this$state2.value,
          leftPosition = _this$state2.leftPosition,
          thumbHeight = _this$state2.thumbHeight,
          thumbWidth = _this$state2.thumbWidth,
          thumbTop = _this$state2.thumbTop,
          thumbTransform = _this$state2.thumbTransform;
      var _this$props4 = this.props,
          className = _this$props4.className,
          formClassName = _this$props4.formClassName,
          min = _this$props4.min,
          max = _this$props4.max,
          step = _this$props4.step,
          Tag = _this$props4.tag;
      var inputClass = classNames(className);
      var formClass = classNames('range-field', formClassName);
      var thumbClass = classNames('thumb', thumbActive ? 'active' : false);
      return React.createElement(Tag, {
        className: formClass,
        "data-test": "input-range"
      }, React.createElement("input", {
        ref: this.inputRef,
        className: inputClass,
        min: min,
        max: max,
        step: step,
        value: value,
        type: "range",
        onChange: this.rangeChange,
        onFocus: this.rangeFocus,
        onMouseUp: this.rangeMouseLeave
      }), React.createElement("span", {
        className: thumbClass,
        style: {
          left: leftPosition,
          height: thumbHeight,
          width: thumbWidth,
          top: thumbTop,
          transform: "rotate(-45deg) scale(".concat(thumbTransform, ")")
        }
      }, React.createElement("span", {
        className: "value"
      }, value)));
    }
  }]);

  return InputRange;
}(React.Component);

InputRange.propTypes = {
  className: PropTypes.string,
  formClassName: PropTypes.string,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  value: PropTypes.number
};
InputRange.defaultProps = {
  min: 0,
  max: 100,
  value: 50,
  getValue: false,
  tag: 'div'
};

var InputSwitch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(InputSwitch, _React$Component);

  function InputSwitch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, InputSwitch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(InputSwitch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      value: false
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", _this.handleChange.bind(_assertThisInitialized(_this)));

    return _this;
  }

  _createClass(InputSwitch, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var checked = this.props.checked;
      this.setState({
        value: checked
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var checked = this.props.checked;
      var value = this.state.value;

      if (checked !== value) {
        this.setState({
          value: checked
        });
      }
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var _this$props = this.props,
          getValue = _this$props.getValue,
          onChange = _this$props.onChange;
      var value = this.state.value;
      this.setState({
        value: !value
      });
      getValue && getValue(event.target.checked);
      onChange && onChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          checked = _this$props2.checked,
          className = _this$props2.className,
          disabled = _this$props2.disabled,
          getValue = _this$props2.getValue,
          labelLeft = _this$props2.labelLeft,
          labelRight = _this$props2.labelRight,
          onChange = _this$props2.onChange,
          attributes = _objectWithoutProperties(_this$props2, ["checked", "className", "disabled", "getValue", "labelLeft", "labelRight", "onChange"]);

      var value = this.state.value;
      var classes = classNames('switch', className);
      return React.createElement("div", _extends({}, attributes, {
        className: classes,
        "data-test": "input-switch"
      }), React.createElement("label", null, labelLeft, React.createElement("input", {
        disabled: disabled,
        value: value,
        checked: value,
        onChange: this.handleChange,
        type: "checkbox"
      }), React.createElement("span", {
        className: "lever"
      }), labelRight));
    }
  }]);

  return InputSwitch;
}(React.Component);

InputSwitch.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  getValue: PropTypes.oneOfType([PropTypes.func, PropTypes.bool]),
  labelLeft: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  labelRight: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  onChange: PropTypes.func
};
InputSwitch.defaultProps = {
  checked: false,
  getValue: false,
  labelLeft: 'Off',
  labelRight: 'On'
};

var css$h = ".mdb-lightbox .overlay {\r\n  height: 150vh;\r\n  width: 150vw;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: -100;\r\n}\r\n.mdb-lightbox .ui-controls {\r\n  width: 99vw;\r\n  height: 100vh;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n  position: fixed;\r\n  z-index: 10000;\r\n}\r\n\r\n.mdb-lightbox .ui-controls > * {\r\n  position: fixed;\r\n  z-index: 999999;\r\n}\r\n.mdb-lightbox .overlay.active {\r\n  z-index: 9999;\r\n  background-color: black;\r\n}\r\n\r\n.mdb-lightbox .next-img,\r\n.mdb-lightbox .prev-img {\r\n  transform-origin: center;\r\n}\r\n.mdb-lightbox .next-img {\r\n  left: 150% !important;\r\n}\r\n.mdb-lightbox .prev-img {\r\n  left: -50% !important;\r\n}\r\n\r\n.mdb-lightbox img:not(.zoom) {\r\n  transform-origin: top left;\r\n}\r\n/* transform: translate(-50%,-50%) scale(1) translate3d(0,0,0); */\r\n.mdb-lightbox img.zoom {\r\n  z-index: 10001;\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%) scale(1) translate3d(0, 0, 0);\r\n  -webkit-user-select: none;\r\n  -khtml-user-select: none;\r\n  -moz-user-select: none;\r\n  -o-user-select: none;\r\n  user-select: text;\r\n  /* pointer-events: none; */\r\n  transform-origin: center;\r\n  outline: none;\r\n}\r\n\r\n.mdb-lightbox .mdb-lightbox figure img.zoom:hover {\r\n  opacity: 1;\r\n}\r\n\r\n.mdb-lightbox .block {\r\n  display: block;\r\n}\r\n\r\n.mdb-lightbox .pswp__button.lb-zoom-out {\r\n  background-position: -132px 0;\r\n}\r\n.mdb-lightbox .pswp__button.pswp__button--fs.fullscreen {\r\n  background-position: -44px 0;\r\n}\r\n\r\n.mdb-lightbox .arrow-container {\r\n  top: 50%;\r\n  transform: translateY(-50%);\r\n}\r\n\r\n.mdb-lightbox .pswp__button--left,\r\n.mdb-lightbox .pswp__button--right {\r\n  width: 0px;\r\n  height: 0px;\r\n  margin-top: -100px;\r\n}\r\n";
styleInject(css$h);

var Lightbox =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Lightbox, _React$Component);

  function Lightbox() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Lightbox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Lightbox)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "reset", function () {
      return {
        activeKey: null,
        changeSlide: false,
        dragImg: false,
        dragImgPos: {},
        dragPercent: 0,
        galleryImagesData: [],
        imgSrc: null,
        imgSrcData: null,
        resize: false,
        resizePos: {
          x: 0,
          y: 0
        },
        scale: 0,
        scaleWheel: false,
        screenSize: {
          x: window.innerWidth,
          y: window.innerHeight
        },
        showLeft: false,
        showRight: false,
        sliderOpened: false,
        zoomedScale: 0
      };
    });

    _defineProperty(_assertThisInitialized(_this), "state", _this.reset());

    _defineProperty(_assertThisInitialized(_this), "overlay", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "slideRefs", []);

    _defineProperty(_assertThisInitialized(_this), "componentWillUnmount", function () {
      _this.setState(_this.reset());

      document.removeEventListener('keydown', _this.keyEvents);
    });

    _defineProperty(_assertThisInitialized(_this), "keyEvents", function (e) {
      var _this$state = _this.state,
          changeSlide = _this$state.changeSlide,
          imgSrc = _this$state.imgSrc,
          sliderOpened = _this$state.sliderOpened;

      var active = _this.slideRefs.filter(function (el) {
        return el === document.activeElement;
      })[0];

      var key = e.key;

      if (key === 'Enter' && active) {
        _this.zoom(e);
      }

      if (sliderOpened && !changeSlide) {
        if (key === 'Escape' || key === 'ArrowUp' || key === 'ArrowDown') {
          _this.closeZoom();
        }

        if (key === 'ArrowLeft') {
          _this.changeSlide('prev');
        }

        if (key === 'ArrowRight') {
          _this.changeSlide('next');
        }

        if (key === 'Tab') {
          _this.setFocus(imgSrc);
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setFocus", function (target) {
      return setTimeout(function () {
        return target.focus();
      }, 0);
    });

    _defineProperty(_assertThisInitialized(_this), "setScreenSize", function () {
      _this.setState({
        screenSize: {
          x: window.innerWidth,
          y: window.innerHeight
        }
      });
    });

    _defineProperty(_assertThisInitialized(_this), "updateGalleryData", function () {
      var gallery = [];

      if (_this.slideRefs) {
        _this.slideRefs.map(function (el) {
          return gallery.push(_this.setData(el));
        });
      }

      _this.setState({
        galleryImagesData: gallery
      });
    });

    _defineProperty(_assertThisInitialized(_this), "setScale", function (e) {
      var screenSize = _this.state.screenSize;
      var _e$size = e.size,
          height = _e$size.height,
          width = _e$size.width;
      var margin = _this.props.marginSpace;
      var scale = 1;

      if (screenSize.x > screenSize.y) {
        if (e.realH > height) {
          if (height === width && screenSize.y > screenSize.x) {
            scale = (screenSize.x - margin) / width;
          } else if (height === width && screenSize.y < screenSize.x) {
            scale = (screenSize.y - margin) / height;
          } else if (height > width) {
            scale = (screenSize.y - margin) / height;

            if (scale * width > screenSize.x) {
              scale = (screenSize.x - margin) / width;
            }
          } else if (height < width) {
            scale = (screenSize.x - margin) / width;

            if (scale * height > screenSize.y) {
              scale = (screenSize.y - margin) / height;
            }
          }
        }

        return scale * (height / e.realH);
      } else {
        return scale;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "setData", function (img) {
      var screenSize = _this.state.screenSize;
      var data = {
        activeKey: _this.slideRefs.indexOf(img),
        imgSrc: img,
        imgSrcData: {
          realW: img.naturalWidth,
          realH: img.naturalHeight,
          size: img.getBoundingClientRect()
        },
        scale: screenSize.x > screenSize.y ? img.getBoundingClientRect().width / img.naturalWidth : img.getBoundingClientRect().width / screenSize.x
      };
      data.zoomedScale = _this.setScale(data.imgSrcData);
      return data;
    });

    _defineProperty(_assertThisInitialized(_this), "zoom", function (_ref) {
      var target = _ref.target;
      var imgSrc = _this.state.imgSrc;
      var transition = _this.props.transition;
      var img = target;

      if (!imgSrc) {
        _this.updateGalleryData();

        var dataOfImage = _this.setData(img);

        var _dataOfImage$imgSrcDa = dataOfImage.imgSrcData.size,
            left = _dataOfImage$imgSrcDa.left,
            top = _dataOfImage$imgSrcDa.top;

        _this.setState(dataOfImage, function () {
          img.style.cssText = "\n          top: 0;\n          left: 0;\n          transform:  translate(".concat(left, "px, ").concat(top, "px) translate3d(0,0,0) scale(").concat(dataOfImage.scale, ") ;\n          position: fixed;\n        ");
          setTimeout(function () {
            document.body.classList.add('overflow-hidden');
            img.style.cssText = "\n            transition: ".concat(transition, "ms;\n            transform:\n              translate(-50%,-50%)\n              translate3d(0,0,0)\n              scale(").concat(_this.setScale(dataOfImage.imgSrcData), ")\n          ");
            img.classList.add('zoom');

            _this.overlay.current.classList.add('active');

            setTimeout(function () {
              img.style.transition = '0ms';

              _this.setState({
                sliderOpened: true
              }, function () {
                _this.setState({
                  showRight: _this.checkSiblings('next'),
                  showLeft: _this.checkSiblings('prev')
                });
              });
            }, transition);
          }, 5);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "closeZoom", function () {
      var _this$state2 = _this.state,
          imgSrc = _this$state2.imgSrc,
          galleryImagesData = _this$state2.galleryImagesData,
          activeKey = _this$state2.activeKey,
          changeSlide = _this$state2.changeSlide;

      if (!changeSlide) {
        _this.setState({
          sliderOpened: false
        });

        _this.setFocus(imgSrc);

        var PREV_IMG = _this.slideRefs[activeKey - 1] || _this.slideRefs[_this.slideRefs.length - 1];
        var NEXT_IMG = _this.slideRefs[activeKey + 1] || _this.slideRefs[0];
        PREV_IMG.style.cssText = '';
        NEXT_IMG.style.cssText = '';
        document.body.classList.remove('overflow-hidden');
        imgSrc.classList.remove('zoom');
        imgSrc.style.cssText = "\n          transition: ".concat(_this.props.transition, "ms;\n          z-index: 9999;\n          top: 0;\n          left: 0;\n          transform: translate(").concat(galleryImagesData[activeKey].imgSrcData.size.left, "px, ").concat(galleryImagesData[activeKey].imgSrcData.size.top, "px) translate3d(0,0,0) scale(").concat(galleryImagesData[activeKey].scale, ");\n          position: fixed;\n        ");

        _this.overlay.current.classList.remove('active');

        setTimeout(function () {
          imgSrc.style.cssText = '';

          _this.setState(_this.reset());
        }, _this.props.transition);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "scrollZoom", function (e) {
      var _this$state3 = _this.state,
          activeKey = _this$state3.activeKey,
          imgSrc = _this$state3.imgSrc,
          sliderOpened = _this$state3.sliderOpened,
          zoomedScale = _this$state3.zoomedScale;
      var scale = _this.props.scale;

      if (_this.slideRefs[activeKey] === imgSrc && sliderOpened && !e.target.classList.contains('next-img') && !e.target.classList.contains('prev-img')) {
        var SCALE_RATIO = scale || 0.1;
        var SCALE_UP = 1 + SCALE_RATIO;
        var SCALE_DOWN = 1 - SCALE_RATIO;
        var WHEEL_UP = e.deltaY < 0;
        var WHEEL_DOWN = e.deltaY > 0;
        var IMG_DATA = zoomedScale;
        var target;
        e.target.tagName === 'BUTTON' ? target = _this.slideRefs[activeKey] : target = e.target;
        var scaleTransform = target.style.transform.split(' ');
        var scaleValue = Number(scaleTransform.filter(function (el) {
          return !el.search('scale');
        })[0].replace('scale(', '').replace(')', ''));

        var trans3d = _this.slideRefs[activeKey].style.transform.split(') ').filter(function (el) {
          return !el.search('translate3d');
        }).map(function (el) {
          return el.replace('translate3d(', '');
        }).map(function (el) {
          return el.replace(',', '');
        })[0].split(' ').map(function (el) {
          return Number(el.replace('px', '').replace(',', ''));
        });

        target.style.transition = "".concat(0, "ms");

        if (WHEEL_UP || e.button === 0 && !e.target.classList.contains('lb-zoom-out') && e.target.tagName === 'BUTTON') {
          if (scaleValue * SCALE_UP < IMG_DATA * 4) {
            scaleValue *= SCALE_UP;
          }

          _this.setState({
            resize: true
          });
        }

        if (WHEEL_DOWN || e.button === 0 && e.target.classList.contains('lb-zoom-out')) {
          if (scaleValue * SCALE_DOWN >= IMG_DATA) {
            scaleValue *= SCALE_DOWN;
            trans3d[0] *= SCALE_DOWN / 1.15;
            trans3d[1] *= SCALE_DOWN / 1.15;
          } else {
            scaleValue = IMG_DATA;

            _this.setState({
              resize: false
            });

            trans3d[0] = 0;
            trans3d[1] = 0;

            _this.setState({
              resizePos: {
                x: 0,
                y: 0
              }
            });
          }
        }

        target.style.transform = "\n        translate(-50%, -50%)\n        translate3d(".concat(trans3d[0], "px,").concat(trans3d[1], "px, 0px)\n        scale(").concat(scaleValue, ")\n      ");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleFullscreen", function (e) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        e.target.classList.remove('fullscreen');
      } else {
        document.documentElement.requestFullscreen();
        e.target.classList.add('fullscreen');
      }
    });

    _defineProperty(_assertThisInitialized(_this), "changeSlide", function (direction) {
      var _this$state4 = _this.state,
          activeKey = _this$state4.activeKey,
          changeSlide = _this$state4.changeSlide,
          imgSrc = _this$state4.imgSrc,
          galleryImagesData = _this$state4.galleryImagesData;
      var transition = _this.props.transition;

      if (!changeSlide) {
        var _assertThisInitialize = _assertThisInitialized(_this),
            slideRefs = _assertThisInitialize.slideRefs;

        var CURRENT_IMG = imgSrc;
        var PREV_IMG = slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
        var NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];
        var actual_key;

        var trans3d_Unset = function trans3d_Unset(index) {
          return "\n        translate(-50%, -50%)\n        translate3d(0px, 0px, 0px)\n        scale(".concat(galleryImagesData[index].zoomedScale, ")\n      ");
        };

        var change = function change() {
          var imgSrc = _this.state.imgSrc;
          setTimeout(function () {
            PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = "".concat(0, "ms");
            var CURRENT = imgSrc;

            var dataOfImage = _this.setData(CURRENT);

            _this.setState(dataOfImage, function () {
              CURRENT.classList.add('zoom');
              CURRENT.style.cssText = "\n              transform:\n                translate(-50%,-50%)\n                translate3d(0,0,0)\n                scale(".concat(_this.setScale(dataOfImage.imgSrcData), ")\n            ");

              _this.setState({
                showRight: _this.checkSiblings('next'),
                showLeft: _this.checkSiblings('prev')
              }, function () {
                return setTimeout(function () {
                  _this.setState({
                    changeSlide: false
                  });
                }, 100);
              });
            });
          }, transition);
        };

        PREV_IMG.style.transition = CURRENT_IMG.style.transition = NEXT_IMG.style.transition = "".concat(transition, "ms");
        CURRENT_IMG.style.transform = trans3d_Unset(activeKey);
        PREV_IMG.style.transform = trans3d_Unset(_this.slideRefs.indexOf(PREV_IMG));
        NEXT_IMG.style.transform = trans3d_Unset(_this.slideRefs.indexOf(NEXT_IMG));

        if (!changeSlide) {
          _this.setState({
            changeSlide: true
          });

          if (direction === 'prev') {
            actual_key = _this.slideRefs.indexOf(PREV_IMG);
            CURRENT_IMG.classList.add('next-img');
            PREV_IMG.classList.remove('prev-img');

            _this.setState({
              imgSrc: PREV_IMG
            });

            change(actual_key);
          } else if (direction === 'next') {
            actual_key = _this.slideRefs.indexOf(NEXT_IMG);
            CURRENT_IMG.classList.add('prev-img');
            NEXT_IMG.classList.remove('next-img');

            _this.setState({
              imgSrc: NEXT_IMG
            });

            change(actual_key);
          } else {
            _this.setState({
              dragImg: false,
              changeSlide: false
            });
          }
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragStart", function (e) {
      var _this$state5 = _this.state,
          changeSlide = _this$state5.changeSlide,
          dragImg = _this$state5.dragImg,
          dragPercent = _this$state5.dragPercent,
          imgSrc = _this$state5.imgSrc,
          sliderOpened = _this$state5.sliderOpened;

      if (!dragImg && imgSrc && !changeSlide && sliderOpened && dragPercent === 0) {
        var dragImgPos = {
          x: e.clientX || e.touches[0].clientX,
          y: e.clientY || e.touches[0].clientY
        };

        _this.setState({
          dragImg: true,
          dragImgPos: dragImgPos
        });
      } else {
        _this.setState({
          changeSlide: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragMoveSlide", function (e) {
      var _this$state6 = _this.state,
          activeKey = _this$state6.activeKey,
          galleryImagesData = _this$state6.galleryImagesData,
          resize = _this$state6.resize,
          dragImg = _this$state6.dragImg,
          dragImgPos = _this$state6.dragImgPos,
          resizePos = _this$state6.resizePos;

      var _assertThisInitialize2 = _assertThisInitialized(_this),
          slideRefs = _assertThisInitialize2.slideRefs;

      if (dragImg && !resize) {
        var CURRENT_IMG = e.target;
        var PREV_IMG = slideRefs[activeKey - 1] || slideRefs[slideRefs.length - 1];
        var NEXT_IMG = slideRefs[activeKey + 1] || slideRefs[0];
        var dragPos = {
          x: e.clientX || e.touches[0].clientX,
          y: e.clientY || e.touches[0].clientY
        };
        var diffX = dragPos.x - dragImgPos.x;
        var diffY = dragPos.y - dragImgPos.y;

        if (Math.abs(diffX) > Math.abs(diffY)) {
          _this.setState({
            dragPercent: diffX / window.innerWidth * 100
          });

          var styleSlide = function styleSlide(index) {
            return "transform:\n          translate(-50%,-50%)\n          translate3d(".concat(diffX, "px, 0, 0)\n          scale(").concat(galleryImagesData[index].zoomedScale, ")\n        ");
          };

          CURRENT_IMG.style.cssText = styleSlide(activeKey);
          PREV_IMG.style.cssText = styleSlide(_this.slideRefs.indexOf(PREV_IMG));
          NEXT_IMG.style.cssText = styleSlide(_this.slideRefs.indexOf(NEXT_IMG));
        }
      } else if (dragImg && resize) {
        var _CURRENT_IMG = e.target;
        var _dragPos = {
          x: e.clientX || e.touches[0].clientX,
          y: e.clientY || e.touches[0].clientY
        };
        var CRR = galleryImagesData[activeKey];
        var scaleValue = Number(_CURRENT_IMG.style.transform.split(' ').filter(function (el) {
          return !el.search('scale');
        })[0].replace('scale(', '').replace(')', ''));

        var _diffX = _dragPos.x - dragImgPos.x + resizePos.x;

        var _diffY = _dragPos.y - dragImgPos.y + resizePos.y;

        var scaleX = CRR.imgSrcData.realW * scaleValue / 3;
        var scaleY = CRR.imgSrcData.realH * scaleValue / 3;

        if (_diffX > scaleX) {
          _diffX = scaleX;
        } else if (_diffX < -scaleX) {
          _diffX = -scaleX;
        }

        if (_diffY > scaleY) {
          _diffY = scaleY;
        } else if (_diffY < -scaleY) {
          _diffY = -scaleY;
        }

        _CURRENT_IMG.style.cssText = "transform:\n        translate(-50%,-50%)\n        translate3d(".concat(_diffX, "px, ").concat(_diffY, "px, 0)\n        scale(").concat(scaleValue, ")\n      ");
      }
    });

    _defineProperty(_assertThisInitialized(_this), "dragStop", function () {
      var _this$state7 = _this.state,
          resize = _this$state7.resize,
          dragImg = _this$state7.dragImg,
          activeKey = _this$state7.activeKey,
          dragPercent = _this$state7.dragPercent;

      if (dragImg) {
        var dragPercentScale = 20;

        if (!resize) {
          if (dragPercent > dragPercentScale) {
            _this.checkSiblings('prev') ? _this.changeSlide('prev') : _this.changeSlide(null);
          } else if (dragPercent < -dragPercentScale) {
            _this.checkSiblings('next') ? _this.changeSlide('next') : _this.changeSlide(null);
          } else {
            _this.changeSlide(null);
          }
        } else {
          var trans3d = _this.slideRefs[activeKey].style.transform.split(') ').filter(function (el) {
            return !el.search('translate3d');
          }).map(function (el) {
            return el.replace('translate3d(', '');
          }).map(function (el) {
            return el.replace(',', '');
          })[0].split(' ').map(function (el) {
            return Number(el.replace('px', '').replace(',', ''));
          });

          _this.setState({
            resizePos: {
              x: trans3d[0],
              y: trans3d[1]
            }
          });
        }

        _this.setState({
          dragImg: false,
          dragPercent: 0
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "checkSiblings", function (direction) {
      return _this.slideRefs.filter(function (target) {
        return target.classList.contains("".concat(direction, "-img"));
      }).length > 0;
    });

    return _this;
  }

  _createClass(Lightbox, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keyEvents);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          className = _this$props.className,
          images = _this$props.images,
          itemClassName = _this$props.itemClassName,
          descriptionClassName = _this$props.descriptionClassName,
          noMargins = _this$props.noMargins,
          lg = _this$props.lg,
          md = _this$props.md,
          sm = _this$props.sm,
          size = _this$props.size,
          xl = _this$props.xl,
          xs = _this$props.xs,
          transition = _this$props.transition;
      var _this$state8 = this.state,
          activeKey = _this$state8.activeKey,
          galleryImagesData = _this$state8.galleryImagesData,
          imgSrc = _this$state8.imgSrc,
          showLeft = _this$state8.showLeft,
          showRight = _this$state8.showRight,
          sliderOpened = _this$state8.sliderOpened;
      var lightboxClasses = classNames('mdb-lightbox d-flex flex-wrap', !noMargins && 'no-margin', className);
      var descriptionClasses = classNames('text-uppercase font-weight-bold mt-4', descriptionClassName);

      var pswp__button = function pswp__button(button) {
        return classNames("pswp__button d-block z-depth-0 pswp__button--".concat(button));
      };

      var galleryClassNames = function galleryClassNames(id) {
        var sliders1 = _this2.slideRefs.length > 1;
        var sliders2 = _this2.slideRefs.length > 2;
        return classNames('figure-img img-fluid z-depth-1 m-0', sliders1 && sliderOpened && id === activeKey + 1 && 'zoom next-img', sliders1 && sliderOpened && id === activeKey - 1 && 'zoom prev-img', sliders1 && sliders2 && sliderOpened && id === 0 && activeKey + 1 > _this2.slideRefs.length - 1 && 'zoom next-img', sliders1 && sliders2 && sliderOpened && id === _this2.slideRefs.length - 1 && activeKey === 0 && 'zoom prev-img', sliders1 && sliders2 && sliderOpened && id === 1 && activeKey === 0 && 'zoom next-img');
      };

      var galleryStyles = function galleryStyles(id) {
        if (_this2.slideRefs[id]) {
          var next = id === activeKey + 1;
          var prev = id === activeKey - 1;
          var second = id === 0 && activeKey + 1 > _this2.slideRefs.length - 1;
          var last = id === _this2.slideRefs.length - 1 && activeKey === 0;
          var first = id === 1 && activeKey === 0;
          var style = {
            transform: _this2.slideRefs.length > 1 && sliderOpened && (next || prev || second || last || first) && "translate(-50%, -50%) translate3d(0,0,0) scale(".concat(_this2.setScale({
              realW: _this2.slideRefs[id].naturalWidth,
              realH: _this2.slideRefs[id].naturalHeight,
              size: _this2.slideRefs[id].getBoundingClientRect()
            }), ")")
          };
          return style;
        }
      };

      var items = images.map(function (image, id) {
        return React.createElement(Col, {
          tag: "figure",
          lg: image.lg || lg,
          md: image.md || md,
          sm: image.sm || sm,
          xl: image.xl || xl,
          xs: image.xs || xs,
          size: size || image.size,
          className: image.className || itemClassName,
          key: id
        }, React.createElement("img", {
          src: image.src,
          className: galleryClassNames(id),
          alt: image.alt || "image ".concat(id + 1),
          ref: function ref(img) {
            return _this2.slideRefs[id] = img;
          },
          style: galleryStyles(id),
          draggable: !imgSrc,
          onClick: _this2.zoom,
          onDragStart: function onDragStart(e) {
            return e.preventDefault();
          },
          onMouseDown: _this2.dragStart,
          onTouchStart: _this2.dragStart,
          onMouseMove: _this2.dragMoveSlide,
          onTouchMove: _this2.dragMoveSlide,
          onMouseLeave: _this2.dragStop,
          onMouseUp: _this2.dragStop,
          onTouchEnd: _this2.dragStop,
          onWheel: _this2.scrollZoom,
          tabIndex: image.tabIndex || '0'
        }), _this2.slideRefs[id] === imgSrc && React.createElement("div", {
          className: "block",
          style: {
            height: "".concat(galleryImagesData[activeKey].imgSrcData.size.height, "px"),
            width: "".concat(galleryImagesData[activeKey].imgSrcData.size.width, "px")
          }
        }), image.description && React.createElement("p", {
          className: descriptionClasses
        }, image.description));
      });
      return React.createElement(Container, {
        "data-test": "light-box",
        className: "mdb-lightbox"
      }, imgSrc && React.createElement("div", {
        className: "ui-controls",
        onClick: function onClick(e) {
          e.target.classList.contains('ui-controls') && _this2.closeZoom();
        }
      }, React.createElement("p", {
        className: "float-left text-white-50 mt-3 ml-3"
      }, activeKey + 1, "/", images.length), React.createElement(ButtonGroup, {
        style: {
          transition: "".concat(transition / 2, "ms"),
          right: '0'
        }
      }, React.createElement(Button, {
        className: pswp__button('zoom'),
        color: "transparent",
        onClick: this.scrollZoom
      }), React.createElement(Button, {
        className: pswp__button('zoom lb-zoom-out'),
        color: "transparent",
        onClick: this.scrollZoom
      }), React.createElement(Button, {
        className: pswp__button('fs'),
        color: "transparent",
        onClick: this.toggleFullscreen
      }), React.createElement(Button, {
        className: pswp__button('close'),
        color: "transparent",
        onClick: this.closeZoom
      })), React.createElement("div", {
        className: "d-flex justify-content-between w-100 arrow-container",
        style: {
          transition: "".concat(transition, "ms")
        }
      }, showLeft && React.createElement("div", {
        className: pswp__button('arrow--left prev'),
        onClick: function onClick() {
          return _this2.changeSlide('prev');
        }
      }), showRight && React.createElement("div", {
        className: pswp__button('arrow--right next'),
        onClick: function onClick() {
          return _this2.changeSlide('next');
        }
      }))), React.createElement("div", {
        className: "overlay",
        ref: this.overlay,
        style: {
          transition: "".concat(transition, "ms")
        },
        onClick: this.closeZoom
      }), React.createElement("div", {
        className: lightboxClasses
      }, items));
    }
  }]);

  return Lightbox;
}(React.Component);

Lightbox.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    alt: PropTypes.string,
    description: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
    lg: PropTypes.string,
    md: PropTypes.string,
    size: PropTypes.string,
    sm: PropTypes.string,
    src: PropTypes.string,
    tabIndex: PropTypes.string,
    xl: PropTypes.string,
    xs: PropTypes.string
  })),
  itemClassName: PropTypes.string,
  lg: PropTypes.string,
  marginSpace: PropTypes.number,
  md: PropTypes.string,
  noMargins: PropTypes.bool,
  size: PropTypes.string,
  sm: PropTypes.string,
  transition: PropTypes.number,
  xl: PropTypes.string,
  xs: PropTypes.string
};
Lightbox.defaultProps = {
  images: [],
  noMargins: false,
  marginSpace: 150,
  transition: 400
};

var Parallax = React.forwardRef(function (props, jarallax) {
  var alt = props.alt,
      children = props.children,
      className = props.className,
      element = props.element,
      image = props.image,
      keepImg = props.keepImg,
      speed = props.speed,
      Tag = props.tag,
      threshold = props.threshold,
      type = props.type,
      video = props.video,
      height = props.height,
      width = props.width;
  var parentClasses = classNames(keepImg ? 'jarallax-keep-img' : 'jarallax', className);
  var elementClasses = classNames(Tag === 'span' ? 'd-inline-block' : null);
  return React.createElement(React.Fragment, null, image && React.createElement(Tag, {
    ref: jarallax,
    className: parentClasses,
    style: {
      height: height,
      width: width
    },
    "data-jarallax": true,
    "data-type": type,
    "data-speed": speed
  }, React.createElement("img", {
    className: "jarallax-img ",
    src: image,
    alt: alt
  }), children), video && React.createElement(Tag, {
    ref: jarallax,
    className: parentClasses,
    style: {
      height: height,
      width: width
    },
    "data-jarallax": true,
    "data-type": type,
    "data-speed": speed,
    "data-video-src": video
  }, children), element && React.createElement(Tag, {
    className: elementClasses,
    ref: jarallax,
    "data-jarallax-element": speed,
    "data-threshold": threshold
  }, children));
});
Parallax.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  height: PropTypes.string,
  image: PropTypes.string,
  speed: PropTypes.oneOfType([PropTypes.node, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  threshold: PropTypes.node,
  type: PropTypes.string,
  video: PropTypes.string,
  width: PropTypes.string
};
Parallax.defaultProps = {
  alt: 'MDBParallax image',
  height: '600px',
  speed: 0.5,
  tag: 'div',
  threshold: 'null null',
  type: 'scroll',
  width: '100%'
};

var css$i = "\r\n/*\r\n * Container style\r\n */\r\n .ps {\r\n  overflow: hidden !important;\r\n  overflow-anchor: none;\r\n  -ms-overflow-style: none;\r\n  touch-action: auto;\r\n  -ms-touch-action: auto;\r\n}\r\n\r\n/*\r\n * Scrollbar rail styles\r\n */\r\n.ps__rail-x {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  height: 15px;\r\n  /* there must be 'bottom' or 'top' for ps__rail-x */\r\n  bottom: 0px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-y {\r\n  display: none;\r\n  opacity: 0;\r\n  transition: background-color .2s linear, opacity .2s linear;\r\n  -webkit-transition: background-color .2s linear, opacity .2s linear;\r\n  width: 15px;\r\n  /* there must be 'right' or 'left' for ps__rail-y */\r\n  right: 0;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps--active-x > .ps__rail-x,\r\n.ps--active-y > .ps__rail-y {\r\n  display: block;\r\n  background-color: transparent;\r\n}\r\n\r\n.ps:hover > .ps__rail-x,\r\n.ps:hover > .ps__rail-y,\r\n.ps--focus > .ps__rail-x,\r\n.ps--focus > .ps__rail-y,\r\n.ps--scrolling-x > .ps__rail-x,\r\n.ps--scrolling-y > .ps__rail-y {\r\n  opacity: 0.6;\r\n}\r\n\r\n.ps__rail-x:hover,\r\n.ps__rail-y:hover,\r\n.ps__rail-x:focus,\r\n.ps__rail-y:focus {\r\n  background-color: #eee;\r\n  opacity: 0.9;\r\n}\r\n\r\n/*\r\n * Scrollbar thumb styles\r\n */\r\n.ps__thumb-x {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, height .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, height .2s ease-in-out;\r\n  height: 6px;\r\n  /* there must be 'bottom' for ps__thumb-x */\r\n  bottom: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__thumb-y {\r\n  background-color: #aaa;\r\n  border-radius: 6px;\r\n  transition: background-color .2s linear, width .2s ease-in-out;\r\n  -webkit-transition: background-color .2s linear, width .2s ease-in-out;\r\n  width: 6px;\r\n  /* there must be 'right' for ps__thumb-y */\r\n  right: 2px;\r\n  /* please don't change 'position' */\r\n  position: absolute;\r\n}\r\n\r\n.ps__rail-x:hover > .ps__thumb-x,\r\n.ps__rail-x:focus > .ps__thumb-x {\r\n  background-color: #999;\r\n  height: 11px;\r\n}\r\n\r\n.ps__rail-y:hover > .ps__thumb-y,\r\n.ps__rail-y:focus > .ps__thumb-y {\r\n  background-color: #999;\r\n  width: 11px;\r\n}\r\n\r\n/* MS supports */\r\n@supports (-ms-overflow-style: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n\r\n@media screen and (-ms-high-contrast: active), (-ms-high-contrast: none) {\r\n  .ps {\r\n    overflow: auto !important;\r\n  }\r\n}\r\n\r\n.scrollbar-container {\r\n  position: relative;\r\n  height: 100%;\r\n}\r\n";
styleInject(css$i);

var handlerNameByEvent = {
  'ps-scroll-y': 'onScrollY',
  'ps-scroll-x': 'onScrollX',
  'ps-scroll-up': 'onScrollUp',
  'ps-scroll-down': 'onScrollDown',
  'ps-scroll-left': 'onScrollLeft',
  'ps-scroll-right': 'onScrollRight',
  'ps-y-reach-start': 'onYReachStart',
  'ps-y-reach-end': 'onYReachEnd',
  'ps-x-reach-start': 'onXReachStart',
  'ps-x-reach-end': 'onXReachEnd'
};
Object.freeze(handlerNameByEvent);

var ScrollBar =
/*#__PURE__*/
function (_Component) {
  _inherits(ScrollBar, _Component);

  function ScrollBar() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ScrollBar);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ScrollBar)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_handlerByEvent", new Map());

    _defineProperty(_assertThisInitialized(_this), "handleRef", function (ref) {
      _this._container = ref;

      _this.props.containerRef(ref);
    });

    return _this;
  }

  _createClass(ScrollBar, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var option = this.props.option;
      this._ps = new PerfectScrollbar(this._container, option);
      Object.keys(handlerNameByEvent).forEach(function (key) {
        // eslint-disable-next-line react/destructuring-assignment
        var callback = _this2.props[handlerNameByEvent[key]];

        if (callback) {
          var handler = function handler() {
            return callback(_this2._container);
          };

          _this2._handlerByEvent.set(key, handler);

          _this2._container.addEventListener(key, handler, false);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this._ps.update();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      Object.keys(this._handlerByEvent).forEach(function (value, key) {
        _this3._container.removeEventListener(key, value, false);
      });

      this._handlerByEvent.clear();

      this._ps.destroy();

      this._ps = null;
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className;
      return React.createElement("div", {
        className: "scrollbar-container ".concat(className),
        ref: this.handleRef,
        "data-test": "perfect-scrollbar"
      }, children);
    }
  }]);

  return ScrollBar;
}(Component);

ScrollBar.defaultProps = {
  className: '',
  option: undefined,
  containerRef: function containerRef() {},
  onScrollY: undefined,
  onScrollX: undefined,
  onScrollUp: undefined,
  onScrollDown: undefined,
  onScrollLeft: undefined,
  onScrollRight: undefined,
  onYReachStart: undefined,
  onYReachEnd: undefined,
  onXReachStart: undefined,
  onXReachEnd: undefined
};
ScrollBar.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  containerRef: PropTypes.func,
  onScrollDown: PropTypes.func,
  onScrollLeft: PropTypes.func,
  onScrollRight: PropTypes.func,
  onScrollUp: PropTypes.func,
  onScrollX: PropTypes.func,
  onScrollY: PropTypes.func,
  onXReachEnd: PropTypes.func,
  onXReachStart: PropTypes.func,
  onYReachEnd: PropTypes.func,
  onYReachStart: PropTypes.func,
  option: PropTypes.object
};

var ScrollBox = function ScrollBox(props) {
  var className = props.className,
      children = props.children,
      attributes = _objectWithoutProperties(props, ["className", "children"]);

  var classes = classNames('scroll-box', className);
  return React.createElement("div", _extends({}, attributes, {
    className: classes
  }), children);
};

ScrollBox.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};

var ScrollSpyList = function ScrollSpyList(props) {
  var className = props.className,
      children = props.children,
      color = props.color,
      attributes = _objectWithoutProperties(props, ["className", "children", "color"]);

  var classes = classNames('nav md-tabs horizontal-spy', color || false, className);
  return React.createElement("ul", _extends({}, attributes, {
    role: "navigation",
    className: classes
  }), children);
};

ScrollSpyList.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string
};

var ScrollSpyListItem = function ScrollSpyListItem(props) {
  var className = props.className,
      children = props.children,
      active = props.active,
      attributes = _objectWithoutProperties(props, ["className", "children", "active"]);

  var classes = classNames('nav-link ', active ? 'active' : false, className);
  return React.createElement("li", {
    className: "nav-item"
  }, React.createElement("a", _extends({}, attributes, {
    className: classes,
    role: "tab"
  }), children));
};

ScrollSpyListItem.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string
};

var ScrollSpyText = function ScrollSpyText(props) {
  var className = props.className,
      children = props.children,
      scrollSpyRef = props.scrollSpyRef,
      attributes = _objectWithoutProperties(props, ["className", "children", "scrollSpyRef"]);

  var classes = classNames('scrollspy-example z-depth-1', className);
  return React.createElement("div", _extends({}, attributes, {
    ref: scrollSpyRef,
    className: classes
  }), children);
};

ScrollSpyText.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  scrollSpyRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object])
};

var css$j = ".popover-enter {\r\n  opacity: 0.01;\r\n  transform: scale(0.9) translateY(50%);\r\n}\r\n\r\n.popover-enter-active {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n  transition: scale 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.popover-enter-done {\r\n  opacity: 1;\r\n  transform: scale(1);\r\n}\r\n\r\n.popover-exit {\r\n  opacity: 1;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.popover-exit-active {\r\n  opacity: 0;\r\n  transform: scale(0.8);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n/* slide from side */\r\n\r\n.side-slide-enter, .side-slide-appear {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n}\r\n\r\n.side-slide-enter-active, .side-slide-appear-active {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0);\r\n}\r\n\r\n.side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(-100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-enter, .right-side-slide-appear {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n}\r\n\r\n.right-side-slide-enter-active, .right-side-slide-appear-active {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n  transition: transform 300ms ease-out, opacity 300ms ease;\r\n}\r\n\r\n.right-side-slide-enter-done {\r\n  opacity: 1;\r\n  transform: translateX(0%) !important;\r\n}\r\n\r\n.right-side-slide-exit {\r\n  opacity: 1;\r\n  transform: translateX(0%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.right-side-slide-exit-active {\r\n  opacity: 0.2;\r\n  transform: translateX(100%);\r\n  transition: all 300ms ease-out;\r\n}\r\n\r\n.side-nav[data-animate=\"false\"]{\r\n  transform: translateX(0%);\r\n}\r\n\r\n\r\n.side-nav.wide {\r\n    transition-property: all;\r\n    transition-duration: 300ms;\r\n    transition-timing-function: ease-out;\r\n}\r\n\r\n\r\n.side-nav.wide.slim {\r\n    width: 3.75rem;\r\n    transition-property: all;\r\n    transition-duration: 300ms;\r\n    transition-timing-function: ease-out;\r\n    right: 3.75rem;\r\n}\r\n\r\n.right-aligned.side-nav.wide.slim {\r\n    right: 0;\r\n}\r\n\r\n\r\n";
styleInject(css$j);

var defaultValue = {
  slim: false
};
var SideNavContext = React.createContext(defaultValue);

var SideNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNav, _React$Component);

  function SideNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "isOpen", function () {
      var _this$props = _this.props,
          fixed = _this$props.fixed,
          breakWidth = _this$props.breakWidth,
          responsive = _this$props.responsive,
          triggerOpening = _this$props.triggerOpening;

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
    });

    _defineProperty(_assertThisInitialized(_this), "state", {
      initiallyFixed: _this.props.fixed,
      isFixed: !_this.isOpen() ? false : _this.props.fixed,
      isOpen: _this.isOpen(),
      cursorPos: {},
      slimStart: _this.props.slim,
      slimInitial: _this.props.slim
    });

    _defineProperty(_assertThisInitialized(_this), "sideNavRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "initialX", null);

    _defineProperty(_assertThisInitialized(_this), "initialY", null);

    _defineProperty(_assertThisInitialized(_this), "startTouch", function (e) {
      _this.initialX = e.touches[0].clientX;
      _this.initialY = e.touches[0].clientY;
    });

    _defineProperty(_assertThisInitialized(_this), "moveTouch", function (e) {
      var right = _this.props.right;

      if (_this.initialX === null) {
        return;
      }

      if (_this.initialY === null) {
        return;
      }

      var currentX = e.touches[0].clientX;
      var currentY = e.touches[0].clientY;
      var diffX = _this.initialX - currentX;
      var diffY = _this.initialY - currentY;

      if (Math.abs(diffX) > Math.abs(diffY)) {
        if (diffX > 0) {
          !right && _this.handleOverlayClick();
        } else {
          right && _this.handleOverlayClick();
        }
      }

      _this.initialX = null;
      _this.initialY = null;
      e.preventDefault();
    });

    _defineProperty(_assertThisInitialized(_this), "updatePredicate", function () {
      var _this$props2 = _this.props,
          hidden = _this$props2.hidden,
          responsive = _this$props2.responsive,
          breakWidth = _this$props2.breakWidth;
      var initiallyFixed = _this.state.initiallyFixed;

      if (!hidden && responsive) {
        _this.setState({
          isOpen: window.innerWidth > breakWidth
        });

        if (window.innerWidth > breakWidth) {
          _this.setState({
            isOpen: true,
            isFixed: initiallyFixed
          });
        } else {
          _this.setState({
            isOpen: false,
            isFixed: false
          });
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "toggleSlim", function () {
      return function () {
        var slimStart = _this.state.slimStart;

        _this.setState({
          slimStart: !slimStart
        });

        var sidenav = ReactDOM.findDOMNode(_this.sideNavRef.current);
        sidenav.classList.toggle('slim');
      };
    });

    _defineProperty(_assertThisInitialized(_this), "handleOverlayClick", function () {
      var isFixed = _this.state.isFixed;
      var onOverlayClick = _this.props.onOverlayClick;

      if (isFixed) {
        return;
      }

      _this.setState({
        isOpen: false
      });

      if (onOverlayClick) {
        onOverlayClick();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props3 = _this.props,
          disabled = _this$props3.disabled,
          onClick = _this$props3.onClick;

      if (!disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (onClick) {
          onClick(e);
        }
      }

      e.stopPropagation();
    });

    return _this;
  }

  _createClass(SideNav, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$props4 = this.props,
          triggerOpening = _this$props4.triggerOpening,
          responsive = _this$props4.responsive;

      if (triggerOpening && !responsive) {
        throw new Error('Received "triggerOpening" prop for a  non-responsive Sidebar. If you want to contidionally render Sidenav, set the responsive prop to true');
      }

      this.sideNavRef.current.addEventListener('touchstart', this.startTouch);
      this.sideNavRef.current.addEventListener('touchmove', this.moveTouch);
      window.addEventListener('resize', this.updatePredicate);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var triggerOpening = this.props.triggerOpening;
      var isOpen = this.state.isOpen;

      if (prevProps.triggerOpening !== triggerOpening) {
        this.setState({
          isOpen: !isOpen
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('resize', this.updatePredicate);
      this.sideNavRef.current.removeEventListener('touchstart', this.startTouch);
      this.sideNavRef.current.removeEventListener('touchmove', this.moveTouch);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props5 = this.props,
          bg = _this$props5.bg,
          breakWidth = _this$props5.breakWidth,
          children = _this$props5.children,
          className = _this$props5.className,
          hidden = _this$props5.hidden,
          href = _this$props5.href,
          logo = _this$props5.logo,
          mask = _this$props5.mask,
          onOverlayClick = _this$props5.onOverlayClick,
          right = _this$props5.right,
          triggerOpening = _this$props5.triggerOpening,
          showOverlay = _this$props5.showOverlay,
          fixed = _this$props5.fixed,
          responsive = _this$props5.responsive,
          slim = _this$props5.slim,
          Tag = _this$props5.tag,
          attributes = _objectWithoutProperties(_this$props5, ["bg", "breakWidth", "children", "className", "hidden", "href", "logo", "mask", "onOverlayClick", "right", "triggerOpening", "showOverlay", "fixed", "responsive", "slim", "tag"]);

      var _this$state = this.state,
          isOpen = _this$state.isOpen,
          isFixed = _this$state.isFixed,
          slimInitial = _this$state.slimInitial,
          cursorPos = _this$state.cursorPos,
          slimStart = _this$state.slimStart;
      var classes = classNames('side-nav', 'wide', right && 'right-aligned', slimInitial && 'slim', className);
      var overlay = React.createElement("div", {
        id: "sidenav-overlay",
        onClick: this.handleOverlayClick
      });
      var sidenav = React.createElement(Tag, _extends({}, attributes, {
        ref: this.sideNavRef,
        className: classes,
        "data-animate": isFixed ? false : undefined,
        style: bg ? {
          backgroundImage: "url(".concat(bg)
        } : undefined
      }), React.createElement(ScrollBar, {
        option: {
          suppressScrollX: true
        }
      }, React.createElement("ul", {
        className: "list-unstyled"
      }, logo && React.createElement("li", null, React.createElement("div", {
        className: "logo-wrapper"
      }, React.createElement("a", {
        href: href,
        className: "Ripple-parent",
        onClick: this.handleClick
      }, React.createElement("img", {
        src: logo,
        alt: "",
        className: "img-fluid flex-center d-block"
      }), React.createElement(Waves, {
        cursorPos: cursorPos
      })))), children)), mask && React.createElement("div", {
        className: "sidenav-bg ".concat(mask)
      }));
      return React.createElement(SideNavContext.Provider, {
        value: {
          slimInitial: slimInitial,
          slim: slimStart,
          toggleSlim: this.toggleSlim,
          right: right
        }
      }, isFixed ? sidenav : React.createElement(CSSTransition, {
        appear: !isFixed,
        timeout: {
          enter: 300,
          exit: 300
        },
        classNames: right ? 'right-side-slide' : 'side-slide',
        "in": isOpen
      }, sidenav), isFixed ? false : showOverlay && isOpen && overlay);
    }
  }]);

  return SideNav;
}(React.Component);

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
  onOverlayClick: function onOverlayClick() {},
  responsive: true,
  right: false,
  showOverlay: true,
  slim: false,
  tag: 'div',
  triggerOpening: false
};

var SideNavCat =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavCat, _React$Component);

  function SideNavCat() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideNavCat);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideNavCat)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cursorPos: {},
      isOpenIDState: ''
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e, id) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (onClick) {
          _this.props.onClick(id);
        }

        e.stopPropagation();
      }
    });

    return _this;
  }

  _createClass(SideNavCat, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      var _this$props2 = this.props,
          isOpen = _this$props2.isOpen,
          id = _this$props2.id;

      if (prevProps.isOpen !== isOpen) {
        this.setState({
          isOpenIDState: isOpen ? id : ''
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props3 = this.props,
          Tag = _this$props3.tag,
          children = _this$props3.children,
          className = _this$props3.className,
          name = _this$props3.name,
          icon = _this$props3.icon,
          iconBrand = _this$props3.iconBrand,
          iconLight = _this$props3.iconLight,
          iconRegular = _this$props3.iconRegular,
          iconSize = _this$props3.iconSize,
          onClick = _this$props3.onClick,
          disabled = _this$props3.disabled,
          isOpen = _this$props3.isOpen,
          isOpenID = _this$props3.isOpenID,
          id = _this$props3.id,
          attributes = _objectWithoutProperties(_this$props3, ["tag", "children", "className", "name", "icon", "iconBrand", "iconLight", "iconRegular", "iconSize", "onClick", "disabled", "isOpen", "isOpenID", "id"]);

      var _this$state = this.state,
          cursorPos = _this$state.cursorPos,
          isOpenIDState = _this$state.isOpenIDState;
      var classes = classNames('collapsible-header', 'Ripple-parent', 'arrow-r', isOpen && 'active', disabled && 'disabled', className);
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var iconClass = ['mr-2'];
        slim && iconClass.push('v-slim-icon');
        return React.createElement(Tag, null, React.createElement("a", _extends({
          className: classes,
          onClick: function onClick(e) {
            return _this2.handleClick(e, id);
          }
        }, attributes), icon && React.createElement(Fa, {
          icon: icon,
          brand: iconBrand,
          light: iconLight,
          regular: iconRegular,
          size: iconSize,
          className: iconClass.join(' ')
        }), name, React.createElement(Fa, {
          icon: "angle-down",
          className: "rotate-icon"
        }), React.createElement(Waves, {
          cursorPos: cursorPos
        })), React.createElement(Collapse, {
          id: id,
          isOpen: isOpenIDState
        }, React.createElement("div", {
          className: "collapsible-body",
          style: {
            display: 'block'
          }
        }, React.createElement("ul", null, children))));
      });
    }
  }]);

  return SideNavCat;
}(React.Component);

_defineProperty(SideNavCat, "displayName", 'SideNavCat');

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
  onClick: function onClick() {},
  tag: 'li'
};

var SideNavItem = function SideNavItem(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    var disabled = props.disabled,
        onClick = props.onClick;

    if (!disabled) {
      // Waves - Get Cursor Position
      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos); // do the passed in callback:

      if (onClick) {
        onClick(e);
      }

      e.stopPropagation();
    }
  };

  var children = props.children,
      className = props.className,
      href = props.href,
      innerRef = props.innerRef,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["children", "className", "href", "innerRef", "tag"]);

  var classes = classNames('Ripple-parent', className);
  return React.createElement(Tag, _extends({
    className: classes,
    ref: innerRef,
    onClick: handleClick
  }, attributes), React.createElement("a", {
    className: classes,
    href: href
  }, children, React.createElement(Waves, {
    cursorPos: cursorPos
  })));
};

SideNavItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  href: PropTypes.string,
  innerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  tag: PropTypes.string
};
SideNavItem.defaultProps = {
  tag: 'li'
};

var SideNavLink =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavLink, _React$Component);

  function SideNavLink() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideNavLink);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideNavLink)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      cursorPos: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleClick", function (e) {
      var _this$props = _this.props,
          disabled = _this$props.disabled,
          onClick = _this$props.onClick;

      if (!disabled) {
        // Waves - Get Cursor Position
        var cursorPos = {
          top: e.clientY,
          left: e.clientX,
          time: Date.now()
        };

        _this.setState({
          cursorPos: cursorPos
        }); // do the passed in callback:


        if (onClick) {
          onClick(e);
        }

        e.stopPropagation();
      }
    });

    return _this;
  }

  _createClass(SideNavLink, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          innerRef = _this$props2.innerRef,
          shortcut = _this$props2.shortcut,
          Tag = _this$props2.tag,
          to = _this$props2.to,
          topLevel = _this$props2.topLevel,
          attributes = _objectWithoutProperties(_this$props2, ["children", "className", "innerRef", "shortcut", "tag", "to", "topLevel"]);

      var cursorPos = this.state.cursorPos;
      var classes = classNames('Ripple-parent', topLevel && 'collapsible-header', className);
      var sideNavLink = React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim;
        var shortcutVar;
        var shortcut = _this2.props.shortcut;

        function calculateShortcut() {
          if (typeof children === 'string') {
            var wordsArray = children.toString().split(' ');

            if (wordsArray.length === 1) {
              return wordsArray[0].substr(0, 2).toUpperCase();
            }

            if (wordsArray.length >= 2) {
              var firstLetter = wordsArray[0].substr(0, 1);
              var secondLetter = wordsArray[1].substr(0, 1);
              return firstLetter.concat(secondLetter).toUpperCase();
            }
          }

          return children;
        }

        if (slim) {
          shortcutVar = shortcut || calculateShortcut();
        }

        return React.createElement(NavLink$1, _extends({
          className: classes,
          ref: innerRef,
          onClick: _this2.handleClick,
          to: to
        }, attributes), slim ? React.createElement(React.Fragment, null, React.createElement("span", {
          className: "sv-slim"
        }, shortcutVar), React.createElement("span", {
          className: "sv-normal"
        }, children)) : React.createElement("span", {
          className: "sv-normal"
        }, children), React.createElement(Waves, {
          cursorPos: cursorPos
        }));
      });
      return topLevel ? React.createElement("li", null, " ", sideNavLink) : sideNavLink;
    }
  }]);

  return SideNavLink;
}(React.Component);

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

var css$k = ".side-nav.wide .collapsible button {\r\n  padding-left: 23px;\r\n  transition: all 0.3s ease-in-out;\r\n}\r\n\r\na:not([href]):not([tabindex]),\r\na:not([href]):not([tabindex]):focus,\r\na:not([href]):not([tabindex]):hover {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.side-nav .collapsible button {\r\n  display: block;\r\n  height: 44px;\r\n  font-size: 0.8rem;\r\n  font-weight: 300;\r\n  color: #fff;\r\n}\r\n.side-nav .collapsible li button:hover {\r\n  background-color: rgba(0, 0, 0, 0.15);\r\n  border-radius: 2px;\r\n}\r\n";
styleInject(css$k);

var SideNavNav =
/*#__PURE__*/
function (_React$Component) {
  _inherits(SideNavNav, _React$Component);

  function SideNavNav() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SideNavNav);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SideNavNav)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      accordion: null
    });

    _defineProperty(_assertThisInitialized(_this), "onClick", function (number) {
      return function () {
        var state = '';

        if (_this.state.accordion !== number) {
          state = number;
        } else {
          state = null;
        }

        _this.setState({
          accordion: state
        });
      };
    });

    return _this;
  }

  _createClass(SideNavNav, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          Tag = _this$props.tag,
          toggleNavLabel = _this$props.toggleNavLabel,
          children = _this$props.children,
          className = _this$props.className,
          attributes = _objectWithoutProperties(_this$props, ["tag", "toggleNavLabel", "children", "className"]);

      var accordion = this.state.accordion;
      var classes = classNames('collapsible', 'collapsible-accordion', className);
      var modified = React.Children.map(children, function (child, i) {
        if (child.type.displayName === 'SideNavCat') {
          return React.cloneElement(child, {
            onClick: _this2.onClick(i),
            isOpen: accordion === i
          });
        }

        return child;
      });
      return React.createElement(SideNavContext.Consumer, null, function (_ref) {
        var slim = _ref.slim,
            slimInitial = _ref.slimInitial,
            toggleSlim = _ref.toggleSlim,
            right = _ref.right;
        var iconClass = ['mr-2', 'sv-slim-icon', 'fas', 'icon-rotate'];
        right & slim && iconClass.push('fa-angle-double-left');
        right & !slim && iconClass.push('fa-angle-double-right');
        !right & !slim && iconClass.push('fa-angle-double-left');
        !right & slim && iconClass.push('fa-angle-double-right');
        return React.createElement(React.Fragment, null, React.createElement("li", null, React.createElement(Tag, _extends({}, attributes, {
          className: classes
        }), modified, slimInitial && React.createElement("li", {
          onClick: toggleSlim()
        }, React.createElement("button", {
          className: "btn btn-block waves-effect",
          style: {
            margin: '0 auto',
            boxShadow: 'none',
            textTransform: 'none',
            textAlign: 'left'
          }
        }, React.createElement("i", {
          className: iconClass.join(' ')
        }), React.createElement("span", {
          className: slim ? 'd-none' : ''
        }, toggleNavLabel))))));
      });
    }
  }]);

  return SideNavNav;
}(React.Component);

SideNavNav.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  tag: PropTypes.string,
  toggleNavLabel: PropTypes.string
};
SideNavNav.defaultProps = {
  tag: 'ul',
  toggleNavLabel: 'Minimize menu'
};

var SimpleChart = function SimpleChart(props) {
  var polarToCartesian = function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    var angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + radius * Math.cos(angleInRadians),
      y: centerY + radius * Math.sin(angleInRadians)
    };
  };

  var describeArc = function describeArc(x, y, radius, startAngle, endAngle) {
    if (!x || !y) {
      console.error('x or y missing to describeArc');
    }

    var start = polarToCartesian(x, y, radius, endAngle);
    var end = polarToCartesian(x, y, radius, startAngle);
    var arcSweep = endAngle - startAngle <= 180 ? '0' : '1';
    return ['M', start.x, start.y, 'A', radius, radius, 0, arcSweep, 0, end.x, end.y].join(' ');
  };

  var percent = props.percent,
      width = props.width,
      strokeWidth = props.strokeWidth,
      padding = props.padding,
      type = props.type,
      border = props.border,
      style = props.style,
      height = props.height,
      fillColor = props.fillColor,
      railColor = props.railColor,
      strokeColor = props.strokeColor,
      labelColor = props.labelColor,
      labelFontWeight = props.labelFontWeight,
      labelFontSize = props.labelFontSize;
  var chartsPercent = Math.min(percent || 0, 100);
  var chartsRadius = width / 2 - strokeWidth / 2 - padding;
  var chartsCenter = chartsRadius + strokeWidth / 2 + padding;
  var chartsStartAngle = 0;
  var chartsEndAngle = 3.6 * chartsPercent;
  var chartsLabel = "".concat(chartsPercent, "%");
  var chartsLabelLeftOffset = chartsLabel.length === 3 || chartsLabel.length === 4 ? -0.95 : -0.6;
  var arc = describeArc(chartsCenter, chartsCenter, chartsRadius, chartsStartAngle, chartsEndAngle - 0.001);
  return React.createElement("svg", {
    className: "react-chart ".concat(type),
    width: width,
    style: _objectSpread2({
      overflow: 'visible',
      border: border
    }, style),
    height: height
  }, React.createElement("circle", {
    cx: chartsCenter,
    cy: chartsCenter,
    r: chartsRadius,
    fill: fillColor,
    stroke: railColor,
    strokeWidth: strokeWidth
  }), React.createElement("path", {
    fill: fillColor,
    stroke: strokeColor,
    strokeWidth: strokeWidth,
    d: arc
  }), React.createElement("text", {
    x: chartsCenter,
    y: chartsCenter,
    dx: "".concat(chartsLabelLeftOffset, "em"),
    dy: ".35em",
    fill: labelColor,
    fontWeight: labelFontWeight,
    fontSize: labelFontSize
  }, chartsLabel));
};

SimpleChart.propTypes = {
  chartsEndAngle: PropTypes.number,
  chartsStartAngle: PropTypes.number,
  fillColor: PropTypes.string,
  height: PropTypes.number,
  labelFontSize: PropTypes.string,
  labelFontWeight: PropTypes.string,
  radius: PropTypes.number,
  strokeColor: PropTypes.string,
  strokeWidth: PropTypes.number,
  style: PropTypes.object,
  width: PropTypes.number
};
SimpleChart.defaultProps = {
  border: 'none',
  fillColor: 'none',
  height: 150,
  labelColor: '#408AE5',
  labelFontSize: '1.2em',
  labelFontWeight: 'bold',
  padding: 0,
  percent: 70,
  railColor: '#f5f5f5',
  strokeColor: '#408AE5',
  strokeWidth: 10,
  style: {},
  width: 150
};

var SmoothScroll = function SmoothScroll(props) {
  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      cursorPos = _useState2[0],
      setCursorPos = _useState2[1];

  var handleClick = function handleClick(e) {
    if (!props.disabled) {
      e.stopPropagation(); // Waves - Get Cursor Position

      var _cursorPos = {
        top: e.clientY,
        left: e.clientX,
        time: Date.now()
      };
      setCursorPos(_cursorPos);
    }
  };

  var children = props.children,
      className = props.className,
      disabled = props.disabled,
      active = props.active,
      to = props.to,
      spy = props.spy,
      smooth = props.smooth,
      offset = props.offset,
      duration = props.duration,
      block = props.block,
      color = props.color,
      outline = props.outline,
      size = props.size,
      rounded = props.rounded,
      gradient = props.gradient,
      floating = props.floating,
      flat = props.flat,
      social = props.social,
      btn = props.btn,
      fixed = props.fixed,
      bottom = props.bottom,
      right = props.right,
      top = props.top,
      left = props.left,
      attributes = _objectWithoutProperties(props, ["children", "className", "disabled", "active", "to", "spy", "smooth", "offset", "duration", "block", "color", "outline", "size", "rounded", "gradient", "floating", "flat", "social", "btn", "fixed", "bottom", "right", "top", "left"]);

  var classes = classNames('nav-link', disabled ? 'disabled' : 'Ripple-parent', active && 'active', (btn || floating) && 'btn', floating && 'btn-floating', flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? '-outline' : '', "-").concat(color), size ? "btn-".concat(size) : false, rounded ? 'btn-rounded' : false, block ? 'btn-block' : false, social ? "btn-".concat(social) : false, 'Ripple-parent', className);
  var fixedStyles = {
    position: 'fixed',
    top: top ? "".concat(top, "px") : null,
    bottom: bottom ? "".concat(bottom, "px") : !top ? '45px' : null,
    left: left ? "".concat(left, "px") : null,
    right: right ? "".concat(right, "px") : !left ? '24px' : null
  };
  return React.createElement(Link$2, _extends({
    className: classes,
    onMouseUp: handleClick,
    onTouchStart: handleClick,
    to: to,
    spy: spy,
    smooth: smooth,
    offset: offset,
    duration: duration,
    style: fixed ? fixedStyles : null
  }, attributes), children, disabled ? false : React.createElement(Waves, {
    cursorPos: cursorPos
  }));
};

SmoothScroll.propTypes = {
  to: PropTypes.string.isRequired,
  active: PropTypes.bool,
  block: PropTypes.bool,
  bottom: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
  color: PropTypes.string,
  disabled: PropTypes.bool,
  duration: PropTypes.number,
  fixed: PropTypes.bool,
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  left: PropTypes.string,
  offset: PropTypes.number,
  outline: PropTypes.bool,
  right: PropTypes.string,
  rounded: PropTypes.bool,
  size: PropTypes.string,
  smooth: PropTypes.bool,
  social: PropTypes.string,
  spy: PropTypes.bool,
  top: PropTypes.string
};
SmoothScroll.defaultProps = {
  active: false,
  className: '',
  disabled: false,
  duration: 500,
  offset: -70,
  smooth: true,
  spy: true
};

var Spinner = function Spinner(props) {
  var theChosenColorSpinner = function theChosenColorSpinner(spinnerClasses) {
    if (props.multicolor) {
      var _theSpinnerItself = React.createElement("div", null, React.createElement("div", {
        className: "spinner-layer spinner-blue"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-red"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-yellow"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))), React.createElement("div", {
        className: "spinner-layer spinner-green"
      }, React.createElement("div", {
        className: "circle-clipper left"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "gap-patch"
      }, React.createElement("div", {
        className: "circle"
      })), React.createElement("div", {
        className: "circle-clipper right"
      }, React.createElement("div", {
        className: "circle"
      }))));

      return _theSpinnerItself;
    }

    var theSpinnerItself = React.createElement("div", {
      className: spinnerClasses
    }, React.createElement("div", {
      className: "circle-clipper left"
    }, React.createElement("div", {
      className: "circle"
    })), React.createElement("div", {
      className: "gap-patch"
    }, React.createElement("div", {
      className: "circle"
    })), React.createElement("div", {
      className: "circle-clipper right"
    }, React.createElement("div", {
      className: "circle"
    })));
    return theSpinnerItself;
  };

  var className = props.className,
      big = props.big,
      small = props.small,
      red = props.red,
      green = props.green,
      yellow = props.yellow,
      crazy = props.crazy;
  var wrapperClasses = classNames('preloader-wrapper', 'active', big ? 'big' : false, small ? 'small' : false, className);
  var spinnerClasses = classNames('spinner-layer', red ? 'spinner-red-only' : false, green ? 'spinner-green-only' : false, yellow ? 'spinner-yellow-only' : 'spinner-blue-only', className);

  if (crazy) {
    return React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, React.createElement("div", {
      className: wrapperClasses
    }, theChosenColorSpinner(spinnerClasses)))));
  }

  return React.createElement("div", {
    className: wrapperClasses
  }, theChosenColorSpinner(spinnerClasses));
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

var Step = function Step(props) {
  var brand = props.brand,
      duotone = props.duotone,
      fab = props.fab,
      fad = props.fad,
      fal = props.fal,
      far = props.far,
      form = props.form,
      icon = props.icon,
      light = props.light,
      regular = props.regular,
      stepName = props.stepName,
      Tag = props.tag,
      vertical = props.vertical;
  var iconPrefix = regular || far ? 'far' : light || fal ? 'fal' : duotone || fad ? 'fad' : brand || fab ? 'fab' : 'fa';
  var iconClass = classNames("".concat(iconPrefix, " fa-").concat(icon), 'Ripple-parent');
  var stepClass = classNames(form ? 'steps-step' : icon && vertical ? 'steps-step-3' : icon && !vertical ? 'steps-step-2' : null, props.className);
  var step;

  if (form) {
    step = React.createElement(Tag, {
      className: stepClass
    }, props.children);
  } else if (icon && !vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popover, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-2 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else if (icon && vertical) {
    step = React.createElement(Tag, {
      className: stepClass,
      onClick: props.onClick
    }, React.createElement(Popover, {
      placement: "top"
    }, React.createElement(Button, {
      className: "btn-circle-3 btn-blue-grey"
    }, React.createElement("i", {
      className: iconClass
    })), React.createElement("div", null, stepName)));
  } else {
    step = React.createElement("li", {
      className: stepClass
    }, props.children);
  }

  return step;
};

Step.defaultProps = {
  form: false,
  iconPrefix: 'fas',
  tag: 'div',
  vertical: false
};

var css$l = "/* Stepper Form */\r\n\r\n/* Stepper v.2 (Form) */\r\n.steps-form {\r\n  display: table;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.steps-form .steps-row {\r\n  display: table-row;\r\n}\r\n\r\n.steps-form .steps-row:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: ' ';\r\n  width: 100%;\r\n  height: 1px;\r\n  background-color: #ccc;\r\n}\r\n\r\n.steps-form .steps-row .steps-step {\r\n  display: table-cell;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.steps-form .steps-row .steps-step p {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.steps-form .steps-row .steps-step button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important;\r\n}\r\n\r\n.steps-form .steps-row .steps-step .btn-circle {\r\n  width: 30px;\r\n  height: 30px;\r\n  text-align: center;\r\n  padding: 6px 0;\r\n  font-size: 12px;\r\n  line-height: 1.428571429;\r\n  border-radius: 15px;\r\n  margin-top: 0;\r\n}\r\n\r\n/* Stepper v.3 (Icons) */\r\n.steps-form-2 {\r\n  display: table;\r\n  width: 100%;\r\n  position: relative;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 {\r\n  display: table-row;\r\n}\r\n\r\n.steps-form-2 .steps-row-2:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: ' ';\r\n  width: 99%;\r\n  height: 2px;\r\n  background-color: #7283a7;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 {\r\n  display: table-cell;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 p {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 {\r\n  width: 70px;\r\n  height: 70px;\r\n  border: 2px solid #59698d;\r\n  background-color: white !important;\r\n  color: #59698d !important;\r\n  border-radius: 50%;\r\n  padding: 20px 20px 20px 20px;\r\n  margin-top: -22px;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2:hover {\r\n  border: 2px solid #4285f4;\r\n  color: #4285f4 !important;\r\n  background-color: white !important;\r\n}\r\n\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fa,\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fas,\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .far,\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fal,\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fad,\r\n.steps-form-2 .steps-row-2 .steps-step-2 .btn-circle-2 .fab {\r\n  font-size: 1.7rem;\r\n}\r\n\r\n.steps-row-2:first-child .btn {\r\n  margin-left: 0;\r\n}\r\n\r\n.steps-row-2:last-child .btn {\r\n  margin-right: 0;\r\n}\r\n\r\n/* Stepper v.4 (Icon-vertical) */\r\n\r\n.steps-form-3 {\r\n  width: 2px;\r\n  height: 470px;\r\n  position: relative;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 {\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  -webkit-align-items: center;\r\n  -ms-flex-align: center;\r\n  align-items: center;\r\n  -webkit-box-orient: vertical;\r\n  -webkit-box-direction: normal;\r\n  -webkit-flex-direction: column;\r\n  -ms-flex-direction: column;\r\n  flex-direction: column;\r\n}\r\n\r\n.steps-form-3 .steps-row-3:before {\r\n  top: 14px;\r\n  bottom: 0;\r\n  position: absolute;\r\n  content: '';\r\n  width: 2px;\r\n  height: 100%;\r\n  background-color: #7283a7;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 {\r\n  height: 150px;\r\n  display: -webkit-box;\r\n  display: -webkit-flex;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  text-align: center;\r\n  position: relative;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3.no-height {\r\n  height: 50px;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 p {\r\n  margin-top: 0.5rem;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 button[disabled] {\r\n  opacity: 1 !important;\r\n  filter: alpha(opacity=100) !important;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 {\r\n  width: 60px;\r\n  height: 60px;\r\n  border: 2px solid #59698d;\r\n  background-color: white !important;\r\n  color: #59698d !important;\r\n  border-radius: 50%;\r\n  padding: 15px 15px 15px 15px;\r\n  margin-top: -22px;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3:hover {\r\n  border: 2px solid #4285f4;\r\n  color: #4285f4 !important;\r\n  background-color: white !important;\r\n}\r\n\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fa,\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fas,\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .far,\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fal,\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fad,\r\n.steps-form-3 .steps-row-3 .steps-step-3 .btn-circle-3 .fab {\r\n  font-size: 1.7rem;\r\n}\r\n";
styleInject(css$l);

var Stepper = function Stepper(props) {
  var vertical = props.vertical,
      form = props.form,
      icon = props.icon;
  var stepperClass = classNames(form ? 'steps-form' : icon && vertical ? 'steps-form-3' : icon && !vertical ? 'steps-form-2' : 'stepper', vertical && !icon ? 'stepper-vertical' : form || icon ? null : 'stepper-horizontal', props.className);
  var wrapperFix = classNames(form ? 'steps-row' : icon && vertical ? 'steps-row-3 d-flex justify-content-between' : icon && !vertical ? 'steps-row-2 d-flex justify-content-between' : null); // wrapper shim in case props.form

  var stepper;

  if (form || icon) {
    stepper = React.createElement("div", {
      className: stepperClass
    }, React.createElement("div", {
      className: wrapperFix
    }, props.children));
  } else {
    stepper = React.createElement("ul", {
      className: stepperClass
    }, props.children);
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

var Sticky =
/*#__PURE__*/
function (_Component) {
  _inherits(Sticky, _Component);

  function Sticky() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Sticky);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Sticky)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isSticky: false,
      wasSticky: false,
      style: {}
    });

    _defineProperty(_assertThisInitialized(_this), "handleContainerEvent", function (_ref) {
      var distanceFromTop = _ref.distanceFromTop,
          distanceFromBottom = _ref.distanceFromBottom,
          eventSource = _ref.eventSource;

      var parent = _this.context.getParent();

      var preventingStickyStateChanges = false;

      if (_this.props.relative) {
        preventingStickyStateChanges = eventSource !== parent;
        distanceFromTop = -(eventSource.scrollTop + eventSource.offsetTop) + _this.placeholder.offsetTop;
      }

      var placeholderClientRect = _this.placeholder.getBoundingClientRect();

      var contentClientRect = _this.content.getBoundingClientRect();

      var calculatedHeight = contentClientRect.height;
      var bottomDifference = distanceFromBottom - _this.props.bottomOffset - calculatedHeight;
      var wasSticky = !!_this.state.isSticky;
      var isSticky = preventingStickyStateChanges ? wasSticky : distanceFromTop <= -_this.props.topOffset && distanceFromBottom > -_this.props.bottomOffset;
      distanceFromBottom = (_this.props.relative ? parent.scrollHeight - parent.scrollTop : distanceFromBottom) - calculatedHeight;
      var style = !isSticky ? {} : {
        position: 'fixed',
        top: bottomDifference > 0 ? _this.props.relative ? parent.offsetTop - parent.offsetParent.scrollTop : 0 : bottomDifference,
        left: placeholderClientRect.left,
        width: placeholderClientRect.width
      };

      if (!_this.props.disableHardwareAcceleration) {
        style.transform = 'translateZ(0)';
      }

      _this.setState({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      });
    });

    return _this;
  }

  _createClass(Sticky, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var subscribe = this.context.subscribe;

      if (!subscribe) {
        throw new TypeError('Expected Sticky to be mounted within StickyContainer');
      }

      subscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var unsubscribe = this.context.unsubscribe;
      unsubscribe(this.handleContainerEvent);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var disableCompensation = this.props.disableCompensation;
      var _this$state = this.state,
          isSticky = _this$state.isSticky,
          calculatedHeight = _this$state.calculatedHeight;
      this.placeholder.style.paddingBottom = disableCompensation ? 0 : "".concat(isSticky ? calculatedHeight : 0, "px");
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state2 = this.state,
          isSticky = _this$state2.isSticky,
          wasSticky = _this$state2.wasSticky,
          distanceFromTop = _this$state2.distanceFromTop,
          distanceFromBottom = _this$state2.distanceFromBottom,
          calculatedHeight = _this$state2.calculatedHeight,
          style = _this$state2.style;
      var children = this.props.children;
      var element = React.cloneElement(children({
        isSticky: isSticky,
        wasSticky: wasSticky,
        distanceFromTop: distanceFromTop,
        distanceFromBottom: distanceFromBottom,
        calculatedHeight: calculatedHeight,
        style: style
      }), {
        ref: function ref(content) {
          _this2.content = ReactDOM.findDOMNode(content);
        }
      });
      return React.createElement("div", null, React.createElement("div", {
        ref: function ref(placeholder) {
          return _this2.placeholder = placeholder;
        }
      }), element);
    }
  }]);

  return Sticky;
}(Component);

_defineProperty(Sticky, "propTypes", {
  children: PropTypes.func.isRequired,
  bottomOffset: PropTypes.number,
  relative: PropTypes.bool,
  topOffset: PropTypes.number
});

_defineProperty(Sticky, "defaultProps", {
  relative: false,
  topOffset: 0,
  bottomOffset: 0,
  disableCompensation: false,
  disableHardwareAcceleration: false
});

_defineProperty(Sticky, "contextTypes", {
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  getParent: PropTypes.func
});

var Container$1 =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(Container, _PureComponent);

  function Container() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Container);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Container)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "events", ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load']);

    _defineProperty(_assertThisInitialized(_this), "subscribers", []);

    _defineProperty(_assertThisInitialized(_this), "subscribe", function (handler) {
      _this.subscribers = _this.subscribers.concat(handler);
    });

    _defineProperty(_assertThisInitialized(_this), "unsubscribe", function (handler) {
      _this.subscribers = _this.subscribers.filter(function (current) {
        return current !== handler;
      });
    });

    _defineProperty(_assertThisInitialized(_this), "notifySubscribers", function (evt) {
      if (!_this.framePending) {
        var currentTarget = evt.currentTarget;
        raf(function () {
          _this.framePending = false;

          var _this$node$getBoundin = _this.node.getBoundingClientRect(),
              top = _this$node$getBoundin.top,
              bottom = _this$node$getBoundin.bottom;

          _this.subscribers.forEach(function (handler) {
            return handler({
              distanceFromTop: top,
              distanceFromBottom: bottom,
              eventSource: currentTarget === window ? document.body : _this.node
            });
          });
        });
        _this.framePending = true;
      }
    });

    _defineProperty(_assertThisInitialized(_this), "getParent", function () {
      return _this.node;
    });

    return _this;
  }

  _createClass(Container, [{
    key: "getChildContext",
    value: function getChildContext() {
      return {
        subscribe: this.subscribe,
        unsubscribe: this.unsubscribe,
        getParent: this.getParent
      };
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.events.forEach(function (event) {
        return window.addEventListener(event, _this2.notifySubscribers);
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this3 = this;

      this.events.forEach(function (event) {
        return window.removeEventListener(event, _this3.notifySubscribers);
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      return React.createElement("div", _extends({}, this.props, {
        ref: function ref(node) {
          return _this4.node = node;
        },
        onScroll: this.notifySubscribers,
        onTouchStart: this.notifySubscribers,
        onTouchMove: this.notifySubscribers,
        onTouchEnd: this.notifySubscribers
      }));
    }
  }]);

  return Container;
}(PureComponent);

_defineProperty(Container$1, "childContextTypes", {
  subscribe: PropTypes.func,
  unsubscribe: PropTypes.func,
  getParent: PropTypes.func
});

var MDBStreak = function MDBStreak(_ref) {
  var children = _ref.children,
      by = _ref.by,
      byClass = _ref.byClass,
      wrapperClass = _ref.wrapperClass,
      size = _ref.size,
      quoteClass = _ref.quoteClass,
      photo = _ref.photo,
      overlayClass = _ref.overlayClass;
  var byClasses = classNames('text-center', 'font-italic', 'mb-0', byClass);
  var wrapperClasses = classNames('streak', photo && 'streak-photo', size && "streak-".concat(size), wrapperClass);
  var quoteClasses = classNames('h2-responsive', quoteClass);
  var overlayClasses = classNames('flex-center', overlayClass);
  return React.createElement("div", {
    className: wrapperClasses,
    style: {
      backgroundImage: "url(\"".concat(photo, "\")"),
      backgroundAttachment: 'fixed'
    }
  }, React.createElement("div", {
    className: overlayClasses
  }, React.createElement("ul", {
    className: "mb-0 list-unstyled"
  }, React.createElement("li", null, React.createElement("h2", {
    className: quoteClasses
  }, React.createElement(Fa, {
    icon: "quote-left"
  }), " ", children, " ", React.createElement(Fa, {
    icon: "quote-right"
  }))), React.createElement("li", {
    className: "mb-0"
  }, React.createElement("h5", {
    className: byClasses
  }, "~ ", by)))));
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

var css$m = ".react-bootstrap-table {\r\n  padding-top: 65px;\r\n}\r\n\r\n.react-bootstrap-table .caret {\r\n  display: inline-block;\r\n  width: 0;\r\n  height: 0;\r\n  margin-left: 2px;\r\n  vertical-align: middle;\r\n  border-top: 4px dashed;\r\n  border-top: 4px solid\\9;\r\n  border-right: 4px solid transparent;\r\n  border-left: 4px solid transparent;\r\n}\r\n\r\n.react-bootstrap-table .dropup .caret {\r\n  content: \"\";\r\n  border-top: 0;\r\n  border-bottom: 4px dashed;\r\n  border-bottom: 4px solid\\9;\r\n}\r\n\r\n.react-bootstrap-table-pagination .pagination {\r\n  float: right;\r\n}\r\n\r\n.react-bootstrap-table-pagination .pagination .page-item.active .page-link {\r\n  background-color: #09c;\r\n}\r\n\r\n.react-bootstrap-table-pagination .select-wrapper {\r\n  display: inline-block;\r\n  width: 100px;\r\n  margin: 0 15px;\r\n}\r\n\r\n.react-bootstrap-table-pagination .dropdown-item {\r\n  padding: 0;\r\n}\r\n\r\n.react-bootstrap-table-pagination-total {\r\n  display: block;\r\n}\r\n\r\n.react-bootstrap-table .md-form {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  margin: 0;\r\n  width: 200px;\r\n}\r\n\r\n.react-bootstrap-table-pagination > * {\r\n  position: inherit;\r\n}\r\n\r\n.react-bs-table-sizePerPage-dropdown {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}";
styleInject(css$m);

var TableEditable =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TableEditable, _React$Component);

  function TableEditable() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TableEditable);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TableEditable)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      initialData: []
    });

    _defineProperty(_assertThisInitialized(_this), "componentDidMount", function () {
      var data = _this.props.data;
      data && _this.setState(_objectSpread2({}, _this.state, {
        initialData: data
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "addRow", function () {
      var columns = _this.props.columns;
      var initialData = _this.state.initialData;

      var newData = _toConsumableArray(initialData);

      var newRow = [];
      columns.forEach(function () {
        newRow.push('');
      });
      newData.push(newRow);

      _this.setState(_objectSpread2({}, initialData, {
        initialData: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "removeRow", function (index) {
      var initialData = _this.state.initialData;

      var newData = _toConsumableArray(initialData);

      newData = [].concat(_toConsumableArray(newData.slice(0, index)), _toConsumableArray(newData.slice(index + 1)));

      _this.setState(_objectSpread2({}, _this.state, {
        initialData: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "decreaseIndex", function (index) {
      if (index === 0) {
        return;
      }

      var newData = _this.changeArrayOrder(index, index - 1);

      _this.setState(_objectSpread2({}, _this.state, {
        initialData: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "increaseIndex", function (index) {
      var initialData = _this.state.initialData;

      if (index === initialData.length - 1) {
        return;
      }

      var newData = _this.changeArrayOrder(index, index + 1);

      _this.setState(_objectSpread2({}, _this.state, {
        initialData: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "changeArrayOrder", function (oldIndex, newIndex) {
      var array = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _toConsumableArray(_this.state.initialData);
      var newArray = array;

      var oldIndexValue = _toConsumableArray(newArray[oldIndex]);

      var newIndexValue = _toConsumableArray(newArray[newIndex]);

      newArray.splice(oldIndex, 1, newIndexValue);
      newArray.splice(newIndex, 1, oldIndexValue);
      return newArray;
    });

    _defineProperty(_assertThisInitialized(_this), "onBlurHandler", function (trIndex, tdIndex, e) {
      var value = e.target.innerText;
      var initialData = _this.state.initialData;

      var newData = _toConsumableArray(initialData);

      newData = newData.map(function (item, index) {
        if (index !== trIndex) {
          return item;
        }

        return item.map(function (tdItem, index) {
          if (index !== tdIndex) {
            return tdItem;
          }

          return tdItem = value;
        });
      });

      _this.setState(_objectSpread2({}, _this.state, {
        initialData: newData
      }));
    });

    _defineProperty(_assertThisInitialized(_this), "onChangeTd", function (e, row, column) {
      return {
        target: e.target,
        event: e,
        row: row,
        column: column
      };
    });

    return _this;
  }

  _createClass(TableEditable, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props = this.props,
          data = _this$props.data,
          getValue = _this$props.getValue;
      var initialData = this.state.initialData;

      if (prevProps.data !== data && data !== initialData) {
        this.setState({
          data: data
        });
      }

      if (prevState.initialData !== initialData) {
        if (getValue) {
          getValue(initialData);
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          className = _this$props2.className,
          small = _this$props2.small,
          bordered = _this$props2.bordered,
          striped = _this$props2.striped,
          hover = _this$props2.hover,
          data = _this$props2.data,
          columns = _this$props2.columns,
          responsive = _this$props2.responsive,
          responsiveSm = _this$props2.responsiveSm,
          responsiveMd = _this$props2.responsiveMd,
          responsiveLg = _this$props2.responsiveLg,
          responsiveXl = _this$props2.responsiveXl,
          getValue = _this$props2.getValue,
          onChange = _this$props2.onChange,
          attributes = _objectWithoutProperties(_this$props2, ["className", "small", "bordered", "striped", "hover", "data", "columns", "responsive", "responsiveSm", "responsiveMd", "responsiveLg", "responsiveXl", "getValue", "onChange"]);

      var initialData = this.state.initialData;
      var classes = classNames('table', small && 'table-sm', bordered && 'table-bordered', striped && 'table-striped', hover && 'table-hover', className);
      var wrapperClasses = classNames('table-editable text-center', responsive && 'table-responsive', responsiveSm && 'table-responsive-sm', responsiveMd && 'table-responsive-md', responsiveLg && 'table-responsive-lg', responsiveXl && 'table-responsive-xl');
      return React.createElement("div", {
        className: wrapperClasses
      }, React.createElement("span", {
        onClick: this.addRow,
        className: "table-add float-right mb-3 mr-2"
      }, React.createElement("a", {
        href: "#!",
        className: "text-success"
      }, React.createElement(Fa, {
        icon: "plus",
        size: "2x"
      }))), React.createElement("table", _extends({}, attributes, {
        className: classes
      }), React.createElement("thead", null, React.createElement("tr", null, columns && columns.map(function (th, i) {
        return React.createElement("th", {
          key: i
        }, th);
      }), React.createElement("th", null, "Sort "), React.createElement("th", null, "Delete "))), React.createElement("tbody", null, initialData.map(function (tr, trIndex) {
        return React.createElement("tr", {
          key: trIndex
        }, tr.map(function (td, tdIndex) {
          return React.createElement("td", {
            key: tdIndex,
            contentEditable: true,
            suppressContentEditableWarning: "true",
            onBlur: function onBlur(e) {
              return _this2.onBlurHandler(trIndex, tdIndex, e);
            },
            onKeyUp: function onKeyUp(e) {
              return onChange(_this2.onChangeTd(e, trIndex, tdIndex));
            }
          }, td);
        }), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.decreaseIndex(trIndex);
          },
          className: "table-up"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-up"
        }))), React.createElement("span", {
          onClick: function onClick() {
            return _this2.increaseIndex(trIndex);
          },
          className: "table-down"
        }, React.createElement("a", {
          href: "#!",
          className: "indigo-text"
        }, React.createElement(Fa, {
          icon: "long-arrow-alt-down"
        })))), React.createElement("td", null, React.createElement("span", {
          onClick: function onClick() {
            return _this2.removeRow(trIndex);
          },
          className: "table-remove"
        }, React.createElement("button", {
          type: "button",
          className: "btn btn-danger btn-rounded btn-sm my-0"
        }, "Remove"))));
      }))));
    }
  }]);

  return TableEditable;
}(React.Component);

TableEditable.propTypes = {
  bordered: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
  columns: PropTypes.array,
  data: PropTypes.array,
  getValue: PropTypes.func,
  hover: PropTypes.bool,
  onChange: PropTypes.func,
  responsive: PropTypes.bool,
  responsiveLg: PropTypes.bool,
  responsiveMd: PropTypes.bool,
  responsiveSm: PropTypes.bool,
  responsiveXl: PropTypes.bool,
  small: PropTypes.bool,
  striped: PropTypes.bool
};
TableEditable.defaultProps = {
  getValue: function getValue() {},
  onChange: function onChange() {}
};

var Testimonial = function Testimonial(props) {
  var className = props.className,
      Tag = props.tag,
      attributes = _objectWithoutProperties(props, ["className", "tag"]);

  var classes = classNames('testimonial', className);
  return React.createElement(Tag, _extends({}, attributes, {
    className: classes
  }));
};

Testimonial.propTypes = {
  className: PropTypes.string,
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string])
};
Testimonial.defaultProps = {
  tag: 'div'
};

var css$n = "@media (max-width: 1025px) {\r\n  .stepper.timeline li {\r\n    -webkit-box-align: end;\r\n    -webkit-align-items: flex-end;\r\n    -ms-flex-align: end;\r\n    align-items: flex-end;\r\n  }\r\n}\r\n\r\n.stepper.timeline li a {\r\n  padding: 0px 24px;\r\n  left: 50%;\r\n}\r\n@media (max-width: 450px) {\r\n  .stepper.timeline li a {\r\n    left: 6%;\r\n  }\r\n}\r\n@media (min-width: 451px) and (max-width: 1025px) {\r\n  .stepper.timeline li a {\r\n    left: 6%;\r\n  }\r\n}\r\n.stepper.timeline li a .circle {\r\n  width: 50px;\r\n  height: 50px;\r\n  line-height: 50px;\r\n  font-size: 1.4em;\r\n  text-align: center;\r\n  position: absolute;\r\n  top: 16px;\r\n  margin-left: -50px;\r\n  background-color: #fff;\r\n  z-index: 2;\r\n}\r\n\r\n.stepper.timeline li .step-content {\r\n  width: 45%;\r\n  float: left;\r\n  border-radius: 2px;\r\n  position: relative;\r\n  background-color: #fff;\r\n}\r\n.stepper.timeline li .step-content:before {\r\n  position: absolute;\r\n  top: 26px;\r\n  right: -15px;\r\n  display: inline-block;\r\n  border-top: 15px solid transparent;\r\n  border-left: 15px solid #e0e0e0;\r\n  border-right: 0 solid #e0e0e0;\r\n  border-bottom: 15px solid transparent;\r\n  content: \" \";\r\n}\r\n.stepper.timeline li .step-content:after {\r\n  position: absolute;\r\n  top: 27px;\r\n  right: -14px;\r\n  display: inline-block;\r\n  border-top: 14px solid transparent;\r\n  border-left: 14px solid #fff;\r\n  border-right: 0 solid #fff;\r\n  border-bottom: 14px solid transparent;\r\n  content: \" \";\r\n}\r\n@media (max-width: 450px) {\r\n  .stepper.timeline li .step-content {\r\n    width: 80%;\r\n    left: 3rem;\r\n    margin-right: 3rem;\r\n    margin-bottom: 2rem;\r\n    float: right;\r\n  }\r\n  .stepper.timeline li .step-content:before {\r\n    border-left-width: 0;\r\n    border-right-width: 15px;\r\n    left: -15px;\r\n    right: auto;\r\n  }\r\n  .stepper.timeline li .step-content:after {\r\n    border-left-width: 0;\r\n    border-right-width: 14px;\r\n    left: -14px;\r\n    right: auto;\r\n  }\r\n}\r\n@media (min-width: 451px) and (max-width: 1025px) {\r\n  .stepper.timeline li .step-content {\r\n    width: 85%;\r\n    left: 3rem;\r\n    margin-right: 3rem;\r\n    margin-bottom: 2rem;\r\n    float: right;\r\n  }\r\n  .stepper.timeline li .step-content:before {\r\n    border-left-width: 0;\r\n    border-right-width: 15px;\r\n    left: -15px;\r\n    right: auto;\r\n  }\r\n  .stepper.timeline li .step-content:after {\r\n    border-left-width: 0;\r\n    border-right-width: 14px;\r\n    left: -14px;\r\n    right: auto;\r\n  }\r\n}\r\n\r\n.stepper.timeline li.timeline-inverted {\r\n  -webkit-box-align: end;\r\n  -webkit-align-items: flex-end;\r\n  -ms-flex-align: end;\r\n  align-items: flex-end;\r\n}\r\n.stepper.timeline li.timeline-inverted .step-content {\r\n  float: right;\r\n}\r\n.stepper.timeline li.timeline-inverted .step-content:before {\r\n  border-left-width: 0;\r\n  border-right-width: 15px;\r\n  left: -15px;\r\n  right: auto;\r\n}\r\n.stepper.timeline li.timeline-inverted .step-content:after {\r\n  border-left-width: 0;\r\n  border-right-width: 14px;\r\n  left: -14px;\r\n  right: auto;\r\n}\r\n\r\n.stepper.timeline.stepper-vertical li:not(:last-child):after {\r\n  content: \" \";\r\n  position: absolute;\r\n  width: 3px;\r\n  background-color: #e0e0e0;\r\n  left: 50%;\r\n  top: 57px;\r\n  margin-left: -1.5px;\r\n}\r\n@media (max-width: 450px) {\r\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\r\n    left: 6%;\r\n  }\r\n}\r\n@media (min-width: 451px) and (max-width: 1025px) {\r\n  .stepper.timeline.stepper-vertical li:not(:last-child):after {\r\n    left: 6%;\r\n  }\r\n}\r\n";
styleInject(css$n);

var Timeline = function Timeline(props) {
  var children = props.children;
  return React.createElement("ul", {
    className: "stepper stepper-vertical timeline pl-0"
  }, children);
};

var TimelineStep = function TimelineStep(props) {
  var href = props.href,
      color = props.color,
      icon = props.icon,
      iconBrand = props.iconBrand,
      iconClass = props.iconClass,
      iconLight = props.iconLight,
      iconRegular = props.iconRegular,
      iconSize = props.iconSize,
      className = props.className,
      children = props.children,
      inverted = props.inverted,
      colorful = props.colorful,
      hoverable = props.hoverable,
      label = props.label;
  var circleClasses = classNames('circle', 'z-depth-1-half', color || 'primary-color', className);
  var stepContentClasses = classNames('step-content', 'z-depth-1', 'ml-xl-0', colorful ? 'p-0 mt-2' : 'p-4', hoverable && 'hoverable');
  var liClasses = classNames(inverted && 'timeline-inverted');
  return React.createElement("li", {
    className: liClasses
  }, React.createElement("a", {
    href: href
  }, React.createElement("span", {
    className: circleClasses
  }, icon && React.createElement(Fa, {
    icon: icon,
    size: iconSize,
    brand: iconBrand,
    light: iconLight,
    regular: iconRegular,
    className: iconClass
  }), label)), React.createElement("div", {
    className: stepContentClasses
  }, children));
};

TimelineStep.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.string,
  iconBrand: PropTypes.bool,
  iconClass: PropTypes.string,
  iconLight: PropTypes.bool,
  iconRegular: PropTypes.bool,
  iconSize: PropTypes.string,
  size: PropTypes.string
};
TimelineStep.defaultProps = {
  href: '#'
};

var css$o = ".time-picker-clock {\r\n  border-radius: 100%;\r\n  position: relative;\r\n  /* transition: 0.3s cubic-bezier(.25,.8,.50,1); */\r\n  user-select: none;\r\n  background: #f0f0f0;\r\n  animation: show-up-clock 0.2s linear;\r\n}\r\n@keyframes show-up-clock {\r\n  0% {\r\n    opacity: 0;\r\n    transform: scale(0.7);\r\n  }\r\n  100% {\r\n    opacity: 1;\r\n    transform: scale(1);\r\n  }\r\n}\r\n.time-picker-clock__container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  padding: 10px;\r\n}\r\n.time-picker-clock__hand {\r\n  height: calc(50% - 28px);\r\n  width: 2px;\r\n  bottom: 50%;\r\n  left: calc(50% - 1px);\r\n  transform-origin: center bottom;\r\n  position: absolute;\r\n  will-change: transform;\r\n  z-index: 1;\r\n  background-color: rgba(0, 150, 136, 0.25);\r\n}\r\n\r\n.time-picker-clock__hand.between .time-picker-clock__hand--ring {\r\n  background-color: rgba(0, 150, 136, 0.25);\r\n  border-color: inherit;\r\n  border-radius: 100%;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  content: \"\";\r\n  position: absolute;\r\n  top: -3%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.time-picker-clock__hand.between .time-picker-clock__hand--ring:before {\r\n  background-color: rgba(0, 77, 64, 0.75);\r\n  border-color: inherit;\r\n  border-radius: 100%;\r\n  width: 10px;\r\n  height: 10px;\r\n  content: \"\";\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-50%, -50%);\r\n}\r\n\r\n.time-picker-clock__hand:after {\r\n  content: \"\";\r\n  position: absolute;\r\n  height: 6px;\r\n  width: 6px;\r\n  top: 100%;\r\n  left: 50%;\r\n  border-radius: 50%;\r\n  background-color: rgba(0, 77, 64, 0.75);\r\n  opacity: 0.75;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.time-picker-clock > span {\r\n  align-items: center;\r\n  border-radius: 100%;\r\n  cursor: default;\r\n  display: flex;\r\n  font-size: 1rem;\r\n  line-height: 1.2;\r\n  justify-content: center;\r\n  left: calc(50% - 40px / 2);\r\n  height: 40px;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: calc(50% - 40px / 2);\r\n  width: 40px;\r\n  user-select: none;\r\n}\r\n.time-picker-clock > span:hover,\r\n.time-picker-clock > span.active:hover {\r\n  cursor: pointer;\r\n}\r\n.time-picker-clock > span:active:hover,\r\n.time-picker-clock > span.active:active:hover {\r\n  cursor: move;\r\n}\r\n.time-picker-clock:active:hover {\r\n  cursor: move;\r\n}\r\n.time-picker-clock > span > span {\r\n  z-index: 1;\r\n}\r\n\r\n.time-picker-clock > span:before,\r\n.time-picker-clock > span:after {\r\n  content: \"\";\r\n  border-radius: 100%;\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  height: 14px;\r\n  width: 14px;\r\n  transform: translate(-50%, -50%);\r\n}\r\n.time-picker-clock > span > span:after,\r\n.time-picker-clock > span > span:before {\r\n  height: 40px;\r\n  width: 40px;\r\n}\r\n.time-picker-clock > span.active {\r\n  color: #fff;\r\n  cursor: default;\r\n  z-index: 2;\r\n  background: blue;\r\n}\r\n.time-picker-clock > span > span.disabled {\r\n  pointer-events: none;\r\n}\r\n\r\n.picker__footer .clockpicker-button {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n}\r\n";
styleInject(css$o);

var propTypes$1 = {
  color: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  handleModeChange: PropTypes.func.isRequired,
  hours: PropTypes.string.isRequired,
  hoursFormat: PropTypes.number.isRequired,
  minutes: PropTypes.string.isRequired,
  unitsMode: PropTypes.string.isRequired
};

var TimePickerDisplay = function TimePickerDisplay(_ref) {
  var color = _ref.color,
      hours = _ref.hours,
      minutes = _ref.minutes,
      dayTime = _ref.dayTime,
      unitsMode = _ref.unitsMode,
      handleModeChange = _ref.handleModeChange,
      hoursFormat = _ref.hoursFormat;
  var displayClasses = classNames('picker__date-display', "btn-".concat(color));
  var hourClasses = classNames('clockpicker-span-hours', unitsMode === 'h' && 'text-primary');
  var minuteClasses = classNames('clockpicker-span-minutes', unitsMode === 'm' && 'text-primary');
  return React.createElement("div", {
    className: displayClasses
  }, React.createElement("div", {
    className: "clockpicker-display"
  }, React.createElement("div", {
    className: "clockpicker-display-column"
  }, React.createElement("span", {
    className: hourClasses,
    onClick: function onClick() {
      return handleModeChange('h');
    }
  }, hours !== '' ? hours : '--'), ":", React.createElement("span", {
    className: minuteClasses,
    onClick: function onClick() {
      return handleModeChange('m');
    }
  }, minutes !== '' ? minutes : '--')), hoursFormat === 12 && React.createElement("div", {
    className: "clockpicker-display-column clockpicker-display-am-pm"
  }, React.createElement("div", {
    className: "clockpicker-span-am-pm"
  }, dayTime.toUpperCase()))));
};

TimePickerDisplay.propTypes = propTypes$1;

var propTypes$2 = {
  angle: PropTypes.number.isRequired,
  color: PropTypes.string.isRequired,
  scale: PropTypes.number.isRequired
};

var TimpiePickerClockHand = function TimpiePickerClockHand(_ref) {
  var angle = _ref.angle,
      between = _ref.between,
      color = _ref.color,
      scale = _ref.scale;
  var classes = classNames('time-picker-clock__hand', color, between && 'between');
  return React.createElement("div", {
    className: classes,
    style: {
      transform: "rotate(".concat(angle, "deg)"),
      height: "calc((50% - 28px) * ".concat(scale, ")")
    }
  }, React.createElement("div", {
    className: "time-picker-clock__hand--ring"
  }));
};

TimpiePickerClockHand.propTypes = propTypes$2;

var propTypes$3 = {
  className: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  rotate: PropTypes.number.isRequired,
  startFromInner: PropTypes.bool.isRequired,
  step: PropTypes.number.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  color: PropTypes.string,
  "double": PropTypes.bool,
  handleModeChange: PropTypes.func,
  size: PropTypes.number,
  value: PropTypes.number
};
var defaultProps = {
  allowedValues: [],
  autoSwitch: false,
  color: 'priamry',
  "double": false,
  handleModeChange: function handleModeChange() {},
  size: 270,
  value: 0
};

var TimePickerClock =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePickerClock, _Component);

  function TimePickerClock() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimePickerClock);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePickerClock)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      clockRadius: 135,
      degrees: 30,
      digitsInRound: 12,
      degreesPerUnit: 30,
      handAngle: 0,
      handScale: 1,
      isDragging: false,
      innerRadius: 120,
      outerRadius: 266,
      initialValue: 0
    });

    _defineProperty(_assertThisInitialized(_this), "clockRef", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "buildComponentState", function () {
      var _this$props = _this.props,
          size = _this$props.size,
          max = _this$props.max,
          min = _this$props.min,
          _double = _this$props["double"],
          rotate = _this$props.rotate,
          value = _this$props.value;
      var clockRadius = size / 2;
      var digitsAmount = max - min + 1;
      var digitsInRound = _double ? digitsAmount / 2 : digitsAmount;
      var degreesPerUnit = 360 / digitsInRound;
      var outerRadius = clockRadius - 4;
      var innerRadius = clockRadius - Math.max(clockRadius * 0.2, 40); // cant be lower than 40

      var degrees = degreesPerUnit * Math.PI / 180;
      var handAngle = rotate + degreesPerUnit * (value - min);

      _this.setState({
        clockRadius: clockRadius,
        degrees: degrees,
        degreesPerUnit: degreesPerUnit,
        digitsInRound: digitsInRound,
        handAngle: handAngle,
        innerRadius: innerRadius,
        outerRadius: outerRadius,
        initialValue: value
      }, function () {
        return _this.setState({
          handScale: _this.getScale(value)
        });
      });
    });

    _defineProperty(_assertThisInitialized(_this), "getScale", function (value) {
      var _this$props2 = _this.props,
          _double2 = _this$props2["double"],
          startFromInner = _this$props2.startFromInner,
          min = _this$props2.min;
      var _this$state = _this.state,
          outerRadius = _this$state.outerRadius,
          clockRadius = _this$state.clockRadius,
          innerRadius = _this$state.innerRadius,
          digitsInRound = _this$state.digitsInRound;

      if (startFromInner && _double2) {
        return value - min >= digitsInRound ? outerRadius / clockRadius : innerRadius / clockRadius;
      }

      return value - min >= digitsInRound ? innerRadius / clockRadius : outerRadius / clockRadius;
    });

    _defineProperty(_assertThisInitialized(_this), "getAngle", function (center, p1) {
      var value = 2 * Math.atan2(p1.y - center.y - _this.euclidean(center, p1), p1.x - center.x);
      return Math.abs(value * 180 / Math.PI);
    });

    _defineProperty(_assertThisInitialized(_this), "getCoords", function (e) {
      var _this$clockRef$curren = _this.clockRef.current.getBoundingClientRect(),
          width = _this$clockRef$curren.width,
          top = _this$clockRef$curren.top,
          left = _this$clockRef$curren.left;

      var _ref = 'touches' in e ? e.touches[0] : e,
          clientX = _ref.clientX,
          clientY = _ref.clientY;

      var center = {
        x: width / 2,
        y: -width / 2
      };
      var coords = {
        x: clientX - left,
        y: top - clientY
      };
      return {
        center: center,
        coords: coords
      };
    });

    _defineProperty(_assertThisInitialized(_this), "setPosition", function (value) {
      var _this$state2 = _this.state,
          clockRadius = _this$state2.clockRadius,
          degrees = _this$state2.degrees;
      var _this$props3 = _this.props,
          rotate = _this$props3.rotate,
          min = _this$props3.min;

      var radius = (clockRadius - 24) * _this.getScale(value);

      var rotateRadians = rotate * Math.PI / 180;
      return {
        x: Math.round(Math.sin((value - min) * degrees + rotateRadians) * radius),
        y: Math.round(-Math.cos((value - min) * degrees + rotateRadians) * radius)
      };
    });

    _defineProperty(_assertThisInitialized(_this), "isValueAllowed", function (value) {
      var _this$props4 = _this.props,
          allowedValues = _this$props4.allowedValues,
          min = _this$props4.min,
          max = _this$props4.max;
      return allowedValues.length ? allowedValues.find(function (item) {
        return item === value;
      }) : value >= min && value <= max;
    });

    _defineProperty(_assertThisInitialized(_this), "isOnInner", function (center, coords) {
      var _this$props5 = _this.props,
          _double3 = _this$props5["double"],
          startFromInner = _this$props5.startFromInner;

      var centerDistance = _this.euclidean(center, coords);

      var betweenRadiusDistance = (_this.state.outerRadius + _this.state.innerRadius) / 2 - 16;

      if (_double3) {
        return startFromInner ? centerDistance > betweenRadiusDistance : centerDistance < betweenRadiusDistance;
      }

      return false;
    });

    _defineProperty(_assertThisInitialized(_this), "computeTimeNumber", function (number) {
      return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
    });

    _defineProperty(_assertThisInitialized(_this), "computeHandAngle", function (exactAngle) {
      var max = _this.props.max;

      if (360 % max !== 0) {
        return exactAngle >= 360 - _this.state.degreesPerUnit / 2 ? 0 : exactAngle;
      }

      return exactAngle <= _this.state.degreesPerUnit / 2 ? 360 : exactAngle;
    });

    _defineProperty(_assertThisInitialized(_this), "euclidean", function (p0, p1) {
      var dx = p1.x - p0.x;
      var dy = p1.y - p0.y;
      return Math.sqrt(dx * dx + dy * dy);
    });

    _defineProperty(_assertThisInitialized(_this), "transformPosition", function (value) {
      var _this$setPosition = _this.setPosition(value),
          x = _this$setPosition.x,
          y = _this$setPosition.y;

      return {
        transform: "translate(".concat(x, "px, ").concat(y, "px)")
      };
    });

    _defineProperty(_assertThisInitialized(_this), "genClockDigits", function () {
      var children = [];
      var _this$props6 = _this.props,
          max = _this$props6.max,
          min = _this$props6.min,
          step = _this$props6.step,
          _double4 = _this$props6["double"],
          startFromInner = _this$props6.startFromInner;
      var initialValue = _this.state.initialValue;

      var _loop = function _loop(value) {
        var classes = classNames('clockpicker-tick', value === initialValue && 'active', !_this.isValueAllowed(value) && 'disabled');
        children.push(React.createElement("span", {
          className: classes,
          style: Object.assign(_this.transformPosition(value), {
            fontSize: !_double4 ? '140%' : startFromInner ? value <= 12 ? '120%' : '100%' : value > 12 ? '120%' : '100%'
          }),
          key: value,
          onMouseDown: function onMouseDown(e) {
            return _this.onMouseDown(e, value);
          },
          onTouchStart: function onTouchStart(e) {
            return _this.onMouseDown(e, value);
          }
        }, max > 24 ? _this.computeTimeNumber(value) : value === 24 ? '00' : value));
      };

      for (var value = min; value <= max; value += step) {
        _loop(value);
      }

      return children;
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseDown", function (e, value) {
      e.preventDefault();

      _this.setState({
        isDragging: true
      });

      var _this$props7 = _this.props,
          rotate = _this$props7.rotate,
          min = _this$props7.min;
      var _this$state3 = _this.state,
          degreesPerUnit = _this$state3.degreesPerUnit,
          initialValue = _this$state3.initialValue;
      var handAngle = rotate + degreesPerUnit * (value - min);

      var handScale = _this.getScale(value);

      if (initialValue !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseUp", function (e) {
      e.preventDefault();
      var isDragging = _this.state.isDragging;
      var _this$props8 = _this.props,
          autoSwitch = _this$props8.autoSwitch,
          handleModeChange = _this$props8.handleModeChange;

      if (isDragging) {
        _this.setState({
          isDragging: false
        });

        if (autoSwitch) {
          return handleModeChange('m');
        }
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onMouseLeave", function (e) {
      e.preventDefault();
      var isDragging = _this.state.isDragging;

      if (isDragging) {
        _this.setState({
          isDragging: false
        });
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onDragMove", function (e) {
      e.preventDefault();
      var _this$state4 = _this.state,
          isDragging = _this$state4.isDragging,
          initialValue = _this$state4.initialValue,
          degreesPerUnit = _this$state4.degreesPerUnit,
          digitsInRound = _this$state4.digitsInRound;
      var _this$props9 = _this.props,
          rotate = _this$props9.rotate,
          min = _this$props9.min;

      if (!isDragging && e.type !== 'click') {
        return;
      }

      var _this$getCoords = _this.getCoords(e),
          center = _this$getCoords.center,
          coords = _this$getCoords.coords;

      var isOnInner = _this.isOnInner(center, coords);

      var exactHandAngle = _this.getAngle(center, coords);

      var computedHandAngle = _this.computeHandAngle(exactHandAngle);

      var value = Math.round((computedHandAngle - rotate) / degreesPerUnit) + min + (isOnInner ? digitsInRound : 0);
      var handAngle = rotate + degreesPerUnit * (value - min);

      var handScale = _this.getScale(value);

      if (initialValue !== value && _this.isValueAllowed(value)) {
        _this.updateValue(value, handAngle, handScale);
      }
    });

    _defineProperty(_assertThisInitialized(_this), "updateValue", function (value, handAngle, handScale) {
      var handleChange = _this.props.handleChange;
      handleChange(value);

      _this.setState({
        value: value,
        handAngle: handAngle,
        handScale: handScale
      });
    });

    return _this;
  }

  _createClass(TimePickerClock, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.buildComponentState();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this$props10 = this.props,
          max = _this$props10.max,
          min = _this$props10.min,
          value = _this$props10.value;
      var initialValue = this.state.initialValue;

      if (prevProps.max !== max || prevProps.min !== min || initialValue !== value) {
        this.buildComponentState();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props11 = this.props,
          className = _this$props11.className,
          color = _this$props11.color,
          size = _this$props11.size,
          step = _this$props11.step;
      var _this$state5 = this.state,
          handAngle = _this$state5.handAngle,
          handScale = _this$state5.handScale,
          initialValue = _this$state5.initialValue;
      var classes = classNames('time-picker-clock', 'clockpicker-dial', className, initialValue === null && 'time-picker-clock--indeterminate');
      return React.createElement("div", {
        className: classes,
        style: {
          height: "".concat(size, "px"),
          width: "".concat(size, "px"),
          visibility: 'visible'
        },
        onMouseDown: this.onMouseDown,
        onMouseUp: this.onMouseUp,
        onMouseLeave: this.onMouseLeave,
        onTouchStart: this.onMouseDown,
        onTouchEnd: this.onMouseUp,
        onMouseMove: this.onDragMove,
        onTouchMove: this.onDragMove,
        ref: this.clockRef
      }, React.createElement(TimpiePickerClockHand, {
        between: initialValue % step !== 0,
        color: color,
        angle: handAngle,
        scale: handScale
      }), this.genClockDigits());
    }
  }]);

  return TimePickerClock;
}(Component);

TimePickerClock.propTypes = propTypes$3;
TimePickerClock.defaultProps = defaultProps;

var propTypes$4 = {
  color: PropTypes.string.isRequired,
  dayTime: PropTypes.string.isRequired,
  handleDayTimeChange: PropTypes.func.isRequired
};

var TimePickerAmPmBlock = function TimePickerAmPmBlock(_ref) {
  var color = _ref.color,
      dayTime = _ref.dayTime,
      handleDayTimeChange = _ref.handleDayTimeChange;
  var classesAM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'am-button', dayTime === 'am' && 'active', "btn-".concat(color));
  var classesPM = classNames('btn-floating', 'btn-flat', 'clockpicker-button', 'pm-button', dayTime === 'pm' && 'active', "btn-".concat(color));
  return React.createElement("div", {
    className: "clockpicker-am-pm-block d-flex justify-content-between"
  }, React.createElement("button", {
    type: "button",
    className: classesAM,
    onClick: function onClick() {
      return handleDayTimeChange('am');
    }
  }, "AM"), React.createElement("button", {
    type: "button",
    className: classesPM,
    onClick: function onClick() {
      return handleDayTimeChange('pm');
    }
  }, "PM"));
};

TimePickerAmPmBlock.propTypes = propTypes$4;

var propTypes$5 = {
  cancelable: PropTypes.bool.isRequired,
  cancelText: PropTypes.string.isRequired,
  clearable: PropTypes.bool.isRequired,
  clearText: PropTypes.string.isRequired,
  doneText: PropTypes.string.isRequired,
  handleCancelClick: PropTypes.func.isRequired,
  handleClearClick: PropTypes.func.isRequired,
  handleDoneClick: PropTypes.func.isRequired
};

var TimePickerFooter = function TimePickerFooter(_ref) {
  var cancelable = _ref.cancelable,
      cancelText = _ref.cancelText,
      clearable = _ref.clearable,
      clearText = _ref.clearText,
      doneText = _ref.doneText,
      handleCancelClick = _ref.handleCancelClick,
      handleClearClick = _ref.handleClearClick,
      handleDoneClick = _ref.handleDoneClick;
  return React.createElement("div", {
    className: "picker__footer"
  }, clearable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleClearClick
  }, clearText), cancelable && React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleCancelClick
  }, cancelText), React.createElement(Button, {
    flat: true,
    className: "clockpicker-button",
    tabIndex: "0",
    onClick: handleDoneClick
  }, doneText));
};

TimePickerFooter.propTypes = propTypes$5;

var propTypes$6 = {
  id: PropTypes.string.isRequired,
  allowedValues: PropTypes.arrayOf(PropTypes.number),
  autoSwitch: PropTypes.bool,
  cancelable: PropTypes.bool,
  cancelText: PropTypes.string,
  clearable: PropTypes.bool,
  clearText: PropTypes.string,
  closeOnCancel: PropTypes.bool,
  color: PropTypes.string,
  dayTime: PropTypes.string,
  doneText: PropTypes.string,
  getValue: PropTypes.func,
  hours: PropTypes.number,
  hoursFormat: PropTypes.number,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.object]),
  minutes: PropTypes.number,
  placeholder: PropTypes.string,
  startFromInner: PropTypes.bool
};
var defaultProps$1 = {
  allowedValues: [],
  autoSwitch: true,
  cancelable: false,
  cancelText: 'Cancel',
  clearable: false,
  clearText: 'Clear',
  closeOnCancel: false,
  color: 'primary',
  dayTime: 'am',
  doneText: 'Done',
  getValue: function getValue() {},
  hours: 12,
  hoursFormat: 12,
  label: '',
  minutes: 0,
  placeholder: '',
  startFromInner: true
};

var TimePicker =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePicker, _Component);

  function TimePicker() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TimePicker);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TimePicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      allowedValues: [],
      computedHours: '',
      computedMinutes: '',
      initialDayTime: _this.props.dayTime,
      initialHours: _this.props.hours,
      initialMinutes: _this.props.minutes,
      pickerDialogOpen: false,
      unitsMode: 'h',
      value: ''
    });

    _defineProperty(_assertThisInitialized(_this), "setInputText", function () {
      var value = '';
      var _this$state = _this.state,
          initialHours = _this$state.initialHours,
          initialMinutes = _this$state.initialMinutes,
          initialDayTime = _this$state.initialDayTime,
          computedHours = _this$state.computedHours,
          computedMinutes = _this$state.computedMinutes;
      var hoursFormat = _this.props.hoursFormat;

      if (initialHours !== null && initialMinutes !== null && initialHours < 25 && initialHours >= 0 && initialMinutes < 60 && initialMinutes >= 0) {
        if (hoursFormat === 12) {
          if (initialHours > 12 && initialHours < 24) {
            value = "".concat(computedHours - 12, ":").concat(computedMinutes, "PM");
          } else if (initialHours === 24 || initialHours === 0) {
            value = "".concat(parseInt(computedHours) + 12, ":").concat(computedMinutes, "AM");
          } else {
            value = "".concat(computedHours, ":").concat(computedMinutes).concat(initialDayTime.toUpperCase());
          }
        } else {
          value = "".concat(computedHours, ":").concat(computedMinutes);
        }
      }

      _this.setState({
        value: value,
        unitsMode: 'h'
      });
    });

    _defineProperty(_assertThisInitialized(_this), "computeTimeNumber", function (number) {
      var unitsMode = _this.state.unitsMode;

      if (number !== null) {
        number = unitsMode === 'h' && number === 24 ? 0 : number;
        return number < 10 ? "0".concat(number.toString()) : "".concat(number.toString());
      }

      return '';
    });

    _defineProperty(_assertThisInitialized(_this), "handlePickerDialogOpen", function () {
      var pickerDialogOpen = _this.state.pickerDialogOpen;
      return _this.setState({
        pickerDialogOpen: !pickerDialogOpen
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleModeChange", function (unitsMode) {
      return _this.setState({
        unitsMode: unitsMode
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleDayTimeChange", function (initialDayTime) {
      return _this.setState({
        initialDayTime: initialDayTime
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleMinutesChange", function (initialMinutes) {
      return _this.setState({
        initialMinutes: initialMinutes
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleHoursChange", function (initialHours) {
      return _this.setState({
        initialHours: initialHours
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBackdropClick", function (e) {
      if (e.target.classList.value === 'picker__holder') {
        _this.handlePickerDialogOpen();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "handleDoneClick", function () {
      _this.setInputText();

      _this.handlePickerDialogOpen();
    });

    _defineProperty(_assertThisInitialized(_this), "handleClearClick", function () {
      _this.handleHoursChange(null);

      _this.handleMinutesChange(null);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');
    });

    _defineProperty(_assertThisInitialized(_this), "handleCancelClick", function () {
      var _this$props = _this.props,
          hours = _this$props.hours,
          minutes = _this$props.minutes,
          closeOnCancel = _this$props.closeOnCancel;

      _this.handleHoursChange(hours);

      _this.handleMinutesChange(minutes);

      _this.handleModeChange('h');

      _this.handleDayTimeChange('am');

      if (closeOnCancel) {
        _this.handlePickerDialogOpen();
      }
    });

    return _this;
  }

  _createClass(TimePicker, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$state2 = this.state,
          initialHours = _this$state2.initialHours,
          initialMinutes = _this$state2.initialMinutes;
      this.setState({
        computedHours: this.computeTimeNumber(initialHours),
        computedMinutes: this.computeTimeNumber(initialMinutes)
      }, function () {
        return _this2.setInputText();
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps, prevState) {
      var _this3 = this;

      var _this$state3 = this.state,
          initialHours = _this$state3.initialHours,
          initialMinutes = _this$state3.initialMinutes,
          value = _this$state3.value;
      var _this$props2 = this.props,
          hours = _this$props2.hours,
          minutes = _this$props2.minutes,
          getValue = _this$props2.getValue,
          dayTime = _this$props2.dayTime;

      if (prevState.initialMinutes !== initialMinutes) {
        this.setState({
          computedMinutes: this.computeTimeNumber(initialMinutes)
        });
      }

      if (prevState.initialHours !== initialHours) {
        this.setState({
          computedHours: this.computeTimeNumber(initialHours)
        });
      }

      if (prevState.value !== value) {
        getValue(value);
      }

      if (prevProps.hours !== hours) {
        this.setState({
          computedHours: this.computeTimeNumber(hours),
          initialHours: hours
        }, function () {
          _this3.setInputText();
        });
      }

      if (prevProps.minutes !== minutes) {
        this.setState({
          computedMinutes: this.computeTimeNumber(minutes),
          initialMinutes: minutes
        }, function () {
          _this3.setInputText();
        });
      }

      if (prevProps.dayTime !== dayTime) {
        this.setState({
          initialDayTime: dayTime
        }, function () {
          _this3.setInputText();
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state4 = this.state,
          computedHours = _this$state4.computedHours,
          computedMinutes = _this$state4.computedMinutes,
          initialDayTime = _this$state4.initialDayTime,
          initialHours = _this$state4.initialHours,
          initialMinutes = _this$state4.initialMinutes,
          pickerDialogOpen = _this$state4.pickerDialogOpen,
          unitsMode = _this$state4.unitsMode,
          value = _this$state4.value;
      var _this$props3 = this.props,
          allowedValues = _this$props3.allowedValues,
          autoSwitch = _this$props3.autoSwitch,
          cancelable = _this$props3.cancelable,
          cancelText = _this$props3.cancelText,
          clearable = _this$props3.clearable,
          clearText = _this$props3.clearText,
          color = _this$props3.color,
          doneText = _this$props3.doneText,
          hoursFormat = _this$props3.hoursFormat,
          id = _this$props3.id,
          label = _this$props3.label,
          placeholder = _this$props3.placeholder,
          startFromInner = _this$props3.startFromInner;
      var inputClasses = classNames('form-control', 'timepicker', pickerDialogOpen && 'picker__input picker__input--active');
      var clockClasses = classNames('clockpicker', 'picker', pickerDialogOpen && 'picker--opened');
      var hoursClasses = classNames('clockpicker-hours', unitsMode !== 'h' && 'clockpicker-dial-out');
      var minutesClasses = classNames('clockpicker-minutes', unitsMode !== 'm' && 'clockpicker-dial-out');
      return React.createElement("div", {
        className: "md-form"
      }, React.createElement("input", {
        type: "text",
        placeholder: placeholder,
        id: id,
        className: inputClasses,
        value: value,
        onClick: this.handlePickerDialogOpen,
        readOnly: true
      }), React.createElement("label", {
        htmlFor: id,
        className: "active"
      }, label), pickerDialogOpen && React.createElement("div", {
        className: clockClasses
      }, React.createElement("div", {
        className: "picker__holder",
        onClick: this.handleBackdropClick
      }, React.createElement("div", {
        className: "picker__frame"
      }, React.createElement("div", {
        className: "picker__wrap"
      }, React.createElement("div", {
        className: "picker__box"
      }, React.createElement(TimePickerDisplay, {
        color: color,
        hours: computedHours,
        minutes: computedMinutes,
        dayTime: initialDayTime,
        unitsMode: unitsMode,
        handleModeChange: this.handleModeChange,
        hoursFormat: hoursFormat
      }), React.createElement("div", {
        className: "picker__calendar-container"
      }, React.createElement("div", {
        className: "clockpicker-plate"
      }, unitsMode === 'h' ? React.createElement(TimePickerClock, {
        allowedValues: allowedValues,
        autoSwitch: autoSwitch,
        className: hoursClasses,
        color: color,
        "double": hoursFormat === 24,
        handleChange: this.handleHoursChange,
        handleModeChange: this.handleModeChange,
        min: 1,
        max: hoursFormat,
        step: 1,
        rotate: 30,
        startFromInner: startFromInner,
        value: initialHours
      }) : React.createElement(TimePickerClock, {
        className: minutesClasses,
        color: color,
        handleChange: this.handleMinutesChange,
        min: 0,
        max: 59,
        step: 5,
        rotate: 0,
        startFromInner: startFromInner,
        value: initialMinutes
      })), hoursFormat === 12 && React.createElement(TimePickerAmPmBlock, {
        color: color,
        dayTime: initialDayTime,
        handleDayTimeChange: this.handleDayTimeChange
      })), React.createElement(TimePickerFooter, {
        cancelText: cancelText,
        clearText: clearText,
        doneText: doneText,
        cancelable: cancelable,
        clearable: clearable,
        handleCancelClick: this.handleCancelClick,
        handleClearClick: this.handleClearClick,
        handleDoneClick: this.handleDoneClick
      })))))));
    }
  }]);

  return TimePicker;
}(Component);

TimePicker.propTypes = propTypes$6;
TimePicker.defaultProps = defaultProps$1;

var css$p = ".Toastify__toast-container {\r\n  z-index: 9999;\r\n  position: fixed;\r\n  padding: 4px;\r\n  width: 320px;\r\n  box-sizing: border-box;\r\n  color: #fff;\r\n}\r\n.Toastify__toast-container--top-left {\r\n  top: 1em;\r\n  left: 1em;\r\n}\r\n.Toastify__toast-container--top-center {\r\n  top: 1em;\r\n  left: 50%;\r\n  margin-left: -160px;\r\n}\r\n.Toastify__toast-container--top-right {\r\n  top: 1em;\r\n  right: 1em;\r\n}\r\n.Toastify__toast-container--bottom-left {\r\n  bottom: 1em;\r\n  left: 1em;\r\n}\r\n.Toastify__toast-container--bottom-center {\r\n  bottom: 1em;\r\n  left: 50%;\r\n  margin-left: -160px;\r\n}\r\n.Toastify__toast-container--bottom-right {\r\n  bottom: 1em;\r\n  right: 1em;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .Toastify__toast-container {\r\n    width: 100vw;\r\n    padding: 0;\r\n    left: 0;\r\n    margin: 0;\r\n  }\r\n  .Toastify__toast-container--top-left,\r\n  .Toastify__toast-container--top-center,\r\n  .Toastify__toast-container--top-right {\r\n    top: 0;\r\n  }\r\n  .Toastify__toast-container--bottom-left,\r\n  .Toastify__toast-container--bottom-center,\r\n  .Toastify__toast-container--bottom-right {\r\n    bottom: 0;\r\n  }\r\n  .Toastify__toast-container--rtl {\r\n    right: 0;\r\n    left: initial;\r\n  }\r\n}\r\n\r\n.Toastify__toast {\r\n  position: relative;\r\n  min-height: 64px;\r\n  box-sizing: border-box;\r\n  margin-bottom: 1rem;\r\n  padding: 8px;\r\n  border-radius: 1px;\r\n  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1), 0 2px 15px 0 rgba(0, 0, 0, 0.05);\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n  -ms-flex-pack: justify;\r\n  justify-content: space-between;\r\n  max-height: 800px;\r\n  overflow: hidden;\r\n  font-family: sans-serif;\r\n  cursor: pointer;\r\n  direction: ltr;\r\n}\r\n.Toastify__toast--rtl {\r\n  direction: rtl;\r\n}\r\n.Toastify__toast--default {\r\n  background: #fff;\r\n  color: #aaa;\r\n}\r\n.Toastify__toast--info {\r\n  background: #3498db;\r\n}\r\n.Toastify__toast--success {\r\n  background: #07bc0c;\r\n}\r\n.Toastify__toast--warning {\r\n  background: #f1c40f;\r\n}\r\n.Toastify__toast--error {\r\n  background: #e74c3c;\r\n}\r\n.Toastify__toast-body {\r\n  margin: auto 0;\r\n  -ms-flex: 1;\r\n  flex: 1;\r\n}\r\n\r\n@media only screen and (max-width: 480px) {\r\n  .Toastify__toast {\r\n    margin-bottom: 0;\r\n  }\r\n}\r\n\r\n.Toastify__close-button {\r\n  color: #fff;\r\n  font-weight: bold;\r\n  font-size: 14px;\r\n  background: transparent;\r\n  outline: none;\r\n  border: none;\r\n  padding: 0;\r\n  cursor: pointer;\r\n  opacity: 0.7;\r\n  transition: 0.3s ease;\r\n  -ms-flex-item-align: start;\r\n  align-self: flex-start;\r\n}\r\n.Toastify__close-button--default {\r\n  color: #000;\r\n  opacity: 0.3;\r\n}\r\n.Toastify__close-button:hover,\r\n.Toastify__close-button:focus {\r\n  opacity: 1;\r\n}\r\n\r\n@keyframes Toastify__trackProgress {\r\n  0% {\r\n    transform: scaleX(1);\r\n  }\r\n  100% {\r\n    transform: scaleX(0);\r\n  }\r\n}\r\n\r\n.Toastify__progress-bar {\r\n  position: absolute;\r\n  bottom: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 5px;\r\n  z-index: 9999;\r\n  opacity: 0.7;\r\n  background-color: rgba(255, 255, 255, 0.7);\r\n  transform-origin: left;\r\n}\r\n.Toastify__progress-bar--animated {\r\n  animation: Toastify__trackProgress linear 1 forwards;\r\n}\r\n.Toastify__progress-bar--controlled {\r\n  transition: transform 0.2s;\r\n}\r\n.Toastify__progress-bar--rtl {\r\n  right: 0;\r\n  left: initial;\r\n  transform-origin: right;\r\n}\r\n.Toastify__progress-bar--default {\r\n  background: linear-gradient(\r\n    to right,\r\n    #4cd964,\r\n    #5ac8fa,\r\n    #007aff,\r\n    #34aadc,\r\n    #5856d6,\r\n    #ff2d55\r\n  );\r\n}\r\n\r\n@keyframes Toastify__bounceInRight {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(3000px, 0, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(-25px, 0, 0);\r\n  }\r\n  75% {\r\n    transform: translate3d(10px, 0, 0);\r\n  }\r\n  90% {\r\n    transform: translate3d(-5px, 0, 0);\r\n  }\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceOutRight {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(-20px, 0, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceInLeft {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(-3000px, 0, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(25px, 0, 0);\r\n  }\r\n  75% {\r\n    transform: translate3d(-10px, 0, 0);\r\n  }\r\n  90% {\r\n    transform: translate3d(5px, 0, 0);\r\n  }\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceOutLeft {\r\n  20% {\r\n    opacity: 1;\r\n    transform: translate3d(20px, 0, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(-2000px, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceInUp {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  from {\r\n    opacity: 0;\r\n    transform: translate3d(0, 3000px, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n  75% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n  90% {\r\n    transform: translate3d(0, -5px, 0);\r\n  }\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceOutUp {\r\n  20% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 20px, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, -2000px, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceInDown {\r\n  from,\r\n  60%,\r\n  75%,\r\n  90%,\r\n  to {\r\n    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);\r\n  }\r\n  0% {\r\n    opacity: 0;\r\n    transform: translate3d(0, -3000px, 0);\r\n  }\r\n  60% {\r\n    opacity: 1;\r\n    transform: translate3d(0, 25px, 0);\r\n  }\r\n  75% {\r\n    transform: translate3d(0, -10px, 0);\r\n  }\r\n  90% {\r\n    transform: translate3d(0, 5px, 0);\r\n  }\r\n  to {\r\n    transform: none;\r\n  }\r\n}\r\n\r\n@keyframes Toastify__bounceOutDown {\r\n  20% {\r\n    transform: translate3d(0, 10px, 0);\r\n  }\r\n  40%,\r\n  45% {\r\n    opacity: 1;\r\n    transform: translate3d(0, -20px, 0);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    transform: translate3d(0, 2000px, 0);\r\n  }\r\n}\r\n\r\n.Toastify__bounce-enter--top-left,\r\n.Toastify__bounce-enter--bottom-left {\r\n  animation-name: Toastify__bounceInLeft;\r\n}\r\n\r\n.Toastify__bounce-enter--top-right,\r\n.Toastify__bounce-enter--bottom-right {\r\n  animation-name: Toastify__bounceInRight;\r\n}\r\n\r\n.Toastify__bounce-enter--top-center {\r\n  animation-name: Toastify__bounceInDown;\r\n}\r\n\r\n.Toastify__bounce-enter--bottom-center {\r\n  animation-name: Toastify__bounceInUp;\r\n}\r\n\r\n.Toastify__bounce-exit--top-left,\r\n.Toastify__bounce-exit--bottom-left {\r\n  animation-name: Toastify__bounceOutLeft;\r\n}\r\n\r\n.Toastify__bounce-exit--top-right,\r\n.Toastify__bounce-exit--bottom-right {\r\n  animation-name: Toastify__bounceOutRight;\r\n}\r\n\r\n.Toastify__bounce-exit--top-center {\r\n  animation-name: Toastify__bounceOutUp;\r\n}\r\n\r\n.Toastify__bounce-exit--bottom-center {\r\n  animation-name: Toastify__bounceOutDown;\r\n}\r\n\r\n@keyframes Toastify__zoomIn {\r\n  from {\r\n    opacity: 0;\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  50% {\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@keyframes Toastify__zoomOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  50% {\r\n    opacity: 0;\r\n    transform: scale3d(0.3, 0.3, 0.3);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.Toastify__zoom-enter {\r\n  animation-name: Toastify__zoomIn;\r\n}\r\n\r\n.Toastify__zoom-exit {\r\n  animation-name: Toastify__zoomOut;\r\n}\r\n\r\n@keyframes Toastify__flipIn {\r\n  from {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    animation-timing-function: ease-in;\r\n    opacity: 0;\r\n  }\r\n  40% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    animation-timing-function: ease-in;\r\n  }\r\n  60% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);\r\n    opacity: 1;\r\n  }\r\n  80% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);\r\n  }\r\n  to {\r\n    transform: perspective(400px);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__flipOut {\r\n  from {\r\n    transform: perspective(400px);\r\n  }\r\n  30% {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\n.Toastify__flip-enter {\r\n  animation-name: Toastify__flipIn;\r\n}\r\n\r\n.Toastify__flip-exit {\r\n  animation-name: Toastify__flipOut;\r\n}\r\n\r\n@keyframes Toastify__slideInRight {\r\n  from {\r\n    transform: translate3d(110%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideInLeft {\r\n  from {\r\n    transform: translate3d(-110%, 0, 0);\r\n    visibility: visible;\r\n  }\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideInUp {\r\n  from {\r\n    transform: translate3d(0, 110%, 0);\r\n    visibility: visible;\r\n  }\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideInDown {\r\n  from {\r\n    transform: translate3d(0, -110%, 0);\r\n    visibility: visible;\r\n  }\r\n  to {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideOutRight {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(110%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideOutLeft {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(-110%, 0, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideOutDown {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, 500px, 0);\r\n  }\r\n}\r\n\r\n@keyframes Toastify__slideOutUp {\r\n  from {\r\n    transform: translate3d(0, 0, 0);\r\n  }\r\n  to {\r\n    visibility: hidden;\r\n    transform: translate3d(0, -500px, 0);\r\n  }\r\n}\r\n\r\n.Toastify__slide-enter--top-left,\r\n.Toastify__slide-enter--bottom-left {\r\n  animation-name: Toastify__slideInLeft;\r\n}\r\n\r\n.Toastify__slide-enter--top-right,\r\n.Toastify__slide-enter--bottom-right {\r\n  animation-name: Toastify__slideInRight;\r\n}\r\n\r\n.Toastify__slide-enter--top-center {\r\n  animation-name: Toastify__slideInDown;\r\n}\r\n\r\n.Toastify__slide-enter--bottom-center {\r\n  animation-name: Toastify__slideInUp;\r\n}\r\n\r\n.Toastify__slide-exit--top-left,\r\n.Toastify__slide-exit--bottom-left {\r\n  animation-name: Toastify__slideOutLeft;\r\n}\r\n\r\n.Toastify__slide-exit--top-right,\r\n.Toastify__slide-exit--bottom-right {\r\n  animation-name: Toastify__slideOutRight;\r\n}\r\n\r\n.Toastify__slide-exit--top-center {\r\n  animation-name: Toastify__slideOutUp;\r\n}\r\n\r\n.Toastify__slide-exit--bottom-center {\r\n  animation-name: Toastify__slideOutDown;\r\n}\r\n";
styleInject(css$p);

var Button$1 = function Button$1(_ref) {
  var children = _ref.children,
      className = _ref.className,
      color = _ref.color,
      flat = _ref.flat,
      floating = _ref.floating,
      gradient = _ref.gradient,
      outline = _ref.outline,
      rounded = _ref.rounded,
      attributes = _objectWithoutProperties(_ref, ["children", "className", "color", "flat", "floating", "gradient", "outline", "rounded"]);

  var classes = classNames(flat ? 'btn-flat' : gradient ? "".concat(gradient, "-gradient") : "btn".concat(outline ? '-outline' : '', "-").concat(color), {
    'btn-floating': floating,
    'btn-rounded': rounded
  }, className);
  return React.createElement(Button, _extends({}, attributes, {
    className: classes,
    color: "",
    flat: flat,
    rounded: rounded
  }), children);
};

Button$1.propTypes = {
  flat: PropTypes.bool,
  floating: PropTypes.bool,
  gradient: PropTypes.string,
  outline: PropTypes.bool,
  rounded: PropTypes.bool
};
Button$1.defaultProps = {
  color: 'default'
};

var Input$1 =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Input$1, _React$Component);

  function Input$1() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Input$1);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Input$1)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      character: 0,
      characterActive: false,
      characterMax: _this.props.counter
    });

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (e) {
      var length = e.target.value.length;
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          getCounter = _this$props.getCounter;
      onChange && onChange(e);
      getCounter && getCounter(length);

      _this.setState({
        character: length
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleBlur", function (e) {
      var onBlur = _this.props.onBlur;
      onBlur && onBlur(e);

      _this.setState({
        characterActive: false
      });
    });

    _defineProperty(_assertThisInitialized(_this), "handleFocus", function (e) {
      var onFocus = _this.props.onFocus;
      onFocus && onFocus(e);

      _this.setState({
        character: e.target.value.length,
        characterActive: true
      });
    });

    return _this;
  }

  _createClass(Input$1, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          counter = _this$props2.counter,
          getCounter = _this$props2.getCounter,
          onChange = _this$props2.onChange,
          attributes = _objectWithoutProperties(_this$props2, ["children", "className", "counter", "getCounter", "onChange"]);

      var _this$state = this.state,
          character = _this$state.character,
          characterActive = _this$state.characterActive,
          characterMax = _this$state.characterMax;
      var typeCounter = typeof characterMax === 'number';
      var classes = classNames(className, typeCounter && character >= characterMax && 'invalid');
      var styles = {
        "float": 'right',
        fontSize: '12px',
        height: '1px'
      };
      return React.createElement(Input, _extends({}, attributes, {
        onChange: this.handleChange,
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        className: classes
      }), counter && characterActive && React.createElement("span", {
        className: "character-counter",
        style: styles
      }, character, typeCounter && "/".concat(characterMax)), children);
    }
  }]);

  return Input$1;
}(React.Component);

Input$1.propTypes = {
  counter: PropTypes.oneOfType([PropTypes.number, PropTypes.bool]),
  getCounter: PropTypes.func
};
Input$1.defaultProps = {
  counter: false,
  getCounter: function getCounter() {}
};

export { Alert, Animation, Autocomplete, Avatar, Badge, Box, Breadcrumb, BreadcrumbItem, Button$1 as Button, ButtonFixed, ButtonFixed$1 as ButtonFixedItem, ButtonGroup, ButtonToolbar, Card, CardBody, CardFooter, CardGroup, CardHeader, CardImage, CardText, CardTitle, CardUp, CardVideo, Carousel, CarouselCaption, Control as CarouselControl, CarouselIndicator, CarouselIndicators, CarouselInner, CarouselItem, Chip, ChipsInput, MDBCloseIcon as CloseIcon, Col, Collapse, CollapseHeader, Container, DataTable, DatePicker, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, EdgeHeader, ExportToCSV, Fa, RotatingCard as FlippingCard, Footer, FormInline, FreeBird, Gallery, GalleryList, HamburgerToggler, Iframe, Input$1 as Input, InputFile, InputGroup, InputNumeric, InputRange, InputSwitch, Jumbotron, Lightbox, Link, ListGroup, ListGroupItem, Alert as MDBAlert, Animation as MDBAnimation, Autocomplete as MDBAutocomplete, Avatar as MDBAvatar, Badge as MDBBadge, Box as MDBBox, Breadcrumb as MDBBreadcrumb, BreadcrumbItem as MDBBreadcrumbItem, Button$1 as MDBBtn, ButtonFixed as MDBBtnFixed, ButtonFixed$1 as MDBBtnFixedItem, ButtonGroup as MDBBtnGroup, ButtonToolbar as MDBBtnToolbar, Card as MDBCard, CardBody as MDBCardBody, CardFooter as MDBCardFooter, CardGroup as MDBCardGroup, CardHeader as MDBCardHeader, CardImage as MDBCardImage, CardText as MDBCardText, CardTitle as MDBCardTitle, CardUp as MDBCardUp, CardVideo as MDBCardVideo, Carousel as MDBCarousel, CarouselCaption as MDBCarouselCaption, CarouselIndicator as MDBCarouselIndicator, CarouselIndicators as MDBCarouselIndicators, CarouselInner as MDBCarouselInner, CarouselItem as MDBCarouselItem, Chip as MDBChip, ChipsInput as MDBChipsInput, MDBCloseIcon, Col as MDBCol, Collapse as MDBCollapse, CollapseHeader as MDBCollapseHeader, Container as MDBContainer, Control as MDBControl, DataTable as MDBDataTable, DatePicker as MDBDatePicker, Dropdown as MDBDropdown, DropdownItem as MDBDropdownItem, DropdownMenu as MDBDropdownMenu, DropdownToggle as MDBDropdownToggle, EdgeHeader as MDBEdgeHeader, ExportToCSV as MDBExportToCSV, InputFile as MDBFileInput, Footer as MDBFooter, FormInline as MDBFormInline, FreeBird as MDBFreeBird, Gallery as MDBGallery, GalleryList as MDBGalleryList, HamburgerToggler as MDBHamburgerToggler, Fa as MDBIcon, Iframe as MDBIframe, Input$1 as MDBInput, InputGroup as MDBInputGroup, InputNumeric as MDBInputSelect, Jumbotron as MDBJumbotron, Lightbox as MDBLightbox, Link as MDBLink, ListGroup as MDBListGroup, ListGroupItem as MDBListGroupItem, Mask as MDBMask, Media as MDBMedia, Modal as MDBModal, ModalBody as MDBModalBody, ModalFooter as MDBModalFooter, ModalHeader as MDBModalHeader, Nav as MDBNav, NavItem as MDBNavItem, NavLink as MDBNavLink, Navbar as MDBNavbar, NavbarBrand as MDBNavbarBrand, NavbarNav as MDBNavbarNav, NavbarToggler as MDBNavbarToggler, Notification as MDBNotification, PageItem as MDBPageItem, PageLink as MDBPageNav, Pagination as MDBPagination, Parallax as MDBParallax, Popover as MDBPopover, PopoverBody as MDBPopoverBody, PopoverHeader as MDBPopoverHeader, Popover as MDBPopper, Progress as MDBProgress, InputRange as MDBRangeInput, Rating as MDBRating, RotatingCard as MDBRotatingCard, Row as MDBRow, ScrollBar as MDBScrollbar, ScrollBox as MDBScrollspyBox, ScrollSpyList as MDBScrollspyList, ScrollSpyListItem as MDBScrollspyListItem, ScrollSpyText as MDBScrollspyText, Select as MDBSelect, SelectInput$1 as MDBSelectInput, SelectOption as MDBSelectOption, Options as MDBSelectOptions, SideNav as MDBSideNav, SideNavCat as MDBSideNavCat, SideNavItem as MDBSideNavItem, SideNavLink as MDBSideNavLink, SideNavNav as MDBSideNavNav, SimpleChart as MDBSimpleChart, SmoothScroll as MDBSmoothScroll, Spinner as MDBSpinner, Step as MDBStep, Stepper as MDBStepper, Sticky as MDBSticky, Container$1 as MDBStickyContent, MDBStreak, InputSwitch as MDBSwitch, TabContent as MDBTabContent, TabPane as MDBTabPane, Table as MDBTable, TableBody as MDBTableBody, TableEditable as MDBTableEditable, TableFoot as MDBTableFoot, TableHead as MDBTableHead, Testimonial as MDBTestimonial, TimePicker as MDBTimePicker, Timeline as MDBTimeline, TimelineStep as MDBTimelineStep, Popover as MDBTooltip, Treeview as MDBTreeview, TreeviewItem as MDBTreeviewItem, TreeviewList as MDBTreeviewList, Typography as MDBTypo, Typography as MDBTypography, View as MDBView, Waves as MDBWaves, Mask, Media, Modal, ModalBody, ModalFooter, ModalHeader, Nav, NavItem, NavLink, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Notification, PageItem, PageLink, Pagination, Parallax, ScrollBar as PerfectScrollbar, Popover, PopoverBody, PopoverHeader, Popover as Popper, Progress, Rating, Row, ScrollBox as ScrollSpyBox, ScrollSpyList, ScrollSpyListItem, ScrollSpyText, Select, SelectInput$1 as SelectInput, SelectOption, Options as SelectOptions, SideNav, SideNavCat, SideNavItem, SideNavLink, SideNavNav, SimpleChart, SmoothScroll, Spinner, Step, Stepper, Sticky, Container$1 as StickyContainer, MDBStreak as Streak, TabContent, TabPane, Table, TableBody, TableEditable, TableFoot, TableHead, Testimonial, TimePicker, Timeline, TimelineStep, Popover as Tooltip, Treeview, TreeviewItem, TreeviewList, Typography as Typo, Typography, View, Waves };
