'use strict';

import React, { Component, PropTypes } from 'react';

import { emptyFunc } from './utils';
import TabIndicator from './TabIndicator';

const Style = {
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
    bottom: 0,
  },

  indicator: {
    color: '#FFFFFF'
  },

  underline: {
    position: 'absolute',
    bottom: 0
  }
};

class TabGroup extends Component {
  constructor(...args) {
    super(...args);

    const { defaultSelectedTab } = this.props;

    this.state = {
      selectedTab: defaultSelectedTab
    };

    this._handleClick = this._handleClick.bind(this);
  }

  _renderChildren() {
    const { selectedTab } = this.state;
    const { children } = this.props;
    const style = this._getStyle();

    return children.map((child, index) => {
      const handleClick = () => this._handleClick(index);
      return (
        <div
          style={style.tab}
          key={index}
          onClick={handleClick}>
          <div
            style={{
              height: '100%',
              opacity: selectedTab === index ? 1 : 0.7
            }}>
            {child}
          </div>
        </div>
      );
    });
  }

  _getStyle() {
    const { children } = this.props;
    const width = `${100 / children.length}%`;

    return {
      tab: { ...Style.tab, width },
      underline: { ...Style.underline, width }
    };
  }

  _handleClick(selectedTab) {
    const { onChangeTab } = this.props;

    this.setState({ selectedTab }, () => onChangeTab(selectedTab));
  }

  render() {
    const { selectedTab } = this.state;
    const { style } = this.props;
    const { underline } = this._getStyle();

    return (
      <div style={Style.container}>
        {this._renderChildren()}

        <div style={underline}>
          <TabIndicator
            activePosition={selectedTab}
            style={{ ...Style.indicator, ...style.indicator }}
          />
        </div>
      </div>
    );
  }
}

TabGroup.propTypes = {
  children: PropTypes.array.isRequired,
  style: PropTypes.object
};

TabGroup.defaultProps = {
  defaultSelectedTab: 0,
  onChangeTab: emptyFunc,
  style: {
    indicator: {}
  },
  children: []
};

export default TabGroup;
