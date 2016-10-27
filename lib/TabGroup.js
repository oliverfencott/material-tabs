'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _utils = require('./utils');

var _TabIndicator = require('./TabIndicator');

var _TabIndicator2 = _interopRequireDefault(_TabIndicator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Style = _defineProperty({
  container: {
    height: '100%',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  },

  tab: {
    display: 'inline-block',
    height: '100%'
  },

  underline: {
    position: 'absolute',
    bottom: 0
  },

  indicator: {
    color: '#FFFFFF'
  }

}, 'underline', {
  position: 'absolute',
  bottom: 0
});

var TabGroup = function (_Component) {
  _inherits(TabGroup, _Component);

  function TabGroup() {
    var _ref;

    _classCallCheck(this, TabGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var _this = _possibleConstructorReturn(this, (_ref = TabGroup.__proto__ || Object.getPrototypeOf(TabGroup)).call.apply(_ref, [this].concat(args)));

    var defaultSelectedTab = _this.props.defaultSelectedTab;


    _this.state = {
      selectedTab: defaultSelectedTab
    };

    _this._handleClick = _this._handleClick.bind(_this);
    return _this;
  }

  _createClass(TabGroup, [{
    key: '_renderChildren',
    value: function _renderChildren() {
      var _this2 = this;

      var selectedTab = this.state.selectedTab;
      var children = this.props.children;

      var style = this._getStyle();

      return children.map(function (child, index) {
        var handleClick = function handleClick() {
          return _this2._handleClick(index);
        };
        return _react2.default.createElement(
          'div',
          {
            style: style.tab,
            key: index,
            onClick: handleClick },
          _react2.default.createElement(
            'div',
            {
              style: {
                height: '100%',
                opacity: selectedTab === index ? 1 : 0.7
              } },
            child
          )
        );
      });
    }
  }, {
    key: '_getStyle',
    value: function _getStyle() {
      var children = this.props.children;

      var width = 100 / children.length + '%';

      return {
        tab: _extends({}, Style.tab, { width: width }),
        underline: _extends({}, Style.underline, { width: width })
      };
    }
  }, {
    key: '_handleClick',
    value: function _handleClick(selectedTab) {
      var onChangeTab = this.props.onChangeTab;


      this.setState({ selectedTab: selectedTab }, function () {
        return onChangeTab(selectedTab);
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var selectedTab = this.state.selectedTab;
      var style = this.props.style;

      var _getStyle2 = this._getStyle(),
          underline = _getStyle2.underline;

      return _react2.default.createElement(
        'div',
        { style: Style.container },
        this._renderChildren(),
        _react2.default.createElement(
          'div',
          { style: underline },
          _react2.default.createElement(_TabIndicator2.default, {
            activePosition: selectedTab,
            style: _extends({}, Style.indicator, style.indicator)
          })
        )
      );
    }
  }]);

  return TabGroup;
}(_react.Component);

TabGroup.propTypes = {
  children: _react.PropTypes.array.isRequired,
  style: _react.PropTypes.object
};

TabGroup.defaultProps = {
  defaultSelectedTab: 0,
  onChangeTab: _utils.emptyFunc,
  style: {
    indicator: {}
  },
  children: []
};

exports.default = TabGroup;