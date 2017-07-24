import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import EachShelf from './EachShelf'

class BooksApp extends React.Component {
  state = {
    allShelves:
      {
        "currentlyReading": [],
        "wantToRead": [],
        "read": []
      },
    showSearchPage: false
  }

  // shelvesDico = {
  //   currentlyReading: "Currently Reading",
  //   wantToRead: "Want To Read",
  //   read: "Read"
  // }

  componentDidMount() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that App only receives the book IDs for each shelf.
    BooksAPI.update({id: 'dummy'}, 'none')
      .then((allShelves) => this.updateShelf(allShelves))
  }

  updateShelf(allShelves){
    this.setState({
      'allShelves': allShelves,
      'showSearchPage': false})
    }

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <EachShelf ShelfName="Currently Reading" ThisShelf={this.state.allShelves.currentlyReading}/>
                <EachShelf ShelfName="Want To Read" ThisShelf={this.state.allShelves.wantToRead}/>
                <EachShelf ShelfName="Read" ThisShelf={this.state.allShelves.read}/>
            </div>
            <div className="open-search">
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default BooksApp
