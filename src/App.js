import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import EachShelf from './EachShelf'
import SearchQuery from './SearchQuery'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    allShelves:
      {
        "currentlyReading": [],
        "wantToRead": [],
        "read": []
      }
  }

  // shelvesDico = {
  //   currentlyReading: "Currently Reading",
  //   wantToRead: "Want To Read",
  //   read: "Read"
  // }

  componentDidMount() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that App only receives the book IDs for each shelf.
    BooksAPI
      .update({id: 'dummy'}, 'none')
      .then((allShelves) => this.updateShelf(allShelves))
  }

  updateShelf = (shelvesObject) => {
    this.setState({
      'allShelves': shelvesObject,
      'showSearchPage': false})
    }

  render() {
    return (
      <div className="app">

        <Route path="/new" render={() => (
          <SearchQuery/>
        )}/>

        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <EachShelf updateShelf={this.updateShelf} ShelfName="Currently Reading" ThisShelf={this.state.allShelves.currentlyReading}/>
                <EachShelf updateShelf={this.updateShelf} ShelfName="Want To Read" ThisShelf={this.state.allShelves.wantToRead}/>
                <EachShelf updateShelf={this.updateShelf} ShelfName="Read" ThisShelf={this.state.allShelves.read}/>
            </div>
            <div className="open-search">
              <Link
                to="/new"
                >Add a book</Link>
            </div>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
