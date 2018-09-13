## Kanban React

This directory contains the Kanban app built using React, without the aid of Redux.

### Running locally

You can run the app locally by getting into the directory, install dependencies, then run the app:

```
cd ./02-kanban-react
npm install
npm run start
```

Now visit [`localhost:3000`](http://localhost:3000) to view the app (it should automatically open in your default browser).

### Structure

Note that all of the state for this app is stored at the top-level `<App />` component. This is less than ideal, because every time the state changes, it will force a re-render of the child component tree.
