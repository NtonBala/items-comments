# Empeek Test Task: Items & Comments App

Items & Comments is a client side app powered by Empeek. The app allows user to add items and comment them, storing data
in browser's Local Storage.
Technologies used: React, ReactDOM, Redux, Redux Thunk, React Redux and Lodash as helper.

## Architecture

Redux store holds the App's state.
There're three High Order Components: Items Container and Comments Container plus Header Container that enables reset of
active item link. To enable new item displaying as active ADD_ITEM action type is processed in activeId reducer as well.
The same with making first item display as active (if there's already any data structure in Local Storage) -
RECEIVE_ITEMS action type is used.
The state's structure looks like:
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

Pull gh-pages branch and run npm install to install all dependencies. For building the client app run npm run build.
To launch the app run npm start and go to http://localhost:3000/.

## Deployment

Run npm run deploy to deploy new version of the site or make changes and visit https://NtonBala.github.io./items-comments.
