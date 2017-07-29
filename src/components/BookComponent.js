import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI'
import ShelfSelector from './ShelfSelector'

class BookComponent extends Component {

  constructor(props) {
    super(props);

    this.state = {
      id: this.props.id,
      title: "",
      authors: [""],
      imageLinks: {smallThumbnail: ""},
      shelf: "none"
    };
  }

  componentDidMount() {
    BooksAPI
      .get(this.props.id)
      .then(res => this.setState(res))
    }

  render(){
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            title={this.props.id}
            style={{
              width: 128,
              height: 192,
              backgroundImage: `url(${this.state.imageLinks.smallThumbnail})`
            }}>
          </div>
          <ShelfSelector
            updateShelf={this.props.updateShelf}
            shelf={this.state.shelf}
            id={this.state.id}/>
        </div>
        <div className="book-title">{this.state.title}</div>
        <div className="book-authors">
					{ this.state.authors && this.state.authors.map( (author,index) => (<p key={index}>{author}</p>)) }
				</div>
      </div>
    )
  }
}

BookComponent.propTypes = {
  id: PropTypes.string.isRequired,
}

export default BookComponent
