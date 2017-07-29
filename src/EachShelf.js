import React, { Component } from 'react'
import BookComponent from './BookComponent'

class EachShelf extends Component {
  render() {
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.ShelfName}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.ThisShelf.map((id) => (
              <li key={id}>
                <BookComponent
                  searchResults={this.props.searchResults}
                  updateShelf={this.props.updateShelf}
                  id={id}/>
              </li>
            ))
          }
          </ol>
      </div>
    </div>
    )
  }
}

export default EachShelf
