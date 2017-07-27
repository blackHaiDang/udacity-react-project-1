import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'

class SearchBar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      'query': ''
    }
  }

  updateQuery = (query) => {
    console.log("SearchBar: state.query got set")
    this.setState({
      'query': query
    })}

  componentDidMount(){
    if (this.props.urlQuery && (this.props.urlQuery !== this.state.query))
      {this.updateQuery(this.props.urlQuery)}
  }

  componentDidUpdate(prevProps, prevState){
      if ((this.state.query && (prevState.query !== this.state.query))) {
        BooksAPI.search(this.state.query.trim(), '5')
          .then((res) => res.map((book) => (book.id)))
          .then((res) => [...new Set(res)])       // remove duplicates
          .then((res) => (this.props.updateShelf( {'searchResults': res} )))
    }
  }

  render() {
    return (
        <div className='search-books-bar'>
          <Link
            to='/'
            className='close-search' >Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.state.query}
              onChange={(event) => (this.updateQuery(event.target.value))}/>
          </div>
        </div>
      )
    }
}

export default SearchBar
