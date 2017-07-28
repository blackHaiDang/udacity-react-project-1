import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as Utils from './Utils'

class SearchBar extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     'query': ''
  //   }
  // }

  componentDidMount(){
    if (this.props.urlQuery && (this.props.urlQuery !== this.props.query)) {
      console.log('component did mount, now updateQuery')
      this.props.updateQuery(this.props.urlQuery)}
  }

  componentDidUpdate(prevProps, prevState){
    console.log('component did update')
    if ((this.props.query && (prevProps.query !== this.props.query))) {
      console.log('doSearch')
      Utils.doSearch(this.props.query.trim())
      .then((res) => (this.props.updateShelf( {'searchResults': res} )))
    }
  }

  render() {
    return (
        <div className='search-books-bar'>
          <Link
            to='/'
            className='close-search' >Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              value={this.props.query}
              onChange={(event) => (this.props.updateQuery(event.target.value))}/>
          </div>
        </div>
      )
    }
}

export default SearchBar
