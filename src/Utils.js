import * as BooksAPI from './BooksAPI'

export const doSearch = (query) =>
  BooksAPI.search(query, 20)
    .then((res) => res.map((book) => (book.id)))       // only keep the book IDs
    .then((res) => [...new Set(res)])                  // remove duplicates
    .then((myArray) => ({"searchResults": myArray}))   // format as object to use in setState
