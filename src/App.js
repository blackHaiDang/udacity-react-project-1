import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import EachShelf from './EachShelf'
import SearchBar from './SearchBar'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    "currentlyReading": [],
    "wantToRead": [],
    "read": [],
    "searchResults": []
    }

  componentDidMount() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that App only receives the book IDs for each shelf.
    BooksAPI
      .update({id: 'dummy'}, 'none')
      .then((shelvesObject) => this.updateShelf(shelvesObject))
  }

  updateShelf = (shelvesObject) => {
    // function used hereabove (by initialization) and in ShelfSelector and in SearchBar
    this.setState({
      "currentlyReading": shelvesObject.currentlyReading,
      "wantToRead": shelvesObject.wantToRead,
      "read": shelvesObject.read,
      "searchResults": shelvesObject.searchResults || []
    })
  }

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">
          <Route path="/new" render={() => (
            <div className="random-name">
              <div className="search-books">
                <SearchBar
                  updateShelf={this.updateShelf}/>
              </div>
              <div className="search-books-results">
                <EachShelf
                  ShelfName="Search Results"
                  updateShelf={this.updateShelf}
                  ThisShelf={this.state.searchResults}/>
              </div>
            </div>
          )}/>
          <Route exact path="/" render={() => (
            <div>
              <div className="list-books-content">
                  <EachShelf
                    ShelfName="Currently Reading"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.currentlyReading}/>
                  <EachShelf
                    ShelfName="Want To Read"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.wantToRead}/>
                  <EachShelf
                    ShelfName="Read"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.read}/>
              </div>
              <div className="open-search">
                <Link
                  to="/new"
                  >Add a book</Link>
              </div>
            </div>
          )}/>
        </div>
      </div>
    )
  }
}

export default BooksApp
