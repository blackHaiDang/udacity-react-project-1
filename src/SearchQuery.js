import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import EachShelf from './EachShelf'

class SearchQuery extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchResults: []
    }
  }

  clearQuery = () => {
    this.setState({ query: ''})
  }

  updateQuery = (query) => {
    this.setState({ query: query.trim() }, this.doSearch())
  }

  // componentDidMount() {
  //   this.doSearch()
  // }

  doSearch = () => {
    if (this.state.query) {
    // if (this.state.query.length > 3) {
      BooksAPI.search(this.state.query, 5)
        .then((res) => res.map((book) => (book.id)))
        .then((res) => [...new Set(res)])
        .then((res) => (this.setState({searchResults: res})))
        .catch((e) => console.log(e))
    }
  }

  render() {
    // is this (see updateQuery) the right place to call doSearch,
    // as I'd prefer is many fast setState are grouped together
    // search is only done once, on the first characters it catches
    // attention if query has no result
    // test if query results are doublons with books already in the shelves
    // search with "pro react" in quotes should only yield that book!
    // what if book is missing some fields?
    // why i cannot limit number of search results?
    // add the clearQuery button
    // how to have several keywords with space inbetween?

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => this.updateQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            <EachShelf ShelfName="Search Results:" ThisShelf={this.state.searchResults}/>
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchQuery
