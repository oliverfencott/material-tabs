'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var STYLE = {
  CONTAINER: {
    height: '100%',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  }
};

var TabGroup = _react2.default.createClass({
  displayName: 'TabGroup',

  getInitialState: function getInitialState() {
    var defaultSelectedTab = this.props.defaultSelectedTab;


    return {
      selectedTab: defaultSelectedTab
    };
  },

  getDefaultProps: function getDefaultProps() {
    return {
      defaultSelectedTab: 0,
      onChangeTab: function onChangeTab() {},
      style: {
        indicator: {}
      },
      children: []
    };
  },

  render: function render() {
    var selectedTab = this.state.selectedTab;
    var style = this.props.style;

    var color = style.indicator ? style.indicator.color : '#FFFFFF';

    return _react2.default.createElement(
      'div',
      { style: STYLE.CONTAINER },
      this.renderChildren(),
      _react2.default.createElement(
        'div',
        { style: this.getStyle().underline },
        _react2.default.createElement(_TabIndicator2.default, { activePosition: selectedTab, style: { color: color } })
      )
    );
  },

  renderChildren: function renderChildren() {
    var _this = this;

    var selectedTab = this.state.selectedTab;
    var children = this.props.children;

    var style = this.getStyle();

    return children.map(function (child, index) {
      var handleClick = function handleClick() {
        return _this.handleClick(index);
      };
      return _react2.default.createElement(
        'div',
        { style: style.tab, key: index, onClick: handleClick },
        _react2.default.createElement(
          'div',
          { style: { height: '100%', opacity: selectedTab === index ? 1 : 0.7 } },
          child
        )
      );
    });
  },

  getStyle: function getStyle() {
    var children = this.props.children;

    var width = 100 / children.length + '%';

    return {
      tab: {
        display: 'inline-block',
        width: width,
        height: '100%'
      },
      underline: {
        position: 'absolute',
        bottom: 0,
        width: width
      }
    };
  },

  handleClick: function handleClick(index) {
    var _this2 = this;

    this.setState({
      selectedTab: index
    }, function () {
      return _this2.props.onChangeTab(index);
    });
  }
});

exports.default = TabGroup;