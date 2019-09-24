# React Stencil
This is a ReactJS component that generates a base &lt;div&gt; for your application and renders a background modeled after the sky.  The fun part is that this component has basic logic to detect the client's time of day and change the sky to reflect dawn, day, dusk, or night time.  Stars for mystery.

# Installation
Simply install as a dependency in your React application
1. Create a new React application
2. Navigate into your directory
3. Run the following command:
```console
npm install react-sky-bg
```

# Usage
Import this component into the file that controls your layout.  You can then place this component as the wrapper around the rest of your application, and it will render a background div with z-index: -1.  The stars are rendered as an absolutely positioned canvas element, so they will only appear in the initial viewport that is rendered.

Here's a simple example:
```javascript
import React from "react";
import SkyBG as Background from "./skybg";
import Header from "./header";
import Footer from "./footer";

export default ({ children }) => (
  <Background>
    <Header />
    {/* This is the main pane/content section */}
    <div>{children}</div>
    <Footer />
  </Background>
);
```

As a note, for the stars to not interfere or overlap other components, they will need to use a CSS position that puts them in the same stacking context.  You can read more about [stacking context here](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context).