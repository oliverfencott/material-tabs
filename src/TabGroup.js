'use strict';

import React from 'react/addons';

import TabIndicator from './TabIndicator';

const STYLE = {
  CONTAINER: {
    height: '100%',
    position: 'relative',
    userSelect: 'none',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none'
  }
};

const TabGroup = React.createClass({
  getInitialState: function() {
    const {defaultSelectedTab} = this.props;

    return {
      selectedTab: defaultSelectedTab
    };
  },

  getDefaultProps: function() {
    return {
      defaultSelectedTab: 0,
      onChangeTab: () => {},
      style: {
        indicator: {}
      }
    };
  },

  render: function() {
    const {selectedTab} = this.state;
    const {style} = this.props;
    const color = style.indicator ? style.indicator.color : '#FFFFFF';

    return (
      <div style={STYLE.CONTAINER}>
        {this.renderChildren()}
        <div style={this.getStyle().underline}>
          <TabIndicator activePosition={selectedTab} style={{color}} />
        </div>
      </div>
    );
  },

  renderChildren: function() {
    const {selectedTab} = this.state;
    const {children} = this.props;
    const style = this.getStyle();

    return children.map((child, index) => {
      const handleClick = () => this.handleClick(index);
      return (
        <div style={style.tab} key={index} onClick={handleClick}>
          <div style={{height: '100%', opacity: selectedTab === index ? 1 : 0.7}}>
            {child}
          </div>
        </div>
      );
    });
  },

  getStyle: function() {
    const {children} = this.props;
    const width = `${100 / children.length}%`;

    return {
      tab: {
        display: 'inline-block',
        width,
        height: '100%'
      },
      underline: {
        position: 'absolute',
        bottom: 0,
        width
      }
    };
  },

  handleClick: function(index) {
    this.setState({
      selectedTab: index
    }, () => this.props.onChangeTab(index));
  }
});

export default TabGroup;
