# material-tabs

### Get started

```
npm install --save material-tabs
```

### How it works

## Components

The package provides 2 components: Tab and TabGroup, used together like so:

``` js
import {Tab, TabGroup} from 'material-tabs';

const NavigationTabs = React.createClass({
  render: function() {
    return (
      <TabGroup>
        <Tab>
          One
        </Tab>
        <Tab>
          Two
        </Tab>
      </TabGroup>
    );
  }
)};
```

The following aspects are determined as a result of the number of children ```TabGroup``` has:

- The position of the indicator (underline), highlighting which tab was clicked and
- The width of each ```Tab```.

Meaning each Tab will always be identical in width.

By default, the following styles are applied:

- ```TabGroup``` is 100% width of it's parent,
- The indicator and currently selected ```Tab``` are #FFFFFF (white),
- Unselected ```Tab```s are the same color, with an opacity of 0.7 applied,
- Background colors are default (inherit).

All other styles follow the (https://www.google.com/design/spec/components/tabs.html#tabs-specs)[spec], such as text styling, spacing, heights, and animation.

```TabGroup``` accepts the following style prop:

```
indicator: {
  color: '#FF5722'
}
```

### Todo
- Add support for (https://www.google.com/design/spec/components/tabs.html#tabs-specs)[icons with text]
- Add touch animations
