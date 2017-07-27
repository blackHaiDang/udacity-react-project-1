import React from 'react'
import {Route, Link, Switch} from 'react-router-dom'
import './App.css'
import * as BooksAPI from './BooksAPI'
import EachShelf from './EachShelf'
import SearchBar from './SearchBar'


class BooksApp extends React.Component {
  state = {
    "currentlyReading": [],
    "wantToRead": [],
    "read": [],
    "searchResults": []
    }

  componentDidMount() {
  // componentDidUpdate() {
    // an UPDATE call to place a "dummy" book into the "none" shelf,
    // so that App only receives the book IDs for each shelf.
    BooksAPI
      .update({id: 'dummy'}, 'none')
      .then(console.log("updated with dummy book"))
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

          <Switch>
            // this section almost same as next, ugly code!
            <Route exact path="/search/" render={() => (
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


            <Route path="/search/:urlQuery" render={({match}) => (
              <div className="random-name">
                <div className="search-books">
                  <SearchBar
                    updateShelf={this.updateShelf}
                    urlQuery={match.params.urlQuery}/>
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
                  to="/search"
                  // onClick={console.log("and now, clicked the green cross to add a book")}
                  // onClick={this.updateShelf}
                  >Add a book</Link>
                </div>
              </div>
            )}/>

          </Switch>

        </div>
      </div>
    )
  }
}

export default BooksApp
