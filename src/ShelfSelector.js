import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'

class ShelfSelector extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    BooksAPI
      .update({'id': this.props.id}, event.target.value)
      .then(
        (res) => this.props.updateShelf(res)
      )
  }

  render() {
    return (
      <div className="book-shelf-changer">
        <form>
          <select value={this.props.shelf} onChange={this.handleChange}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </form>
      </div>
    )
  }
}

export default ShelfSelector
