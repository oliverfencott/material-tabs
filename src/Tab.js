'use strict';

import React from 'react';

const Tab = React.createClass({
  getDefaultProps: function() {
    return {
      style: {},
      onClick: () => {}
    };
  },

  getStyle: function() {
    const {style} = this.props;

    return {
      container: {
        position: 'relative',
        height: 48,
        padding: '0 12px',
        cursor: 'pointer'
      },
      text: {
        container: {
          position: 'relative',
          top: '50%',
          transform: 'translateY(-60%)',
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

  render: function() {
    const {children, onClick} = this.props;
    const style = this.getStyle();

    return (
      <div style={style.container} onClick={onClick}>
        <div style={style.text.container}>
          {children}
        </div>
      </div>
    );
  },

  handleClick: function() {
  }
});

export default Tab;
