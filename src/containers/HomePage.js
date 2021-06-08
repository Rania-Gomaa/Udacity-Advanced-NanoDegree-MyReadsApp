import React from 'react';
import AddBookButton from '../components/AddBookButton';
import BooksRender from '../components/BooksRender';
import PropTypes from 'prop-types';

function Home(props) {
  return (
    <React.Fragment>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksRender
              books={props.allBooks.filter((book) => book.shelf === 'currentlyReading')}
              onShelfChange={props.onShelfChange}
              header="Currently Reading"
            />

            <BooksRender
              books={props.allBooks.filter((book) => book.shelf === 'wantToRead')}
              onShelfChange={props.onShelfChange}
              header="Want To Read"
            />

            <BooksRender
              books={props.allBooks.filter((book) => book.shelf === 'read')}
              onShelfChange={props.onShelfChange}
              header="Read"
            />
          </div>
        </div>

        <AddBookButton />
      </div>
    </React.Fragment>
  );
}

Home.propTypes = {
  allBooks: PropTypes.array,
  onShelfChange: PropTypes.func.isRequired,
};

export default Home;
