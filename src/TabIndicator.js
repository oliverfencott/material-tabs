'use strict';

import React from 'react';

const Transition = 'all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';

const TabIndicator = React.createClass({
  getDefaultProps: function() {
    return {
      style: {}
    };
  },

  render: function() {
    const {activePosition, style} = this.props;
    const transform = `translateX(${activePosition}00%)`;

    return (
      <div style={
          {
            width: '100%',
            height: 2,
            backgroundColor: style.color || '#FFFFFF',
            transform,
            WebkitTransform: transform,
            transition: Transition,
            WebkitTransition: Transition
          }
        }
      />
    );
  }
});

export default TabIndicator;
