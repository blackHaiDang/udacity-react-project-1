
# MyRead

MyRead is a webapp to keep track of the books you read, want to read, or are currently reading. The books information is looked up from a public database.
I built this project as part of the [React Udacity NanoDegree] (https://www.udacity.com/course/react-nanodegree--nd019) [MOOC](https://en.wikipedia.org/wiki/Massive_open_online_course), of which I joined the first cohort starting july 2017.

## Try the app

### Online
`www.myread.xiaoju.io`

### Locally
1. Pre-requisites: git, node.js and npm are installed on you local machine.
2. clone the files to a local folder:

  `git clone https://github.com/xiaoju/react_nd-01-myreads.git`

3. install the app:

  `cd react_nd-01-myreads`

  `npm Install`

4. run the app:

  `npm start`

5. Your internet browser will open up the app automatically, a local node_js server serving the app at http://localhost:3000/ (possibly with another port number). Backend server is hosted by Udacity.

## App architecture

### Language and framework
This project is mostly written in JavaScript, leveraging the [React](https://facebook.github.io/react/) framework.
It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

### Files
```
+--public/    
 |-- index.html
 |-- favicon.ico - React Icon
+-- src/
 +-- components/ - React components
  |-- SearchBar.js - render the searchBar
  |-- EachShelf.js - render the shelves: read, currentlyReading, wantToRead and searchResults
  |-- BookComponent.js - render the book thumbnails: image, title, author, etc
 +-- icons/
  |-- add.svg
  |-- arrow-back.svg
  |-- arrow-drop-down.svg
 |-- App.js - The root.
 |-- App.css - Styles.
 |-- App.test.js - Used for testing. Provided with Create React App.
  +-- utils/ - utility files used by several React components
   |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
   |-- Utils.js - A simple layer on top of BooksAPI.js
 |-- index.js - Used for DOM rendering only.
 |-- index.css - Global styles.
 |-- todo.md - untracked list of issues (submit new bugs on 'GitHub Issues' only)
|-- .gitignore
|-- README.MD - This README file.
|-- package.json - npm package manager file.
```

### Backend Server API
- To simplify the development process, Udacity provided a backend server to develop against.
- The user is authenticated on the backend server by a token. This token is initialized the first time the app is run on the frontend server (located on your local machine or on `www.myread.xiaoju.io`), and stored in local.storage.
- [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

#### `getAll()`
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves.

#### `update(book, shelf)`
- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

#### `search(query, maxResults)`
- query: `<String>`
- maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- These books do not know which shelf they are on. They are raw results only. We had to make sure that books have the correct state while on the search page.

#### Backend limitations
- The backend API limits the number of search results to a maximum of 20.
- The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, see below. This list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

#### Allowed search terms
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'History', 'History', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Program Javascript', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'.

## Contributing
Contributions are welcome:
- fork me!
- submit bugs and new feature requests through [GitHub issues](https://github.com/xiaoju/react_nd-01-myreads/issues).
- send comments to me@xiaoju.io
- take the [`React Udacity NanoDegree`] (https://www.udacity.com/course/react-nanodegree--nd019) and create your own version of the project based on [Udacity's repository] (https://github.com/udacity/reactnd-project-myreads-starter).

## License
See https://www.udacity.com/legal, section 'License to Educational Content'.
