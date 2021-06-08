import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../api/BooksAPI';
import BooksRender from '../components/BooksRender';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    query: '',
    displayedBooks: [],
  };

  updateQuery = async (query) => {
    this.setState(() => ({
      query: query.trim(),
    }));

    await BooksAPI.search(query).then((displayed) => {
      if (query.length > 0 && !displayed.error) {
        this.setState({
          displayedBooks: displayed.map((displayedBook) => {
            this.props.allBooks.map((book) => {
              if (book.id === displayedBook.id) {
                displayedBook.shelf = book.shelf;
              }
            });
            return displayedBook;
          }),
        });
      } else this.setState({ displayedBooks: [] });
    });
  };

  render() {
    const { query } = this.state.query;
    const displayedBooks = this.state.displayedBooks;

    return (
      <React.Fragment>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">
              {' '}
              Close{' '}
            </Link>

            <div className="search-books-input-wrapper">
              {/*
                        NOTES: The search from BooksAPI is limited to a particular set of search terms.
                        You can find these search terms here:
                        https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                        However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                        you don't find a specific author or title. Every search is limited by search terms.
                        */}
              <input
                type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={(evt) => this.updateQuery(evt.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              <BooksRender
                books={displayedBooks}
                onShelfChange={this.props.onShelfChange}
                header="Search Books"
              />
            </ol>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Search.propTypes = {
  
  onShelfChange: PropTypes.func.isRequired,
  allBooks: PropTypes.array.isRequired,
};

export default Search;
