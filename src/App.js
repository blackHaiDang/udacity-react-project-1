import React from 'react'
import {Route, Link} from 'react-router-dom'
// import {Switch} from 'react-router-dom'
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

  componentDidMount() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that the App only receives the book IDs for each shelf.
    // In earlier version I was using BooksAPI.getAll, but I prefer
    // downloading the books details only when they get required.
    BooksAPI
      .update({id: 'dummy'}, 'none')
      .then((shelvesObject) => this.updateShelf(shelvesObject))
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

          {/* <Switch> */}

            <Route exact path="/search/" render={() => (
              <div className="random-name">
                <div className="search-books">
                  <SearchBar
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    updateShelf={this.updateShelf}/>
                </div>
                <div className="search-books-results">
                  <EachShelf
                    ShelfName="Search Results"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.searchResults}
                    searchResults={this.state.searchResults}/>
                </div>
              </div>
            )}/>

            <Route path="/search/:urlQuery" render={({match}) => (
              <div className="random-name">
                <div className="search-books">
                  <SearchBar
                    urlQuery={match.params.urlQuery}
                    query={this.state.query}
                    updateQuery={this.updateQuery}
                    updateShelf={this.updateShelf}/>
                </div>
                <div className="search-books-results">
                  <EachShelf
                    ShelfName="Search Results"
                    updateShelf={this.updateShelf}
                    ThisShelf={this.state.searchResults}/>
                    {/* searchResults={this.state.searchResults}/> */}
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
                      {/* searchResults={this.state.searchResults}/> */}
                    <EachShelf
                      ShelfName="Want To Read"
                      updateShelf={this.updateShelf}
                      ThisShelf={this.state.wantToRead}/>
                      {/* searchResults={this.state.searchResults}/> */}
                    <EachShelf
                      ShelfName="Read"
                      updateShelf={this.updateShelf}
                      ThisShelf={this.state.read}/>
                      {/* searchResults={this.state.searchResults}/> */}
                </div>
              <div className="open-search">
                <Link
                  to={`/search/${this.state.query}`}
                  >Add a book</Link>
                </div>
              </div>
            )}/>

          {/* </Switch> */}

        </div>
      </div>
    )
  }
}

export default BooksApp
