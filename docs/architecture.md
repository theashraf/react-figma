# Architecture

## How rendering works

Renderer architecture displayed on the scheme:

![](./architecture.png)

[Source](https://www.figma.com/file/URczwfB64Pn6SlFICHKh6y/React-Figma?node-id=0%3A1)

## File structure

* **/src**
  - **/components** - concrete components like Frame, Rectangle etc. that exported as a part of package API
  - **/helpers** - utility functions
  - **/hooks** - React hooks for components
  - **/mixins** - common functions for renderers that set some attributes to Figma nodes. 
  Part of it is related to mixin interface inside Figma API. 
  As an example `baseNodeMixin` related to `BaseNodeMixin`.
  - **/realm-adopted** - libraries adopted for working inside Figma plugin realm.
  - **/renderers** - functions that can create/update specific Figma nodes
  - **/styleTransformers** - functions for transforming set of component style
  - **/workers** - functions that handle message from main thread and send the result back
  - **index** - root of package export
  - **renderer** - core of renderer based on react-reconciler.
  - **types** - common props of components
  - **uiWorker** - workers entry point
  
