import React from 'react';
import BookOptions from './BookOptions';
import PropTypes from 'prop-types';

function BooksRender(props) {
  return (
    <React.Fragment>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{props.header}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {props.books.map((book) => (
              <li key={book.id}>
                <div className="book">
                  <div className="book-top">
                    <div
                      className="book-cover"
                      style={{
                        width: 128,
                        height: 192,
                        backgroundImage: `url(${
                          book.imageLinks && book.imageLinks.thumbnail
                            ? book.imageLinks.thumbnail
                            : ''
                        })`,
                      }}
                    ></div>
                    <BookOptions
                      onShelfChange={props.onShelfChange}
                      book={book}
                    />
                  </div>

                  <div className="book-title">{book.title}</div>
                  <div className="book-authors">{book.authors}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </React.Fragment>
  );
}

BooksRender.propTypes = {
  books: PropTypes.array.isRequired,
  onShelfChange: PropTypes.func.isRequired,
  header: PropTypes.string.isRequired,
};

export default BooksRender;
