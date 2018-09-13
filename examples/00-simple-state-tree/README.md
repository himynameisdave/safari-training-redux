## Simple State Tree

This directory contains an example of what a state tree might look like for our Kanban app.

```js
const store = {
    columns: [
        {
            id: 1,
            title: 'To do',
            cards: [
                {
                    id: 1,
                    text: 'Add more columns!',
                }
            ],
        },
        {
            id: 2,
            title: 'Done',
            cards: [
                {
                    id: 2,
                    text: 'Create a kanban board',
                }
            ],
        },
    ]
};

export default store;
```

Note that there is no magic here: the entire application can simply be expressed as a single state tree.

The simpler you are able to make this, the easier it will be to manage your application in the long run. The goal is to determine the minimal representation of your application as an object.
