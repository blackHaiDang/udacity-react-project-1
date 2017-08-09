import * as BooksAPI from '../utils/BooksAPI'
// TODO import only what's really required

export const doSearch = (query) =>
  BooksAPI.search(query, 20)
    .then((res) => res.map((book) => (book.id)))       // extract the book IDs
    .then((res) => [...new Set(res)])                  // remove duplicates
    // .then((res) => res.map((book) => (correctShelf(res))))
    // correct the shelf property based on content of our personal shelves
    .then((myArray) => ({"searchResults": myArray}))   // convert array into object for use in setState
    .catch((e) => {
      console.log(e);
      return []})

// const correctShelf = (book) => ( (state.read.includes(book.id) && book.shelf='read') ||
//                             (state.wantToRead.includes(book.id) && book.shelf='wantToRead') ||
//                             (state.currentlyReading.includes(book.id) && book.shelf='currentlyReading') ||
//                             book.shelf='none'
//                           )

// export const doSearch = (query) => {
//   // console.log("do search!");
//   debugger;
//   BooksAPI.search(query, 20)
//     .then((res) => res.map((book) => (book.id)))       // extract the book IDs
//     .then((res) => [...new Set(res)])                  // remove duplicates
//     // .then((res) => res.map((book) => (correctShelf(res))))
//     // correct the shelf property based on content of our personal shelves
//     .then((myArray) => ({"searchResults": myArray}))   // convert array into object for use in setState
//     .catch((e) => {
//       console.log(e);
//       return []})
// }
