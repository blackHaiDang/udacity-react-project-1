import * as BooksAPI from './BooksAPI'
// TODO import only what's really required

export const doSearch = (query) =>
  BooksAPI.search(query, 20)
    .then((res) => res.map((book) => (book.id)))       // extract the book IDs
    .then((res) => [...new Set(res)])                  // remove duplicates
    .then((myArray) => ({"searchResults": myArray}))   // convert array into object for use in setState
    .catch(() => [])
