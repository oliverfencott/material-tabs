'use strict';

import React from 'react';

const TRANSITION = 'all 250ms cubic-bezier(0.23, 1, 0.32, 1) 0ms';

const Style = {
  width: '100%',
  height: 2,
  backgroundColor: '#FFFFFF',
  transition: TRANSITION,
  WebkitTransition: TRANSITION
};

const TabIndicator = ({ activePosition, style }) => {
  const transform = `translateX(${activePosition}00%)`;

  return (
    <div
      style={{
        ...Style,
        ...style,
        WebkitTransform: transform,
        transform
      }}
    />
  );
};

TabIndicator.defaultProps = {
  style: {}
};

export default TabIndicator;
