'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Style = {
  container: {
    position: 'relative',
    height: 48,
    padding: 0,
    cursor: 'pointer'
  },

  textContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    textTransform: 'uppercase',
    fontSize: 14,

    // Without this, Safari briefly fades the text color whilst ::active.
    WebkitFontSmoothing: 'subpixel-antialiased'
  }
};

var Tab = function Tab(_ref) {
  var children = _ref.children,
      onClick = _ref.onClick,
      style = _ref.style;

  return _react2.default.createElement(
    'div',
    { style: Style.container, onClick: onClick },
    _react2.default.createElement(
      'div',
      { style: _extends({}, Style.textContainer, style) },
      children
    )
  );
};

Tab.propTypes = {
  style: _react.PropTypes.object,
  onClick: _react.PropTypes.func
};

Tab.defaultProps = {
  style: {},
  onClick: _utils.emptyFunc
};

exports.default = Tab;