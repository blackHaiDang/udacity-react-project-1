import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import AllMyBooks from './AllMyBooks'

class BooksApp extends React.Component {
  state = {
    books:[],
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
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
                <AllMyBooks ShelfName="Currently Reading" ThisShelf="currentlyReading" books={this.state.books}/>
                <AllMyBooks ShelfName="Read" ThisShelf="read" books={this.state.books}/>
                <AllMyBooks ShelfName="Want To Read" ThisShelf="wantToRead" books={this.state.books}/>
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
