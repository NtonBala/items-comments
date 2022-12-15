# Items & Comments

Items & Comments is Empeek test task. The app allows user to add items and comment them, storing data in browser's
Local Storage.

Technologies used: Loacal Storage API, React, ReactDOM, React Router, Redux, Redux Thunk, React Redux and Lodash with QS as helpers.

## Architecture

App is written with `class` components. App component is wrapped by React-Router. Page data fetching is provided by `prepareData` function that gathers route's data. Business logic is held in HOCs (`ItemsContainer` & `CommentsContainer`). 

Redux store holds the App's state. The state's structure looks like:
```
{
    items: [
        {
            id: number,
            name: string,
            comments: number
        }
    ],
    activeItem: {
        id,
        name,
        comments: ['string']
    }
}
```

Data structure is held in browser's Local Storage and looks like array of object oriented documents:
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

There's only Development Environment available up to now. It is configured using Webpack, Babel and React Hot Loader.
Webpack Dev Server is used as development server. There're Redux Dev Tools added to control app's state in development
(is in invisible mode by default, use Ctrl+H to open Dev Tools monitor). ESLint is used as a linter.

## Running

Pull master branch and run npm install to install all dependencies.
To launch the app run npm start and go to http://localhost:3000.
