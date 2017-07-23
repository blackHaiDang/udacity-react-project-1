import React, { Component } from 'react'

class AllMyBooks extends Component {
  render() {
			const { books } = this.props
      return (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.ThisShelf}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books
              .filter((book) => (book.shelf === this.props.ThisShelf))
              .map((book) => (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div
                        className="book-cover"
                        style={{
                          width: 128,
                          height: 192,
                          backgroundImage: `url(${book.imageLinks.smallThumbnail})`
                        }}>
                      </div>
                      <div className="book-shelf-changer">
                        <select>
                          <option value="none" disabled>Move to...</option>
                          <option value="currentlyReading">Currently Reading</option>
                          <option value="wantToRead">Want to Read</option>
                          <option value="read">Read</option>
                          <option value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors[0]}</div>
                  </div>
                </li>
              ))
            }
            </ol>
        </div>
      </div>
      )
  }
}

export default AllMyBooks
