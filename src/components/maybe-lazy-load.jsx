/*@flow*/

import React from "react";
import LazyLoad from "react-lazy-load";

/**
A component for configurable lazy loading.
@examples
```jsx
<MaybeLazyLoad lazy={true}>
  <Footer />
</MaybeLazyLoad>
```
@component MaybeLazyLoad
@import {MaybeLazyLoad}
@playground
MaybeLazyLoad
```
<MaybeLazyLoad lazy={true}>
  <Footer />
</MaybeLazyLoad>
```
@returns {ReactElement} The rendered component
*/

const MaybeLazyLoad = ({children, lazy, ...props}) => {
  return lazy ? (
    <LazyLoad {...props}>
      {React.Children.only(children)}
    </LazyLoad>
  ) : React.Children.only(children);
};

MaybeLazyLoad.propTypes = {
  lazy: React.PropTypes.bool
};

MaybeLazyLoad.defaultProps = {
  lazy: false
};

export default MaybeLazyLoad;