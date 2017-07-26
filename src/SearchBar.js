import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      query: '',
      previousQuery: ''
    }
  }

  // clearQuery = () => {
  //   this.setState({ query: ''})
  // }

  updateQuery = (query) => {
    this.setState({
      previousQuery: this.state.query,
      query: query.trim()
    })}

  componentDidUpdate() {
    // console.log("SearchBar did update")
    // console.log("state.query:" + this.state.query + ", state.previousQuery: " + this.state.previousQuery)
    // bug how to avoid that the query is done twice the first time
    // if (this.state.query && (this.state.previousQuery !== this.state.query) ) {
    if (this.state.query && (this.state.previousQuery !== this.state.query) ) {
      BooksAPI.search(this.state.query, 5)
        .then((res) => res.map((book) => (book.id)))
        .then((res) => [...new Set(res)])       // remove duplicates
        .then((res) => (this.props.updateShelf( {"searchResults": res} )))
        .then(() => this.setState({'previousQuery': this.state.query}))
        // .catch((e) => console.log('error',e))
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
        <div className="search-books-bar">
          <Link to="/" className="close-search" >Close</Link>

          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={this.state.query}
              onChange={(event) => (this.updateQuery(event.target.value))}/>
          </div>
        </div>
      )
    }
}

export default SearchBar
