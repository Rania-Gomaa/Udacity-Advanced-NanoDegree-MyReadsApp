import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BookOptions extends Component {
  state = {
    shelf: '',
  };

  handleShelfChange = (targetShelfValue) => {
    //console.log(targetShelfValue);
    const book = this.props.book;
    const onShelfChange = this.props.onShelfChange;
    onShelfChange(book, targetShelfValue);
  };

  render() {
    const book = this.props.book;
    //console.log(typeof(book))
    return (
      <React.Fragment>
        <div className="book-shelf-changer">
          <select
            defaultValue={book.shelf ? book.shelf : 'none'}
            onChange={(evt) => this.handleShelfChange(evt.target.value)}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </React.Fragment>
    );
  }
}

BookOptions.propTypes = {
  book: PropTypes.object.isRequired,
  onShelfChange: PropTypes.func.isRequired,
};

export default BookOptions;
