## CODING GUIDELINES

### General

- use react hooks
- components folder should contain only folders
- functions in components should use useCallback hook
- every folder should have index.js file which should export all files
- any component in pages folder should wrapped instead Layout component and have SEO component

```jsx
import React from 'react';
import { NavLink } from 'react-router-dom'

// assets
import Logo from './assets/logo.png'

// styles
import styles from './style.module.css'

// helpers
import { filter } from './helpers'

// hooks
import { useHttp } from './hooks';

// components
import Layout from 'components/Layout';

const Home = () => (
  <div>
    content
  </div>
);

export default Home;
```

- component structure should be

```jsx
... imports

const SomeComponent = () => {
  ... useState

  ... custom hooks

  ... useMemo

  ... useCallback(render functions)

  ... useEffects

  ... useCallbacks(handler functions)

  ...other code

  return
}

... exports
```

- do not duplicate styles, use typography @mixin files like this
```scss
@import 'typography.scss'

.menu-button {
  @include button-medium
}
```

- for css colors use colors.scss file. all colors for project should be adding in colors.scss
- use only modular css, create scss files like this (SomeComponent.module.scss)

```jsx
import classnames from 'classnames/bind';

import styles from './SomeComponent.module.scss';

const cx = classnames.bind(styles);

const SomeComponent = () => (
  <div className={cx('className')} />
);

export default SomeComponent;
```

- link to how use gatsby-config.js https://www.gatsbyjs.org/docs/gatsby-config/


### Folder structure

- src
    -components
        -common
            -component-name
                -index.js
                -style.module.scss
        -pageName
            -index.js
            -componentName
                -index.js
                -style.module.scss
        -Layout
            -Header
                -index.js
            -index.js
    -constants
        -index.js
    -hooks
        -index.js
    -images
        -icons
        -pageName
          -imagesForPageName
    -mocks
        -index.js
    -pages
        -pageName.js
    -styles
        -globalStyles.scss
    -utils
        -index.js

### EXTENSION For project

- install TODO Highlight extension in your vs code
- cope and paste code bellow in extension settings.json file
```json
{
  "todohighlight.isEnable": true,
  "todohighlight.isCaseSensitive": true,
  "todohighlight.keywords": [
    {
      "text": "INFO:",
      "color": "blue",
      "backgroundColor": "rgba(0,0,0,.2)",
    },
    {
      "text": "TODO:",
      "color": "yellow",
      "backgroundColor": "rgba(0,0,0,.2)",
    },
    {
      "text": "UGLY:",
      "color": "peru",
      "backgroundColor": "rgba(0,0,0,.2)",
    }
  ],
  "todohighlight.maxFilesForSearch": 5120,
  "todohighlight.toggleURI": false
}
```
- use INFO: if your comment is informative
- use TODO: if you want change or add something in that code
- use UGLY: if you think your code might be better, but you don’t know yet how P.S. it works!
