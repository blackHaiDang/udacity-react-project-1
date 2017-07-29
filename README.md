
This is the first student project for the [`React Udacity NanoDegree`] (https://www.udacity.com/course/react-nanodegree--nd019)

## Files
```
+--public/    
 |-- index.html
 |-- favicon.ico - React Icon
+-- src/
 +-- icons/
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - The root.
 |-- App.css - Styles.
 |-- App.test.js - Used for testing. Provided with Create React App.
 |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
 |-- index.js - Used for DOM rendering only.
 |-- index.css - Global styles.
|-- .gitignore
|-- CONTRIBUTING.MD
|-- README.MD - This README file.
|-- SEARCH_TERMS.md - The whitelisted short collection of available search terms.
|-- package.json - npm package manager file.
```

## Backend Server

To simplify the development process, Udacity provided a backend server to develop against. [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

### `getAll()`
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves.

### `update(book, shelf)`
* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`
* query: `<String>`
* maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* These books do not know which shelf they are on. They are raw results only. We had to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## create-react-app
This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

## Contributing
For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
