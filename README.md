# Empeek Test Task: Items & Comments App

Items & Comments is a client side app powered by Empeek. The app allows user to add items and comment them, storing data in browser's
Local Storage.
Technologies used: React, ReactDOM, React Router, Redux, Redux Thunk, React Redux and Lodash with QS as helpers.

## Architecture

App component is wrapped by Router which routes are described as plain routes. Redux store holds the App's state.
Data fetching is provided by historyCallback function in App.js, that with the help of helpers/routes/index.js
prepareDate function gathers all prepareData functions and calls them if needed when the URL is changed.
There're two High Order Components: Items Container and Comments Container. The state's structure looks like:
{
    items: [
        {
            id: itemId,
            name: itemName,
            comments: commentsAmount
        }
    ],
    activeItem: {
        id,
        name,
        comments: [
            'comment text'
        ]
    }
}

Data structure is hold in browser's Local Storage and looks like array of object oriented documents:
[
    {
        id,
        name,
        comments
    }
]
Interaction with Local Storate API is provided by Redux Thunk middleware.

## Development Environment

There's only Development Environment available up to now. It is configured using Webpack, Babel and React Hot Loader.
Webpack Dev Server is used as development server. There're Redux Dev Tools added to control app's state in development
(is in invisible mode by default, use Ctrl+H to open Dev Tools monitor). ESLint is used as a linter.

## Running

Pull master branch and run npm install to install all dependencies.
To launch the app run npm start and go to http://localhost:3000/.

## Website

https://items-comments.herokuapp.com/
