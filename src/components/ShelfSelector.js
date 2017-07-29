import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI'

class ShelfSelector extends Component {

  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    }

  handleChange(event) {
    BooksAPI
      .update({'id': this.props.id}, event.target.value)
      .then((shelvesObject) => this.props.updateShelf(shelvesObject))
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

ShelfSelector.propTypes = {
  id: PropTypes.string.isRequired,
  shelf: PropTypes.string.isRequired,
  updateShelf: PropTypes.func.isRequired
}

export default ShelfSelector
