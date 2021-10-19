# React/Sass/Redux Boilerplate

Boilerplate and guide for a React/Sass/Redux build.

## Getting Started

To get started, first install all the necessary dependencies.
```
> npm install
```
npm install axios --save
npm uninstall node-sass && npm install node-sass
npm install -g json-server
json-server --watch db.json --port 3000
Run an initial webpack build
```
> webpack
```

Start the development server (changes will now update live in browser)
```
> npm run start
```

To view your project, go to: [http://localhost:3000/](http://localhost:3000/)




Following are the terms you will come across very often while working with React.  If you understand all of them and their purposes, you’ll be at a very good spot after reading this tutorial.

JSX — Allows us to write HTML like syntax which gets transformed to lightweight JavaScript objects.
Virtual DOM — A JavaScript representation of the actual DOM.
createClass — The way in which you create a new component.
render (method) — What we would like our HTML Template to look like.
render — Renders a React component to a DOM node.
state — The internal data store (object) of a component.
getInitialState — The way in which you set the initial state of a component.
setState — A helper method for altering the state of a component.
props — The data which is passed to the child component from the parent component.
propTypes — Allows you to control the presence, or types of certain props passed to the child component.
getDefaultProps — Allows you to set default props for your component.
Component LifeCycle
componentWillMount — Fired before the component will mount
componentDidMount — Fired after the component mounted
componentWillReceiveProps — Fired whenever there is a change to props
componentWillUnmount — Fired before the component will unmount
And more….
Events
onClick
onSubmit
onChange
And more….
The above information might be overwhelming at first but remember that at this point you should understand, on a very high level, how React works.
