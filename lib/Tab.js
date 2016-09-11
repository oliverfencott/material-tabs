'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = _react2.default.createClass({
  displayName: 'Tab',

  getDefaultProps: function getDefaultProps() {
    return {
      style: {},
      onClick: function onClick() {}
    };
  },

  getStyle: function getStyle() {
    var style = this.props.style;


    return {
      container: {
        position: 'relative',
        height: 48,
        padding: 0,
        cursor: 'pointer'
      },
      text: {
        container: {
          position: 'relative',
          height: '100%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          textAlign: 'center',
          textTransform: 'uppercase',
          color: style.color || '#FFFFFF',
          fontSize: 14,

          // Without this, Safari briefly fades the text color whilst ::active.
          WebkitFontSmoothing: 'subpixel-antialiased'
        }
      }
    };
  },

  render: function render() {
    var _props = this.props;
    var children = _props.children;
    var onClick = _props.onClick;

    var style = this.getStyle();

    return _react2.default.createElement(
      'div',
      { style: style.container, onClick: onClick },
      _react2.default.createElement(
        'div',
        { style: style.text.container },
        children
      )
    );
  },

  handleClick: function handleClick() {}
});

exports.default = Tab;