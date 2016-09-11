'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Transition = 'all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';

var TabIndicator = _react2.default.createClass({
  displayName: 'TabIndicator',

  getDefaultProps: function getDefaultProps() {
    return {
      style: {}
    };
  },

  render: function render() {
    var _props = this.props;
    var activePosition = _props.activePosition;
    var style = _props.style;

    var transform = 'translateX(' + activePosition + '00%)';

    return _react2.default.createElement('div', { style: {
        width: '100%',
        height: 2,
        backgroundColor: style.color || '#FFFFFF',
        transform: transform,
        WebkitTransform: transform,
        transition: Transition,
        WebkitTransition: Transition
      }
    });
  }
});

exports.default = TabIndicator;