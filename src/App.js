import React from 'react'
import {Route, Link} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './utils/BooksAPI'
import EachShelf from './components/EachShelf'
import SearchBar from './components/SearchBar'

class BooksApp extends React.Component {
  state = {
    'query': '',
    'currentlyReading': [],
    'wantToRead': [],
    'read': [],
    'searchResults': []
    }

  //  shelvesLayout = [
  //   {label: 'currentlyReading', shelfName: 'Currently Reading'},
  //   {label: 'wantToRead', shelfName: 'Want To Read'},
  //   {label: 'read', shelfName: 'Read'}
  // ]

  componentDidMount() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that the App only receives the book IDs for each shelf.
    // In earlier version I was using BooksAPI.getAll, but I prefer
    // downloading the books details only when they get required.
    BooksAPI
      .update({id: 'dummy'}, 'none')
      .then((shelvesObject) => this.updateShelf(shelvesObject))
      .catch((e) => ([]))
  }

  updateShelf = (shelvesObject) => this.setState(shelvesObject)
    // used by initialization (hereabove), in ShelfSelector and in SearchBar

  updateQuery = (query) => {
    this.setState({
      'query': query
    })}

  render() {
    return (
      <div className="app">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books">

          <Route
            exact
            path="/search/"
            render={() => (
              <div>
                  <SearchBar
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    updateShelf={this.updateShelf}/>
                <div className="search-books-results">
                  <EachShelf
                    ShelfName="Search Results"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.searchResults}
                    searchResults={this.state.searchResults}/>
                </div>
              </div>
            )}/>

          <Route
            path="/search/:urlQuery"
            render={({match}) => (
              <div>
                  <SearchBar
                    urlQuery={match.params.urlQuery}
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    updateShelf={this.updateShelf}/>
                <div className="search-books-results">
                  <EachShelf
                    ShelfName="Search Results"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.searchResults}/>
                </div>
              </div>
            )}/>

            <Route
              exact
              path="/"
              render={() => (
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

                	{/* <div className="list-books-content">
                    {this.shelvesLayout.map( (shelf, index) => (
                	    <EachShelf
                        key={index}
                	      ShelfName={shelf.shelfName}
                	      updateShelf={this.updateShelf}
                	      ThisShelf={'this.state.' + shelf.label}/>
                        // this is a try to factorize, but doesn't work
                        // ThisShelf evaluates to the string "this.state.currentlyReading"
                        // but I need the *content* of "this.state.currentlyReading"!
                    	)
                    )}
                	</div> */}

                  <div className="open-search">
                    <Link
                      to={`/search/${this.state.query}`}
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
