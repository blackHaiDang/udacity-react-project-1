# MyReads

MyReads is a webapp to organize books into categories: 'read', 'want to read' and 'currently reading'. Books are looked up from in a public database through a 'search' function.

I built this project as part of the [React Udacity NanoDegree](https://www.udacity.com/course/react-nanodegree--nd019) [_MOOC_](https://en.wikipedia.org/wiki/Massive_open_online_course), of which I joined the first cohort starting july 2017. This was the first project out of three in the program.
Before starting this React Nanodegree program, I had already completed most classes of the Udacity Front End and Backend Nanodegrees as a free user.
Information about my other projects is available at [xiaoju.io](http://www.xioaju.io/portfolio).

The code is based on a [Create React App](https://github.com/facebookincubator/create-react-app) template (available [here](https://github.com/udacity/reactnd-project-myreads-starter)) supplied by Udacity and providing CSS and basic HTML structure. The provided files included a backend API helper for communication with the backend Server: request books and store books information for the app user.
[ReactRouter](https://reacttraining.com/react-router/) is used to manage app navigation, page history and permalinks.

## Try the app

### Online

`http://myreads.xiaoju.io`

Please be patient with loading time: as the app is hosted on a [free tier Heroku account](https://www.heroku.com/pricing), the server only starts when a user comes up.

### Locally

1. Pre-requisites: git, node.js and npm (or yarn) are installed on you local machine.
2. clone the files to a local folder:

`git clone https://github.com/xiaoju/myreads.git`

3. install the app:

`cd myreads`

`npm Install` (or `yarn start`)

4. run the app:

`npm start` (or `yarn start`)

5. Your internet browser will open up the app automatically, a local node_js server serving the app at http://localhost:3000/ (possibly with another port number). The backend server is hosted by Udacity, see below for details.

### Deploy on Heroku

* As per [Heroku instructions](https://devcenter.heroku.com/articles/git#creating-a-heroku-remote), create a new app using Heroku dashboard, selecting 'Git deployment' option.
* setup the Heroku remote:

  `heroku git:remote -a name-of-the-app`

* set the create-react-app buildpack:

  `heroku buildpacks:set https://github.com/mars/create-react-app-buildpack.git`

* push to Heroku remote:

  `git push heroku master`

* redirect the app from herokuapp.com domain to a personal domain, following [namecheap instructions](https://www.namecheap.com/support/knowledgebase/article.aspx/9737/2208/pointing-a-domain-to-the-heroku-app).

## Contributing

* As this project passed Udacity review with release 0.1.0, I'm not working on it anymore. However, feel free to contact me per email to `info@xiaoju.io` regarding any comments or suggestions.
* If you would like to work deeper on this app, I suggest you take the excellent [`React Udacity NanoDegree`](https://www.udacity.com/course/react-nanodegree--nd019) and fork your own version of the project based on [Udacity's repository](https://github.com/udacity/reactnd-project-myreads-starter).
* Releases are named according to [_semantic versioning_](http://semver.org/) guidelines.
* Style guide: https://udacity.github.io/git-styleguide/

## App architecture

### Language and framework

This project is written in JavaScript, leveraging the [React](https://facebook.github.io/react/) framework.
It was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). Find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

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

* The backend server is hosted by Udacity:
  * address: `https://reactnd-books-api.udacity.com`
  * source: not available.
  * API settings in the frontend source: `/src/utils.js/BooksAPI.js`
* The frontend server runs on `myreads.xiaoju.io` or on your local machine, depending which path you chose for <i>trying the app</i>.
* The user is authenticated on the backend server by a token. This token is initialized the first time the app is run on the frontend server, and stored inside your browser in `local.storage`. This authentication token can be reset with following command run from the console: `localStorage.removeItem('token')`
* The _Postman_ extension of _Chrome_ browser can be used to test the responses of the backend server API. For example, here the _Postman_ parameters for an _update_ request:
  ```
    - API address: https://reactnd-books-api.udacity.com/books/1wy49i-gQjIC
    - request method: PUT
    - body type: raw
    - body content: {"shelf" : "wantToRead"}
    - headers:
      - key: Accept, value: application/json
      - key: Authorization, value: iehjwkfsdlhjkfsdhkj
      - key: Content-Type, value: application/json
  ```
* The backend server responses can also be viewed from the console with basic XHR requests, for example:
  * _GET request:_
  ```
  const myRequest = new XMLHttpRequest();
  myRequest.onload = function () {
    if (myRequest.readyState === myRequest.DONE) {
      if (myRequest.status === 200) {
        console.log(myRequest.response);
      }
    }
  };
  myRequest.open('GET', 'https://reactnd-books-api.udacity.com/books/sJf1vQAACAAJ');
  myRequest.setRequestHeader('Authorization', 'ikjugfrfyugjhbvjhbsdkjchmn');
  myRequest.setRequestHeader('Accept', 'application/json');
  myRequest.send();
  ```
  * _PUT request:_
  ```
  const myRequest = new XMLHttpRequest();
  myRequest.onload = function () {
    if (myRequest.readyState === myRequest.DONE) {
      if (myRequest.status === 200) {
        console.log(myRequest.response);
      }
      else if (myRequest.status === 403) {
        console.log('This is a 403 error, maybe "body" was empty?');
      }
    }
  };
  myRequest.onerror = function () {
    console.log("** An error occurred at network level");
  };
  myRequest.onloadend = function () {
    console.log('STATUS: ' + myRequest.status + ', readySTATE: ' + myRequest.readyState);
  };
  var method = 'PUT';
  var url = 'https://reactnd-books-api.udacity.com/books/';
  var myBook = '1wy49i-gQjIC';
  var token = 'ikjugfrfyugjhbvjhbsdkjchmn';
  /*var body = '{"shelf":"wantToRead"}';*/
  var body = JSON.stringify({ shelf: 'wantToRead' });
  myRequest.open(method, url + myBook);
  myRequest.setRequestHeader('Authorization', token);
  myRequest.setRequestHeader('Accept', 'application/json');
  myRequest.setRequestHeader('Content-Type', 'application/json');
  myRequest.send(body);
  ```
* `/src/utils/BooksAPI.js` contains helpers used to run necessary operations on the backend.
* The following endpoints are available:

  * `GET /status`
  * `GET /books`
  * `GET /books/:id`
  * `PUT /books/:id { shelf }`
  * `POST /search { query, maxResults }`

  #### `get(book)`

  * book: `<Object>` containing at minimum an `id` attribute.
  * Returns a Promise which resolves to a JSON object containing one book object.
  * typical format of the JSON response data:
    ```
    {
        "book": {
            "title": "Learning Web Development with React and Bootstrap",
            "authors": [
                "Harmeet Singh",
                "Mehul Bhatt"
            ],
            "publishedDate": "2016-12-30",
            "description": "Build real-time responsive web apps using React and BootstrapAbout This Book* Showcase the power of React-Bootstrap through real-world examples* Explore the benefits of integrating React with various frameworks and APIs* See the benefits of using the latest frameworks to make your web development experience enchantingWho This Book Is ForThis book is for anybody who is interested in modern web development and has intermediate knowledge of HTML, CSS, and JavaScript. Basic knowledge of any JavaScript MVC framework would also be helpful.What You Will Learn* See how to integrate React-Bootstrap with React* Explore the Redux architecture and understand its benefits* Build a custom responsive theme* Easily interact with DOM on your web browser* Appreciate the advantages of using JSX* Get acquainted with the various routing methods in React* Integrate external APIs into ReactIn DetailReact-Bootstrap is one of the most popular front-end frameworks, and integrating it with React allows web developers to write much cleaner code. This book will help you gain a thorough understanding of the React-Bootstrap framework and show you how to build impressive web apps.In this book, you will get an overview of the features of React-Bootstrap and ReactJS, along with the integration of ReactJS components with ReactJS. You will understand the benefits of using JSX and the Redux architecture. The server-side rendering of React will also be shown. All the concepts are explained by developing real-world examples.By the end of this book, you will be equipped to create responsive web applications using React-Bootstrap with ReactJS, and will have an insight into the best practices.",
            "industryIdentifiers": [
                {
                    "type": "ISBN_10",
                    "identifier": "1786462494"
                },
                {
                    "type": "ISBN_13",
                    "identifier": "9781786462497"
                }
            ],
            "readingModes": {
                "text": false,
                "image": false
            },
            "pageCount": 278,
            "printType": "BOOK",
            "maturityRating": "NOT_MATURE",
            "allowAnonLogging": false,
            "contentVersion": "preview-1.0.0",
            "panelizationSummary": {
                "containsEpubBubbles": false,
                "containsImageBubbles": false
            },
            "imageLinks": {
                "smallThumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
                "thumbnail": "http://books.google.com/books/content?id=sJf1vQAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            },
            "language": "en",
            "previewLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&cd=6&source=gbs_api",
            "infoLink": "http://books.google.com/books?id=sJf1vQAACAAJ&dq=redux+react&hl=&source=gbs_api",
            "canonicalVolumeLink": "https://books.google.com/books/about/Learning_Web_Development_with_React_and.html?hl=&id=sJf1vQAACAAJ",
            "id": "sJf1vQAACAAJ",
            "shelf": "currentlyReading"
        }
    }
    ```

  #### `getAll()`

  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * This collection represents the books currently in the bookshelves.
  * typical format of the JSON response data:
    ```
    {
        "books": [
        {
        "title": "...",
        "authors": [
            "...",
            "..."
        ],
        "publishedDate": "...",
        "description": "..." ,
        "id": "1wy49i-gQjIC",
        "shelf": "read"
        "...": "..."
        {book2},
        {book3}
        ]
    }
    ```

  #### `update(book, shelf)`

  * book: `<Object>` containing at minimum an `id` attribute.
  * shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"].
  * Returns a Promise which resolves to a JSON object containing the response data of the POST request.
  * typical format of the JSON response data:
    ```
    {
        "currentlyReading": [
            "nggnmAEACAAJ",
            "sJf1vQAACAAJ"
        ],
        "wantToRead": [
            "evuwdDLfAyYC",
            "74XNzF_al3MC"
        ],
        "read": [
            "jAUODAAAQBAJ",
            "IOejDAAAQBAJ",
            "1wy49i-gQjIC"
        ]
    }
    ```

  #### `search(query, maxResults)`

  * query: `<String>`
  * maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher. Also, it seems that the backend doesn't take care of the `maxResults` parameter.
  * Returns a Promise which resolves to a JSON object containing a collection of book objects.
  * These books do not know which shelf they are on. They are raw results only. This means that for many books, the `shelf` property has a wrong value. Note that the MyRead app shows correctly to which shelf each book of the search result belongs.
  * typical format of the JSON response data: same as `getAll()`, see above.
  * typical response data if no match was found:
    ```
    {
        "books": {
            "error": "empty query",
            "items": []
        }
    }
    ```
  * Allowed search results: the backend API uses a fixed set of cached search results and is limited to a particular set of search terms, see below. This list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results:
    ```
    Android, Art, Artificial Intelligence, Astronomy, Austen, Baseball,
    Basketball, Bhagat, Biography, Brief, Business, Camus, Cervantes, Christie,
    Classics, Comics, Cook, Cricket, Cycling, Desai, Design, Development,
    Digital Marketing, Drama, Drawing, Dumas, Education, Everything, Fantasy,
    Film, Finance, First, Fitness, Football, Future, Games, Gandhi, History,
    Homer, Horror, Hugo, Ibsen, Journey, Kafka, King, Lahiri, Larsson,
    Learn, Literary Fiction, Make, Manage, Marquez, Money, Mystery, Negotiate,
    Painting, Philosophy, Photography, Poetry, Production, Program Javascript,
    Programming, React, Redux, River, Robotics, Rowling, Satire, Science Fiction,
    Shakespeare, Singh, Swimming, Tale, Thrun, Time, Tolstoy, Travel, Ultimate,
    Virtual Reality, Web Development, iOS
    ```

## License

See [Udacity legal terms](https://www.udacity.com/legal), _License to Educational Content_ section.
