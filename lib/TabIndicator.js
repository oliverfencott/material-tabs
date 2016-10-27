'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TRANSITION = 'all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';

var Style = {
  width: '100%',
  height: 2,
  backgroundColor: '#FFFFFF',
  transition: TRANSITION,
  WebkitTransition: TRANSITION
};

var TabIndicator = function TabIndicator(_ref) {
  var activePosition = _ref.activePosition,
      style = _ref.style;

  var transform = 'translateX(' + activePosition + '00%)';

  return _react2.default.createElement('div', {
    style: _extends({}, Style, style, {
      WebkitTransform: transform,
      transform: transform
    })
  });
};

TabIndicator.defaultProps = {
  style: {}
};

exports.default = TabIndicator;