# Empeek Test Task: Items & Comments App

Items & Comments is a client side app powered by Empeek. The app allows user to add items and comment them, storing data
in browser's Local Storage.
Technologies used: React, ReactDOM, Redux, Redux Thunk, React Redux and Lodash as helper.

## Architecture

Redux store holds the App's state.
There're two High Order Components: Items Container and Comments Container. The state's structure looks like:
```javascript
{
    items: [
        {
            id: itemId,
            name: itemName,
            comments: [
                'comment text'
            ]
        }
    ],
    activeId: activeItemId
}
```

Data structure is hold in browser's Local Storage and looks like array of object oriented documents:
```javascript
[
    {
        id,
        name,
        comments
    }
]
```
Interaction with Local Storate API is provided by Redux Thunk middleware.

## Development Environment

In order to deploy project to GitHub Pages Create React App is used. ESLint is used as a linter and
Redux Dev Tools Extension is used for monitoring store.

## Running

Pull gh-pages branch and run npm install to install all dependencies.
To launch the app run npm start and go to http://localhost:3000/.
